const router = require('express').Router();

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
   res.json({message: 'auth route'})
});

module.exports = router;