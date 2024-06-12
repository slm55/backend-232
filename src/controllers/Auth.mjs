import UserRepository from "../repositories/User.mjs";

class AuthController {
    async login(req, res) {
        const { email, password } = req.body;
        const user = await UserRepository.getUserByEmail(email);
        if (user.password ==  password) {
            req.session.user = user;
            return res.status(200);
        } else {
            return res.status(401).send("Invalid email or password");
        }
    }
}

export default AuthController;