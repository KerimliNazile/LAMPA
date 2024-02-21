import express from 'express'
import { DeleteSwiper, GetByIdSwiper, GetSwiper, PostSwiper, UpdateSwiper } from '../Controllers/SwiperController.js'




const SwiperRouter=express.Router()

SwiperRouter.get('/swiper',GetSwiper)

SwiperRouter.get('/swiper/:id',GetByIdSwiper)

SwiperRouter.delete('/swiper/:id', DeleteSwiper)

SwiperRouter.post('/swiper',PostSwiper)

SwiperRouter.put('/swiper/:id',UpdateSwiper)

export default SwiperRouter 