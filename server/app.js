const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use(express.json());
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ruchitabaviskar17@gmail.com',
        pass: 'ysii fxqe kcjx xcue'
    }
});

// const con = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'Sunil@123',
//     database: 'website'
// })

// app.post('/signup', (req, res) => {
//     const values = [
//         req.body.name,
//         req.body.contact,
//         req.body.email,
//         "owner",

//     ]
//     try {
//         const query = `INSERT INTO user(name, contact, email, pass, role) VALUES(?)`;
//         con.query(query, [values], (error, result) => {
//             if (error) throw error;
//             return res.send('success')
//         })
//     }
//     catch (e) {
//         res.send('failed')
//     }
// })

// app.post('/signin', (req, res) => {
//     console.log("here")
//     const email = req.body.email;
//     const pass = req.body.pass;
//     const query = `SELECT * FROM user WHERE username = '${email}' && pass = '${pass}'`;
//     try {
//         con.getConnection((err, con) => {
//             if (err) {
//                 console.error('Connection error:', err);
//                 return res.send('failed')
//             }
//             else {

//                 con.query(query, (error, result) => {
//                     if (error) return res.send('failed')
//                     if (result.length > 0) {
//                         const token = jwt.sign(result[0].id, 'pms secret key')
//                         res.cookie('authcookie', token, { httpOnly: true })
//                         res.send({
//                             token: token,
//                             result: result,
//                             sign: true
//                         })
//                     }
//                     else {
//                         res.send({ sign: false })
//                     }
//                 })
//             }
//             con.release();
//         })
//     }
//     catch (e) {
//         res.send('failed')
//     }
// })

app.post('/book', (req, res) => {
    try {
        const email = "psunils9147@gmail.com"
        console.log(req.body)
        try {
            var mailOptions = {
                from: 'ruchitabaviskar17@gmail.com',
                to: email,
                subject: 'Booked a free Demo',
                text: `Dear Team,

                       We have a new demo booking from:
                       Name: ${req.body.name}
                       Email: ${req.body.email}
                       Contact: ${req.body.contact}
                       Address: ${req.body.address}
                       Clinic / Hospital Name: ${req.body.clinic}
                       Please follow up with the client to schedule the demo at their convenience.
                       
                       Best regards`
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error)
                    res.send('failed')
                } else {
                    res.send("success");
                }
            });
        }
        catch (e) {
            res.send('failed')
        }
    }
    catch (e) {
        res.send('failed')
    }
})

// app.post('/issues', (req, res) => {
//     try {
//         con.getConnection((err, con) => {
//             if (err) {
//                 console.error('Connection error:', err);
//                 return res.send('failed')
//             } else {
//                 const query1 = "INSERT INTO complaint(description, department, postedBy) VALUES (?)"
//                 con.query(query1, [Object.values(req.body)], (error) => {
//                     if (error) throw error;
//                     return res.send('success')
//                 })
//             }
//             con.release()
//         })
//     }
//     catch (e) {
//         res.send('failed')
//     }
// })

// app.get('/menu', (req, res) => {
//     try {
//         con.getConnection((err, con) => {
//             if (err) {
//                 console.error('Connection error:', err);
//                 return res.send('failed')
//             } else {
//                 const query = "select * from breakfast_menu union select * from dinner_menu"
//                 con.query(query, (error, result) => {
//                     if (error) throw error;
//                     res.send(result)
//                 })
//             }
//             con.release()
//         })
//     }
//     catch (e) {
//         res.send('failed')
//     }
// })

// app.get('/rooms', (req, res) => {
//     try {
//         con.getConnection((err, con) => {
//             if (err) {
//                 console.error('Connection error:', err);
//                 return res.send('failed')
//             } else {
//                 const query = "SELECT *, (SELECT COUNT(*) FROM rooms WHERE occupied = 'Y') AS occupied FROM rooms"
//                 con.query(query, (error, result) => {
//                     if (error) throw error;
//                     res.send(result)
//                 })
//             }
//             con.release()
//         })
//     }
//     catch (e) {
//         res.send('failed')
//     }
// })

// app.get('/get_rooms', (req, res) => {
//     try {
//         con.getConnection((err, con) => {
//             if (err) {
//                 console.error('Connection error:', err);
//                 return res.send('failed')
//             } else {
//                 const query = "SELECT id, name FROM rooms WHERE occupied = 'N'"
//                 con.query(query, (error, result) => {
//                     if (error) throw error;
//                     res.send(result)
//                 })
//             }
//             con.release()
//         })
//     }
//     catch (e) {
//         res.send('failed')
//     }
// })

// app.get('/issues', (req, res) => {
//     try {
//         con.getConnection((err, con) => {
//             if (err) {
//                 console.error('Connection error:', err);
//                 return res.send('failed')
//             } else {
//                 const query = "select c.*, u.name from complaint as c inner join user as u on c.postedBy = u.id"
//                 con.query(query, (error, result) => {
//                     if (error) throw error;
//                     res.send(result)
//                 })
//             }
//             con.release()
//         })
//     }
//     catch (e) {
//         res.send('failed')
//     }
// })

// app.get('/update_issue/:id', (req, res) => {
//     const ID = req.params.id
//     try {
//         con.getConnection((err, con) => {
//             if (err) {
//                 console.error('Connection error:', err);
//                 return res.send('failed')
//             } else {
//                 const query = "UPDATE complaint SET status = 'resolved' WHERE id = ?"
//                 con.query(query, ID, (error, result) => {
//                     if (error) throw error;
//                     res.send(result)
//                 })
//             }
//             con.release()
//         })
//     }
//     catch (e) {
//         res.send('failed')
//     }
// })

// app.get('/issues/:id', (req, res) => {
//     const ID = req.params.id
//     console.log(ID)
//     try {
//         con.getConnection((err, con) => {
//             if (err) {
//                 console.error('Connection error:', err);
//                 return res.send('failed')
//             } else {
//                 const query = "SELECT * FROM complaint WHERE postedBy = ?"
//                 con.query(query, ID, (error, result) => {
//                     if (error) throw error;
//                     console.log(result)
//                     res.send(result)
//                 })
//             }
//             con.release()
//         })
//     }
//     catch (e) {
//         res.send('failed')
//     }
// })

// app.post('/breakfast', (req, res) => {
//     const data = [
//         req.body.b0,
//         req.body.b1,
//         req.body.b2,
//         req.body.b3,
//         req.body.b4,
//         req.body.b5,
//         req.body.b6,
//     ]
//     try {
//         con.getConnection((err, con) => {
//             if (err) {
//                 console.error('Connection error:', err);
//                 return res.send('failed')
//             } else {
//                 const query = "UPDATE breakfast_menu SET mon = ?, tue = ?, wed = ?, thu = ?, fri = ?, sat = ?, sun = ?"
//                 con.query(query, data, (error) => {
//                     if (error) throw error;
//                     return res.send('success')
//                 })
//             }
//         })
//     }
//     catch (e) {
//         res.send('failed')
//     }
// })

// app.post('/dinner', (req, res) => {
//     const data = [
//         req.body.d0,
//         req.body.d1,
//         req.body.d2,
//         req.body.d3,
//         req.body.d4,
//         req.body.d5,
//         req.body.d6,
//     ]
//     try {
//         con.getConnection((err, con) => {
//             if (err) {
//                 console.error('Connection error:', err);
//                 return res.send('failed')
//             } else {
//                 const query = "UPDATE dinner_menu SET mon = ?, tue = ?, wed = ?, thu = ?, fri = ?, sat = ?, sun = ?"
//                 con.query(query, data, (error) => {
//                     if (error) throw error;
//                     return res.send('success')
//                 })
//             }
//         })
//     }
//     catch (e) {
//         res.send('failed')
//     }
// })

// app.post('/addfields', (req, res) => {
//     try {
//         con.getConnection((err, con) => {
//             if (err) {
//                 console.error('Connection error:', err);
//                 return res.send('failed')
//             } else {
//                 const query = `INSERT INTO ${req.body.addField}(name) VALUES(?)`
//                 con.query(query, req.body.addValue, (error) => {
//                     if (error) throw error;
//                     res.send('success')
//                 })
//             }
//         })
//     }
//     catch (e) {
//         res.send('failed')
//     }
// })

// app.get('/dropdown', (req, res) => {
//     try {
//         var data = []
//         con.getConnection((err, con) => {
//             if (err) {
//                 console.error('Connection error:', err);
//                 return res.send('failed')
//             } else {
//                 const query = `SELECT * FROM breakfast`
//                 con.query(query, (error, result1) => {
//                     if (error) return res.send('failed')
//                     data.push(result1)
//                     const query = `SELECT * FROM dinner`
//                     con.query(query, (error, result2) => {
//                         if (error) return res.send('failed')
//                         data.push(result2)
//                         res.send(data)
//                     })
//                 })
//                 con.release()
//             }
//         })
//     }
//     catch (e) {
//         res.send('failed')
//     }
// })

// app.post('/send_email', (req, res) => {
//     console.log(req.body)
//     const email = req.body.email
//     const user = req.body.user
//     var str = '1234567890';
//     var pass = '';
//     for (var i = 1; i <= 6; i++) {
//         var char = Math.floor(Math.random()
//             * str.length + 1);

//         pass += str.charAt(char)
//     }
//     const query = `select * from ${user} where email = '${email}'`
//     try {
//         con.query(query, (error, result) => {
//             if (error) throw error;
//             if (result.length === 0) {
//                 res.send('failed')
//             }
//             else {
//                 var mailOptions = {
//                     from: 'ruchitabaviskar17@gmail.com',
//                     to: email,
//                     subject: 'OTP for Reseting Password',
//                     text: 'Please use this OTP : ' + pass
//                 };
//                 transporter.sendMail(mailOptions, function (error, info) {
//                     if (error) {
//                         console.log(error)
//                     } else {
//                         res.send(pass);
//                     }
//                 });
//             }
//         })
//     }
//     catch (e) {
//         res.send('failed')
//     }
// })
app.post('/change_password', (req, res) => {
    const user = req.body.user
    const password = req.body.password
    const email = req.body.email
    const query = `UPDATE ${user} SET pass = '${password}' WHERE email = '${email}'`
    try {
        con.query(query, (error, result) => {
            if (error) throw error;
            res.send('success')
        })
    }
    catch (e) {
        res.send('failed')
    }

})

app.listen(3001, (error) => {
    if (error)
        console.log(error)
    else
        console.log('started')
});
