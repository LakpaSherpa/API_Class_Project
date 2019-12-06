const express = require('express');
const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination: "./public/uploads",
    filename:(req,callback) =>{
        let ext = path.extname(File.originalname);
        callback(null,`${File.filename}-${Date.now()}${ext}`);

    }
});

const imageFileFilter = (req,File,cd) =>{
    if(!File.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        return cb(new Error("You can upload only image files"),false);
    }
    cd(null, true);
};

const upload = multer({
    storage: storage,
    fileFilter: imageFileFilter
})

const uploadRouter = express.Router();

uploadRouter.route('/')
.post(upload.single('myFile'),(req,res) =>{
    res.json(req.file);

});
module.exports =uploadRouter;