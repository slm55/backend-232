import pg from "pg"

const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    password: "",
    port: 5432,
    database: "db-103-106"
});

export default pool;