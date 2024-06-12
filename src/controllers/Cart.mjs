import CartRepository from "../repositories/Cart.mjs";
import ProductRepository from "../repositories/Product.mjs";

class CartController {
    async getCart(req, res) {
        const cart = req.session.cart || [];
        res.send(cart);
    }

    async addProductToCart(req, res) {
        const { id } = req.params;
        const { quantity } = req.body;
        const product = await ProductRepository.getProductById(id);
        product.quantity = quantity;
        const cart = req.session.cart || [];
        cart.push(product);
        req.session.cart = cart;
        res.send(cart);
    }

    async updateProductQuantity(req, res) {
        const { id } = req.params;
        const { quantity } = req.body;
        const cart = req.session.cart || [];
        const product = cart.find(p => p.id == id);
        product.quantity = quantity;
        req.session.cart = cart;
        res.send(cart);
    }

    async deleteProductFromCart(req, res) {
    }

    async clearCart(req, res) {
    }

}

export default CartController;