/**
 * 使用 https://www.bing.com/indexnow/getstarted，提交URL到Bing
 * 使用https://www.bing.com/webmasters/url-submission-api#APIs，批量提交url
 * 
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const indexNowKey = '14c94baddf0b46c7921ad358b9eac638'; // 替换为你的API密钥
const siteHostName = 'bypass-frp.techidaily.com'; // 替换为你的网站URL
const groupItemCount = 100; // 每组最多个URL


// 生成元素为 1，2， 3，…… 的数组
function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

// Step1: 从sitemap.txt, sitemap1.txt, sitemap2.txt ...中获取url列表
const allUrls = [];
const verifiedMapJSONFile = path.join(__dirname, '.verified-url2title-map.json');
if (fs.existsSync(verifiedMapJSONFile)) {
  try {
    const content = fs.readFileSync(verifiedMapJSONFile, 'utf-8').toString();
    const obj = JSON.parse(content);
    Object.keys(obj).forEach(v => allUrls.push(v));
  } catch (e) {}
}

console.log('All urls count:%d', allUrls.length);

// 同时向多个搜索引擎提交
const searchEngines = [
  { hostname: 'api.indexnow.org', path: '/indexnow', cache: path.join(__dirname, './cache/submit-indexnow.txt') },
  { hostname: 'www.bing.com', path: '/indexnow', cache: path.join(__dirname, './cache/submit-www.bing.com.txt') },
  { hostname: 'ssl.bing.com', path: `/webmaster/api.svc/json/SubmitUrlbatch?apikey=fc363d907d0e4c6387680fe15799ca49`, cache: path.join(__dirname, './cache/submit-ssl.bing.com.txt')},
  { hostname: 'searchadvisor.naver.com', path: '/indexnow', cache: path.join(__dirname, './cache/submit-naver.txt')},
  { hostname: 'search.seznam.cz', path: '/indexnow', cache: path.join(__dirname, './cache/submit-seznam.txt')},
  { hostname: 'yandex.com', path: '/indexnow',cache: path.join(__dirname, './cache/yandex.txt')},
];

// sleep
function sleep(ms = 5000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * 提交URL到搜索引擎
 * @param {} engine 
 * @param {*} urls 
 */
function sendSubmit(engine, urls = []) {
  const data = JSON.stringify({
    // For IndexNow
    ...{
      host: siteHostName,
      key: indexNowKey,
      keyLocation: 'https://' + siteHostName + `/${indexNowKey}.txt`,
    },
    // For Bing WebMaster SubmitUrlbatch
    ...{
      siteUrl: `https://${siteHostName}`
    },
    urlList: urls, // 这是你要提交的URL列表
  });

  const options = {
    hostname: engine.hostname,
    path: engine.path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': data.length,
    }
  };

  const req = https.request(options, res => {
    console.log(`${engine.hostname} =====> statusCode: ${res.statusCode}`);

    if (res.statusCode === 200) {
      let cache = '';
      if (fs.existsSync(engine.cache)) {
        cache = fs.readFileSync(engine.cache, 'utf-8');
      }

      const cacheUrls = cache.split('\n').filter(Boolean).map(url => url.trim());
      cacheUrls.push(...urls);
      fs.writeFileSync(engine.cache, cacheUrls.join('\n'));
    }

    res.on('data', d => {
      process.stdout.write(d);
    });
  });

  req.on('error', error => {
    console.log(`${engine.hostname} Error:`);
    console.error(error);
  });

  req.write(data);
  req.end();
}

/**
 * 提交URL到搜索引擎
 * @param {*} engine 
 * @param {*} urlGroupsQueue 
 */
async function processQueue(engine, urlGroupsQueue) {
  for (const urls of urlGroupsQueue) {
    sendSubmit(engine, urls)
    await sleep(30*1000);
    process.exit();
  }
}


// Step2: 提交URL到搜索引擎
async function main(allUrls = []) {
  for (const engine of searchEngines) {
    // 如果有缓存文件，读取缓存文件，如果没有缓存文件，就使用urls
    let cache = '';
    if (fs.existsSync(engine.cache)) {
      cache = fs.readFileSync(engine.cache, 'utf-8');
    }

    const cacheUrls = cache.split('\n').filter(Boolean).map(url => url.trim());

    // 过滤掉已经提交过的URL
    const urls = allUrls.filter(url => !cacheUrls.includes(url));

    if (urls.length === 0) {
      console.log(`${engine.hostname} =====> No new URL to submit`);
    } else {
      console.log(`${engine.hostname} =====> Submitting ${urls.length} URLs`);

      // 这些urls需要分组，每组最多n个
      const urlGroups = [];
      while (urls.length > 0) {
        urlGroups.push(urls.splice(0, groupItemCount));
      }
  
      await processQueue(engine, urlGroups);
    }
  }
}

// 启动main函数
main([...allUrls]);
