const express = require('express');
const router = express.Router();

const Attempt = require('../models/attempts')


router.get('/usuario', (req,res)=> {
    res.send('pagina de usuario')
});

router.get('/ranking', async (req,res)=> {
    const attempts = await Attempt.find().sort({points: -1});
    res.json(attempts)
});

router.post('/ranking', async (req,res)=> {
    const { userName, points } = req.body;
    const attempt = new Attempt({ userName, points });
    await attempt.save()
    res.json({"status":"attempt saved"})
})

module.exports= router;