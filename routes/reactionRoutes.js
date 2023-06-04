const router = require('express').Router();
const {
  addReaction,
  removeReaction,
} = require('../controllers/reactionController');

// Define routes for reaction-related operations
router.route('/:thoughtId/reactions')
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
