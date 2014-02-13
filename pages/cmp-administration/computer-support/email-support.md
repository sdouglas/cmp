---
layout: page
category: page
title: Email Services
---

### CMP Email Accounts

Server: `cmpmail.ucsf.edu`

This is a departmental email server that is for Facutly and Staff of the Pharmacology Department.

CMPmail Secure Web interface: [https://cmpmail.ucsf.edu](https://cmpmail.ucsf.edu)

The "setup" information for cmpmail.ucsf.edu is as follows
- incoming POP or IMAP server : `cmpmail.ucsf.edu`
- outgoing SMPT server : `cmpmail.ucsf.edu`
- The server is running SSL please use this for outgoing and incoming email.

Any issues or problems with your cmpmail account please send a email to <span class="e">support / cmp, ucsf, edu</span>


### Campus Email Accounts

The campus has a Microsoft Exchange 2007 Server. This server provides email and calendar support for
all Staff, Faculty, Students and Post-docs.

**How to create a mail@ucsf.edu account**. *If you would like a campus email accout and do not have one already the following info needs to be provided in a support ticket:*

- your UCSF payroll name
- your UCSF employee ID (NOTE: HHMI employees are assigned a special one for this purpose)
- your current email (An email address where we can contact you with your infomation)
- your lab or group that you are associated with


### Archiving Your CMP Email

If you are either leaving UCSF or migrating your CMP email account to UCSF or another email server here are some of the best practices for arching your old email.

#### Webmail users

If you have been using only the webmail interface to check your cmpmail `https://cmpmail.ucsf.edu`,
here is how you should go about archiving your email.

1. You will need to setup an email client on the computer you wish to download and store the email on.
2. If you are using a **Mac** the best option is to use the Apple "Mail.app" client that is located in
your "Applications" directory. **Windows** users can use Outlook, Outlook Express or Thunderbird email.
3. Make sure you have a backup of your current system. If you are adding an account to a existing email
client please make sure you have that backed up as well.
4. First step will be to setup your email client. Launch whatever program you are going to use for checking
email and configure the account for IMAP. IMAP server settings will be for incoming and outgoing email `cmpmail.ucsf.edu`. Please use the following ssl ports.
    - outgoing ssl: `993` 
    - incoming SMTP: `465`
  
    You may have to accept a certificate at this point; please do so.
5. You are not using a IMAP client for checking your email you will notice that your email client now has the
same email, directories and content that you are used to seeing when on the webmail interface.
6. After this is done you will need to create archive folders on your local computer in the new email
program. When creating a new folder make sure it is on the "local" computer rather than on the server.
7. There are many ways to do this &mdash; all personal preference. If you have a folder called `2011-mail` you can call the
new folder `2011-mail-archive`, that kind of thing.

    *NOTE: It can take some time to copy the mail; just wait till the process is done. If you have not fully copied the mail over yet your folders may only have some of the messages*
8. Don't Forget about moving the INBOX and SENT mail if these are important to you. 
9. After this is done and you wish to test to see if your archive will work after your account is moved or deleted.
Simply delete your IMAP Configuration from your email, then check to see if you can access your archived email.
