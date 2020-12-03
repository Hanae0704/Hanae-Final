const express = require('express');
const router = express.Router();

router.post('/validate', (req,res) => {

    const profile = {
        first: 'Hanae',
        last: 'Izumiguchi',
        email: 'haaanaaa0704@gmail.com',
    }
    
    const response = {
        errors: false, 
        message: 'Login Validated',
        isLoggedIn: true,
        profile: profile, 
    }
    res.json(response);
});

module.exports = router;