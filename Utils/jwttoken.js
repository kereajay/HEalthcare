const generateToken=(user,message,res)=>{
    const token=user.generateJsonWebToken();
    const cookieName=user.role==="Admin"?"adminToken":"patientToken";
    res.cookie(cookieName,token,{
        // httpOnly:true,
        expires: new Date(
            Date.now() + 7 * 24 * 60 * 60 * 1000
          ),
        sameSite:"none",
    })
    .json({
        success:true,
        message,
        user,
        token
    })
    
}
module.exports={
    generateToken
}
