---
title: In 2024, A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock on your Infinix
date: 2024-05-19T04:56:47.344Z
updated: 2024-05-20T04:56:47.344Z
tags: 
  - unlock
  - bypass android frp
categories:
  - android
description: This article describes A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock on your Infinix
excerpt: This article describes A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock on your Infinix
keywords: Infinix Smart 8 Plus guide to frp bypass,Infinix Smart 8 Plus remove frp via adb fastboot,Infinix Smart 8 Plus bypass frp,android frp bypass,easy guide how to bypass frp android device,bypass android device frp,best frp bypass,frp bypass quickly,guide to frp bypass,Infinix Smart 8 Plus frp tools,android device frp bypass,Infinix Smart 8 Plus guid for frp bypass,pro frp bypass,Infinix Smart 8 Plus frp bypass easy,Infinix Smart 8 Plus about frp bypass,adb format tool,Infinix Smart 8 Plus bypass android frp,gsm flasher tool,Infinix Smart 8 Plus gsm flasher tool,bypass frp,frp bypass,Infinix Smart 8 Plus frp bypass guide,Infinix Smart 8 Plus frp bypass,Infinix Smart 8 Plus android frp bypass,about frp bypass,how to bypass frp,pangu frp bypass review,remove frp via adb fastboot,Infinix Smart 8 Plus easy guide how to bypass frp android,how to bypass frp without computer,frp bypass android device,Infinix Smart 8 Plus frp hijacker download
thumbnail: https://www.lifewire.com/thmb/8JZwZGtr8caBDhoilBDj6iOR2TI=/400x300/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/samsungappstore-c0194a478ba54e90a798b3bb5ff4f6d5.jpg
---

## A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock on your Infinix Smart 8 Plus

Factory Reset Protection is one of the security measures available on Android 5.1 and later devices to prevent intruders' unauthorized factory resetting of the Infinix Smart 8 Plus device. Among the several ways to fix this issue and remove the lock, one is ADB and Fastboot commands. So, if you are aware of using Android Debug Bridge, the below content will help you understand how it can be used to remove the FRP lock.

**You can watch the video below to bypass FRP lock without hassle!**

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="https://www.youtube.com/embed/WXFUGH1uMcI"></iframe>

## Part 1: Quick Overview of ADB and Fastboot Commands

### 1\. What are ADB and Fastboot?

Standing for Android Debug Bridge, ADB and Fastboots are the methods through which communication with an Android device can be done through a computer. Under this method, the commands and the actions that are sent from the system are performed on your Android device.

Several issues can be resolved, and multiple functions can be performed using the **ADB format tool** and Fastboots, and this also includes removing the FRP lock on your Android device. To use this method, USB debugging should be enabled on the Infinix Smart 8 Plus device.

For specific brands of Android phones, specific utility tools are available like the **Vivo ADB format tool** and the **Samsung ADB format tool**, which are used explicitly for Vivo and Samsung phones, respectively.

### 2\. How Do ADB and Fastboot Bypass FRP?

Using the versatile ADB command-line tool and Fastboots, the Google FRP lock can be removed using several commands depending on the OS version. This is a client-server program that includes a client who sends the commands, a daemon used to run the commands on the Infinix Smart 8 Plus device, and a server that facilitates communication between the client and the daemon.

ADB comes included in the Android SDK Platform-Tools package, and this can be downloaded using the SDK manager.

### 3\. What Are the Android Versions that ADB and Fastboot Command Support?

The Android versions on which ADB and Fastboot commands can be used are as follows:

- `_Android 5 – Lollipop_`
- `_Android 6- Marshmellow_`
- `_Android 7 – Nougat_`
- `_Android 8- Oreo_`
- `_Android 9- Pie_`
- `_Android 10 – Q ( expected to work though not tested as yet)_`

## Part 2: How to Set Up ADB and Fastboot Commands to Remove FRP Lock on Android?

To remove FRP lock using ADB, you first need to install and set up ADB and then remove them using the command. The steps for the same are enlisted below.

### Steps to remove FRP using ADB

![adb install](https://images.wondershare.com/drfone/article/2022/04/adb-install.jpg)

- **Step 1.** Firstly, download the ADB installed setup file and then extract the files from the toolkit on your system in a folder.
- **Step 2.** Next, you need to run adb.setup.exe and then type Y for installing the drivers for ADB and Fastboot.
- **Step 3.** Again, enter Y for installing the drivers and when done successfully, the command window will close.
- **Step 4.** Next, power on your Android device and connect it to your PC using a USB cable. Here also ensure that USB debugging mode is enabled on your Android device.
- **Step 5.** Next, hold down the Shift key and then right-click at any place blank in the ADB folder, and then choose the Open command window here option.
- **Step 6.** Now to remove the FRP you need to enter the following commands at the command prompt one by one where enter needs to be clicked after every line.

- `_Adb shell am start -n com.google.android.gsf.login/_`
- `_adb shell am start -n com.google.android.gsf.login.LoginActivity_`
- `_adb shell content insert –uri content://settings/secure –bind name:s:user_setup_complete –bind value:s:1_`

- **Step 7.** The above commands are for Samsung devices. If you want to remove the FRP on other brands, enter the following commands:

- `_Adb shell content insert –uri content://settings/secure –bind_`
- `_name:s:user_setup_complete –bind value:s:1_`

![adb frp command](https://images.wondershare.com/drfone/article/2022/04/adb-frp-command.jpg)

After the execution of the commands, the FRP lock will be removed from your Android device.

### Steps to remove FRP using Fastboot

- **Step 1.** Put the Android device into the bootloader or fastboot mode. ( depending on the model and brand of your Android device, the process of entering into the fastboot will differ).
- **Step 2.** Connect your phone to your PC using a USB cable.
- **Step 3.** Next, depending on the system, enter the following command in the CMD window:

- `_Lenovo FRP command_`
- `_fastboot erase config_`
- `_fastboot reboot_`
- `_XIAOMI FRP command_`
- `_fastboot -w_`
- `_MICROMAX YU YUPHORIA FRP_`
- `_Fastboot -i 0x2a96 erase configFastboot -i 0x2a96 reboot_`
- `_DEEP/HTC/Other Brands FRP_`
- `_fastboot erase configfastboot reboot_`

## Part 3: Limitations of Using ADB and Fastboot Command Method

The ADB and Fastboots command is a workable solution for removing the FRP lock on your Android device, the drawback is that the method is quite complicated and requires thorough technical know-how of ADB and its working. There are several limitations associated with this method as enlisted below.

- **Requires technical know-how**

To remove FRP using the ADB command you need to have a thorough knowledge of using the tool. The tool has a deep learning curve which makes this method little for the majority of the users.

- **Might not unlock the phone**

You can try the ADB method for removing the FRP lock but there is no guarantee that the results will be positive and your device will be unlocked.

- **Issues with the drivers**

Several times while using this method, you might encounter driver issues when your device is not detected as proper drivers are not installed.

- **Unexpected issues and errors**

ADB is a command-based method, and thus it is important that the commands are entered right. If there is a slight error in the typing of the command, it might lead to major issues and can even be the Infinix Smart 8 Plus device damaged.

- **The process is not user-friendly**

ADB is a technical process aimed toward the geeks, and thus the overall process is not user-friendly and complicated.

## Part 4: The Best ADB Alternative to Bypass FRP Lock on Android Phones

Considering the several limitations of the ADB and Fastboot command method, the need for a simple, user-friendly, and workable solution for removing FRP lock on Android devices arises. One of the best software here that we recommend is [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/) which helps in removing and bypassing many Android phone screen locks including the one appearing due to FRP lock.



### [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/)

Remove Google FRP on Samsung without PIN code or Google accounts.

- Pattern, PIN, password, fingerprints & face screen lock can all be unlocked.
- Bypass Google FRP on Samsung without pin code or Google accounts.
- No tech knowledge asked, everybody can handle it.
- Work for Samsung, Xiaomi, Redmi, OPPO, etc.

**4,005,551** people have downloaded it

The process of using the software is user-friendly and thus can also be used by non-techy users.

**Steps for removing FRP lock on Android using Dr.Fone Screen Unlock**

- **Step 1.** Launch the installed software and choose the **Screen Unlock** option from the main interface. Choose **Android** and then select the **Remove Google FRP Lock** option.

![drfone screen unlock homepage](https://images.wondershare.com/drfone/guide/android-screen-unlock-3.png)

- **Step 2.** Select the model brans from the options shown on the interface, and then connect your phone to your PC using a USB cable. The connected device details will appear on the interface.

![drfone android6/9/10 phone information confirmation](https://images.wondershare.com/drfone/guide/remove-android-frp-lock-1.png)

- **Step 3.** Follow the next steps as they appear. Once the FRP lock is successfully removed, the prompt window will show its completion. Click Done if you have successfully executed the process.

![screen unlock bypass google frp](https://images.wondershare.com/drfone/guide/remove-google-frp-unknown-os-7.png)

The above is the brief steps for the process. You can check the [bypass Samsung FRP lock guide](https://drfone.wondershare.com/guide/google-frp-bypass.html) in detail.


## Conclusion

If you are well versed with the commands of ADB and Fastboots you can go ahead and use the **ADB bypass FRP tool** for removing the FRP lock but if this command line method seems complicated for you, Dr.Fone Screen Unlock is the best tool to use.

<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="1223367746"></ins>

## Latest Guide: How To Bypass Infinix Smart 8 Plus FRP Without Computer



Smartphones, whether iPhone or Android, are really important in our daily lives these days. They store a lot of professional and private information. To keep their users safe, smartphone companies have added different security measures. One of these security features is called Factory Reset Protection (FRP). It stops unauthorized people from getting into a phone after resetting it.

Even though this is an important security measure, it can sometimes be annoying. This is true for Infinix smartphone users who can't access their phones because they forgot their login details. Fortunately, there are ways for ****Infinix Smart 8 Plus FRP bypass without a PC****. This article will present you with the latest guide on how to [bypass Infinix Smart 8 Plus FRP](https://drfone.wondershare.com/unlock/vivo-screen-lock.html).

- [Part 1: What’s Infinix Smart 8 Plus FRP Code and How To Use It](https://drfone.wondershare.com/bypass-android-frp/how-to-bypass-vivo-frp-without-computer.html#Part1)
- [Part 2: How To Bypass Infinix Smart 8 Plus FRP With Other Methods](https://drfone.wondershare.com/bypass-android-frp/how-to-bypass-vivo-frp-without-computer.html#Part2)![hot icon](https://images.wondershare.com/drfone/2022/images/hot-icon.gif)
- [Part 3: How To Disable Infinix Smart 8 Plus FRP Easily](https://drfone.wondershare.com/bypass-android-frp/how-to-bypass-vivo-frp-without-computer.html#Part3)

## Part 1: What’s Infinix Smart 8 Plus FRP Code and How To Use It

Infinix smartphones incorporate a security measure called the FRP (Factory Reset Protection) code. It is also called a bypass or Google account verification code. This feature is implemented to safeguard the Infinix Smart 8 Plus device from unauthorized access. The code usually activates following a factory reset. To regain full access to the Infinix Smart 8 Plus device, users are required to input the Google account credentials associated with the Infinix Smart 8 Plus device.

The ****Infinix Smart 8 Plus FRP code**** serves as a protective barrier. It prevents unauthorized individuals from utilizing the Infinix Smart 8 Plus device after it has been reset. By requesting the Google account credentials tied to the Infinix Smart 8 Plus device, it acts as an extra layer of security. This ensures that only authorized users can access and operate the Infinix Smart 8 Plus device. In essence, the Infinix Smart 8 Plus FRP code is an integral security feature that reinforces user authentication.

It prevents unauthorized access to the Infinix Smart 8 Plus device, providing additional protection. Each [Infinix device](https://drfone.wondershare.com/unlock/vivo-screen-lock.html)possesses a distinct FRP (Factory Reset Protection) code. It is linked to the Google account that was previously synchronized with the Infinix Smart 8 Plus device. It activates when you perform a factory reset on your Infinix smartphone without signing out of the associated Google account.

### Usage of Infinix Smart 8 Plus FRP Code

To use the Infinix Smart 8 Plus FRP code effectively on your FRP-locked Infinix smartphone, follow these simplified steps:

#### Get the FRP Code

There are a few methods to get the FRP code. You can reach out to Infinix customer support for help and guidance. They can help you obtain the specific FRP code for your Infinix model. You can also search online to find reliable sources that share FRP codes. Several online platforms and forums cater to users sharing FRP codes. It ensures you find the appropriate code for your device.

#### Enter the FRP Code

Once you have obtained the FRP code, such as \*#812#, power on your Infinix smartphone and proceed through the initial setup steps until you encounter the FRP lock screen. At this point, the Infinix Smart 8 Plus device prompts you to enter your Google account credentials. However, enter the FRP code you obtained instead of inputting your credentials. Typically, the FRP code comprises a numeric sequence specific to your device.

#### Complete the Setup

After entering the FRP code, the Infinix Smart 8 Plus device undergoes a verification process. It will authenticate the code and unlock the FRP lock. Once the authentication is successful, you can proceed with the setup process. This includes signing in with your Google account or creating a new one.

### Limitation of Infinix Smart 8 Plus FRP

Remember that FRP codes can differ based on your Infinix smartphone model and software version. Recognizing that using an FRP code obtained from unofficial sources can pose security risks is crucial. To ensure the safety of your device, it is recommended that you get the FRP code from trusted sources.

## Part 2: How To Bypass Infinix Smart 8 Plus FRP With Other Methods

Apart from the ****Infinix Smart 8 Plus FRP bypass code****, other methods are available to bypass the FRP lock. These methods range from using built-in tools within Infinix phones to using third-party software. Given below are three alternative ways to bypass Infinix Smart 8 Plus FRP:

### Method 1: Using Official Google Account

The FRP lock on your Infinix smartphone is closely linked to the Google account. The whole reason you are facing this situation is that you don't remember your Google account password. It means the FRP lock can be bypassed if you can recover your Google account. To recover your Google account, you can use the following steps:

- ****Step 1:**** On your computer, use a browser to access the Google Sign-in page. Here, type your Google account email, and when it comes to password, choose "Forget Password."

![tap on forgot password](https://images.wondershare.com/drfone/article/2023/07/bypass-vivo-frp-without-computer-1.jpg)

- ****Step 2:**** Now, use the recovery phone number or email associated with your Google account to receive the verification code. Afterward, create a new password and wait for around 24 hours. Once Google has synced the new password across devices, you can sign in and bypass the FRP lock.

![add the google account details](https://images.wondershare.com/drfone/article/2023/07/bypass-vivo-frp-without-computer-2.jpg)

### Method 2: Using Third-Party FRP Bypass Apps

There are many third-party tools available that can help you bypass the Infinix Smart 8 Plus FRP lock. One of these tools is [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/). This tool is considered to be the best when it comes to bypassing FRP lock. It provides a powerful screen unlock feature that can bypass many locks on Android devices. These locks include passwords, PINs, patterns, fingerprints, and face locks.

Wondershare Dr.Fone also supports over 2000 Android devices from 15+ brands for screen unlocking. These include all major brands like Samsung, Xiaomi, Infinix, [OPPO](https://drfone.wondershare.com/google-frp-unlock/oppo-frp.html), and others.



### [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/)

New method Bypass Google Account All VIVO Devices

- Pattern, PIN, password, fingerprints & face screen lock can all be unlocked.
- Bypass Android FRP lock without a PIN or Google account.![New icon](https://images.wondershare.com/drfone/others/new_23.png)
- Unlock mainstream Android brands like Samsung, Huawei, LG, Xiaomi, etc.
- No tech knowledge required, Simple, click-through, process.

**3,981,454** people have downloaded it

Here are the detailed steps to bypass the Infinix Smart 8 Plus FRP lock:

- Step 1: Choose Screen Unlock in Wondershare Dr.Fone

After launching Wondershare Dr.Fone on your computer, move to the "Toolbox" tab. Here, choose "Screen Unlock," and on the next screen, select "Android."

- Step 2: Select Infinix as the Brand

The next option you need to select is "Remove Google FRP Lock". Afterward, choose "Infinix" as the brand and click "Start". Now the program will download the relative driver.

![proceed with vivo](https://images.wondershare.com/drfone/guide/remove-android-frp-lock-1.png)

- Step 3: Bypass the Infinix Smart 8 Plus FRP Lock

Once the driver is downloaded, switch off your Infinix device. Now connect it to the computer, and while connecting, press and hold the "Volume Up" and "Volume Down" buttons simultaneously. Release the buttons after 3 seconds. Now the process of bypassing FRP will start, and it will take a few minutes to complete.

![remove the vivo frp lock](https://images.wondershare.com/drfone/guide/remove-android-frp-lock-4.png)

![Safe download](https://images.wondershare.com/drfone/article/2022/05/security.svg)safe & secure

## Part 3: How To Disable Infinix Smart 8 Plus FRP Easily

Factory Reset Protection (FRP) is an important security feature that safeguards your data. However, there may be instances where you find it necessary to disable FRP. Disabling FRP can be helpful if you want to have complete control over your device. It will help you avoid any potential complications that may arise from FRP activation.

In this section, we will guide you through the process of disabling Infinix Smart 8 Plus FRP easily. Thus, allowing you to have more control over your device. Given below are the steps to disable Infinix Smart 8 Plus FRP:

- ****Step 1:**** On your Infinix smartphone, access Settings and scroll down to the last option, "Account & Sync." Tap "Accounts & Sync," and on the following screen, find the Google Account you want to remove.

![choose accounts and sync](https://images.wondershare.com/drfone/article/2023/07/bypass-vivo-frp-without-computer-6.jpg)

- ****Step 2:**** Here, tap the Google account and choose “Delete Account” on the next screen. Confirm your action by tapping "OK," and the Google account will be removed.

![tap on the delete account option](https://images.wondershare.com/drfone/article/2023/07/bypass-vivo-frp-without-computer-7.jpg)

## Conclusion

In this comprehensive guide, we have explored various methods for ****Infinix Smart 8 Plus FRP bypass without a PC****. We discussed the Infinix Smart 8 Plus FRP code method, followed by three alternative techniques. These included built-in Infinix tools, an official Google account, and Wondershare Dr.Fone. These methods provide viable options for Infinix smartphone users locked out of their devices.

Each method has its own merits and limitations. However, we recommend considering Wondershare [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/) as the best choice for bypassing Infinix Smart 8 Plus FRP. Wondershare Dr.Fone is a trusted and reliable Infinix Smart 8 Plus FRP bypass tool. It offers extensive device compatibility and reliable FRP bypass capabilities.



## Pangu FRP Bypass and Best Alternative Tool For your Android Device

**Pangu FRP Bypass** is a popular tool claiming to unlock Factory Reset Protection (FRP) on various Android phones. FRP is automatically enabled when you set up your Android device and link it to a Google account.

The FRP lock activates if someone tries to do a [<u>factory reset</u>](https://tools.techidaily.com/wondershare/drfone/unlock-android-screen/) in an untrusted environment without removing the Google account. Without entering your Google credentials, you won't be able to use your phone. It renders your phone useless for resale or personal use.

Then are you curious about the safety of the **Pangu FRP bypass tool**? What is this tool, and how does it work? If you have similar questions, this guide has the answers. Here, we'll show you what you need to know about the bypass tool and alternative software.

![google frp lock on android device](https://images.wondershare.com/drfone/article/2024/01/pangu-frp-bypass-01.jpg)

## Part 1: What Is Pangu FRP Bypass Tool?

FRP is a security feature implemented by Google on Android devices running Lollipop (5.1) and later. It ties your Google account to the Infinix Smart 8 Plus device, requiring you to enter the account credentials after a factory data reset. The FRP lock discourages phone theft and protects your data.

**The Pangu FRP Bypass tool** aims to get around the FRP lock. It grants you access to your device without needing the Google account credentials. The tool uses the loopholes or flaws in the security system to gain access and disable FRP.

The tool can be helpful in situations where you:

- **Forgot your Google account credentials**

If you can't remember your Google account password, **Pangu FRP unlocker** can help you [<u>bypass the verification</u>](https://drfone.wondershare.com/factory-reset-protection/how-to-bypass-google-account-verification-after-reset.html) and access your device.

- **Bought a used phone**

If you purchased a used phone with a previous owner's Google account linked, the Pangu FRP tool can help you remove that account and set up your own.

- **Need to reset your phone but don't want to lose access**

If you need to factory reset your phone but don't want to lose access to your Google account, it can help you bypass the FRP after the reset.

![reset android phone settings](https://images.wondershare.com/drfone/article/2024/01/pangu-frp-bypass-02.jpg)

How Does It Work?

There are two main versions of **Pangu FRP Bypass tools**:

- **Pangu FRP Bypass APK**

This app is downloaded and installed on the FRP-locked device. It directs you through steps, using weaknesses to reach hidden settings. By doing so, the **Pangu FRP Bypass APK** removes the FRP lock, allowing access to the home screen.

- **Pangu FRP Bypass Tool for PC**

This software runs on your computer and requires connecting your device via USB. It then performs similar operations to the APK version. That is using the computer connection to control the Infinix Smart 8 Plus device's system and bypass the FRP lock.

Is It Legal?

The legality of using the **Pangu FRP Bypass** remains a gray area. While it's not inherently illegal, using it for purposes like accessing stolen devices is unlawful. Use it responsibly and ethically.

## Part 2: What Are the Supported Brands for the Pangu FRP Bypass Tool?

The Pangu FRP Bypass boasts extensive compatibility with several Android brands, covering:

- Samsung
- Lenovo
- LG
- Oppo
- HTC
- Micromax
- Vivo, and more

![android smartphone logo](https://images.wondershare.com/drfone/article/2024/01/pangu-frp-bypass-03.jpg)

Different devices and Android OS versions may have varying compatibility within each brand. That includes Oreo, Marshmallow, and Nougat. Some older or newer models may not support the **Pangu FRP Bypass APK**, even though it works well on many models. Its file size can also differ based on the version you download.

## Part 3: How To Download and Install Pangu FRP Bypass APK?

Before downloading the APK file, you'll need a USB drive and an OTG cable to connect your Android device to your PC. Once you have these ready, you can move on to the installation steps. Follow the steps below to download and install the **Pangu FRP Bypass** on your Android phone.

- **Step 1:** Download the tool's APK from a trusted source. You can get it from the Pangu official website, if available.

![pangu frp unlocker apk](https://images.wondershare.com/drfone/article/2024/01/pangu-frp-bypass-04.jpg)

- **Step 2:** Copy the downloaded tool to a USB drive using a computer.
- **Step 3:** Connect the USB drive to your FRP-locked Android phone using an OTG cable.
- **Step 4:** Open the file manager on your Android device, locate the **Pangu FRP Bypass APK** on the USB drive, and install it. If you encounter issues, proceed to the next steps.
- **Step 5:** Open the Google Play Store app, then tap the profile icon at the upper-right corner.
- **Step 6:** Go to **Play Protect**, then tap the **Settings** icon at the upper-right side of the screen.

![google play store play protect](https://images.wondershare.com/drfone/article/2024/01/pangu-frp-bypass-05.jpg)

- **Step 7:** Toggle off the **Scan apps with Play Protect** option and tap **Turn off** on the dialogue box. This setting allows the installation of apps from outside the Google Play Store.

![turn off app scanning](https://images.wondershare.com/drfone/article/2024/01/pangu-frp-bypass-06.jpg)

## Part 4: How To Use Pangu FRP Unlocker on Android?

Before you start, ensure you have permission to unlock the FRP on the Android device. Also, check your internet connection, have enough phone charge, and a backup of your phone data. Now, follow these steps to use Pangu and remove the Google account FRP lock on your phone:

- **Step 1:** Launch the **Pangu FRP bypass** on your phone and tap the **menu** icon in the top right.

![open frp bypass tool](https://images.wondershare.com/drfone/article/2024/01/pangu-frp-bypass-07.jpg)

- **Step 2:** Follow the on-screen guide to detect and unlock your device.
- **Step 3:** Tap the **browser sign-in** icon and enter a new Google Mail ID. Then, press **Next** to continue.
- **Step 4:** Create a password you can remember in the future. Once satisfied, tap the **Finish** icon to proceed.
- **Step 5:** Wait for your details to upload. Once completed, restart your Android phone with the designated key combination.
- **Step 6:** On the Google Mail account page, enter the profile details you created and tap **Next**. Your device will show, "**FRP is trying to accept Gmail + password.**"

## Part 5: Is Pangu FRP Bypass the Best FRP Removal Tool for You?

**Pangu FRP bypass tool** is free and works on older Android versions. But there are reasons to consider other options. Let's explore them.

Technical Knowledge Required

It can be a bit complex to use for some users, especially if you're not tech-savvy. Using it involves downloading and installing APKs, which can be risky and time-consuming. It's not as beginner-friendly as some alternatives in the market.

Limited Customer Support

Thetooldoesn't provide official support via live chat or phone. This leaves you without direct help if issues arise during the bypass process. Depending on online forums for troubleshooting can be time-consuming and unreliable.

Limited Compatibility

**Pangu FRP bypass** is primarily focused on Samsung devices and may not work on the latest Android brands or versions. Also, it needs an OTG cable and USB drive, making it less convenient. Consider FRP bypass alternatives for broader compatibility and ease.

![otg for android phone](https://images.wondershare.com/drfone/article/2024/01/pangu-frp-bypass-08.jpg)

Safety Concerns

Some **Pangu FRP bypass APK** versions have been flagged as potentially containing malware or viruses. While this isn't always the case, it's crucial to be cautious and download the tool from a trusted source.

Low Success Rate

While the bypass tool can sometimes be effective, its success rate isn't guaranteed. It can be frustrating if you go through the entire process only to find it didn't work on your device. Choosing other [<u> FRP bypass software</u>](https://drfone.wondershare.com/google-frp-unlock/huawei-frp-tools.html) with a higher success rate can save you time.

Choosing between Pangu and an alternative depends on your needs and tech skills. If you're comfortable with downloading APK, Pangu can work. But if you prefer ease of use, broader device compatibility, and safety, consider dedicated tools like [<u>Wondershare Dr.Fone</u>](https://tools.techidaily.com/wondershare/drfone/drfone-toolkit/) - Screen Unlock (Android).

## Part 6: Wondershare Dr.Fone - Screen Unlock for Android: Best Alternative to Pangu

Dr.Fone is one of the best alternative tools for **Pangu FRP bypass**. With its user-friendly and intuitive interface, you can effortlessly remove the FRP lock in several steps. Dr.Fone is a reliable choice to [<u>bypass Google FRP </u>](https://drfone.wondershare.com/guide/google-frp-bypass.html) on Android, even if you don't have a Google account or PIN code. Dr.Fone - Screen Unlock can bypass FRP and is compatible with Samsung, Vivo, Realme, Oppo, Redmi, and Xiaomi Android phones.

Aside from that, it can also do the following:

- Remove four types of lock screens: pattern, PIN, fingerprint, and password.
- Unlock your lock screen without erasing your data so you can access your phone.

How To Use Dr.Fone - Screen Unlock To Bypass Google FRP?

If your Android OS is version 14 or below, Dr.Fone can help you eliminate the FRP lock on Android in a few minutes. Download the app, launch it on your computer, and follow the steps below.

- **Step 1:** Connect your phone to your desktop using a USB cable, then select **Screen Unlock** from the **Toolbox** homepage.

![dr.fone homepage interface](https://images.wondershare.com/drfone/guide/drfone-home.png)


- **Step 2:** Select **Android** as your device type to continue the FRP bypass process.

![dr.fone supports android and ios devices](https://images.wondershare.com/drfone/guide/select-your-mobile-device-to-unlock.png)

- **Step 3:** Select **Remove Google FRP Lock** on the next screen.

![dr.fone screen unlock tools](https://images.wondershare.com/drfone/guide/android-screen-unlock-3.png)

- **Step 4:** Select your phone brand from the list of supported brands, then click **Start** to proceed.

![select device brand to unlock frp](https://images.wondershare.com/drfone/guide/remove-android-frp-lock-1.png)

- **Step 5:** Follow the next in-app instructions, which may vary based on the brand of your Android device.
- **Step 6:** Wait while Dr.Fone removes the FRP lock on your phone.

![removing frp lock in progress](https://images.wondershare.com/drfone/guide/remove-google-frp-unknown-os-7.png)

- **Step 7:** Click **Done** to confirm successful FRP bypass or click **Try Again** to repeat the process (available for Samsung devices.)

![successfully removed frp lock on samsung](https://images.wondershare.com/drfone/guide/bypass-google-frp-on-samsung.png)

## Conclusion

Bypassing FRP on Android can be challenging. Downloading APK tools like **Pangu FRP Bypass** may be unreliable and risky. They often lack support for newer devices and have an inconsistent success rate.

Wondershare Dr.Fone offers an easier, faster, and user-friendly solution for bypassing FRP on almost all Android models, regardless of their version. Its intuitive interface and high success rate empower you to regain access to your devices. Don't let a locked screen stand in the way of your data. Explore Dr. Fone's Screen Unlock (Android) tool for a reliable solution to future FRP-lock issues.

_**Tips:** Searching for a powerful FRP bypass tool? No worries as [Dr.Fone](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/) is here to help you. Download it and start a seamless unlock experience!_

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="8358498916"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>


<span class="atpl-alsoreadstyle">Also read:</span>
<div><ul>
<li><a href="https://bypass-frp.techidaily.com/easy-guide-to-xiaomi-redmi-note-13-pro-5g-frp-bypass-with-best-methods-by-drfone-android/"><u>Easy Guide to Xiaomi Redmi Note 13 Pro 5G FRP Bypass With Best Methods</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-hassle-free-ways-to-remove-frp-lock-on-vivo-y02t-phones-withwithout-a-pc-by-drfone-android/"><u>In 2024, Hassle-Free Ways to Remove FRP Lock on Vivo Y02T Phones with/without a PC</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-top-5-tecno-pop-7-pro-bypass-frp-tools-for-pc-that-actually-work-by-drfone-android/"><u>In 2024, Top 5 Tecno Pop 7 Pro Bypass FRP Tools for PC That Actually Work</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-top-5-vivo-y100t-bypass-frp-tools-for-pc-that-actually-work-by-drfone-android/"><u>In 2024, Top 5 Vivo Y100t Bypass FRP Tools for PC That Actually Work</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-full-guide-to-bypass-infinix-hot-40i-frp-by-drfone-android/"><u>In 2024, Full Guide to Bypass Infinix Hot 40i FRP</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/how-to-bypass-frp-from-vivo-y27-5g-by-drfone-android/"><u>How to Bypass FRP from Vivo Y27 5G?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-a-quick-guide-to-tecno-camon-20-pro-5g-frp-bypass-instantly-by-drfone-android/"><u>In 2024, A Quick Guide to Tecno Camon 20 Pro 5G FRP Bypass Instantly</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-hassle-free-ways-to-remove-frp-lock-from-honor-magic-5-phones-withwithout-a-pc-by-drfone-android/"><u>In 2024, Hassle-Free Ways to Remove FRP Lock from Honor Magic 5 Phones with/without a PC</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-frp-hijacker-by-hagard-download-and-bypass-your-tecno-phantom-v-fold-frp-locks-by-drfone-android/"><u>In 2024, FRP Hijacker by Hagard Download and Bypass your Tecno Phantom V Fold FRP Locks</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-a-quick-guide-to-vivo-s17t-frp-bypass-instantly-by-drfone-android/"><u>In 2024, A Quick Guide to Vivo S17t FRP Bypass Instantly</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/how-to-bypass-google-frp-lock-on-vivo-y27s-devices-by-drfone-android/"><u>How to Bypass Google FRP Lock on Vivo Y27s Devices</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/is-gsm-flasher-adb-legit-full-review-to-bypass-your-xiaomi-redmi-note-12t-profrp-lock-by-drfone-android/"><u>Is GSM Flasher ADB Legit? Full Review To Bypass Your Xiaomi Redmi Note 12T ProFRP Lock</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-a-step-by-step-guide-on-using-adb-and-fastboot-to-remove-frp-lock-on-your-xiaomi-redmi-a2-by-drfone-android/"><u>In 2024, A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock on your Xiaomi Redmi A2</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-how-to-bypass-xiaomi-redmi-12-5g-frp-in-3-different-ways-by-drfone-android/"><u>In 2024, How To Bypass Xiaomi Redmi 12 5G FRP In 3 Different Ways</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-ultimate-guide-on-honor-x9a-frp-bypass-by-drfone-android/"><u>In 2024, Ultimate Guide on Honor X9a FRP Bypass</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/about-itel-frp-bypass-by-drfone-android/"><u>About Itel FRP Bypass</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-ultimate-guide-on-infinix-zero-5g-2023-turbo-frp-bypass-by-drfone-android/"><u>In 2024, Ultimate Guide on Infinix Zero 5G 2023 Turbo FRP Bypass</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-hassle-free-ways-to-remove-frp-lock-on-vivo-v30-lite-5gwithwithout-a-pc-by-drfone-android/"><u>In 2024, Hassle-Free Ways to Remove FRP Lock on Vivo V30 Lite 5Gwith/without a PC</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-about-xiaomi-redmi-note-12-proplus-5g-frp-bypass-by-drfone-android/"><u>In 2024, About Xiaomi Redmi Note 12 Pro+ 5G FRP Bypass</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/a-step-by-step-guide-on-using-adb-and-fastboot-to-remove-frp-lock-on-your-itel-p55plus-by-drfone-android/"><u>A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock on your Itel P55+</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/easy-guide-to-google-frp-bypass-with-best-methods-by-drfone-android/"><u>Easy Guide to Google FRP Bypass With Best Methods</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/hassle-free-ways-to-remove-frp-lock-on-vivo-t2x-5g-phones-withwithout-a-pc-by-drfone-android/"><u>Hassle-Free Ways to Remove FRP Lock on Vivo T2x 5G Phones with/without a PC</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-is-gsm-flasher-adb-legit-full-review-to-bypass-your-itel-p55tfrp-lock-by-drfone-android/"><u>In 2024, Is GSM Flasher ADB Legit? Full Review To Bypass Your Itel P55TFRP Lock</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-how-to-bypass-google-frp-lock-on-infinix-note-30-5g-devices-by-drfone-android/"><u>In 2024, How to Bypass Google FRP Lock on Infinix Note 30 5G Devices</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-how-to-bypass-itel-a05s-frp-in-3-different-ways-by-drfone-android/"><u>In 2024, How To Bypass Itel A05s FRP In 3 Different Ways</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/xiaomi-redmi-a2-adb-format-tool-for-pc-vs-other-unlocking-tools-which-one-is-the-best-by-drfone-android/"><u>Xiaomi Redmi A2 ADB Format Tool for PC vs. Other Unlocking Tools Which One is the Best?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-ultimate-guide-on-vivo-y77t-frp-bypass-by-drfone-android/"><u>In 2024, Ultimate Guide on Vivo Y77t FRP Bypass</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-frp-hijacker-by-hagard-download-and-bypass-your-infinix-note-30-pro-frp-locks-by-drfone-android/"><u>In 2024, FRP Hijacker by Hagard Download and Bypass your Infinix Note 30 Pro FRP Locks</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-hassle-free-ways-to-remove-frp-lock-from-tecno-phones-withwithout-a-pc-by-drfone-android/"><u>In 2024, Hassle-Free Ways to Remove FRP Lock from Tecno Phones with/without a PC</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/ultimate-guide-from-infinix-smart-8-plus-frp-bypass-by-drfone-android/"><u>Ultimate Guide from Infinix Smart 8 Plus FRP Bypass</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-hassle-free-ways-to-remove-frp-lock-on-honor-magic-5-pro-phones-withwithout-a-pc-by-drfone-android/"><u>In 2024, Hassle-Free Ways to Remove FRP Lock on Honor Magic 5 Pro Phones with/without a PC</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/is-gsm-flasher-adb-legit-full-review-to-bypass-your-xiaomi-redmi-note-13-proplus-5gfrp-lock-by-drfone-android/"><u>Is GSM Flasher ADB Legit? Full Review To Bypass Your Xiaomi Redmi Note 13 Pro+ 5GFRP Lock</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/step-by-step-tutorial-how-to-bypass-vivo-v30-lite-5g-frp-by-drfone-android/"><u>Step-by-Step Tutorial How To Bypass Vivo V30 Lite 5G FRP</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/ultimate-guide-on-samsung-galaxy-xcover-7-frp-bypass-by-drfone-android/"><u>Ultimate Guide on Samsung Galaxy XCover 7 FRP Bypass</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/5-quick-methods-to-bypass-honor-90-lite-frp-by-drfone-android/"><u>5 Quick Methods to Bypass Honor 90 Lite FRP</u></a></li>
<li><a href="https://apple-account.techidaily.com/how-to-delete-icloud-account-from-apple-iphone-7-without-password-by-drfone-ios/"><u>How to Delete iCloud Account From Apple iPhone 7 without Password?</u></a></li>
<li><a href="https://android-location-track.techidaily.com/in-2024-how-to-detect-and-remove-spyware-on-xiaomi-redmi-note-12-proplus-5g-drfone-by-drfone-virtual-android/"><u>In 2024, How to Detect and Remove Spyware on Xiaomi Redmi Note 12 Pro+ 5G? | Dr.fone</u></a></li>
<li><a href="https://android-unlock.techidaily.com/in-2024-universal-unlock-pattern-for-vivo-y56-5g-by-drfone-android/"><u>In 2024, Universal Unlock Pattern for Vivo Y56 5G</u></a></li>
<li><a href="https://android-pokemon-go.techidaily.com/why-does-the-pokemon-go-battle-league-not-available-on-oppo-reno-11f-5g-drfone-by-drfone-virtual-android/"><u>Why does the pokemon go battle league not available On Oppo Reno 11F 5G | Dr.fone</u></a></li>
<li><a href="https://techidaily.com/how-to-hard-reset-nokia-xr21-without-password-drfone-by-drfone-reset-android-reset-android/"><u>How to Hard Reset Nokia XR21 Without Password | Dr.fone</u></a></li>
<li><a href="https://change-location.techidaily.com/here-are-some-reliable-ways-to-get-pokemon-go-friend-codes-for-vivo-y78-5g-drfone-by-drfone-virtual-android/"><u>Here Are Some Reliable Ways to Get Pokemon Go Friend Codes For Vivo Y78 5G | Dr.fone</u></a></li>
<li><a href="https://howto.techidaily.com/8-solutions-to-solve-youtube-app-crashing-on-honor-100-pro-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>8 Solutions to Solve YouTube App Crashing on Honor 100 Pro | Dr.fone</u></a></li>
<li><a href="https://review-topics.techidaily.com/in-2024-does-airplane-mode-turn-off-gps-location-on-xiaomi-13-ultra-drfone-by-drfone-virtual-android/"><u>In 2024, Does Airplane Mode Turn off GPS Location On Xiaomi 13 Ultra? | Dr.fone</u></a></li>
<li><a href="https://change-location.techidaily.com/how-to-fix-android-app-not-installed-error-on-nokia-130-music-quickly-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>How to Fix Android App Not Installed Error on Nokia 130 Music Quickly? | Dr.fone</u></a></li>
<li><a href="https://techidaily.com/how-to-transfer-whatsapp-from-apple-iphone-7-plus-to-androidios-drfone-by-drfone-transfer-whatsapp-from-ios-transfer-whatsapp-from-ios/"><u>How To Transfer WhatsApp From Apple iPhone 7 Plus to Android/iOS? | Dr.fone</u></a></li>
<li><a href="https://android-unlock.techidaily.com/in-2024-how-can-we-unlock-our-vivo-v27-phone-screen-by-drfone-android/"><u>In 2024, How Can We Unlock Our Vivo V27 Phone Screen?</u></a></li>
<li><a href="https://screen-mirror.techidaily.com/in-2024-how-to-screen-mirroring-zte-nubia-z60-ultra-to-pc-drfone-by-drfone-android/"><u>In 2024, How to Screen Mirroring ZTE Nubia Z60 Ultra to PC? | Dr.fone</u></a></li>
<li><a href="https://android-location-track.techidaily.com/in-2024-how-do-i-stop-someone-from-tracking-my-realme-12-5g-drfone-by-drfone-virtual-android/"><u>In 2024, How Do I Stop Someone From Tracking My Realme 12 5G? | Dr.fone</u></a></li>
<li><a href="https://easy-unlock-android.techidaily.com/how-to-bypass-android-lock-screen-using-emergency-call-on-poco-c65-by-drfone-android/"><u>How to Bypass Android Lock Screen Using Emergency Call On Poco C65?</u></a></li>
<li><a href="https://blog-min.techidaily.com/how-to-find-lost-iphone-14-backup-files-on-windows-pc-stellar-by-stellar-data-recovery-ios-iphone-data-recovery/"><u>How to find lost iPhone 14 Backup files on Windows PC? | Stellar</u></a></li>
<li><a href="https://unlock-android.techidaily.com/delete-gmail-account-withwithout-password-on-infinix-hot-40i-by-drfone-android/"><u>Delete Gmail Account With/Without Password On Infinix Hot 40i</u></a></li>
<li><a href="https://techidaily.com/is-your-infinix-note-30i-working-too-slow-heres-how-you-can-hard-reset-it-drfone-by-drfone-reset-android-reset-android/"><u>Is your Infinix Note 30i working too slow? Heres how you can hard reset it | Dr.fone</u></a></li>
<li><a href="https://blog-min.techidaily.com/how-to-restore-wiped-videos-on-vivo-v29e-by-fonelab-android-recover-video/"><u>How to restore wiped videos on Vivo V29e</u></a></li>
<li><a href="https://pokemon-go-android.techidaily.com/in-2024-list-of-pokemon-go-joysticks-on-realme-gt-neo-5-drfone-by-drfone-virtual-android/"><u>In 2024, List of Pokémon Go Joysticks On Realme GT Neo 5 | Dr.fone</u></a></li>
<li><a href="https://techidaily.com/how-to-transfer-data-from-apple-iphone-14-pro-to-other-iphone-14-devices-drfone-by-drfone-transfer-data-from-ios-transfer-data-from-ios/"><u>How To Transfer Data From Apple iPhone 14 Pro To Other iPhone 14 devices? | Dr.fone</u></a></li>
<li><a href="https://screen-mirror.techidaily.com/how-to-cast-motorola-g24-power-screen-to-pc-using-wifi-drfone-by-drfone-android/"><u>How to Cast Motorola G24 Power Screen to PC Using WiFi | Dr.fone</u></a></li>
<li><a href="https://techidaily.com/how-to-update-apple-iphone-se-2020-without-losing-data-drfone-by-drfone-ios-system-repair-ios-system-repair/"><u>How to Update Apple iPhone SE (2020) without Losing Data? | Dr.fone</u></a></li>
<li><a href="https://howto.techidaily.com/what-to-do-if-your-samsung-galaxy-s23-ultra-auto-does-not-work-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>What To Do if Your Samsung Galaxy S23 Ultra Auto Does Not Work | Dr.fone</u></a></li>
<li><a href="https://iphone-unlock.techidaily.com/how-to-unlock-your-iphone-xs-passcode-4-easy-methods-with-or-without-itunes-drfone-by-drfone-ios/"><u>How to Unlock Your iPhone XS Passcode 4 Easy Methods (With or Without iTunes) | Dr.fone</u></a></li>
<li><a href="https://location-social.techidaily.com/in-2024-how-to-detect-and-stop-mspy-from-spying-on-your-oppo-a58-4g-drfone-by-drfone-virtual-android/"><u>In 2024, How to Detect and Stop mSpy from Spying on Your Oppo A58 4G | Dr.fone</u></a></li>
<li><a href="https://techidaily.com/the-easiest-methods-to-hard-reset-nokia-c210-drfone-by-drfone-reset-android-reset-android/"><u>The Easiest Methods to Hard Reset Nokia C210 | Dr.fone</u></a></li>
<li><a href="https://blog-min.techidaily.com/how-to-restore-missing-music-files-from-honor-play-7t-by-fonelab-android-recover-music/"><u>How To  Restore Missing Music Files from Honor Play 7T</u></a></li>
<li><a href="https://techidaily.com/what-you-need-to-know-to-improve-your-huawei-p60-hard-reset-drfone-by-drfone-reset-android-reset-android/"><u>What You Need To Know To Improve Your Huawei P60 Hard Reset | Dr.fone</u></a></li>
<li><a href="https://phone-solutions.techidaily.com/in-2024-is-fake-gps-location-spoofer-a-good-choice-on-lava-blaze-2-pro-drfone-by-drfone-virtual-android/"><u>In 2024, Is Fake GPS Location Spoofer a Good Choice On Lava Blaze 2 Pro? | Dr.fone</u></a></li>
<li><a href="https://screen-mirror.techidaily.com/how-to-do-motorola-g24-power-screen-sharing-drfone-by-drfone-android/"><u>How To Do Motorola G24 Power Screen Sharing | Dr.fone</u></a></li>
<li><a href="https://phone-solutions.techidaily.com/in-2024-how-to-use-life360-on-windows-pc-for-vivo-x90s-drfone-by-drfone-virtual-android/"><u>In 2024, How to Use Life360 on Windows PC For Vivo X90S? | Dr.fone</u></a></li>
<li><a href="https://apple-account.techidaily.com/in-2024-how-to-create-an-apple-developer-account-from-apple-iphone-14-pro-max-by-drfone-ios/"><u>In 2024, How To Create an Apple Developer Account From Apple iPhone 14 Pro Max</u></a></li>
</ul></div>


