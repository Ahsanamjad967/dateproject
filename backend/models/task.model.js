const mongoose=require('mongoose')
const taskSchema=new mongoose.Schema({
taskName:String,
discussionDate:Date,
submissonDate:String,
description:String

})

module.exports=mongoose.model('task',taskSchema)