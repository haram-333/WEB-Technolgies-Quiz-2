import express from "express"

import {
    createStudent,
    readAllStudent,
    readStudent,
    updateStudent,
    deleteStudnet
} from "../controller/student-controller.js"

const router=express.Router();

router.route("/").post(createStudent);

router.route("/").get(readAllStudent);

router.route("/:id").get(readStudent);

router.route("/:id").put(updateStudent);

router.route("/:id").delete(deleteStudnet);

export default router