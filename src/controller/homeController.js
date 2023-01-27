const connection = require('../configs/connectDb')
const getHomePage = (req, res) => {
    connection.promise().query("SELECT *FROM user")
        .then(([rows, fields]) => {
            return res.render('index.ejs', {
                data: rows
            })
        })
        .catch(console.log)
    // .then(() => connection.end());
}

const getDetailPage = (req, res, next) => {
    const id = req.params.id
    connection.promise().query(`SELECT * FROM user WHERE id = ?`, [id])
        .then(([rows, fields]) => {
            return res.render('user/detail.ejs', {
                data: rows
            })
        })
        .catch(next)
    // .then(() => connection.end());
}

const create = (req, res, next) => {
    let { firstName, lastName, email, address } = req.body;
    connection.promise().query('insert into user(firstName, lastName,email,address) values(?,?,?,?)',[firstName,lastName,email,address])
        .then(([rows, fields]) => {
            return res.redirect('/')
        })
        .catch(next);
}

module.exports = {
    getHomePage,
    getDetailPage,
    create
}