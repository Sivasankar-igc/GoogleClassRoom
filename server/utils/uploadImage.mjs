import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../server/Images")
    },
    filename: (req, file, cb) => {
        cb(null, "image" + Date.now() + path.extname(file.originalname))
    }
})

export const uploadImage = multer({
    storage: storage
})
