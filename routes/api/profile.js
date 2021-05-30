const router = require('express').Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const {check, validationResult} = require('express-validator');

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get('/me', auth, async (req, res) => {
   try {

      const profile = await Profile.findOne({ user: req.user.id}).populate('user',['name','avatar']);

      if(!profile){
         return res.status(404).json({msg: 'No profile found.'});
      }

   } catch (error) {
      console.error(error.message)
      res.status(500).json({msg: 'Server Error'});
   }
});

// @route   POST api/profile
// @desc    Create users profile
// @access  Private
router.post('',auth, async (req,res) => {
   try {
      
   } catch (error) {
      
   }
})

// @route   PUT api/profile
// @desc    Update users profile
// @access  Private
router.put('',auth, async (req,res) => {
   try {
      
   } catch (error) {
      
   }
})

module.exports = router;