const router =require('express').Router()
const authController=require('../controllers/auth.controller')
const userController = require('../controllers/user.controller.js')  
const uploadController = require('../controllers/upload.controller')
const multer =require('multer')
const upload=multer()
// Authentification
router.post("/register",authController.signUp)
router.post('/login',authController.signIn)
router.get('/logout',authController.logOut)
// User db
router.put('/profile-picture', userController.updateUserPicture)
router.get('/',userController.getAllUsers);
router.get('/:id',userController.userInfo);
router.put("/:id",userController.updateUser);
router.delete("/:id",userController.deleteUser);
router.patch('/kicker/:id',userController.kicker);
router.patch('/deskicked/:id',userController.deskicked)

// upload
router.post('/upload',upload.single('file'),uploadController.uploadProfil)










module.exports=router;