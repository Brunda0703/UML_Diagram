const getdb = require('../utils/database').getDb;

class Student{
    constructor(n){
        this.n = n;
    }
    save(){
        
        const db = getdb();
        return db.collection('student')
        .insertOne(this.n)
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }
    static fetchAll(){

        const db = getdb();
        return db.collection('student')
            .find()
            .toArray()
            .then(users => {
                console.log(users);
                return users;
            })
            .catch(err => console.log(err));
    }

    static fetchByName(name){

        const db = getdb();
        return db.collection('student')
        .findOne({username: name})
        .then(user => {
            return user;
        })
        .catch(err => console.log(err));
    }

    static updateDiagram(user,i,n){

        const db = getdb();
        return db.collection('student').updateOne({username: user },{$set: {[i+""]: n}}).then(result => {
            // console.log(result);
        }).catch(err => console.log(err));
    }

//     static add_request(reqobj,username){

//         console.log(reqobj);
//         console.log(username);
//         const db = getdb();
//         return db.collection('student').updateOne({username: username},{$push: {requests: reqobj}})
//                 .then()
//                 .catch(err => console.log(err));
//     }

//     static findByName(username){

//         const db = getdb();
//         return db.collection('student').findOne({username: username})
//                 .then(data => {
//                     return data
//                 })
//                 .catch(err => console.log(err));
//     }
}
module.exports = Student;