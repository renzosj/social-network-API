const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        },
        thoughts: [
            {
            // array of thoughts _id values,
            type: Schema.Types.ObjectId,
            ref: 'Thought'
            },
        ],
        friends: [
            {
            // array of _id users, 
            type: Schema.Types.ObjectId,
            ref: 'User'
            }
        ]
    }
);

const User = model('User', userSchema);

module.exports = User;
// create a virtual that retrieves length of user's friends array field on query