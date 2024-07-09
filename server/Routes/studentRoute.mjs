import express from "express"
import { login, logout, signin } from "../Controllers/StudentControllers/handleAccountCreation.mjs"
import handlePostingAssignment from "../Controllers/StudentControllers/handlePostingAssignment.mjs"
const router = express.Router()


// LOGIN AND SIGNIN
router.post("/signin", signin)
router.post("/login", login)
router.get("/logout", logout)

router.post("/postAssignment/:branch", handlePostingAssignment)

export { router };