const asyncHandler = require("express-async-handler");
const jwt=require('jsonwebtoken');
const UserModel = require("../Model/User");
const isadminAuthenticated=asyncHandler(async(req,res,next)=>{
    const token=req.cookies.adminToken;
    if(!token){
        throw new Error("Admin not authenticated")
    }
    const decode=jwt.verify(token,process.env.JWTSECRET)
    req.user=await UserModel.findById(decode.id);
    if(req.user.role!=="Admin"){
        throw new Error(`${req.user.role} not authorized for this resources`)
    }
    next();

})


const ispatientAuthenticated=asyncHandler(async(req,res,next)=>{
    const token=req.cookies.patientToken;
    if(!token){
        throw new Error("Patient not authenticated")
    }
    const decode=jwt.verify(token,process.env.JWTSECRET)
    req.user=await UserModel.findById(decode.id);
    if(req.user.role!=="Patient"){
        throw new Error(`${req.user.role} not authorized for this resources`)
    }
    next();

})

module.exports={isadminAuthenticated,ispatientAuthenticated};