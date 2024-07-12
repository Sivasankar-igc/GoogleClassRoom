import express from "express"
import getAnnouncement from "../Controllers/OtherControllers/getAnnouncement.mjs";
import getBranchDetail from "../Controllers/OtherControllers/getBranchDetail.mjs";
import getBranch from "../Controllers/OtherControllers/getBranch.mjs";
import contact from "../Controllers/OtherControllers/contact.mjs";
const router = express.Router()

router.get("/getAnnouncements", getAnnouncement)
router.get("/getBranchDetails", getBranchDetail)
router.get("/getBranch", getBranch)

router.post("/contact",contact)

export { router };