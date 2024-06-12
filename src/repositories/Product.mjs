import pool from "../database.mjs";

class ProductRepository {
    static async getProducts() {
        const response = await pool.query("SELECT * FROM products");
        return response.rows;
    }

    static async getProductById(id) {
        const response = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
        return response.rows[0];
    }

    static async addProduct(product) {
        const response = await pool.query("INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING *", [product.name, product.description, product.price]);
        return response.rows[0];
    }

    static async updateProduct(id, product) {
        const response = await pool.query("UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *", [product.name, product.description, product.price, id]);
        return response.rows[0];
    }

    static async deleteProduct(id) {
        const response = await pool.query("DELETE FROM products WHERE id = $1 RETURNING *", [id]);
        return response.rows[0];
    }
}

export default ProductRepository;