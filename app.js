const express=require('express');
const https = require('https');
const path = require("path");
const fs = require('fs');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const bparser=require('body-parser');
const router=require('./router');
const mongoclient = require('./utils/database').mongoConnect;
const app=express();
app.use(
    bparser.urlencoded({extended:true})
);

const accessLogStream = fs.createWriteStream(
    path.join(__dirname,"access.log"),
    { flags: 'a' }
);

app.use(express.static(path.join(__dirname,"public")));
app.use(helmet());
app.use(compression());
app.use(morgan('combined',{stream: accessLogStream}));


app.set("view engin" , "ejs");
app.set("views" , "views");


app.use(router);
mongoclient(() => app.listen(process.env.PORT || 3000));
