const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const getFormattedCreatedAt = require('../utils/getFormattedDate');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    { toJSON: { virtuals: true, }, id: false }
);

thoughtSchema.virtual('getFormattedCreatedAt').get(function() {
    return getFormattedCreatedAt(this.createdAt);
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;