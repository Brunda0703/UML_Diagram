const fs=require("fs");
const express1=require('express');
const bparser1=require('body-parser');
const path=require('path');
const studentcontroller = require("./controller/studentcontroller");
const router=express1.Router();
const StudData = require('./models/studentdatabase');


router.use(bparser1.urlencoded({extended:true}));
router.get("/front",(req,res,next) =>res.sendFile(path.join(__dirname,"views","page.html")))
router.get("/login",(req,res,next) =>res.sendFile(path.join(__dirname,"views","login.html")))
router.get("/uml",(req,res,next) =>res.sendFile(path.join(__dirname,"views","home.html")))
router.get("/signup",(req,res,next) =>res.sendFile(path.join(__dirname,"views","signup.html")))
router.post("/loginsuccess", studentcontroller.loginsuccess);
router.post("/signupsuccess", studentcontroller.signupsuccess);
router.post('/user/:user',(req,res,next)=>res.render("page.ejs",{user: req.params.user}));
router.get('/demo',(req,res,next) => res.render("index.ejs"));

router.post('/activityupdate/:user',(req,res,next) => {

    console.log("activityupdate");
    // let arr = JSON.parse();
    // console.log(arr);
    // StudData.fetchByName(req.params.user)
    //     .then(result => {

      let val = { "class": "GraphLinksModel",
              "nodeDataArray": [ 
                    {"key":1, "loc":"0 0", "text":"Alpha", "details":"some information about Alpha and its importance"},
                    {"key":2, "loc":"170 0", "text":"Beta", "color":"blue", "thickness":2, "figure":"Procedure"},
                    {"key":3, "loc":"0 100", "text":"Gamma", "color":"green", "figure":"Cylinder1"},
                    {"key":4, "loc":"80 180", "text":"Delta", "color":"red", "figure":"Terminator", "size":"80 40"},
                    {"key":5, "loc":"350 -50", "text":"Zeta", "group":7, "color":"blue", "figure":"CreateRequest"},
                    {"key":6, "loc":"350 50", "text":"Eta", "group":7, "figure":"Document", "fill":"lightyellow"},
                    {"key":7, "isGroup":true, "text":"Theta", "color":"green", "fill":"lightgreen"},
                    {"key":8, "loc":"520 50", "text":"Iota", "fill":"pink"}
                    ],
                      "linkDataArray": [ 
                    {"from":1, "to":2, "dash":[ 6,3 ], "thickness":4},
                    {"from":1, "to":3, "dash":[ 2,4 ], "color":"green", "text":"label"},
                    {"from":3, "to":4, "color":"red", "text":"a red label", "fromSpot":"RightSide"},
                    {"from":2, "to":1},
                    {"from":5, "to":6, "text":"in a group"},
                    {"from":2, "to":7},
                    {"from":6, "to":8, "dir":0},
                    {"from":6, "to":8, "dir":1},
                    {"from":6, "to":8, "dir":2}
                ]}


            StudData.updateDiagram(req.params.user,"activity",JSON.parse(req.body.mySavedModel)).then(result => {

              console.log("JSONUPDATE");
              console.log(JSON.parse(req.body.mySavedModel));
              res.render("activity.ejs" , {datad: JSON.stringify(JSON.parse(req.body.mySavedModel)),user: req.params.user});
            }).catch(err => console.log(err));
            
            // res.render("ActivityDiagram.ejs");
        // })
        // .catch(err => console.log(err));
});

router.post('/activity/:user',(req,res,next) => {

  console.log("activity");
    console.log(req.params.user);
    StudData.fetchByName(req.params.user)
        .then(result => {


            let val = { "class": "GraphLinksModel",
            "nodeDataArray": [ 
          {"key":1, "loc":"0 0", "text":"Alpha", "details":"some information about Alpha and its importance"},
          {"key":2, "loc":"170 0", "text":"Beta", "color":"blue", "thickness":2, "figure":"Procedure"},
          {"key":3, "loc":"0 100", "text":"Gamma", "color":"green", "figure":"Cylinder1"},
          {"key":4, "loc":"80 180", "text":"Delta", "color":"red", "figure":"Terminator", "size":"80 40"},
          {"key":5, "loc":"350 -50", "text":"Zeta", "group":7, "color":"blue", "figure":"CreateRequest"},
          {"key":6, "loc":"350 50", "text":"Eta", "group":7, "figure":"Document", "fill":"lightyellow"},
          {"key":7, "isGroup":true, "text":"Theta", "color":"green", "fill":"lightgreen"},
          {"key":8, "loc":"520 50", "text":"Iota", "fill":"pink"}
           ],
            "linkDataArray": [ 
          {"from":1, "to":2, "dash":[ 6,3 ], "thickness":4},
          {"from":1, "to":3, "dash":[ 2,4 ], "color":"green", "text":"label"},
          {"from":3, "to":4, "color":"red", "text":"a red label", "fromSpot":"RightSide"},
          {"from":2, "to":1},
          {"from":5, "to":6, "text":"in a group"},
          {"from":2, "to":7},
          {"from":6, "to":8, "dir":0},
          {"from":6, "to":8, "dir":1},
          {"from":6, "to":8, "dir":2}
           ]}

           console.log("JSON");
          console.log(result.activity);

    res.render("activity.ejs" , {datad: JSON.stringify(result.activity),user: result.username});
            // res.render("ActivityDiagram.ejs");
        })
        .catch(err => console.log(err));
});

router.post('/usecaseupdate/:user',(req,res,next) => {

  console.log("usecaseupdate");
  // let arr = JSON.parse();
  // console.log(arr);
  // StudData.fetchByName(req.params.user)
  //     .then(result => {

    let val = { "class": "GraphLinksModel",
            "nodeDataArray": [ 
                  {"key":1, "loc":"0 0", "text":"Alpha", "details":"some information about Alpha and its importance"},
                  {"key":2, "loc":"170 0", "text":"Beta", "color":"blue", "thickness":2, "figure":"Procedure"},
                  {"key":3, "loc":"0 100", "text":"Gamma", "color":"green", "figure":"Cylinder1"},
                  {"key":4, "loc":"80 180", "text":"Delta", "color":"red", "figure":"Terminator", "size":"80 40"},
                  {"key":5, "loc":"350 -50", "text":"Zeta", "group":7, "color":"blue", "figure":"CreateRequest"},
                  {"key":6, "loc":"350 50", "text":"Eta", "group":7, "figure":"Document", "fill":"lightyellow"},
                  {"key":7, "isGroup":true, "text":"Theta", "color":"green", "fill":"lightgreen"},
                  {"key":8, "loc":"520 50", "text":"Iota", "fill":"pink"}
                  ],
                    "linkDataArray": [ 
                  {"from":1, "to":2, "dash":[ 6,3 ], "thickness":4},
                  {"from":1, "to":3, "dash":[ 2,4 ], "color":"green", "text":"label"},
                  {"from":3, "to":4, "color":"red", "text":"a red label", "fromSpot":"RightSide"},
                  {"from":2, "to":1},
                  {"from":5, "to":6, "text":"in a group"},
                  {"from":2, "to":7},
                  {"from":6, "to":8, "dir":0},
                  {"from":6, "to":8, "dir":1},
                  {"from":6, "to":8, "dir":2}
              ]}


          StudData.updateDiagram(req.params.user,"usecase",JSON.parse(req.body.mySavedModel)).then(result => {

            console.log("JSONUPDATE");
            console.log(JSON.parse(req.body.mySavedModel));
            res.render("usecase.ejs" , {datad: JSON.stringify(JSON.parse(req.body.mySavedModel)),user: req.params.user});
          }).catch(err => console.log(err));
          
          // res.render("ActivityDiagram.ejs");
      // })
      // .catch(err => console.log(err));
});

router.post('/usecase/:user',(req,res,next) => {

  console.log("usecase");
  console.log(req.params.user);
  StudData.fetchByName(req.params.user)
      .then(result => {


          let val = { "class": "GraphLinksModel",
          "nodeDataArray": [ 
        {"key":1, "loc":"0 0", "text":"Alpha", "details":"some information about Alpha and its importance"},
        {"key":2, "loc":"170 0", "text":"Beta", "color":"blue", "thickness":2, "figure":"Procedure"},
        {"key":3, "loc":"0 100", "text":"Gamma", "color":"green", "figure":"Cylinder1"},
        {"key":4, "loc":"80 180", "text":"Delta", "color":"red", "figure":"Terminator", "size":"80 40"},
        {"key":5, "loc":"350 -50", "text":"Zeta", "group":7, "color":"blue", "figure":"CreateRequest"},
        {"key":6, "loc":"350 50", "text":"Eta", "group":7, "figure":"Document", "fill":"lightyellow"},
        {"key":7, "isGroup":true, "text":"Theta", "color":"green", "fill":"lightgreen"},
        {"key":8, "loc":"520 50", "text":"Iota", "fill":"pink"}
         ],
          "linkDataArray": [ 
        {"from":1, "to":2, "dash":[ 6,3 ], "thickness":4},
        {"from":1, "to":3, "dash":[ 2,4 ], "color":"green", "text":"label"},
        {"from":3, "to":4, "color":"red", "text":"a red label", "fromSpot":"RightSide"},
        {"from":2, "to":1},
        {"from":5, "to":6, "text":"in a group"},
        {"from":2, "to":7},
        {"from":6, "to":8, "dir":0},
        {"from":6, "to":8, "dir":1},
        {"from":6, "to":8, "dir":2}
         ]}

         console.log("JSON");
        console.log(result.usecase);

  res.render("usecase.ejs" , {datad: JSON.stringify(result.usecase),user: result.username});
          // res.render("ActivityDiagram.ejs");
      })
      .catch(err => console.log(err));
});

router.post('/basicflowupdate/:user',(req,res,next) => {

  console.log("basicflowupdate");
  // let arr = JSON.parse();
  // console.log(arr);
  // StudData.fetchByName(req.params.user)
  //     .then(result => {

    let val = { "class": "GraphLinksModel",
            "nodeDataArray": [ 
                  {"key":1, "loc":"0 0", "text":"Alpha", "details":"some information about Alpha and its importance"},
                  {"key":2, "loc":"170 0", "text":"Beta", "color":"blue", "thickness":2, "figure":"Procedure"},
                  {"key":3, "loc":"0 100", "text":"Gamma", "color":"green", "figure":"Cylinder1"},
                  {"key":4, "loc":"80 180", "text":"Delta", "color":"red", "figure":"Terminator", "size":"80 40"},
                  {"key":5, "loc":"350 -50", "text":"Zeta", "group":7, "color":"blue", "figure":"CreateRequest"},
                  {"key":6, "loc":"350 50", "text":"Eta", "group":7, "figure":"Document", "fill":"lightyellow"},
                  {"key":7, "isGroup":true, "text":"Theta", "color":"green", "fill":"lightgreen"},
                  {"key":8, "loc":"520 50", "text":"Iota", "fill":"pink"}
                  ],
                    "linkDataArray": [ 
                  {"from":1, "to":2, "dash":[ 6,3 ], "thickness":4},
                  {"from":1, "to":3, "dash":[ 2,4 ], "color":"green", "text":"label"},
                  {"from":3, "to":4, "color":"red", "text":"a red label", "fromSpot":"RightSide"},
                  {"from":2, "to":1},
                  {"from":5, "to":6, "text":"in a group"},
                  {"from":2, "to":7},
                  {"from":6, "to":8, "dir":0},
                  {"from":6, "to":8, "dir":1},
                  {"from":6, "to":8, "dir":2}
              ]}


          StudData.updateDiagram(req.params.user,"basicflow",JSON.parse(req.body.mySavedModel)).then(result => {

            console.log("JSONUPDATE");
            console.log(JSON.parse(req.body.mySavedModel));
            res.render("basicflow.ejs" , {datad: JSON.stringify(JSON.parse(req.body.mySavedModel)),user: req.params.user});
          }).catch(err => console.log(err));
          
          // res.render("ActivityDiagram.ejs");
      // })
      // .catch(err => console.log(err));
});

router.post('/basicflow/:user',(req,res,next) => {

  console.log("basicflow");
  console.log(req.params.user);
  StudData.fetchByName(req.params.user)
      .then(result => {


          let val = { "class": "GraphLinksModel",
          "nodeDataArray": [ 
        {"key":1, "loc":"0 0", "text":"Alpha", "details":"some information about Alpha and its importance"},
        {"key":2, "loc":"170 0", "text":"Beta", "color":"blue", "thickness":2, "figure":"Procedure"},
        {"key":3, "loc":"0 100", "text":"Gamma", "color":"green", "figure":"Cylinder1"},
        {"key":4, "loc":"80 180", "text":"Delta", "color":"red", "figure":"Terminator", "size":"80 40"},
        {"key":5, "loc":"350 -50", "text":"Zeta", "group":7, "color":"blue", "figure":"CreateRequest"},
        {"key":6, "loc":"350 50", "text":"Eta", "group":7, "figure":"Document", "fill":"lightyellow"},
        {"key":7, "isGroup":true, "text":"Theta", "color":"green", "fill":"lightgreen"},
        {"key":8, "loc":"520 50", "text":"Iota", "fill":"pink"}
         ],
          "linkDataArray": [ 
        {"from":1, "to":2, "dash":[ 6,3 ], "thickness":4},
        {"from":1, "to":3, "dash":[ 2,4 ], "color":"green", "text":"label"},
        {"from":3, "to":4, "color":"red", "text":"a red label", "fromSpot":"RightSide"},
        {"from":2, "to":1},
        {"from":5, "to":6, "text":"in a group"},
        {"from":2, "to":7},
        {"from":6, "to":8, "dir":0},
        {"from":6, "to":8, "dir":1},
        {"from":6, "to":8, "dir":2}
         ]}

         console.log("JSON");
        console.log(result.basicflow);

  res.render("basicflow.ejs" , {datad: JSON.stringify(result.basicflow),user: result.username});
          // res.render("ActivityDiagram.ejs");
      })
      .catch(err => console.log(err));
});
module.exports=router;
// router.post("/loginsuccess",(req,res,next)=>{
//     console.log(req.body.username);
//     let tempusername=req.body.username;
//     let temppassword=req.body.password;
//     for(let val of data)
//     {
//         let flag=true;
//         if(flag==true)
//         {
//             if(val.username==tempusername && val.password==temppassword)
//             {
//                 console.log("successfully loged in");
//                 res.sendfile(path.join(__dirname,"views","page.html"));
//                 lg=tempusername;
//             }
//         }
//         else{
//             res.status(301).redirect(301,'/signup');
//         }
        
//     }
    
// });


