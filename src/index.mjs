import express from "express";
import productRouter from "./routes/product.mjs"
import session from "express-session"
import authRouter from "./routes/auth.mjs";
import cartRouter from "./routes/cart.mjs"
const app = express();
app.use(express.json());
app.use(session({
    secret: "islamsecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

app.use(cartRouter);
app.use(authRouter);
app.use(productRouter);

app.get("/", (req, res) => {
    console.log(req.session.id)
    res.status(200).send("Welcome to my API");
});

const appStart = () => {
    try {
        app.listen(8000, () => {
            console.log(`Server running on port 8000`);
        });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

appStart()

