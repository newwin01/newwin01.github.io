---
title:  "Window Error"
excerpt: "1st Posting"

categories:
  - Blog
tags:
  - [Blog]
---

# Windows Error

There is an error that dragging the mouse makes a dragged portion of the display black on the window OS. 

<img src = "../../../assets/error.jpg" width = "700" height = "270" >

If you executes following scripts on the command prompt, you can solve the problem. 
<br>
```
echo off
taskkill /f /im explorer.exe
attrib %userprofile%\appdata\local\iconcache.db -s -r -h
del /q %userprofile%\appdata\local\iconcache.db
start explorer.exe
exit
```

##### from: <br> https://answers.microsoft.com/ko-kr/windows/forum/windows_10-files/%EC%9C%88%EB%8F%84%EC%9A%B010/4a04441e-64c0-4238-af0b-34a45d2737b3?auth=1
