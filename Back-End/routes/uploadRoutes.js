import path from 'path'
import express from "express";
import multer from "multer";

const router = express.Router()

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, 'images/')
    },
    filename(req, file, cb){
        cb(null,
            `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`    
        )
    }
})

function checkFileType(file, cb){

    const filetypes = /jpg|jpeg|png|gif/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)

    if(extname && mimetype){
        return (null, true)
    }else{
        return cb('Somente imagens!')
    }

}

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb)
    }
})

router.post('/', upload.single('image'), (req, res)=>{
    res.send(`${req.file.path}`)
})


export default router