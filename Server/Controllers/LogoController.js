

import { Logos } from "../Models/LogoModels.js"

export const GetLogo = async (req, res) => {
    const data = await Logos.find({})
    res.send(data)
}

export const GetByIdLogo = async (req, res) => {
    
    try {
        const { id } = req.params
        const data = await Logos.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}
export const DeleteLogo = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Logos.findByIdAndDelete(id)
        res.status(200).send("Logo Delete")
    } catch (error) {
        res.status(404).send("Logo Not Delete")

    }
}

export const PostLogo = async (req, res) => {
    try {
        const data = new Logos(req.body)
        await data.save()
        res.status(200).send("Create Logo")
    } catch (error) {
        res.status(404).send("Not Create Logo")

    }
}


export const UpdateLogo = async (req, res) => {
    try {
        const data = await Logos.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}