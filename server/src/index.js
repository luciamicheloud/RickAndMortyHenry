const http = require('http')
require("dotenv").config();
const { PORT, PASSWORD } = process.env;
const data = require("./utils/data");

http
    .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")) { 
        const id = req.url.split("/").at(-1);
        const character = data.find((element) => element.id === Number(id));

        const obj = { msg: "OK", character };

        if (character) {
            return res
            .writeHead(200, { "content-type": "application/json" })
            .end(JSON.stringify(obj));
        } else {
            const obj = {
                msg: "Not Found",
                error: `The character with the id ${id} was not found `,
              };
              return res
                .writeHead(404, { "Content-type": "application/json" })
                .end(JSON.stringify(obj));
        }
    }
})
.listen(PORT, () => {});
