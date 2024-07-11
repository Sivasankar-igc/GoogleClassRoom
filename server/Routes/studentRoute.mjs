import express from "express"
import { login, logout, signin } from "../Controllers/StudentControllers/handleAccountCreation.mjs"
import handlePostingAssignment from "../Controllers/StudentControllers/handlePostingAssignment.mjs"
import getStudentAssignment from "../Controllers/StudentControllers/getStudentAssignment.mjs"
import removeAssignment from "../Controllers/StudentControllers/removeAssignment.mjs"
const router = express.Router()


// LOGIN AND SIGNIN
router.post("/signin", signin)
router.post("/login", login)
router.get("/logout", logout)

router.post("/postAssignment/:branch", handlePostingAssignment)
router.get("/checkStudentAssignment", getStudentAssignment)
router.delete("/removeAssignment", removeAssignment)
export { router };