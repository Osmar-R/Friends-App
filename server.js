const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const e = require('express');
const app = express();
app.use(cors());
app.use(express.json());
//Connecting to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Fredricklove1',
    database: 'skylark_demo'
});
db.connect(err => {
    if (err) {
        return err;
    } else {
        console.log('Mysql connection good');
    }
});
app.get('/api/user/:username/:password', (req, res) => {
    const reqName = req.params.username;
    const reqPass = req.params.password;
    console.log(reqName);
    db.query('SELECT * FROM users ', ((err, result) => {
        if (err) {
            console.log(err);
        } else {
            let userArray = Object.keys(result);
            userArray.filter(item => {
                let x = result[item]
                if (x.user_name === reqName && x.user_password === reqPass) {
                    console.log(x);
                    res.send(x);
                };

            });
            // console.log(result)
        };
    }));
});
app.get('/friends/:userid', (req, res) => {
    const userId = req.params.userid;
    db.query(`SELECT users.user_name FROM users LEFT JOIN friends ON friends.user_id2 = user.id WHERE friends.user_id1 =${userId}`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    })
})

// app.use(cors());
// app.use(express.json());

app.listen(4000, () => {
    console.log('Listening on port 4000');
})