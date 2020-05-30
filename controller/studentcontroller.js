const StudData = require('../models/studentdatabase');
const path = require("path");
const fs=require("fs");

exports.loginsuccess = (req,res,next) => {

    console.log(req.body);
    let tempusername=req.body.username;
    let temppassword=req.body.password;
   
    let flag=false;
    StudData.fetchAll().then(data =>{
        for(let val of data)
        {
            // console.log(val.username+" == "+tempusername);
            if(val.username==tempusername && val.password==temppassword){
    
                flag = true;
                console.log("successfully loged in");
                res.render("page.ejs",{user: tempusername});
                lg=tempusername;
            }
        }
        if(flag == false ){
            return res.status(301).redirect(301,'/signup');
        }
    }).catch(err => console.log(err));

}

exports.signupsuccess = (req,res,next)=>{

    console.log(req.body);
    
    let tempusername=req.body.username;
    let temppassword=req.body.password;
    let tempdepartment=req.body.department;
    let tempyear=req.body.year;
    let tempregno=req.body.regno;
    let tempemail=req.body.email;


    let newuser={
        username:tempusername,
        password:temppassword,
        department:tempdepartment,
        year:tempyear,
        regno:tempregno,
        email:tempemail,
        requests: [],
        activity: { "class": "GraphLinksModel",
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
       ]},
       basicflow: { "class": "GraphLinksModel",
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
      ]},
      usecase: { "class": "GraphLinksModel",
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
    }
    
    let flag=false;
    StudData.fetchAll().then(tempdata => {

        console.log(tempdata);
        for(let val of tempdata){
            if(val.username==tempusername )
            {
                flag=true;
                return res.status(301).redirect(301,'/home.html');
            }
        }

        if(flag==false){
            console.log(flag);
            let student = new StudData(newuser);
            student.save();
            // let filename=tempusername+".txt";
            // let filedata="name :"+tempusername+"\npassword:"+temppassword+" ";
            // fs.writeFileSync(filename,filedata);
            return res.redirect(301,'/login');
        }
    }).catch(err => console.log(err));
}

// exports.request = (req,res,next) => {


//     console.log("Request");
//     let tempusername=req.body.user;
//     let temppassword=req.body.pass;

//     // console.log(req.body);
    
//     let reqobj = {

//         dateto: req.body.dateto,
//         datefr: req.body.datefr,
//         purpose: req.body.purpose,
//         place: req.body.place,
//         link: req.body.link
//     }



//     StudData.add_request(reqobj,tempusername).then(() => {

//         StudData.findByName(tempusername).then(result => {

//             console.log(result.request);
//             return res.render("result.ejs",{docTitle: "Student Dashboard",Users: result,request:result.username});
//         })
//     }).catch(err => console.log(err))
    
//     //  StudData.fetchAll().then(data =>{
//     //     for(let val of data)
//     //     {
//     //         // console.log(val.username+" == "+tempusername);
//     //         if(val.username==tempusername && val.password==temppassword){
    
//     //             flag = true;
//     //           console.log("successfully loged in");
//     //             lg=tempusername;
    
//     //         }
//     //     }
//     //     if(flag == false ){
//     //         return res.status(301).redirect(301,'/signupstu');
//     //     }
//     // }).catch(err => console.log(err));
// }