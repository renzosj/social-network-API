const { ObjectId } = require('mongoose').Types;
const { User } = require('../models');

// get ALL the users!
async function getUsers(req, res) {
    try {
        const usersData = await User.find().populate('thoughts').populate('friends');
        if (!usersData) {
            res.status(404).json({message: "Where'd everybody go? Bingo?"});
        }
        res.status(200).json(usersData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

// create a user
async function createUser(req, res) {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

// get ONE user
async function getSingleUser(req, res) {
    try {
        const userData = await User.findById(req.params.userId).populate('thoughts').populate('friends');
        res.status(200).json(userData);
        if (!userData) {
            res.status(404).json({message: "User not found"});
        }
    } catch (err) {
        console.log(err); 
        res.status(500).json(err);
    }
}

// delete ONE user
async function deleteUser(req, res) {
    try {
        const userData = await User.findByIdAndDelete(req.params.userId);
        if (!userData) {
            res.status(404).json({message: "User not found"});
        }
        res.status(200).json(userData);
    } catch (err) {

        console.log(err);
        res.status(500).json(err);
    }
}

// update ONE user
async function updateUser(req, res) {
    try {
        const userData = await User.findOneAndUpdate(
            {_id: req.params.userId},
            { $set: req.body},
            { new: true }
        );
        if (!userData) {
            res.status(404).json({message: "User not found"});
        }
        res.status(200).json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

// add a friend to user
async function addFriend(req, res) {
    try {
        const userData = await User.findOneAndUpdate(
            {_id : req.params.userId},
            { $addToSet: { friends: req.params.friendId }},
            { runValidators: true, new: true }
        )
        if (!userData) {
            res.status(404).json({message: "User not found"});
        }
        res.status(200).json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

//delete one friend of user
async function deleteFriend(req, res) {
    try {
        const userData = await User.findOneAndUpdate(
            {_id : req.params.userId},
            { $pull: { friends: req.params.friendId }},
            { runValidators: true, new: true }
        )
        if (!userData) {
            res.status(404).json({message: "User not found"});
        }
        res.status(200).json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    deleteFriend
}
