import { Router } from "express"

import {
    signUpAdmin,
    signinAdmin,
    deleteAdmin,
    GetAdmin,
    addAbout,
    deleteabout,
    getabout,
    getabouts,
    addimage,
    addContact,
    getcontacts,
    updateimage,
    removeImage,
    getimage,
    getimages
} from "../controller/adminController"
import { authSuperAdmin, authAdmin } from "../middlewares/access"


const router = Router()
 
//unprotected route 
router.post("/signInAdmin", signinAdmin)
router.get("/about/:aboutId", getabout)
router.get("/abouts", getabouts)
router.post("/contact", addContact)
router.get("/getimage/:imgId", getimage)
router.get("/getimages", getimages)

//superAdmin access route
router.post("/signUpAdmin", authSuperAdmin, signUpAdmin)
router.delete("/deleteAdmin/:Id", authSuperAdmin, deleteAdmin)
router.get("/getAdmin/:Id", authSuperAdmin, GetAdmin)

//admin access route
router.post("/about", authAdmin, addAbout)
router.delete("/removeAbout/:Id", authAdmin, deleteabout) 
router.get("/getContacts", authAdmin, getcontacts)
router.post("/image", authAdmin, addimage)
router.put("/updateImage/:imgId", authAdmin, updateimage)
router.delete("/deleteImage/:imgId", authAdmin, removeImage)


export default router 