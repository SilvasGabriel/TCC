import express from 'express'
import multer from 'multer'
import path from 'path'

const router = express.Router()

const storageDisk = multer.diskStorage({
    destination (req, file, callback){
        
        callback(null, 'Front-End/public/images')

    },
    filename (req, file, callback){

        callback(null, `${file.fieldname} - ${Date.now()}${path.extname(file.originalname)}`)

    } 
})

const checkFileType = (req, file, callback) =>{

    const fileTypes = /jpg|jpeg|png|gif/
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = fileTypes.test(file.mimetype)

    if(extname && mimetype){

        return callback('null', true)
    
    }else{
        callback('Somente imagens!')
    }

}


const upload = multer({
    storage,
    fileFilter: function(req, file, callback){
        checkFileType(file, callback)
    } 
})


router.post('/', upload.single('imagem'), (req, res)=>{
    res.send(`${req.file.path}`)
})

export default router