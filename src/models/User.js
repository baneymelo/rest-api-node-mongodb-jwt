import {Schema, model} from 'mongoose'

const userSchema = new Schema({
    username:{
        type: String,
        unique: true
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        unique: true
    },
    role:[{
        ref: 'Role',
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
})

export default userSchema;