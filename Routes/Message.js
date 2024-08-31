const express=require('express');
const messageRouter=express.Router();
const {isadminAuthenticated,ispatientAuthenticated}=require('../Middleware/Auth')
const {sendmessage,getallmessage}=require('../Controller/Message')
messageRouter.post('/send',sendmessage)
messageRouter.get('/getallmessage',isadminAuthenticated,getallmessage)
module.exports=messageRouter;