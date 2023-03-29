const http = require("http");

http
  .get("http://jsonplaceholder.typicode.com/posts", (res) => {
    let data = [];
    res.on("data", (chunk) => {
      data.push(chunk);
    });

    res.on("end", () => {
      const respose = JSON.parse(Buffer.concat(data).toString());
      console.log(respose);
    });
  })
  .on("error", (err) => {
    console.log(err);
  });
