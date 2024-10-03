export default function initLocalSearch() {
  // Host
  const hostname = config.hostname;

  // Popup Window
  let isfetched = false;
  let currentPage = 1;
  let lastSearchText = '';
  let lastRequestID = '';
  
  const inFetchingHTML = '<div id="no-result"><i class="fa-solid fa-spinner fa-spin-pulse fa-5x fa-fw"></i></div>';
  const noResultHTML = '<div id="no-result"><i class="fa-solid fa-box-open fa-5x"></i></div>';
  
  const searchInputDom = document.querySelector(".search-input");
  const resultContent = document.getElementById("search-result");
  
  const updateFetchingState = () => {
    resultContent.innerHTML = inFetchingHTML;
    window.pjax && window.pjax.refresh(resultContent);    
  }

  const removeFetchingState = () => {
    // Remove loading animation
    const noResultDom = document.querySelector("#no-result");
    noResultDom &&
      (noResultDom.innerHTML =
        '<i class="fa-solid fa-magnifying-glass fa-5x"></i>');
  }
  
  const resetInitState = () => {
    resultContent.innerHTML = noResultHTML;
    removeFetchingState();
    window.pjax && window.pjax.refresh(resultContent); 
  }
  
  const renderPaginationButtons = (pageNumbers) => {
    const paginationContainer = document.createElement('div');
    const paginationButtons = [];
    
    pageNumbers.forEach(num => {
      const button = document.createElement('button');
      button.textContent = num;
      button.classList.add('pagination-button');
      if (num === currentPage) {
        ['active','font-bold', 'text-sky-500'].forEach(c => {
          button.classList.add(c);  
        }) 
      }
      paginationButtons.push(button);
    })

    paginationContainer.innerHTML = '';
    ['flex','items-center','justify-center','space-x-4','py-3', 'fixed', 'bottom-0', 'left-1/2', '-translate-x-1/2'].forEach(c => {
      paginationContainer.classList.add(c);  
    })
    paginationButtons.forEach((button) => {
      paginationContainer.appendChild(button);
    }); 
    
    paginationContainer.addEventListener('click', handlePaginationButtonClick);   
    return paginationContainer;
  }
  
  const highlightedText = (text, keywords) => {
    const filterKeywords = keywords.filter(v => v.trim().length > 0);
    if (filterKeywords.length > 0) {
      return text.replace(new RegExp(filterKeywords.join('|'), 'gi'), (match) => `<span class="bg-yellow-300 px-1">${match}</span>`);      
    }
    return text;
  }
  
  const onFetchData = (res, requestID='') => {
    if (lastRequestID != requestID) {
      if (lastSearchText.trim().length < 1 || lastRequestID.trim().length < 1) {
        resetInitState();
      } else {
        const { page, pageSize, q } = JSON.parse(lastRequestID);
        console.log('refetch data ...', { lastRequestID,  requestID});
        fetchData({ page, pageSize, q }, onFetchData); 
      }
      return;
    }
    
    let resultItems = [];    
    const dataList = res?.data || [];
    const totalPages = res?.pagination?.totalPages || 0;
    const curPage = res?.pagination?.page || 0;
    
    dataList.forEach(({ url,  title}) => {      
      const li = document.createElement('li');
      const a = document.createElement('a');
      
      a.href = url;
      a.classList.add('search-result-title');
      if (lastSearchText.trim().length > 1) {
        a.innerHTML = highlightedText(title, [lastSearchText]);
      } else {
        a.textContent = title;
      }
      li.appendChild(a);
      
      resultItems.push(li);                   
    });
    
    if (dataList.length > 0) {
      const container = document.createElement('div');
      container.classList.add('search-result-list');
      
      const ul = document.createElement('ul');
      resultItems.forEach((li) => {
        ul.appendChild(li);
      });
      
      const pageNumbers = [];
      const maxButtons = 9;
      const startPageNum = Math.max(1, currentPage - Math.floor(maxButtons/2));
      const endPageNum = Math.min(totalPages, startPageNum + maxButtons - 1);
      for(let i = startPageNum; i <= endPageNum; i++) {
        pageNumbers.push(i);
      }
      const paginationContainer = renderPaginationButtons(pageNumbers);
      container.appendChild(ul);    
      container.appendChild(paginationContainer);
      
      resultContent.innerHTML = "";
      resultContent.appendChild(container);  
    } else {
      resultContent.innerHTML = noResultHTML;
    }

    window.pjax && window.pjax.refresh(resultContent);         
  }  
  
  function handlePaginationButtonClick(event) {
    const target = event.target;
    if (target.classList.contains('pagination-button')) {
      const pageNumber = parseInt(target.textContent);
      currentPage = pageNumber;
      
      fetchData({page: currentPage, pageSize: 10, q: lastSearchText}, onFetchData);
    }
  }  
  
  const inputEventFunction = () => {
    let searchText = searchInputDom.value.trim().toLowerCase();
    lastSearchText = searchText;
    
    if (searchText.length > 0) {
      currentPage = 1;
      // Perform searching
      fetchData({page:1, pageSize:10, q:lastSearchText}, onFetchData)
    } else {
      currentPage = 1;
      resetInitState();          
    }
  };
  
  const fetchData = ({page = 1, pageSize = 10, q = ''} = {}, callback) => {
    
    lastRequestID = JSON.stringify({page, pageSize, q});
    if (q.trim() == '' || isfetched) return;
    
    const urlObj = new URL(`https://search.techidaily.com/api/search?site=${hostname}`);
    urlObj.searchParams.set('page', page);
    urlObj.searchParams.set('pageSize', pageSize);
    urlObj.searchParams.set('q', q);

    const href = urlObj.href;
    const headers = {
      'Origin': 'https://search.techidaily.com', 
      'Access-Control-Request-Method': 'GET', 
      'Access-Control-Request-Headers': 'Content-Type', 
    };
    
    updateFetchingState();
    isfetched = true;
    const requestID = JSON.stringify({page, pageSize, q});
    
    // Fetch
    fetch(href, { headers })
      .then((response) => response.json())
      .then((res) => {
        // Get the contents from search data
        removeFetchingState();
        isfetched = false; 
        callback && callback(res, requestID);         
      })
      .catch(err => {
        console.error(err);
        isfetched = false;
      })
  };

  if (searchInputDom) {
    searchInputDom.addEventListener("input", inputEventFunction);
  }

  // Handle and trigger popup window
  document.querySelectorAll(".search-popup-trigger").forEach((element) => {
    element.addEventListener("click", () => {
      document.body.style.overflow = "hidden";
      document.querySelector(".search-pop-overlay").classList.add("active");
      setTimeout(() => searchInputDom.focus(), 500);
    });
  });

  // Monitor main search box
  const onPopupClose = () => {
    document.body.style.overflow = "";
    document.querySelector(".search-pop-overlay").classList.remove("active");
  };

  document
    .querySelector(".search-pop-overlay")
    .addEventListener("click", (event) => {
      if (event.target === document.querySelector(".search-pop-overlay")) {
        onPopupClose();
      }
    });
  document
    .querySelector(".search-input-field-pre")
    .addEventListener("click", () => {
      searchInputDom.value = "";
      searchInputDom.focus();
      inputEventFunction();
    });
  document
    .querySelector(".popup-btn-close")
    .addEventListener("click", onPopupClose);
  try {
    swup.hooks.on("page:view", (visit) => {
      onPopupClose();
    });
  } catch (e) {}

  window.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
      onPopupClose();
    }
  });
  
  resetInitState();
}
