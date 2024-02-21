import { Swipers } from "../Models/SwiperModels.js"


export const GetSwiper = async (req, res) => {
    const data = await Swipers.find({})
    res.send(data)
}

export const GetByIdSwiper= async (req, res) => {
    
    try {
        const { id } = req.params
        const data = await Swipers.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}
export const DeleteSwiper = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Swipers.findByIdAndDelete(id)
        res.status(200).send("Product Delete")
    } catch (error) {
        res.status(404).send("Product Not Delete")

    }
}

export const PostSwiper = async (req, res) => {
    try {
        const data = new Swipers(req.body)
        await data.save()
        res.status(200).send("Create Product")
    } catch (error) {
        res.status(404).send("Not Create Product")

    }
}


export const UpdateSwiper = async (req, res) => {
    try {
        const data = await Swipers.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}