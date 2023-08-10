const userSeeds = [
    {
        username: "1337C0der1",
        email: "darkmaster@email.com",
    },
    {
        username: "stationZ3bra",
        email: "kimwexler@mverde.com"
    },
    {
        username: "johnnysac",
        email: "underboss@nyc.net"
    },
    {
        username: "gemSaloonProprietor",
        email: "alSwearengen@deadwood.arpa"
    },
    {
        username: "b0shwack",
        email: "bjhorseman@horsin.arnd"
    }
]

const reactionSeeds = [
    {
        reactionBody: "isn't your husband the one whew threw bowling balls at that lawyer's car? Give him my number.",
        username: "1337C0der1"
    },
    {
        reactionBody: "You see me empty, sir, do not pause and inquire. Simply assume and refill.",
        username: "gemSaloonProprietor"
    },
    {
        reactionBody: "I Remember When You Used To Wait Out In The Car, And Frankly You Should Still Be There!",
        username: "johnnysac"
    },
    {
        reactionBody: "Good",
        username: "stationZ3bra"
    }
]

const thoughtSeeds = [
    {
        thoughtText: "Love that my husband always brings Chinese takeout and a movie home whenever I ask 🥰",
        username: "stationZ3bra",
        reactions: [
            reactionSeeds[0]
        ]
    },
    {
        thoughtText: "That sherriff? Insane person.",
        username: "gemSaloonProprietor",
        reactions: [
            reactionSeeds[2]
        ]
    },
    {
        thoughtText: "What is this? The UN? This is undignified.",
        username: "johnnysac",
        reactions: [
            reactionSeeds[1]
        ]
    },
    {
        thoughtText: "Coded for more than an hour today! Feeling accomplished 🤗",
        username: "1337C0der1",
        reactions: [
            reactionSeeds[3]
        ]
    }
]



module.exports = { thoughtSeeds, userSeeds }