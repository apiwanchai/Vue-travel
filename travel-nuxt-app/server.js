const express = require('express')
const cors = require('cors')

const mockToken='105295d6dadbd91238eff1b25b73a73aae6bb9fe35266c33'
const mockUser={
    id:1,
    name:'Nex',
    email:'apiwanchai1998@gmail.com'
}

const app = express()

app.use(cors())
app.use(express.json())

const router = express.Router()
router.get('/me',(req,res)=>{
    const headers = req.headers.authorization;
    const token = headers && headers.split(' ')[1]
    console.log(token)
    if (token === mockToken){
        return res.json({
            user:mockUser
        })
    }else{
        return res.status(401).json({message:'Invalid token'})
    }

})
router.post('/login',(req,res)=>{
    const {number,password}=req.body
    if (number ==='0998765432' && password ==='Aa123456'){
        return res.json({
            user:mockUser,
            token:mockToken
        })
    }else{
        return res.status(401).json({
            message:'invalid password'
        })
    }
})

app.use('/api',router)

app.listen(8080,()=>{console.log('running port : 8080')})