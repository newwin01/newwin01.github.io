---
title:  "Vs code server error"
excerpt: "왜 안들어가지지?"

categories:
  - Blog
tags:
  - [Blog]
---

## Vs code로만 서버 접속이 안되는 경우

VS code 서버 접속이 다른 경로로는 가능하지만 vs code로 안되는 경우가 존재한다. <br>
서버 내에 vs code server파일의 문제일 가능성이 높다. 해결하는 방법은 어렵지 않다. <br>


```
rm -rf .vscode-server/
```

Good!