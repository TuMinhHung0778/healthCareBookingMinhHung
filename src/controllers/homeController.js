import db from '../models/index'
import CRUDservice from '../services/CRUDservice';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll(); // lấy toàn bộ danh sách user từ database 
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
        // Lấy dữ liệu từ bảng User và render trang homepage.ejs.
    } catch (e) {
        console.log(e);
    }

}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs') // Xuất ra trang about.ejs
    // Render trang about.ejs mà không cần database.
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDservice.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from server');
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDservice.getAllUser();
    console.log('------------------------------------');
    console.log(data);
    console.log('------------------------------------');

    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,

    // Xuất module => Cho phép sử dụng hàm ở file khác.
}