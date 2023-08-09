const { Thought, User } = require('../models');

// get ALL the thoughts!
async function getThoughts(req, res) {
    try {
        const thoughtsData = await Thought.find();
        if (!thoughtsData) {
            res.status(404).json({message: "The machinations of the mind are an enigma..."});
        }
        res.status(200).json(thoughtsData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

// create a thought
async function createThought(req, res) {
    try {
        const thoughtData = await Thought.create(req.body);
        //add this thought's _id to assoc user's thoughts field
        const userData = await User.findOneAndUpdate(
            { username: thoughtData.username },
            { $addToSet: { thoughts: thoughtData._id} },
            { new: true }
        )
        const responseObj = { thoughtData, userData }
        res.status(200).json(responseObj);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

// get ONE thought
async function getSingleThought(req, res) {
    try {
        const thoughtData = await Thought.findById(req.params.thoughtId);
        res.status(200).json(thoughtData);
        if (!thoughtData) {
            res.status(404).json({message: "Thought(tm) not found"});
        }
    } catch (err) {
        console.log(err); 
        res.status(500).json(err);
    }
}

// delete ONE thought
async function deleteThought(req, res) {
    try {
        const thoughtData = await Thought.findByIdAndDelete(req.params.thoughtId);
        if (!thoughtData) {
            res.status(404).json({message: "Thought(tm) not found"});
        }
        res.status(200).json(thoughtData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

// update ONE thought
async function updateThought(req, res) {
    try {
        const thoughtData = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            { $set: req.body},
            { new: true }
        );
        if (!thoughtData) {
            res.status(404).json({message: "Thought(tm) not found"});
        }
        res.status(200).json(thoughtData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

// add a friend to thought
async function createReaction(req, res) {
    try {
        const thoughtData = await Thought.findOneAndUpdate(
            {_id : req.params.thoughtId},
            { $addToSet: { reactions: req.body }},
            { runValidators: true, new: true }
        )
        if (!thoughtData) {
            res.status(404).json({message: "Thought(tm) not found"});
        }
        res.status(200).json(thoughtData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

//delete one friend of thought
async function deleteReaction(req, res) {
    try {
        const thoughtData = await Thought.findOneAndUpdate(
            {_id : req.params.thoughtId},
            { $pull: { reactions: req.body.reactionId }},
            { runValidators: true, new: true }
        )
        if (!thoughtData) {
            res.status(404).json({message: "Thought(tm) not found"});
        }
        res.status(200).json(thoughtData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction
}
