import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../server/PDFs")
    },
    filename: (req, file, cb) => {
        cb(null, "image" + Date.now() + path.extname(file.originalname))
    }
})

export const uploadPdf = multer({
    storage: storage
})
