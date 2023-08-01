import express from 'express';
import { readFile } from 'fs';
import { userRouter } from './user/user_routes.js';
import { messageRouter } from './message/message_routes.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-requested-with');
    next()
  });


app.use(userRouter);
app.use(messageRouter);

//read the config file for Postman
let postmanConfig = '';
readFile("postman_collection.json", 'utf8', (err, data) => {
    if (err) throw err;
    postmanConfig = data;
});

//home route
app.get('/', (req, res) => {

    res.send(`
<html>
<head>
    <title>API Recados</title>
</head>
<h1>Hey this is my API running 🥳</h1>
<p>Use the Postman config bellow to test this API</p>
<pre style="background-color: #f5f5f5; padding: 10px; border: 1px solid #000">
${postmanConfig}
</pre>
</html>
    `);

});

app.listen(80);
