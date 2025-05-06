import db from '../models/index'

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

// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
    // Xuất module => Cho phép sử dụng hàm ở file khác.
}