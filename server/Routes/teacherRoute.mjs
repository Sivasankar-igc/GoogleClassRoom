import express from "express"
import { login, logout, signin } from "../Controllers/TeacherControllers/handleAccountCreation.mjs";
import handleMessage from "../Controllers/TeacherControllers/handleMessage.mjs";
import handleAnnoucement from "../Controllers/TeacherControllers/handleAnnoucement.mjs";
import handleAssignmentPost from "../Controllers/TeacherControllers/handleAssignmentPost.mjs";
const router = express.Router()

// LOGIN AND SIGNIN
router.post("/signin", signin)
router.post("/login", login)
router.get("/logout", logout)

// POST MESSAGE TO A BRANCH
router.post("/postMessage/:branch", handleMessage)

router.post("/announce", handleAnnoucement)

router.post("/postAssignment/:branch", handleAssignmentPost)
export { router };