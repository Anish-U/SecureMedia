// Importing npm modules
const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

// Express app instance
const app = express();

// Fetching environmental variables
dotenv.config();
const port = process.env.SERVER_PORT;
const mongoUri = process.env.MONGO_URI;
const jwtSecret = process.env.JWT_SECRET;

// Importing config files
const { initDB } = require("./config/database");

// Importing routers
const authRouter = require("./api/routes/auth");

/*
		MOUNTING MIDDLEWARES FUNCTIONS
		TO EXPRESS APP INSTANCE
*/

// For recognizing incoming request object as JSON
app.use(express.json());

// Disabling X-powered-by for security reasons
app.disable("x-powered-by");

// For securing app by setting HTTP headers
app.use(helmet());

// Request logger middleware
app.use(morgan("common"));

// MongoDB Connection
initDB();

/*
		HANDLING ROUTES
*/

app.use("/api/auth", authRouter);

//Serving and listening at port
app.listen(port, () => {
  console.log(`Backend server running at localhost:${port}`);
});
