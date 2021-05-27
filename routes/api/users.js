const router = require('express').Router();
const {check, validationResult} = require('express-validator/check');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/', (req, res) => {
    console.log(req.body);
   res.json({message: 'user route'})
});

module.exports = router;