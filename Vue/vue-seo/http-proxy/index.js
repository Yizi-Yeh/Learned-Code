const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxy();

// 訪問1234port時代理到8080port
http
  .createServer(function (req, res) {
    if (/(googlebot|yahoobot)/i.test(req.headers["user-agent"])) {
      proxy.web(req, res, {
        //   若是搜尋引擎，導至經過rendertron的內容
        target: "http://localhost:3000/render/http://localhost:8080" + req.url,
      });
    } else {
       //   若不是搜尋引擎，導至CLI架起的Server
      proxy.web(req, res, {
        target: "http://localhost:8080",
      });
    }

    // 監聽在1234port
  })
  .listen(1234);
