var express = require('express');
var router = express.Router();



router.get('/createdb', (req,res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database Created')
    })
})

module.exports = router;