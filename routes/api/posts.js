const router = require('express').Router();
const Post = require('../../models/Post');

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
   res.json({message: 'posts route'})
});

module.exports = router;