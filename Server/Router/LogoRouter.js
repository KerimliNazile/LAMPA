import express from 'express'

import { DeleteLogo, GetByIdLogo, GetLogo, PostLogo, UpdateLogo } from '../Controllers/LogoController.js'



const LogoRouter=express.Router()

LogoRouter.get('/logo',GetLogo)

LogoRouter.get('/logo/:id',GetByIdLogo)

LogoRouter.delete('/logo/:id', DeleteLogo)

LogoRouter.post('/logo',PostLogo)

LogoRouter.put('/logo/:id',UpdateLogo)

export default LogoRouter 