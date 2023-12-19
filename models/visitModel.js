const mongoose = require('mongoose')

const  visitSchema = mongoose.Schema(
    {
        encounterType: {
            type: String,
            required: [true, "Please enter  name"]
        },
        patientID: {
            type: Number,
            required: true,
            default: 0
        },
        dateTime:{
            type: Number,
            required: true,
        },
    },
    {
        timestamps:true
    }
)

const visit= mongoose.model('Visit', visitSchema)

module.exports = visit;