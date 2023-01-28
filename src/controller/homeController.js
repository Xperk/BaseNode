const connection = require('../configs/connectDb')

//Lấy dữ liệu từ DB hiển thị ra home
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

//Tìm kiếm id hiển thị detail
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

//Thêm user
const create = (req, res, next) => {
    let { firstName, lastName, email, address } = req.body;
    connection.promise().query('insert into user(firstName, lastName,email,address) values(?,?,?,?)',
     [firstName, lastName, email, address])
        .then(([rows, fields]) => {
            return res.redirect('/')
        })
        .catch(next);
}

//Xóa user
const deleteuser = (req, res, next) => {
    const userId = req.body.userId;
    connection.promise().query('DELETE FROM user WHERE id = ?', [userId])
        .then(([rows, fields]) => {
            return res.redirect('/')
        })
        .catch(next);
}

//Edit user
const edit = (req, res, next) => {
    const userId = req.params.id;
    connection.promise().query("SELECT *FROM user where id = ?", [userId])
        .then(([rows, fields]) => {
            return res.render('user/edit.ejs', {
                data: rows[0]
            })
        })
        .catch(console.log)
}

const updateuser = (req, res, next) => {
    const { firstName, lastName, email, address,id} = req.body;
    connection.promise().query("update user set firstName =?, lastName =?, email =?, address =? where id =?",
    [firstName,lastName,email,address,id])
        .then(([rows, fields]) => {
            return res.redirect('/');
        })
        .catch(console.log)
}

module.exports = {
    getHomePage,
    getDetailPage,
    create,
    deleteuser,
    edit,
    updateuser
}