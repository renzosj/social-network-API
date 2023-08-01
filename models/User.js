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
            required: [true, 'User email required'],
            unique: true,
            validate: {
                validator: (emailStr) => {
                    return /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/.test(emailStr);
                },
                message: props => `${props.value} is not a valid email!`
            }
        },
        thoughts: [
            {
            // array of thoughts _id values,
            type: Schema.Types.ObjectId,
            ref: 'thought'
            }
        ],
        friends: [
            {
            // array of _id users, 
            type: Schema.Types.ObjectId,
            ref: 'user'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

const User = model('user', userSchema);

module.exports = User;
// create a virtual that retrieves length of user's friends array field on query