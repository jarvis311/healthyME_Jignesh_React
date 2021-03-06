const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const multer = require('multer')
const router = express.Router()
const requireLogin = require('./middleware/requireLogin')


let storage = multer.diskStorage({
  destination: function(req, file, next){
    next(null, './uploads')
  },
  filename: function(req,file,next) {
    next(null, file.originalname);
  }
})
let upload = multer({
  storage : storage,
})


const sessionController = require("./controller/session-controller");
const roleController = require("./controller/role_comtroler");
const userController = require("./controller/user-controler");
const productController = require("./controller/product-controler")
const catagoryController = require("./controller/catagory-controler")
const feedbackController = require("./controller/feedback-controler");
const blogController = require("./controller/blog-controler");

// const { addUserValidation, loginUserValidation, roleValidation} = require("./validation/userValidation");


const app = express();
//middle ware 
app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  
app.use('/uploads',express.static('uploads'))
app.use(cors())
app.use(router)
//database 
mongoose.connect('mongodb://localhost:27017/healthymedb',function(err){
  if(err){
    console.log("db connection fail...");
    console.log(err);
  }
})
  


app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

router.get('/protected',requireLogin, (req, res)=>{
  res.send("Hii from the protected")
}) 

 
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup) 
app.post("/saveuser",sessionController.saveuser)


//role 
app.post("/roles", roleController.addRole)
app.get("/getroles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/updateroles",roleController.updateRole)


//user 
app.post("/users", userController.addUser)
app.get("/getuser",userController.getAllUsers)
app.put("/updateuser",userController.updateUser)
app.delete("/deleteusers/:userId",userController.deleteUser)
app.post("/login",userController.login)
//Catagory

app.post("/catagory",catagoryController.addUCatagory)
app.get("/getcatagory",catagoryController.getAllCatagory)
app.put("/updateCatagory",catagoryController.updateCatagory)
app.delete("/catagory/:catagoryId",catagoryController.deleteCatagory)

// product 

app.post("/addproduct",upload.single('image'), productController.addProduct)
app.post("/addproductByAdmin",upload.single('image'), productController.addProductByAdmin)
app.get("/getproduct",upload.single('image'),productController.getAllProduct)
app.get("/getApprovalProduct",productController.getAllProductForApproval)
app.get("/getoneproduct/:productId",productController.getOneProduct)
app.put("/updateproduct/:productId",productController.updateProduct)
app.put("/approve/:productId",productController.updateProductApproval)
app.delete("/product/:productId",productController.deleteProduct)
app.put("/like",productController.likeProduct)
app.post("/addfeedbackProduct",productController.addFeedbackProduct)
app.put("/addrecipes/:productId",productController.AddRecipes)

// feedback

app.post("/addfeedback",feedbackController.addFeedback)
app.get("/getfeedback/:id",feedbackController.getAllFeedback)
app.put("/updatefeedback",feedbackController.updateFeedback)
app.delete("/feedback/:feedbackId",feedbackController.deleteFeedback)


// blog 
app.post("/addblog",upload.single('image'), blogController.addBlog)
app.get("/getallblog", blogController.getAllBlog)
app.get("/getoneblog/:blogId",blogController.getOneblog)



//server 
app.listen(5000,function(){
  console.log("server started on 5000");  
})