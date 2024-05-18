import {
    Router
} from "express"

import {
    setUpController
} from "../controllers/setUp.controller.js"

const router = Router()

router.get("/", setUpController)

export default router
