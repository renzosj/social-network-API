const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userSeeds, thoughtSeeds } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected to DB');

    // Drop existing User and Thought collections
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log("Collections dropped...")

    // Add seeds of users and thoughts to respective collections
    try {
        await User.insertMany(userSeeds);
        console.log("Users successfully seeded!");
    } catch (err) {
        console.log("Error with seeding users: " + err);
    }

    try {
        const thoughtData = await Thought.insertMany(thoughtSeeds);
        //console.info(thoughtData);
        for (const thought of thoughtData) {
            await User.findOneAndUpdate(
                { username: thought.username },
                { $push: { thoughts: thought._id } }
            )
        }
        console.log("Thoughts successfully seeded!");
    } catch (err) {
        console.log("Error with seeding thoughts: " + err);
    }

    console.info('Seeding complete! 🌱');
    process.exit(0);
});