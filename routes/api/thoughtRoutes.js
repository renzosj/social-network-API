const router = require('express').Router();
const {
    getthoughts,
    getSingleThought,
    createthought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction
  } = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getthoughts).post(createthought);

// /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

module.exports = router;