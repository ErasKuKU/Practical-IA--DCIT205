const mongoose = require('mongoose')

const  dataSchema = mongoose.Schema(
    {
        Bloodpressure: {
            type: String,
            required: [true, "Please enter a  name"]
        },
        Temperature: {
            type: Number,
            required: true,
            default: 0
        },
        Pulse:{
            type: Number,
            required: true,
        },
         SP02: {
            type: String,
            required: [true, ]
        },
    },
    {
        timestamps:true
    }
)

const data= mongoose.model('data', dataSchema)

module.exports = data;