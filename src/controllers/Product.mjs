import ProductRepository from "../repositories/Product.mjs";

class ProductController {
    async getProducts(req, res) {
        // const category = req.query.category;
        // if (category) {
        //     return res.status(200).send(`Products from category ${category}`);
        // }
        // const filter = req.query.filter;
        // const sort = req.query.sort;
        // if (filter && sort) {

        // }
        
        const products = await ProductRepository.getProducts();
        res.status(200).send(products);
    }

    async getProductById(req, res) {
        const id = req.params.id;
        const product = await ProductRepository.getProductById(id);
        res.status(200).send(product);
    }

    async addProduct(req, res) {
        const product = await ProductRepository.addProduct(req.body);
        res.status(201).send(product);
    }

    async updateProduct(req, res) {
        const id = req.params.id;
        const product = await ProductRepository.updateProduct(id, req.body);
        res.status(200).send(product);
    }

    async deleteProduct(req, res) {
        const id = req.params.id;
        const product = await ProductRepository.deleteProduct(id);
        res.status(200).send(product);
    }
}

export default ProductController;

