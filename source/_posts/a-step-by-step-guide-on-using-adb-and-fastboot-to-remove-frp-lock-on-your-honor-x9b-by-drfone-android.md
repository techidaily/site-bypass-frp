---
title: A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock on your Honor X9b
date: 2024-04-12T12:25:47.632Z
updated: 2024-04-13T12:25:47.632Z
tags: 
  - unlock
  - bypass android frp
categories:
  - android
description: This article describes A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock on your Honor X9b
excerpt: This article describes A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock on your Honor X9b
keywords: Honor X9b frp hijacker download,bypass android frp,Honor X9b frp bypass android,easy guide how to bypass frp android,bypass frp,addrom bypass,Honor X9b frp bypass quickly,Honor X9b frp bypass guide,how to bypass frp without computer,Honor X9b how to bypass frp,frp bypass,adb format tool,frp bypass quickly,how to bypass frp tool,Honor X9b pro frp bypass,easy guide how to bypass frp android device,pangu frp bypass review,frp bypass guide,best frp bypass,pro frp bypass,Honor X9b gsm flasher tool,Honor X9b bypass android frp,Honor X9b how to bypass frp without computer,Honor X9b android frp bypass,how to bypass frp,Honor X9b easy guide how to bypass frp android,Honor X9b remove frp via adb fastboot,guid for frp bypass,Honor X9b frp bypass,Honor X9b addrom bypass,bypass android device frp,Honor X9b guide to frp bypass,gsm flasher tool,Honor X9b bypass frp
thumbnail: https://www.lifewire.com/thmb/znoWsXihZpXFxhbw3VKHAcQ2O3s=/400x300/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1443716794-411cf2c5404b4f35b2a1153826e5a280.jpg
---

## A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock on your Honor X9b

Factory Reset Protection is one of the security measures available on Android 5.1 and later devices to prevent intruders' unauthorized factory resetting of the Honor X9b device. Among the several ways to fix this issue and remove the lock, one is ADB and Fastboot commands. So, if you are aware of using Android Debug Bridge, the below content will help you understand how it can be used to remove the FRP lock.

**You can watch the video below to bypass FRP lock without hassle!**

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="https://www.youtube.com/embed/WXFUGH1uMcI"></iframe>

## Part 1: Quick Overview of ADB and Fastboot Commands

### 1\. What are ADB and Fastboot?

Standing for Android Debug Bridge, ADB and Fastboots are the methods through which communication with an Android device can be done through a computer. Under this method, the commands and the actions that are sent from the system are performed on your Android device.

Several issues can be resolved, and multiple functions can be performed using the **ADB format tool** and Fastboots, and this also includes removing the FRP lock on your Android device. To use this method, USB debugging should be enabled on the Honor X9b device.

For specific brands of Android phones, specific utility tools are available like the **Vivo ADB format tool** and the **Samsung ADB format tool**, which are used explicitly for Vivo and Samsung phones, respectively.

### 2\. How Do ADB and Fastboot Bypass FRP?

Using the versatile ADB command-line tool and Fastboots, the Google FRP lock can be removed using several commands depending on the OS version. This is a client-server program that includes a client who sends the commands, a daemon used to run the commands on the Honor X9b device, and a server that facilitates communication between the client and the daemon.

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

ADB is a command-based method, and thus it is important that the commands are entered right. If there is a slight error in the typing of the command, it might lead to major issues and can even be the Honor X9b device damaged.

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

## 5 Quick Methods to Bypass Honor X9b FRP

Google Factory Reset Protection, a.k.a FRP, is developed by Google for all Android phones. It adds an extra layer of security to your phone and the data on it. It is aimed at making it difficult for the illegal holder of your phone to factory reset your phone and remove tracking information. Then why do we need to discuss the Honor X9b FRP bypass?

Though the protection is meant for you, sometimes you may forget the password and want your Honor X9b FRP removed. Also, if you bought a used phone and the previous user has set up FRP with her password, you need to bypass it.

## Part 1: In what cases does the Honor X9b FRP bypass works?

How and why should I bypass Honor X9b FRP? Let us look at the valid reasons.

### 1\. Buy a locked second-hand Honor

When you buy a second-hand phone, ideally, the previous user must format and hard reset the Honor phone to remove all locks and password requirements. However, if it doesn't happen, you cannot use some options on your phone and configure security because of FRP. Here, your savior is the option of the Honor X9b FRP bypass.

### 2\. Forget Google account ID and password

Even if you have locked your Honor phone yourself, you are stuck when you forget your Google username and password. So, you can only recover your phone using the Honor X9b FRP bypass.

### 3\. The person with a Honor from his company no longer works for it

Some employees also receive official phones from their company which they have to return when they leave the company. Now, it becomes a horror story for the new employee if he gets the same phone locked with the previous user's ID.

## Part 2: 5 quick methods to bypass Honor X9b FRP

Ok, now this is established that there are certain situations when you need to conduct a Honor X9b FRP bypass. So how do you do the Honor X9b FRP bypass?

### Method 1. Retrieve your Google account from another device

If your phone is locked with a Google account whose password you do not know or have forgotten, then you can use this method to Honor X9b FRP bypass. In this method, you can try to retrieve your Google account from another device. It is a simple step-by-step process tha can be completed from a PC or another mobile device.

_If you have forgot the email address but remember the password, then follow these steps._

1. **Navigate to Google's Find My Email page in your browser.**

When you can't remember the email address that was configured, go to the [Find My Email](https://accounts.google.com/signin/v2/usernamerecovery?flowName=GlifWebSignIn&flowEntry=ServiceLogin) page and start account recovery process.

2. **Enter your recovery email or phone number**

On the next screen, provide a recovery email or phone number and click **Next**.

![google retrieval](https://images.wondershare.com/drfone/article/2022/08/vivo-y20-frp-bypass-1.jpg)

3. **Provide your first and last name**

Enter your first and last name in the given form and click **Next**.

4. **Verification code**

Google will send a verification code to the setup recovery email or phone number, click **Send**.

5. **Verification code entry**

Check your email inbox or phone messages depending on the recovery method and find the verification code. Enter it in the given form. If it is correct, you can go to the next final step.

6. **Choose an account**

From the list of accounts showing on the screen, select the account you want to recover.

7. **Enter your password**

Enter the password in the text box and you are done.

_If you remember the email but not the password, then the Honor X9b FRP bypass method will go like this._

1. **Google's Account Recovery page**

Navigate to the [Account Recovery page](https://accounts.google.com/signin/recovery) from the browser on your PC or other mobile devices.

2. **Enter your email address**

Fill in the form with your Google account and click Next.

![google retrieval](https://images.wondershare.com/drfone/article/2022/08/vivo-y20-frp-bypass-2.jpg)

3. **Enter the last password you remember**

The next form will ask you to enter the last password you remember and that worked

Now, you will receive a message to your registered device, to verify it's you. Open it and click , Yes, it is me.

Now, wait for six hours for Google to verify it's you and then they will send a password reset link to your email.

Now, what if you can't remember your last password, then use the next method.

4. **Click on "Try another way"**

![try another way](https://images.wondershare.com/drfone/article/2022/08/vivo-y20-frp-bypass-3.jpg)

Now Google will send a message to your phone to verify it's you. On your phone, open the message and click Yes, it's me.

After verification, Google will send you a password reset link after six hours.

If your phone is not registered in your Google account then, try the next method.

5. **Click on "Try another way" again**

![try another way](https://images.wondershare.com/drfone/article/2022/08/vivo-y20-frp-bypass-4.jpg)

If your phone is enabled to check for the code, click Try another way again.

Google will then ask you to send a verification code to your registered phone number. Click Send.

Find the code from your messages, enter it, and click Next.

Now again, you will wait for six hours till Google sends the password reset link to your email.

### Method 2. Use FRP Bypass APK

FRP bypass APK is another tool you can use to Honor X9b FRP bypass easily. Let us see how it works step by step.

- Download FRP Bypass APK for Honor X9b  FRP bypass android 11.
- Once it's downloaded, open the File Manager using the [Open Files](https://www.bypassfrpfiles.com/2021/07/frp-bypass-apk/#Download_Android_All_FRP_Bypass_Tool_APK_File_Free) app
- Find the suitable Apk and click on it
- Install & open the APK.
- Open the browser on your phone.
- Launch any of these two below URL.
  - [https://tiny.cc/frptools](https://tiny.cc/frptools)
  - [https://bit.ly/2NKxXYs](https://bit.ly/2NKxXYs)
- Go to the FRP bypass APK >FRP APPS section
- Open Settings leading to the Honor X9b device Settings>System Settings> Backup & Reset >Reset Phone
- Now click on Reset System Settings Only, and confirm Reset System Settings Only.
- Select Erase All data and confirm.
- Your device will be rebooted.
- Wait till the factory reset process completes.

Now, reboot your device and set it up according to your requirements.

### Method 3. Deactivate FRP

Another way to come around Honor X9b FRP bypass is to deactivate FRP. Let us follow the step-by-step process.

1. Launch the "Settings" app and scroll to the Apps.
2. Click on the "Manage apps" (applications) and then the "All" tab.
3. Open "Google App."
4. Click on the "Clear cache" to remove the Google account cache.

![deactivate frp](https://images.wondershare.com/drfone/article/2022/08/vivo-y20-frp-bypass-5.jpg)

5. Also, clear all data to erase data stored.
6. Click the "Back" button, and go to "Gmail."
7. Click on the "Clear cache" and "Clear data."

![clear data](https://images.wondershare.com/drfone/article/2022/08/vivo-y20-frp-bypass-6.jpg)

8. In the Honor X9b device Settings menu and click "Data synchronization." When your device asks you to enter your Google account, enter your new Gmail account.

You have successfully completed the Honor X9b FRP bypass process.

### Method 4. Bypass with SideSync

You can use SideSync to share the screen and data between your computer and mobile phone. How can we use this for FRP bypass?

1. Download the SideSync from the official site and install the SideSync application on your computer.

![sidesync](https://images.wondershare.com/drfone/article/2022/08/vivo-y20-frp-bypass-7.jpg)

2. Connect your phone and computer to the Google account verification screen.
3. Now plug in the first end of your OTG adapter with your phone and connect another end to the flash drive with APK.
4. Your phone will launch the file explorer automatically, showing the root directory of the flash drive.
5. Now click on the APK file.
6. Click Settings and allow to install from Unknown sources, and click OK.
7. After installation, open SideSync.
8. Disconnect the OTG cable from your Samsung phone.
9. Now access the Settings menu and go to the Backup & reset option and conduct a factory reset.

### Method 5. 3 Steps to Bypass Honor FRP Bypass

[Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/) is a reliable and efficient tool designed to help users bypass FRP (Factory Reset Protection) locks on Android devices, including Honor smartphones. This powerful software provides a hassle-free solution for those locked out of their Honor devices due to FRP lock. With its user-friendly interface and advanced features, Dr.Fone makes FRP bypassing a straightforward process, even for users with limited technical knowledge.



### [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/)

Remove Google Lock (FRP) from Honor Devices

- Pattern, PIN, password, fingerprints & face screen lock can all be unlocked.
- Bypass Android FRP lock without a PIN or Google account.![New icon](https://images.wondershare.com/drfone/others/new_23.png)
- Unlock mainstream Android brands like Samsung, Honor, Xiaomi, etc.
- No tech knowledge required, Simple, click-through, process.

**3,981,454** people have downloaded it

#### 3 Steps to Bypass Honor FRP Lock with Dr.Fone - Screen Unlock (Android)

- **Step 1.** After installing Dr.Fone - Screen Unlock (Android), launch the program and select the "Screen Unlock" option from the main menu. Continue to Android > Remove Google FRP Lock.

![coose remove google frp lock](https://images.wondershare.com/drfone/guide/android-screen-unlock-3.png)

- **Step 2.** Then select Honor and click the Start button to continue. Then, connect your locked Honor device to the computer using a USB cable. Ensure that USB debugging is enabled on your Honor device before proceeding with the next steps.

![coose remove google frp lock](https://images.wondershare.com/drfone/guide/remove-android-frp-lock-1.png)

- **Step 3.** Once your Honor device is successfully connected, Dr.Fone - Screen Unlock (Android) will automatically detect it. Follow the on-screen instructions to put your Honor device into specic mode. Once in the correct mode, Dr.Fone will start downloading the necessary firmware to bypass the FRP lock.

![coose remove google frp lock](https://images.wondershare.com/drfone/guide/remove-android-frp-lock-2.png)

During the process, it's crucial to keep your device connected to the computer and refrain from disconnecting it until the bypass is complete. After the firmware download is finished, Dr.Fone will initiate the FRP lock bypass process. Once completed, your Honor device will restart, and you'll regain access to it without encountering the FRP lock.

![Safe download](https://images.wondershare.com/drfone/article/2022/05/security.svg)safe & secure

## The Bottom Line

FRP is a great feature to add security to Android phones. However, sometimes it is necessary to bypass it to fully use your phone. When you are stuck with an FRP lock, it is a frustrating situation, especially when you want to factory reset your phone. We have described various methods so that you choose the best solution according to your requirements for the Honor X9b FRP bypass. Among them, bypassing Honor FRP lock is made simple and efficient with Dr.Fone - Screen Unlock (Android). Say goodbye to FRP lock frustrations and regain access to your Honor device swiftly with [Dr.Fone - Screen Unlock (Android)](https://drfone.wondershare.com/guide/bypass-google-frp-on-android.html).

![Safe download](https://images.wondershare.com/drfone/article/2022/05/security.svg)safe & secure



## How to Bypass FRP on Honor X9b?

Learning how to **FRP bypass on Honor X9b** is vital in many ways. For instance, you might want to hard reset your phone to clear data and remove a bug or virus. Or, you may want to remove every bit of information before gifting or selling the phone. Whichever the case, learning how to bypass FRP on Honor X9b is a cakewalk with this 3-minute read. We'll know how to do that with or without a PC.

## Part 1: Is it possible to bypass FRP Honor X9b on Samsung?

FRP (Factory Reset Protection) is an Activation Lock system introduced by Google in 2015 on Android 5.1 (Lollipop) or newer. This security feature is meant to prevent unauthorized Factory Resetting of your phone. In other words, you'll need to enter the correct Google Account details to bypass FRP. Because FRP or Activation Lock is available on Android 5.1 or later, it will automatically activate on your Honor X9b device after adding your Gmail account. Some Samsung Honor X9b devices include S8, S8 Plus, Note 8, Note 9, J6, J7, M1, and other Galaxy phones launched before 2018.

Meanwhile, you must be asking if it's possible to bypass FRP on Honor X9b without a PC? The answer is yes! There are multiple methods to bypass FRP on Honor X9b, including via YouTube.

Below are the quick steps for Galaxy S8 or S8 Plus:

### Step 1: Dial an emergency number and save it

- 1\. Fire up your locked phone and connect it to a Wi-Fi network.
- 2\. Navigate back to the “Let's go” screen and tap Emergency call. Dial and call 112.
- 3\. Go back to the “Let's go” screen and click Next until you reach the Wi-Fi connection screen. Here, tap Add network and then click the Settings icon on the Samsung keyboard.
- 4\. Click Keyboard layout and feedback > Key-tap feedback. Then, choose Sound and vibration on the Tip section.
- 5\. Next, click Answering and ending calls > Answer automatically. Now enable the toggle before using your two fingers to select “10 seconds” and “Customize.” You'll see a pop-up dialog where you'll click App Info > Call settings > Block numbers.

![block numbers](https://images.wondershare.com/drfone/article/2022/07/how-bypass-frp-on-android-9-1.jpg)

- 6\. Click Recent > Emergency number > Message icon.
- 7\. Tap the Ellipsis icon and click Add or remove people. Enter random numbers before clicking the “+” button.
- 8\. Click the number you've just entered and tap Add. Then, tap Create contact and name it. Scroll down and add an email address with a password that you'll remember easily if prompted. Click Save.

### Step 2: Open Chrome and install Bypass FRP APK

- 9\. Now open a Message chat and type [www.youtube.com](http://www.youtube.com/) before sending it to the number. Then, tap the YouTube link and open any video.
- 10\. Click any link on the video description to launch Google Chrome. Search, download, and install Apex Launcher APK from frpfile.com.
- 11\. After installing Apex Launcher, open it and then click Settings > Biometrics and security > Other security settings > Device admin apps > Find my Device > Deactivate.

![deactive find my device](https://images.wondershare.com/drfone/article/2022/07/how-bypass-frp-on-android-9-2.jpg)

- 12\. Go back to the Settings screen, click Apps > Google Play Services > Disable. Also, disable Google Account Manager.
- 13\. Open Chrome and install Bypass FRP APK from the same website.

### Step 3: FRP Bypass Honor X9b

- 14\. Go to Settings > Accounts and backup > Accounts > Add account > Google. Sign in with any Gmail account.

![sign in google account](https://images.wondershare.com/drfone/article/2022/07/how-bypass-frp-on-android-9-3.jpg)

- 15\. Navigate back to Settings and enable Google Play Services. Also, activate Find My Device. Now restart your phone and access it without FRP.

Although this method can yield the desired results, it can be time-consuming and confusing if you're not a techie. So, read on to learn the easiest way to bypass FRP on any Samsung Honor X9b device.

## Part 2: How to bypass FRP Honor X9b with Dr.Fone – Screen Unlock (Android)?

This method will teach us how to bypass FRP on Honor X9b devices like Galaxy S8 or S8 Plus. Here, you'll need a Wi-Fi internet, Mac or Windows PC, and a USB wire. You require a computer to install [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/) and connect the program to your locked phone. Don't worry; it's a free FRP bypass program without those unwanted programs or malware. Besides Honor X9b, Dr.Fone can also bypass Samsung FRP on Android 6/7/8/10/11/12/13.

![arrow](https://drfone.wondershare.com/style/images/arrow_up.png)

### [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/)

The Best Tool to Bypass FRP on Honor X9b and Solve Your Screen Locks!

- Completely unlinked from the previous Google account, it won’t be traced or blocked by it anymore.
- Remove all Android screen locks (PIN/pattern/fingerprints/face ID) in minutes.
- Supported Android brands: Samsung, Xiaomi, Redmi, Oppo, Realme, Vivo.
- Provide specific removal solutions to promise good success rate.

**4,008,670** people have downloaded it

Follow these steps to bypass FRP on Honor X9b with Dr.Fone:

**Step 1:** Install and run Dr.Fone on your PC and open the Screen Unlock feature. On the Screen Unlock window, tap Android before clicking Remove Google FRP Lock.

![screen unlock](https://images.wondershare.com/drfone/guide/android-screen-unlock-3.png)

**Step 2:** Next, choose the Android operating system for your device. In this case, select Android 6/9/10. Now connect the locked Android phone to your PC using a USB cable and click Confirmed once the connection is successful.

![remove google frp lock](https://images.wondershare.com/drfone/guide/bypass-google-frp-on-android-6-9-10.png)

**Step 3:** On your phone, you'll see a Dr.Fone Unlock pop-up dialog. Click View and then install and launch Samsung Internet Browser. Now enter and search for <https://drfonetoolkit.com>. Click Android 6/9/10 and then tap Open Settings. After that, tap PIN > Do not require > Continue. Now set a PIN code that you can easily remember before clicking Skip.

![launch samsung internet browser](https://images.wondershare.com/drfone/guide/bypass-google-frp-on-android-6-9-10-4.png)

**Step 5:** Click the “<” button to navigate back to the Wi-Fi connection screen before clicking Next. Enter the PIN you can set earlier before clicking Continue.

![enter pin](https://images.wondershare.com/drfone/guide/bypass-google-frp-on-android-6-9-10-5.png)

**Step 6:** Hit the Skip button on the Google Sign-In page to successfully bypass FRP on your Samsung Honor X9b phone. And there it that!

![bypass frp on Honor X9b](https://images.wondershare.com/drfone/guide/bypass-google-frp-on-samsung.png)

**Note:** Bypassing FRP on your Samsung phone using Dr.Fone is undoubtedly quick and easy. However, only use this software to bypass FRP on your Samsung phone or if you have consent from the original owner. Don't bypass FRP if you're not sure about the original owner of the phone.

**You can watch the video below to get your FRP bypassed with Wondershare Dr.Fone**

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="https://www.youtube.com/embed/7o2JG5knKr8"></iframe>

## Part 3: How to Disable FRP lock on Samsung Honor X9b?

To avoid the stress of bypassing FRP on your Samsung phone in the future, you may have to disable Android Lock altogether. This is a relatively straightforward procedure on any Android phone you use. But be guided that turning off FRP on your Honor X9b phone is not recommended.

Follow these steps:

- **Step 1:** Search for the Settings app and open it.
- **Step 2:** Next, click Accounts and backup before clicking Accounts.
- **Step 3:** You'll see all the linked email accounts. Choose the one that you want to delete.
- **Step 4:** Click Remove Account and then click Remove Account once again to confirm. That's it!

## Conclusion

See, you can quickly bypass FRP on Honor X9b with these methods. But remember that disabling FRP will leave your phone without security protection. Also, bypassing FRP using the YouTube method can be lengthy and complex. So, use Wondershare Dr.Fone to skip FRP on Android 6/7/8/9/10/11/12/13. Give it a try!

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="8358498916"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>


<span class="atpl-alsoreadstyle">Also read:</span>
<div><ul>
<li><a href="https://bypass-frp.techidaily.com/in-2024-step-by-step-tutorial-how-to-bypass-honor-x50i-frp-by-drfone-android/"><u>In 2024, Step-by-Step Tutorial How To Bypass Honor X50i FRP</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-full-guide-to-bypass-tecno-spark-20c-frp-by-drfone-android/"><u>In 2024, Full Guide to Bypass Tecno Spark 20C FRP</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/hassle-free-ways-to-remove-frp-lock-from-infinix-note-30-pro-phones-withwithout-a-pc-by-drfone-android/"><u>Hassle-Free Ways to Remove FRP Lock from Infinix Note 30 Pro Phones with/without a PC</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/the-updated-method-to-bypass-vivo-v29e-frp-by-drfone-android/"><u>The Updated Method to Bypass Vivo V29e FRP</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/hassle-free-ways-to-remove-frp-lock-on-xiaomi-redmi-note-13-proplus-5g-phones-withwithout-a-pc-by-drfone-android/"><u>Hassle-Free Ways to Remove FRP Lock on Xiaomi Redmi Note 13 Pro+ 5G Phones with/without a PC</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-ultimate-guide-on-vivo-g2-frp-bypass-by-drfone-android/"><u>In 2024, Ultimate Guide on Vivo G2 FRP Bypass</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-hassle-free-ways-to-remove-frp-lock-on-vivo-s17-prowithwithout-a-pc-by-drfone-android/"><u>In 2024, Hassle-Free Ways to Remove FRP Lock on Vivo S17 Prowith/without a PC</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/frp-hijacker-by-hagard-download-and-bypass-your-xiaomi-redmi-note-12-pro-4g-frp-locks-by-drfone-android/"><u>FRP Hijacker by Hagard Download and Bypass your Xiaomi Redmi Note 12 Pro 4G FRP Locks</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/hassle-free-ways-to-remove-frp-lock-on-itel-s23plus-phones-withwithout-a-pc-by-drfone-android/"><u>Hassle-Free Ways to Remove FRP Lock on Itel S23+ Phones with/without a PC</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/tecno-camon-20-premier-5g-adb-format-tool-for-pc-vs-other-unlocking-tools-which-one-is-the-best-by-drfone-android/"><u>Tecno Camon 20 Premier 5G ADB Format Tool for PC vs. Other Unlocking Tools Which One is the Best?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-full-guide-to-bypass-itel-p55t-frp-by-drfone-android/"><u>In 2024, Full Guide to Bypass Itel P55T FRP</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/how-to-bypass-frp-on-samsung-galaxy-xcover-7-by-drfone-android/"><u>How to Bypass FRP on Samsung Galaxy XCover 7?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/itel-p55-adb-format-tool-for-pc-vs-other-unlocking-tools-which-one-is-the-best-by-drfone-android/"><u>Itel P55 ADB Format Tool for PC vs. Other Unlocking Tools Which One is the Best?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-how-can-we-bypass-xiaomi-redmi-note-12-4g-frp-by-drfone-android/"><u>In 2024, How Can We Bypass Xiaomi Redmi Note 12 4G FRP?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-about-itel-p40plus-frp-bypass-by-drfone-android/"><u>In 2024, About Itel P40+ FRP Bypass</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-latest-guide-how-to-bypass-xiaomi-13t-frp-without-computer-by-drfone-android/"><u>In 2024, Latest Guide How To Bypass Xiaomi 13T FRP Without Computer</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-how-can-we-bypass-itel-a05s-frp-by-drfone-android/"><u>In 2024, How Can We Bypass Itel A05s FRP?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/frp-hijacker-by-hagard-download-and-bypass-your-infinix-note-30i-frp-locks-by-drfone-android/"><u>FRP Hijacker by Hagard Download and Bypass your Infinix Note 30i FRP Locks</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/the-complete-guide-to-xiaomi-redmi-note-13-pro-5g-frp-bypass-everything-you-need-to-know-by-drfone-android/"><u>The Complete Guide to Xiaomi Redmi Note 13 Pro 5G FRP Bypass Everything You Need to Know</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/a-step-by-step-guide-on-using-adb-and-fastboot-to-remove-frp-lock-from-your-tecno-spark-10c-by-drfone-android/"><u>A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock from your Tecno Spark 10C</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-a-step-by-step-guide-on-using-adb-and-fastboot-to-remove-frp-lock-from-your-vivo-y17s-by-drfone-android/"><u>In 2024, A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock from your Vivo Y17s</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-full-guide-to-bypass-itel-p55-5g-frp-by-drfone-android/"><u>In 2024, Full Guide to Bypass Itel P55 5G FRP</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/how-to-bypass-google-frp-lock-on-vivo-v29e-devices-by-drfone-android/"><u>How to Bypass Google FRP Lock on Vivo V29e Devices</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-how-can-we-bypass-vivo-y200-frp-by-drfone-android/"><u>In 2024, How Can We Bypass Vivo Y200 FRP?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/is-gsm-flasher-adb-legit-full-review-to-bypass-your-vivo-y77t-phone-frp-lock-by-drfone-android/"><u>Is GSM Flasher ADB Legit? Full Review To Bypass Your Vivo Y77t Phone FRP Lock</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-how-to-bypass-frp-from-tecno-camon-20-by-drfone-android/"><u>In 2024, How to Bypass FRP from Tecno Camon 20?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/hassle-free-ways-to-remove-frp-lock-on-tecno-spark-go-2023-phones-withwithout-a-pc-by-drfone-android/"><u>Hassle-Free Ways to Remove FRP Lock on Tecno Spark Go (2023) Phones with/without a PC</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/about-zte-frp-bypass-by-drfone-android/"><u>About ZTE FRP Bypass</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/is-gsm-flasher-adb-legit-full-review-to-bypass-your-vivo-y200e-5gfrp-lock-by-drfone-android/"><u>Is GSM Flasher ADB Legit? Full Review To Bypass Your Vivo Y200e 5GFRP Lock</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-top-5-vivo-t2-5g-bypass-frp-tools-for-pc-that-actually-work-by-drfone-android/"><u>In 2024, Top 5 Vivo T2 5G Bypass FRP Tools for PC That Actually Work</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/latest-guide-how-to-bypass-itel-frp-without-computer-by-drfone-android/"><u>Latest Guide How To Bypass Itel FRP Without Computer</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-a-step-by-step-guide-on-using-adb-and-fastboot-to-remove-frp-lock-on-your-vivo-x100-pro-by-drfone-android/"><u>In 2024, A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock on your Vivo X100 Pro</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-vivo-y17s-adb-format-tool-for-pc-vs-other-unlocking-tools-which-one-is-the-best-by-drfone-android/"><u>In 2024, Vivo Y17s ADB Format Tool for PC vs. Other Unlocking Tools Which One is the Best?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-samsung-galaxy-a05s-adb-format-tool-for-pc-vs-other-unlocking-tools-which-one-is-the-best-by-drfone-android/"><u>In 2024, Samsung Galaxy A05s ADB Format Tool for PC vs. Other Unlocking Tools Which One is the Best?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/how-to-bypass-google-frp-lock-from-infinix-smart-8-plus-devices-by-drfone-android/"><u>How to Bypass Google FRP Lock from Infinix Smart 8 Plus Devices</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/5-quick-methods-to-bypass-tecno-spark-20-pro-frp-by-drfone-android/"><u>5 Quick Methods to Bypass Tecno Spark 20 Pro FRP</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-ultimate-guide-on-vivo-s18-frp-bypass-by-drfone-android/"><u>In 2024, Ultimate Guide on Vivo S18 FRP Bypass</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/how-to-bypass-google-frp-lock-from-zte-nubia-z60-ultra-devices-by-drfone-android/"><u>How to Bypass Google FRP Lock from ZTE Nubia Z60 Ultra Devices</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-the-updated-method-to-bypass-tecno-pova-5-pro-frp-by-drfone-android/"><u>In 2024, The Updated Method to Bypass Tecno Pova 5 Pro FRP</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-how-to-bypass-frp-from-tecno-spark-10-pro-by-drfone-android/"><u>In 2024, How to Bypass FRP from Tecno Spark 10 Pro?</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/ultimate-guide-from-tecno-pova-5-pro-frp-bypass-by-drfone-android/"><u>Ultimate Guide from Tecno Pova 5 Pro FRP Bypass</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/addrom-bypass-an-android-tool-to-unlock-frp-lock-screen-for-your-infinix-smart-8-plus-by-drfone-android/"><u>AddROM Bypass An Android Tool to Unlock FRP Lock Screen For your Infinix Smart 8 Plus</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-hassle-free-ways-to-remove-frp-lock-on-vivo-v27-phones-withwithout-a-pc-by-drfone-android/"><u>In 2024, Hassle-Free Ways to Remove FRP Lock on Vivo V27 Phones with/without a PC</u></a></li>
<li><a href="https://techidaily.com/full-guide-to-hard-reset-your-infinix-note-30-pro-drfone-by-drfone-reset-android-reset-android/"><u>Full Guide to Hard Reset Your Infinix Note 30 Pro | Dr.fone</u></a></li>
<li><a href="https://iphone-unlock.techidaily.com/in-2024-trouble-with-iphone-15-pro-swipe-up-try-these-11-solutions-drfone-by-drfone-ios/"><u>In 2024, Trouble with iPhone 15 Pro Swipe-Up? Try These 11 Solutions | Dr.fone</u></a></li>
<li><a href="https://screen-mirror.techidaily.com/in-2024-how-can-oppo-f25-pro-5gmirror-share-to-pc-drfone-by-drfone-android/"><u>In 2024, How Can Oppo F25 Pro 5GMirror Share to PC? | Dr.fone</u></a></li>
<li><a href="https://change-location.techidaily.com/full-guide-to-catch-100-iv-pokemon-using-a-map-on-xiaomi-redmi-note-12-pro-4g-drfone-by-drfone-virtual-android/"><u>Full Guide to Catch 100 IV Pokémon Using a Map On Xiaomi Redmi Note 12 Pro 4G | Dr.fone</u></a></li>
<li><a href="https://android-location-track.techidaily.com/in-2024-how-to-detect-and-remove-spyware-on-vivo-s17-drfone-by-drfone-virtual-android/"><u>In 2024, How to Detect and Remove Spyware on Vivo S17? | Dr.fone</u></a></li>
<li><a href="https://android-transfer.techidaily.com/in-2024-how-to-migrate-android-data-from-samsung-galaxy-a24-to-new-android-phone-drfone-by-drfone-transfer-from-android-transfer-from-android/"><u>In 2024, How to Migrate Android Data From Samsung Galaxy A24 to New Android Phone? | Dr.fone</u></a></li>
<li><a href="https://fix-guide.techidaily.com/proven-ways-to-fix-there-was-a-problem-parsing-the-package-on-vivo-s17t-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>Proven Ways to Fix There Was A Problem Parsing the Package on Vivo S17t | Dr.fone</u></a></li>
<li><a href="https://android-pokemon-go.techidaily.com/the-best-ispoofer-alternative-to-try-on-oppo-reno-9a-drfone-by-drfone-virtual-android/"><u>The Best iSpoofer Alternative to Try On Oppo Reno 9A | Dr.fone</u></a></li>
<li><a href="https://review-topics.techidaily.com/in-2024-full-guide-to-fix-itoolab-anygo-not-working-on-vivo-v29e-drfone-by-drfone-virtual-android/"><u>In 2024, Full Guide to Fix iToolab AnyGO Not Working On Vivo V29e | Dr.fone</u></a></li>
<li><a href="https://location-social.techidaily.com/how-to-pause-life360-location-sharing-for-oppo-a1-5g-drfone-by-drfone-virtual-android/"><u>How To Pause Life360 Location Sharing For Oppo A1 5G | Dr.fone</u></a></li>
<li><a href="https://fix-guide.techidaily.com/how-to-unbrick-a-dead-motorola-moto-g13-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>How To Unbrick a Dead Motorola Moto G13 | Dr.fone</u></a></li>
<li><a href="https://review-topics.techidaily.com/in-2024-complete-tutorial-to-use-vpna-to-fake-gps-location-on-vivo-s18-pro-drfone-by-drfone-virtual-android/"><u>In 2024, Complete Tutorial to Use VPNa to Fake GPS Location On Vivo S18 Pro | Dr.fone</u></a></li>
<li><a href="https://fake-location.techidaily.com/complete-tutorial-to-use-vpna-to-fake-gps-location-on-honor-x50i-drfone-by-drfone-virtual-android/"><u>Complete Tutorial to Use VPNa to Fake GPS Location On Honor X50i | Dr.fone</u></a></li>
<li><a href="https://fake-location.techidaily.com/all-must-knows-to-use-fake-gps-go-location-spoofer-on-realme-11-pro-drfone-by-drfone-virtual-android/"><u>All Must-Knows to Use Fake GPS GO Location Spoofer On Realme 11 Pro | Dr.fone</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-the-ultimate-guide-to-infinix-smart-8-pattern-lock-screen-everything-you-need-to-know-by-drfone-android/"><u>In 2024, The Ultimate Guide to Infinix Smart 8 Pattern Lock Screen Everything You Need to Know</u></a></li>
<li><a href="https://techidaily.com/simple-ways-to-get-lost-messages-back-from-oneplus-nord-n30-se-by-fonelab-android-recover-messages/"><u>Simple ways to get lost messages back from OnePlus Nord N30 SE</u></a></li>
<li><a href="https://phone-solutions.techidaily.com/complete-guide-for-recovering-pictures-files-on-lava-yuva-3-pro-by-fonelab-android-recover-pictures/"><u>Complete guide for recovering pictures files on Lava Yuva 3 Pro.</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-how-to-unlock-itel-p55t-phone-without-password-by-drfone-android/"><u>In 2024, How To Unlock Itel P55T Phone Without Password?</u></a></li>
<li><a href="https://easy-unlock-android.techidaily.com/in-2024-how-to-unlock-realme-11-5g-pattern-lock-if-forgotten-6-ways-by-drfone-android/"><u>In 2024, How to Unlock Realme 11 5G Pattern Lock if Forgotten? 6 Ways</u></a></li>
<li><a href="https://android-location-track.techidaily.com/how-do-i-stop-someone-from-tracking-my-samsung-galaxy-xcover-6-pro-tactical-edition-drfone-by-drfone-virtual-android/"><u>How Do I Stop Someone From Tracking My Samsung Galaxy XCover 6 Pro Tactical Edition? | Dr.fone</u></a></li>
<li><a href="https://fix-guide.techidaily.com/how-to-fix-unfortunately-contacts-has-stopped-error-on-xiaomi-14-ultra-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>How to Fix Unfortunately, Contacts Has Stopped Error on Xiaomi 14 Ultra | Dr.fone</u></a></li>
<li><a href="https://location-social.techidaily.com/in-2024-how-to-change-your-realme-gt-5-location-on-life360-without-anyone-knowing-drfone-by-drfone-virtual-android/"><u>In 2024, How to Change Your Realme GT 5 Location on life360 Without Anyone Knowing? | Dr.fone</u></a></li>
<li><a href="https://ios-unlock.techidaily.com/in-2024-remove-device-supervision-from-your-apple-iphone-6-plus-by-drfone-ios/"><u>In 2024, Remove Device Supervision From your Apple iPhone 6 Plus</u></a></li>
<li><a href="https://screen-mirror.techidaily.com/how-to-use-allshare-cast-to-turn-on-screen-mirroring-on-samsung-galaxy-a14-4g-drfone-by-drfone-android/"><u>How To Use Allshare Cast To Turn On Screen Mirroring On Samsung Galaxy A14 4G | Dr.fone</u></a></li>
<li><a href="https://unlock-android.techidaily.com/how-to-unlock-infinix-note-30i-phone-without-password-by-drfone-android/"><u>How To Unlock Infinix Note 30i Phone Without Password?</u></a></li>
<li><a href="https://android-transfer.techidaily.com/how-to-transfer-data-from-honor-magic-6-lite-to-blackberry-drfone-by-drfone-transfer-from-android-transfer-from-android/"><u>How to Transfer Data from Honor Magic 6 Lite to BlackBerry | Dr.fone</u></a></li>
<li><a href="https://android-location-track.techidaily.com/in-2024-3-ways-to-track-realme-v30-without-them-knowing-drfone-by-drfone-virtual-android/"><u>In 2024, 3 Ways to Track Realme V30 without Them Knowing | Dr.fone</u></a></li>
<li><a href="https://techidaily.com/your-complete-guide-to-reset-vivo-s17-pro-drfone-by-drfone-reset-android-reset-android/"><u>Your Complete Guide To Reset Vivo S17 Pro | Dr.fone</u></a></li>
<li><a href="https://android-transfer.techidaily.com/how-to-transfer-data-from-realme-narzo-60-pro-5g-to-samsung-phone-drfone-by-drfone-transfer-from-android-transfer-from-android/"><u>How to Transfer Data from Realme Narzo 60 Pro 5G to Samsung Phone | Dr.fone</u></a></li>
<li><a href="https://location-social.techidaily.com/how-to-changefake-your-samsung-galaxy-a14-4g-location-on-viber-drfone-by-drfone-virtual-android/"><u>How to Change/Fake Your Samsung Galaxy A14 4G Location on Viber | Dr.fone</u></a></li>
<li><a href="https://android-location-track.techidaily.com/how-to-check-distance-and-radius-on-google-maps-for-your-nokia-c300-drfone-by-drfone-virtual-android/"><u>How to Check Distance and Radius on Google Maps For your Nokia C300 | Dr.fone</u></a></li>
<li><a href="https://android-transfer.techidaily.com/in-2024-how-to-transfer-data-after-switching-from-oppo-a1x-5g-to-latest-samsung-drfone-by-drfone-transfer-from-android-transfer-from-android/"><u>In 2024, How to Transfer Data After Switching From Oppo A1x 5G to Latest Samsung | Dr.fone</u></a></li>
</ul></div>


