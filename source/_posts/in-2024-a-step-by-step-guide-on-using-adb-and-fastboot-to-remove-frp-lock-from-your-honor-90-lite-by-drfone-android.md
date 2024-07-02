---
title: In 2024, A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock from your Honor 90 Lite
date: 2024-04-30T15:50:50.065Z
updated: 2024-05-01T15:50:50.065Z
tags: 
  - unlock
  - bypass android frp
categories:
  - android
description: This article describes A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock from your Honor 90 Lite
excerpt: This article describes A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock from your Honor 90 Lite
keywords: guide to frp bypass,Honor 90 Lite pangu frp bypass review,Honor 90 Lite frp bypass android,Honor 90 Lite pro frp bypass,Honor 90 Lite how to bypass frp,Honor 90 Lite frp bypass,frp bypass guide,Honor 90 Lite frp tools,frp bypass android device,frp hijacker download,Honor 90 Lite how to bypass frp tool,gsm flasher tool,pro frp bypass,Honor 90 Lite adb format tool,Honor 90 Lite about frp bypass,bypass android frp
thumbnail: https://www.lifewire.com/thmb/LSRhv9V0PxzBAHOqiakqf0M89LI=/400x300/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1302402871-ea3debd2e3c64ec5a78a99e580b6a8d1.jpg
---

## A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock on your Honor 90 Lite

Factory Reset Protection is one of the security measures available on Android 5.1 and later devices to prevent intruders' unauthorized factory resetting of the Honor 90 Lite device. Among the several ways to fix this issue and remove the lock, one is ADB and Fastboot commands. So, if you are aware of using Android Debug Bridge, the below content will help you understand how it can be used to remove the FRP lock.

**You can watch the video below to bypass FRP lock without hassle!**

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="https://www.youtube.com/embed/WXFUGH1uMcI"></iframe>

## Part 1: Quick Overview of ADB and Fastboot Commands

### 1\. What are ADB and Fastboot?

Standing for Android Debug Bridge, ADB and Fastboots are the methods through which communication with an Android device can be done through a computer. Under this method, the commands and the actions that are sent from the system are performed on your Android device.

Several issues can be resolved, and multiple functions can be performed using the **ADB format tool** and Fastboots, and this also includes removing the FRP lock on your Android device. To use this method, USB debugging should be enabled on the Honor 90 Lite device.

For specific brands of Android phones, specific utility tools are available like the **Vivo ADB format tool** and the **Samsung ADB format tool**, which are used explicitly for Vivo and Samsung phones, respectively.

### 2\. How Do ADB and Fastboot Bypass FRP?

Using the versatile ADB command-line tool and Fastboots, the Google FRP lock can be removed using several commands depending on the OS version. This is a client-server program that includes a client who sends the commands, a daemon used to run the commands on the Honor 90 Lite device, and a server that facilitates communication between the client and the daemon.

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

ADB is a command-based method, and thus it is important that the commands are entered right. If there is a slight error in the typing of the command, it might lead to major issues and can even be the Honor 90 Lite device damaged.

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



## How Can We Bypass Honor 90 Lite FRP?

After you hard reset your Honor smartphone, you must open the FRP lock before using it. If you can't pass the FRP lock, Google will block your device for privacy and security. You can easily pass the **Honor FRP** lock with your Google account and password. You will get stuck there if you don't know your account and password. Although it seems like a big problem, there is no need to panic because you can bypass it using other methods.

One of the fastest ways to remove the FRP lock is to use the **Honor FRP code**. If you don't want to use this method, you can also use the talkback method to bypass FRP. Both of these methods work perfectly every time, so the choice is up to you. Here, we will give you an easy guide to bypass FRP on your Honor .

## Part 1: What is Honor FRP Bypass Code?

Factory reset protection is a Google security feature that protects your phone from unauthorized access. The FRP activates when you log in with a Google account on your smartphone. When you reset your device, the FRP asks for Google verification. The FRP lock doesn't allow device access without your Google account and password. You can enter the **Honor FRP bypass code** to open the FRP lock on your device without your Google account and password.

Even for smartphones from the same brand, the method to bypass FRP varies for each model. Instead of using complex methods to bypass FRP on your device, you can use the bypass code to remove the lock in seconds. The English **Honor FRP** **code** is \*#813#, and the Chinese code is \*#812#. You can learn how to use these codes from our step-by-step guide.

## Part 2: Efficient Ways to Bypass Honor FRP

In this part, we will explore three efficient methods to bypass Honor FRP and weigh the advantages and disadvantages of each.

### A Comprehensive Comparison of Three Methods to Bypass Honor FRP

| **Method** | **Advantages** | **Disadvantages** |
| --- | --- | --- |
| [Wondershare Dr.Fone \[Fast & Easy\]](https://drfone.wondershare.com/google-frp-unlock/bypass-oppo-frp.html#Part1-1) | 1\. **Efficiency**: Wondershare Dr.Fone offers a fast and efficient FRP bypass process, ensuring quick access to your Honor device.  
2\. **User-Friendly**: The software comes with an intuitive interface, making it accessible to both novice and experienced users.  
3\. Comprehensive Solution: Beyond FRP bypass, Wondershare Dr.Fone provides additional features for data recovery and device optimization. | **Cost**: While the software may require a purchase, the cost is justified by its effectiveness and additional functionalities. |
| [Honor Emergency FRP Code](https://drfone.wondershare.com/google-frp-unlock/bypass-oppo-frp.html#Part1-2) | 1\. **Official Solution**: This method is officially supported by Honor , ensuring compatibility and reliability.  
2\. **No Additional Software**: The Emergency FRP Code doesn't require third-party software installations, simplifying the process. | 1\. **Limited Accessibility**: Obtaining the Emergency FRP Code may involve contacting Honor support, leading to potential delays.  
2\. Complexity: The process might be more complex for users unfamiliar with official support channels. |
| [Talkback Method to Bypass](https://drfone.wondershare.com/google-frp-unlock/bypass-oppo-frp.html#Part1-3) | **No External Softw**are: This method doesn't require additional software installations, making it a straightforward option. | 1\. **Technical Skill Required**: The Talkback Method involves navigating through device settings, which might be challenging for users without technical expertise.  
2\. **Time-Consuming**: Compared to software solutions, this method may take longer to complete. |

### 1: Recommended: Use a powerful software-Wondershare Dr.Fone \[Fast & Easy\]

Facing the FRP (Factory Reset Protection) lock on your Honor phone can be a roadblock, but with the right tools, the process becomes seamless. In this step-by-step guide, we'll walk you through the easy and effective steps to bypass the FRP lock on your Honor phone using the reliable [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/).

![arrow](https://drfone.wondershare.com/style/images/arrow_up.png)

### [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/)

The Best FRP Lock Removal Tool for Honor 

- Pattern, PIN, password, fingerprints & face screen lock can all be unlocked.
- Bypass Android FRP lock without a PIN or Google account.![New icon](https://images.wondershare.com/drfone/others/new_23.png)
- Unlock mainstream Android brands like Samsung, Honor , Xiaomi, etc.
- No tech knowledge required, Simple, click-through, process.

**4,008,671** people have downloaded it

### Step-by-Step Guide to bypassing Honor Frp Lock

Follow these straightforward steps to bypass the FRP lock on your Honor phone using Dr.Fone:

- **Step 1.** Launch Wondershare Dr.Fone and select **Toolbox** \> **Screen Unlock.**
- **Step 2.** Choose **Android** and then click **Remove Google FRP Lock** button on the next page.

![select remove google frp lock](https://images.wondershare.com/drfone/guide/android-screen-unlock-3.png)

- **Step 3.** Then you will see various device brands and select **OPPO** among the options.

![select oppo](https://images.wondershare.com/drfone/guide/remove-android-frp-lock-1.png)

- **Step 4.** Once you have selected the Honor 90 Lite device brand, Dr.Fone will initiate the downloading process of FRP.

![download the relevant driver](https://images.wondershare.com/drfone/guide/remove-android-frp-lock-2.png)

- **Step 5.** When it finished downloading, please turn off your device and connect it to the computer. Press the **Volume Up** and **Down** buttons for about 3 seconds during the connecting process.

![connect device to computer](https://images.wondershare.com/drfone/guide/remove-android-frp-lock-3.png)

- **Step 6.** Wait for a few minutes until the FRP is unlocked.

![remove frp](https://images.wondershare.com/drfone/guide/remove-android-frp-lock-5.png)

Wondershare Dr.Fone is a reliable software to bypass Honor FRP with a high success rate. Its easy-to-use feature makes it popular among users. We recommend it as your first choice.

![Safe download](https://images.wondershare.com/drfone/article/2022/05/security.svg)safe & secure

### 2: Use Honor Emergency FRP Code

The Honor Emergency FRP Code is an alternative method to bypass FRP, relying on a unique code provided by the Honor 90 Lite device manufacturer. After you do a factory reset on your Honor smartphone, don't rush to set it up. If you set up your device, the FRP lock will appear on the screen. When you go to the language selection screen, tap on the emergency call option to open the dialer. That's where you will be entering the **Honor FRP bypass code**. Follow these steps to remove the FRP lock from your smartphone.

![bypass code](https://images.wondershare.com/drfone/article/2022/10/oppo-frp-bypass-01.jpg)

- **Step 1.** Power on your Honor device after the factory reset.
- **Step 2.** Start the Honor 90 Lite device set up and connect it to a Wi-Fi network.
- **Step 3.** After you enable the Wi-Fi connection, return to the welcome screen.
- **Step 4.** Tap on the “Emergency Call” option at the bottom left of the language selection page.
- **Step 5.** Type one of the FRP bypass codes (\*#813# or \*#812#) on the dialer and tap on the “Dial” button.
- **Step 6.** Next, don't do anything and wait for the home screen of your Honor device to appear. You might see some alerts, but you don't have to touch the screen.
- **Step 7.** Once you enter your phone, open “Settings” and go to "About phone".
- **Step 8.** Enable Developer options by tapping on the android version between seven to ten times.
- **Step 9.** From the Developer Options, enable USB debugging.
- **Step 10.** Now, go back to “Settings” and reset your Honor device from the "Factory Data Reset" option.
- **Step 11.** Once the reset is complete, you can set up your device and enter it without FRP.

### 3: By Talkback Method to Bypass

For those seeking a manual approach, the Talkback Method involves leveraging the accessibility feature on the Honor 90 Lite device. Before using the Talkback method, ensure that your phone has more than 50% battery backup and an internet connection. The Talkback method will not work on devices with the latest Android operating system. Here are the steps to bypass **Honor FRP** lock with the Talkback method.

![android phone talkback feature](https://images.wondershare.com/drfone/article/2022/10/oppo-frp-bypass-02.jpg)

- **Step 1.** Power on your Honor smartphone and hold the volume up + down buttons at the same time to enable the Talkback feature.
- **Step 2.** Select “Turn on” to open the Talkback shortcut. Once you enable this feature, you can long press the volume up + down buttons to enable it anytime.
- **Step 3.** Now, double tap on the close button on the screen twice.
- **Step 4.** Next, draw the letter "L" on the hello screen and double-tap on the "Talkback Settings".
- **Step 5.** In the menu, swipe down with two fingers to navigate to the "Braille Keyboard". Double-tap to select it and go to "keyboard settings".
- **Step 6.** Now, open the "Talkback Braille Keyboard" and return to the add network screen. Also, turn off the Talkback feature by long pressing the volume down + up buttons together.
- **Step 7.** Click on the keyboard icon to open the "Talkback Braille Keyboard" again. Enable accessibility settings and swipe right to enter the "General" option.
- **Step 8.** Navigate to "Help & Feedback" from the accessibility menu.
- **Step 9.** Tap on the "Control Your Honor 90 Lite Device with Switch Access" and tap on the "Play" icon. Next, tap on the three dots in the video corner.
- **Step 10.** elect the “Share” option and tap on the three dots next to the Twitter icon this time.
- **Step 11.** Go to “Settings” from the “Profile” icon and select "YouTube Terms and Services" from "History & Privacy".
- **Step 12.** Next, tap on the "Accept and Continue" option. Select “Next” and tap on "No Thanks" on the next page.

### Which Method is Best to Bypass Honor FRP Lock?

Choosing the right method to bypass Honor FRP depends on your preferences, technical proficiency, and urgency. Wondershare [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/) offers a swift and user-friendly solution, the Honor Emergency FRP Code provides an official route, while the Talkback Method caters to those who prefer a manual approach. Consider the advantages and disadvantages outlined above to make an informed decision and regain access to your Honor device efficiently.

![Safe download](https://images.wondershare.com/drfone/article/2022/05/security.svg)safe & secure

## Part 3: FAQ for Bypassing Honor FRP (Factory Reset Protection)

Below you'll find answers to some of the most common questions regarding bypassing Factory Reset Protection (FRP) on Honor devices.

### 1\. What is the FRP skip code for Honor ?

Currently, there is no universally applicable "FRP skip code" for Honor devices. FRP is a security feature, designed to prevent unauthorized access to your device after a factory reset. If you are the legitimate owner and need to bypass FRP, you may need to contact Honor customer support or follow authorized methods for FRP bypass, which usually involve verifying your Google account credentials.

### 2\. What is the emergency code for FRP bypass?

There is no official emergency code for bypassing FRP on Honor or other Android devices. FRP is a critical security feature implemented by device manufacturers to protect users' data. To bypass FRP, you must follow the legitimate procedure provided by Honor or seek professional assistance.

### 3\. How to remove screen lock in Honor mobile?

Unlocking your Honor mobile's screen with Dr.Fone - Screen Unlock (Android) is a seamless solution. Unlike hard resetting, which often leads to FRP lock issues, Dr.Fone provides a faster and safer alternative. This [Honor Unlock Tool](https://drfone.wondershare.com/unlock/oppo-password-unlock-tool.html) swiftly bypasses the lock screen without requiring a password, ensuring a secure and efficient process.

![Safe download](https://images.wondershare.com/drfone/article/2022/05/security.svg)safe & secure

### 4\. How to remove an admin in Honor ?

To remove an admin, or a device administrator:

- **Step 1.** Go to 'Settings' on your Honor device.
- **Step 2.** Scroll down and tap on 'Security'.
- **Step 3.** Then, select 'Device Administrators' or 'Device Admin Apps'.
- **Step 4.** You will see a list of apps with administrator privileges. Find the admin you want to remove and toggle off its access.
- **Step 5.** Confirm by tapping 'Deactivate' when prompted.

### 5\. How to disable Honor security?

Disabling security features like passwords, PINs, pattern locks, or biometric scans can be done through settings:

- **Step 1.** Open 'Settings' and go to 'Security'.
- **Step 2.** Tap on 'Passcode', 'Biometrics & Passcode', or a similar option depending on your device model.
- **Step 3.** Choose the lock method currently in use and select 'None' or 'Disable'.

**Note:** Disabling security features makes your device more vulnerable to unauthorized access.

## Conclusion

Let's conclude our guide on how to bypass the **Honor FRP** lock. You can remove the FRP lock from your Honor device with various methods. The fastest and easiest way is to use the **Honor FRP code**, which lets you bypass the FRP lock within seconds. You can also use the Talkback method if you have an older Honor device. In addition to the FRP lock, you can bypass the screen lock on any Honor device with [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/). Dr.Fone enables users to unlock any android device without a password. It is a one-stop solution with features like WhatsApp transfer, data backup and restore, data eraser, and system repair.

## How to Bypass Google FRP Lock on Honor 90 Lite Devices

Technological advancements in the IT and telecommunication industry simplify your tasks and provide security against cyber malpractices. The advantages are numerous and appealing, but there are downsides too. One such inconvenience is caused by Google FRP lock in Honor 90 Lite smartphones. The facility keeps your device information safe against unauthorized access. However, users often report issues like lockouts not being removed due to several causes. Such scenarios raise the demand for **Honor 90 Lite Nord FRP bypass** solutions for seamless device access.

![google frp bypass in oneplus phones](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-01.jpg)

## Part 1. What Is Google FRP and How Does It Work?

Google Factory Reset Protection (FRP) is an in-built security function in Android 5.1 and later versions. The feature protects these devices against intentional data loss on unauthorized access. The utility does not allow a factory reset of your device in case it is lost or stolen. Your data is hence, safe from unwanted mishandling. The feature also protects the Honor 90 Lite device's data encryptions and screen locks. The functionality gets enabled when you register a Google account on your Android device. As is obvious, the feature gets disabled when the Google account is removed before beginning the Factory Data Reset process.

If your device is under untrusted access and the FRP lock is enabled, the latter will prevent the factory reset of your phone. It is because; the active FRP lock requires entering the Google account credentials registered with the Honor 90 Lite device. Therefore, unwanted users will not be possible to factory reset the Honor 90 Lite phone. However, there may be instances when you need to factory reset your FRP-enabled device to its default settings. Ensure that the registered Google account credentials are available to you under such circumstances.

## Part 2. How to Remove Google FRP Lock on Any Honor 90 Lite Phone?

To remove the Google FRP lock on your Honor 90 Lite device, you can follow any of the methods discussed below:

### 1\. Bypass Google FRP Lock on Your Honor 90 Lite Phone

- Switch on the Wi-Fi network of the Honor 90 Lite phone and head to the 'Hello' screen.
- Take the following path:

_**Emergency Call> Emergency Rescue> Add Contact**_

![emergency rescue interface of oneplus phones](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-02.jpg)

- When the permission prompt pops up, click on 'Deny' and tap "Go to Settings".
- Hit the 'Permission' tab and tap the 'Search' button.
- Enter 'Settings' in the search field, choose the 'Settings App Info' option, and tap the 'Open' button.
- Take the path given below to enable the system shortcuts:

_**System> Accessibility> Accessibility Menu> Toggle the Button to Turn it On> Allow> Got it**_

- Head to the "Settings" app and tap "Apps and Notifications". Next, click on "See All Apps".
- Find and disable the 'Android Setup' and 'Google Play Service' within the application list.

![disabling android setup and google play service](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-03.jpg)

- Navigate back to the 'Hello' screen to completely disable the setup by taking the following path:

_**Start> Agree> Agree> Skip> Don't Copy> Ok> Agree**_

- Skip the 'Set Screen Lock' task for completing the setup.

### 2\. Using FRP Bypass APK

This is a quick and smart way to address the FRP lock removal issue within several minutes. Here's what you need to do:

- Download the FRP Bypass APK to a PC or some other smartphone from the latter's official website, followed by copying it into a pen drive.
- Use an OTG to connect the pen drive to the FRP-locked device.
- Head to the destination folder of the downloaded APK in the "File Manager" application.
- Install the APK in the FRP-locked phone by allowing the app permissions.
- Navigate to 'Settings' and enable the 'Install from Unknown Source' option.
- Reinstall and open the APK.
- The 'Settings' menu will pop up. Head to the "Backup and Reset" option.
- Click on 'Factory Data Reset', followed by "Erase Everything".
- Tap 'Confirm' to erase all the Honor 90 Lite device data.
- Register with a new Google account to use the phone.

![google frp lock bypass using apk](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-04.jpg)

### 3\. Deactivate FRP in Your Honor 90 Lite Phone

Removing the Google FRP lock using a computer is impossible in some instances. Deleting your registered Gmail account from the Honor 90 Lite device can help you in these circumstances. The downside of this method is that your device's data will lose protection from Google. Here's how you can delete your Gmail account from the FRP-locked phone:

- Launch the "Settings" app on your Honor 90 Lite device.

![launching the 'settings' application on oneplus phone](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-05.jpg)

- In the app's opening interface, click on the 'Accounts' tab to open the section.

![opening the 'accounts' tab in oneplus phone](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-06.jpg)

- A list of all the accounts linked to your Honor 90 Lite device will be displayed. Tap on the desired Gmail account to unlink it from your phone.

![google account selection for quick removal](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-07.jpg)

- The device data linked with the selected account will appear on the screen. Click on 'Remove Account' to proceed further.

![removing the selected google account from the phone](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-08.jpg)

- A confirmation prompt will pop up to ensure a willful deletion of the account from the Honor 90 Lite device. Tap on 'Remove Account' to confirm the action. This will cause all data linked with the account to get deleted from the phone.

![confirmation of the google account removal](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-09.jpg)

## FAQs about Google Lock Bypass

### 1\. Does Factory Reset Remove Google Account?

There may be instances when you require wiping out smartphone data to keep it safe against unauthorized access. Maybe you wish to pass on your device to another user or migrate to a different device. It is important to make sure that all accounts linked to the phone are deleted from the Honor 90 Lite device. It should be understood here that a factory reset will not remove Google or other accounts from the Honor 90 Lite device. The process restores the default factory settings of the phone that you got at the first purchase.

### 2\. How to Enable Factory Reset Protection?

Enabling the Factory Reset protection feature is a smart way to protect the important data on your phone. However, issues of unethical access in cases of theft or loss are quite prominent. You can enable the FRP functionality by taking the following steps:

- When using a new device, sign in to the phone with your Google account. You can use an existing account or create a new one.
- Set a pattern or password screen lock on your device. It is not advisable to use swipe unlock or leave the phone unlocked at all. If you forget the pattern or password, Google credentials can be used to unlock the Honor 90 Lite device.

These steps will cause the automatic configuration of the Factory Reset Protection feature. The invader will be prompted to enter the registered Google account credentials on every attempt to access the phone.

## Conclusion

Developments in electronic technology have brought a series of benefits, covering easy access, security, and everything in between. One such feature is the Google Factory Reset Protection to protect your device data against untrusted access. The feature is undoubtedly credible, but there may be situations that require bypassing the FRP lock. For affordable solutions to address the concern on Honor 90 Lite phones, pick the one that corresponds to your specific situation.



### [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/)

Unlock Your Honor 90 Lite Phone in a Flash

- Remove 5 screen lock types: pattern, PIN, password, ingerprints & Face ID.
- Bypass Android FRP lock without a PIN or Google account.![New icon](https://images.wondershare.com/drfone/others/new_23.png)
- Unlock mainstream Android brands like Samsung, Huawei, LG, Xiaomi, etc.
- No tech knowledge required, Simple, click-through, process.

**3,981,454** people have downloaded it

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="8358498916"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>


<span class="atpl-alsoreadstyle">Also read:</span>
<div><ul>
<li><a href="https://bypass-frp.techidaily.com/the-complete-guide-to-vivo-x90s-frp-bypass-everything-you-need-to-know-by-drfone-android/"><u>The Complete Guide to Vivo X90S FRP Bypass Everything You Need to Know</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/latest-guide-how-to-bypass-infinix-note-30-5g-frp-without-computer-by-drfone-android/"><u>Latest Guide How To Bypass Infinix Note 30 5G FRP Without Computer</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-a-quick-guide-to-itel-p40plus-frp-bypass-instantly-by-drfone-android/"><u>In 2024, A Quick Guide to Itel P40+ FRP Bypass Instantly</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/ultimate-guide-on-vivo-s17-pro-frp-bypass-by-drfone-android/"><u>Ultimate Guide on Vivo S17 Pro FRP Bypass</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-a-step-by-step-guide-on-using-adb-and-fastboot-to-remove-frp-lock-from-your-vivo-y100-5g-by-drfone-android/"><u>In 2024, A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock from your Vivo Y100 5G</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-how-to-bypass-vivo-x-fold-2-frp-in-3-different-ways-by-drfone-android/"><u>In 2024, How To Bypass Vivo X Fold 2 FRP In 3 Different Ways</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-xiaomi-14-ultra-adb-format-tool-for-pc-vs-other-unlocking-tools-which-one-is-the-best-by-drfone-android/"><u>In 2024, Xiaomi 14 Ultra ADB Format Tool for PC vs. Other Unlocking Tools Which One is the Best?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/frp-hijacker-by-hagard-download-and-bypass-your-vivo-s18-pro-frp-locks-by-drfone-android/"><u>FRP Hijacker by Hagard Download and Bypass your Vivo S18 Pro FRP Locks</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-hassle-free-ways-to-remove-frp-lock-from-honor-x50i-phones-withwithout-a-pc-by-drfone-android/"><u>In 2024, Hassle-Free Ways to Remove FRP Lock from Honor X50i Phones with/without a PC</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/the-updated-method-to-bypass-vivo-x100-pro-frp-by-drfone-android/"><u>The Updated Method to Bypass Vivo X100 Pro FRP</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/how-to-bypass-frp-on-infinix-note-30-5g-by-drfone-android/"><u>How to Bypass FRP on Infinix Note 30 5G?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/the-updated-method-to-bypass-xiaomi-civi-3-frp-by-drfone-android/"><u>The Updated Method to Bypass Xiaomi Civi 3 FRP</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/addrom-bypass-an-android-tool-to-unlock-frp-lock-screen-for-your-vivo-y02t-by-drfone-android/"><u>AddROM Bypass An Android Tool to Unlock FRP Lock Screen For your Vivo Y02T</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/addrom-bypass-an-android-tool-to-unlock-frp-lock-screen-for-your-vivo-s17-by-drfone-android/"><u>AddROM Bypass An Android Tool to Unlock FRP Lock Screen For your Vivo S17</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-step-by-step-tutorial-how-to-bypass-honor-70-lite-5g-frp-by-drfone-android/"><u>In 2024, Step-by-Step Tutorial How To Bypass Honor 70 Lite 5G FRP</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/the-updated-method-to-bypass-vivo-y78-5g-frp-by-drfone-android/"><u>The Updated Method to Bypass Vivo Y78 5G FRP</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/is-gsm-flasher-adb-legit-full-review-to-bypass-your-honor-70-lite-5g-phone-frp-lock-by-drfone-android/"><u>Is GSM Flasher ADB Legit? Full Review To Bypass Your Honor 70 Lite 5G Phone FRP Lock</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/how-to-bypass-frp-on-vivo-t2x-5g-by-drfone-android/"><u>How to Bypass FRP on Vivo T2x 5G?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/hassle-free-ways-to-remove-frp-lock-on-realme-12-5g-phones-withwithout-a-pc-by-drfone-android/"><u>Hassle-Free Ways to Remove FRP Lock on Realme 12 5G Phones with/without a PC</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/top-5-xiaomi-redmi-a2-bypass-frp-tools-for-pc-that-actually-work-by-drfone-android/"><u>Top 5 Xiaomi Redmi A2 Bypass FRP Tools for PC That Actually Work</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-step-by-step-tutorial-how-to-bypass-honor-magic5-ultimate-frp-by-drfone-android/"><u>In 2024, Step-by-Step Tutorial How To Bypass Honor Magic5 Ultimate FRP</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/easy-guide-to-infinix-note-30-frp-bypass-with-best-methods-by-drfone-android/"><u>Easy Guide to Infinix Note 30 FRP Bypass With Best Methods</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-ultimate-guide-on-zte-nubia-z60-ultra-frp-bypass-by-drfone-android/"><u>In 2024, Ultimate Guide on ZTE Nubia Z60 Ultra FRP Bypass</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/5-quick-methods-to-bypass-vivo-y17s-frp-by-drfone-android/"><u>5 Quick Methods to Bypass Vivo Y17s FRP</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-about-infinix-smart-7-hd-frp-bypass-by-drfone-android/"><u>In 2024, About Infinix Smart 7 HD FRP Bypass</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/full-guide-to-bypass-vivo-x100-pro-frp-by-drfone-android/"><u>Full Guide to Bypass Vivo X100 Pro FRP</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-ultimate-guide-on-infinix-smart-8-plus-frp-bypass-by-drfone-android/"><u>In 2024, Ultimate Guide on Infinix Smart 8 Plus FRP Bypass</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-addrom-bypass-an-android-tool-to-unlock-frp-lock-screen-for-your-vivo-v29-pro-by-drfone-android/"><u>In 2024, AddROM Bypass An Android Tool to Unlock FRP Lock Screen For your Vivo V29 Pro</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-a-quick-guide-to-vivo-v29e-frp-bypass-instantly-by-drfone-android/"><u>In 2024, A Quick Guide to Vivo V29e FRP Bypass Instantly</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/a-quick-guide-to-infinix-note-30-5g-frp-bypass-instantly-by-drfone-android/"><u>A Quick Guide to Infinix Note 30 5G FRP Bypass Instantly</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/how-can-we-bypass-xiaomi-13t-pro-frp-by-drfone-android/"><u>How Can We Bypass Xiaomi 13T Pro FRP?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-how-to-bypass-google-frp-lock-on-vivo-g2-devices-by-drfone-android/"><u>In 2024, How to Bypass Google FRP Lock on Vivo G2 Devices</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/5-quick-methods-to-bypass-xiaomi-14-frp-by-drfone-android/"><u>5 Quick Methods to Bypass Xiaomi 14 FRP</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-is-gsm-flasher-adb-legit-full-review-to-bypass-your-tecno-spark-10-pro-phone-frp-lock-by-drfone-android/"><u>In 2024, Is GSM Flasher ADB Legit? Full Review To Bypass Your Tecno Spark 10 Pro Phone FRP Lock</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-tecno-spark-10c-adb-format-tool-for-pc-vs-other-unlocking-tools-which-one-is-the-best-by-drfone-android/"><u>In 2024, Tecno Spark 10C ADB Format Tool for PC vs. Other Unlocking Tools Which One is the Best?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-itel-p55-5g-adb-format-tool-for-pc-vs-other-unlocking-tools-which-one-is-the-best-by-drfone-android/"><u>In 2024, Itel P55 5G ADB Format Tool for PC vs. Other Unlocking Tools Which One is the Best?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-easy-guide-how-to-bypass-infinix-hot-40-frp-android-10111213-by-drfone-android/"><u>In 2024, Easy Guide How To Bypass Infinix Hot 40 FRP Android 10/11/12/13</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/how-to-bypass-google-frp-lock-from-zte-blade-a73-5g-devices-by-drfone-android/"><u>How to Bypass Google FRP Lock from ZTE Blade A73 5G Devices</u></a></li>
<li><a href="https://sim-unlock.techidaily.com/in-2024-the-best-android-sim-unlock-code-generators-unlock-your-lava-blaze-2-pro-phone-hassle-free-by-drfone-android/"><u>In 2024, The Best Android SIM Unlock Code Generators Unlock Your Lava Blaze 2 Pro Phone Hassle-Free</u></a></li>
<li><a href="https://techidaily.com/three-solutions-to-hard-reset-lava-blaze-2-5g-drfone-by-drfone-reset-android-reset-android/"><u>Three Solutions to Hard Reset Lava Blaze 2 5G? | Dr.fone</u></a></li>
<li><a href="https://howto.techidaily.com/7-fixes-for-unfortunately-phone-has-stopped-on-lava-blaze-curve-5g-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>7 Fixes for Unfortunately, Phone Has Stopped on Lava Blaze Curve 5G | Dr.fone</u></a></li>
<li><a href="https://easy-unlock-android.techidaily.com/in-2024-how-to-reset-a-realme-gt-neo-5-se-phone-that-is-locked-by-drfone-android/"><u>In 2024, How to Reset a Realme GT Neo 5 SE Phone that is Locked?</u></a></li>
<li><a href="https://android-transfer.techidaily.com/how-to-transfer-videos-from-itel-p55plus-to-ipad-drfone-by-drfone-transfer-from-android-transfer-from-android/"><u>How to Transfer Videos from Itel P55+ to iPad | Dr.fone</u></a></li>
<li><a href="https://sim-unlock.techidaily.com/android-unlock-code-sim-unlock-your-samsung-galaxy-a14-4g-phone-and-remove-locked-screen-by-drfone-android/"><u>Android Unlock Code Sim Unlock Your Samsung Galaxy A14 4G Phone and Remove Locked Screen</u></a></li>
<li><a href="https://fix-guide.techidaily.com/my-videos-arent-playing-on-motorola-moto-g14-what-can-i-do-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>My Videos Arent Playing on Motorola Moto G14 – What Can I Do? | Dr.fone</u></a></li>
<li><a href="https://fix-guide.techidaily.com/how-to-fix-unresponsive-touch-screen-on-motorola-edge-2023-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>How To Fix Unresponsive Touch Screen on Motorola Edge 2023 | Dr.fone</u></a></li>
<li><a href="https://change-location.techidaily.com/top-15-augmented-reality-games-like-pokemon-go-to-play-on-vivo-y17s-drfone-by-drfone-virtual-android/"><u>Top 15 Augmented Reality Games Like Pokémon GO To Play On Vivo Y17s | Dr.fone</u></a></li>
<li><a href="https://ai-voice-clone.techidaily.com/in-2024-comprehensive-guide-for-free-video-translator-downloading/"><u>In 2024, Comprehensive Guide for Free Video Translator Downloading</u></a></li>
<li><a href="https://iphone-unlock.techidaily.com/in-2024-how-to-unlock-iphone-14-pro-without-swiping-up-6-ways-drfone-by-drfone-ios/"><u>In 2024, How To Unlock iPhone 14 Pro Without Swiping Up? 6 Ways | Dr.fone</u></a></li>
<li><a href="https://change-location.techidaily.com/how-to-fix-error-495-while-downloadupdating-android-apps-on-infinix-hot-30-5g-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>How to Fix Error 495 While Download/Updating Android Apps On Infinix Hot 30 5G | Dr.fone</u></a></li>
<li><a href="https://unlock-android.techidaily.com/how-to-unlock-infinix-note-30-vip-racing-edition-phone-without-pin-by-drfone-android/"><u>How to Unlock Infinix Note 30 VIP Racing Edition Phone without PIN</u></a></li>
<li><a href="https://ai-vdieo-software.techidaily.com/best-websites-for-turning-a-photo-into-a-cartoon/"><u>Best Websites for Turning a Photo Into a Cartoon</u></a></li>
<li><a href="https://fake-location.techidaily.com/how-to-fix-vivo-s17t-find-my-friends-no-location-found-drfone-by-drfone-virtual-android/"><u>How to Fix Vivo S17t Find My Friends No Location Found? | Dr.fone</u></a></li>
<li><a href="https://review-topics.techidaily.com/in-2024-how-can-i-use-a-fake-gps-without-mock-location-on-vivo-y56-5g-drfone-by-drfone-virtual-android/"><u>In 2024, How Can I Use a Fake GPS Without Mock Location On Vivo Y56 5G? | Dr.fone</u></a></li>
<li><a href="https://iphone-transfer.techidaily.com/refurbished-apple-iphone-6s-everything-you-need-to-know-drfone-by-drfone-transfer-from-ios/"><u>Refurbished Apple iPhone 6s Everything You Need to Know | Dr.fone</u></a></li>
<li><a href="https://location-fake.techidaily.com/a-detailed-guide-on-faking-your-location-in-mozilla-firefox-on-honor-100-pro-drfone-by-drfone-virtual-android/"><u>A Detailed Guide on Faking Your Location in Mozilla Firefox On Honor 100 Pro | Dr.fone</u></a></li>
<li><a href="https://ai-video-editing.techidaily.com/updated-in-2024-how-to-overlay-video-in-premiere-pro/"><u>Updated In 2024, How to Overlay Video in Premiere Pro</u></a></li>
<li><a href="https://blog-min.techidaily.com/how-to-realme-c53-get-deleted-phone-number-back-with-ease-and-safety-by-fonelab-android-recover-contacts/"><u>How to Realme C53 Get Deleted Phone Number Back with Ease and Safety</u></a></li>
</ul></div>


