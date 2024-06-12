import ProductRepository from "../repositories/Product.mjs";
export function validateId(req, res, next) {
    const session_id = req.session.id;
    console.log(session_id);
    const id = req.params.id;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        return res.status(400).send("Invalid id");
    }
    next();
}

export async function resolveProduct(req, res, next) {
    const id = req.params.id;
    const product = await ProductRepository.getProductById(id);
    if (!product) {
        return res.status(404).send("Product not found");
    }
    next();
}

