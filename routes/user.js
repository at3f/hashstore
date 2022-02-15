const router = require('express').Router()
const cUser = require('../controllers/cUser')
const jtoken = require('../controllers/JWT')
const apiKey = require('../controllers/apiKey')

router.post('/user/register',apiKey.verifyClient,cUser.postRegister)
router.post('/user/login',cUser.postLogin)
router.post('/user/logout',cUser.postLogout)
router.post('/user/getNewAccessToken',cUser.getNewAccessToken)
router.put('/user/updatePassword',jtoken.authorize,cUser.UpdatePassword)
router.delete('/user/deleteAccount',jtoken.authorize,cUser.deleteUser,cUser.postLogout)
router.get('/testAuth',jtoken.authorize,async (req,res)=>{
    res.send("SUCCESS")
})

module.exports = router