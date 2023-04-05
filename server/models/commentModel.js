
const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const commentSchema = new Schema({  
    houseID: ObjectId, 
    ownerID: ObjectId,
    reviewerID: ObjectId,
    like: Number,
    message: String,    
}, { timestamps: true })
module.exports = mongoose.model('Comment', commentSchema)