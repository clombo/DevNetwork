const router = require('express').Router();

// @route   GET api/profile
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
   res.json({message: 'profile route'})
});

module.exports = router;