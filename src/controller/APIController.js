const connection = require('../configs/connectDb')

const getHomePage = (req, res) => {
    connection.promise().query("SELECT *FROM user")
        .then(([rows, fields]) => {
            return res.render('index.ejs', {
                data: rows
            })
        })
        .catch(console.log)
}

const getAllUsers = (req, res) => {
    connection.promise().query('select *from user')
        .then(([rows, fields]) => {
            return res.status(200).json({
                message: 'ok',
                data: rows
            })
        })
        .catch(console.log)
}

const createNewUser = (req, res, next) => {
    let { firstName, lastName, email, address } = req.body;
    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing required params!!!'
        })
    }
    connection.promise().query('insert into user(firstName, lastName,email,address) values(?,?,?,?)',
        [firstName, lastName, email, address])
        .then(([rows, fields]) => {
            return res.status(200).json({
                message: 'ok',
            })
        })
        .catch(next);

}

const updateuser = (req, res, next) => {
    const { firstName, lastName, email, address, id } = req.body;
    if (!firstName || !lastName || !email || !address || !id) {
        return res.status(200).json({
            message: 'missing required params!!!'
        })
    }
    connection.promise().query("update user set firstName =?, lastName =?, email =?, address =? where id =?",
        [firstName, lastName, email, address, id])
        .then(([rows, fields]) => {
            return res.status(200).json({
                message: 'ok'
            });
        })
        .catch(console.log)
}


const deleteuser = (req, res, next) => {
    const userId = req.params.id;
    if (!userId) {
        return res.status(200).json({
            message: 'missing required params!!!'
        })
    }
    connection.promise().query('DELETE FROM user WHERE id = ?', [userId])
        .then(([rows, fields]) => {
            return res.status(200).json({
                message: 'ok'
            });
        })
        .catch(next);
}
module.exports = { getAllUsers, createNewUser, updateuser, deleteuser }