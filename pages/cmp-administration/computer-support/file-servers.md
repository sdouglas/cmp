---
layout: page
category: page
title: Connecting to the CMP Fileserver
---


### How to connect to cmp file server from Windows OS (Windows XP) 

1. Right-click on "My Computer" (note this can vary on the version of windows you are on.. if not on the desktop please look in the "Start" menu.
2. Select the option "map network drive"
3. A window will appear the default drive map will be Z: (*NOTE: you can change this if you wish, it's best to leave the default*)
4. In the field labeled "Folder:" please type the path to the network share that you are trying to connect to eg: `\\servername.ucsf.edu\share_point`
5. Depending on your options either select or deselect the "Reconnect at logon" box (*NOTE: if this is a share you use every day this is a good option.*)
6. If you are not bound to the server or the password differs from your login please choose the option "Connect using a differnet user name" "different user name" is a hyperlink if selected you get a box to type your username and pass into.
7. Type your username and password and then choose "Finish" this will give you access to the share.. you should now see the Z: drive mounted under your computer.



### How to connect to the CMP File Server from Windows OS (VISTA OR WIN7)

NOTE: If you are running Windows Vista or Windows 7 you will have to make the following changes to the Windows Security Policy. The default setup allows you to connect to a bound windows server … Please make the following changes

<code>
Open Control Panel - Administrative Tools - Local Security Policy 

Local Policies - Security Options 

Network security: LAN Manager authentication level 
Send LM &amp; NTLM responses 

Minimum session security for NTLM SSP 
Disable Require 128-bit encryption
</code>

After you make the following changes you should be able to follow steps 1-7 above and connect to the server.
