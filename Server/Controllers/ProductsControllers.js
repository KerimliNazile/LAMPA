import { Products } from "../Models/ProductsModels.js"

export const GetProduct = async (req, res) => {
    const data = await Products.find({})
    res.send(data)
}

export const GetByIdProduct = async (req, res) => {
    
    try {
        const { id } = req.params
        const data = await Products.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}
export const DeleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Products.findByIdAndDelete(id)
        res.status(200).send("Product Delete")
    } catch (error) {
        res.status(404).send("Product Not Delete")

    }
}

export const PostProduct = async (req, res) => {
    try {
        const data = new Products(req.body)
        await data.save()
        res.status(200).send("Create Product")
    } catch (error) {
        res.status(404).send("Not Create Product")

    }
}


export const UpdateProduct = async (req, res) => {
    try {
        const data = await Products.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}