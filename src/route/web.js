import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoues = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    // rest api 
    return app.use("/", router);
}

module.exports = initWebRoues;