const express = require("express");
const cors = require("cors");
const colors = require("colors");
const morman = require("morgan");
const dotenv = require("dotenv");
const createError = require("http-errors");
const { ApolloServer } = require("apollo-server-express");
const typeDevs = require("./Graphql/typeDevs");
const resolvers = require("./Graphql/resolvers");
const connectDb = require("./config/db");

//rest object
const app = express();

//configuration:
dotenv.config();
connectDb();

//middleware:
app.use(cors());
app.use(morman("dev"));

const startServer = async () => {
  try {
    const apolloServer = new ApolloServer({
      typeDefs: typeDevs,
      resolvers: resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: app });

    //rest api:
    app.use("/api", (req, res) => {
      res.send({
        message: "Welcome to  our server",
        Writer: " Zahurul islam",
      });
    });
    // Not Found Error Middleware:
    app.use((req, res, next) => {
      next(createError(404, "Page Not Found"));
    });

    //server error:
    app.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.send({
        status: err.status || 500,
        message: err.message,
      });
    });

    const PORT = process.env.PORT || 4000;
    const HOSTNAME = "127.0.0.1";
    app.listen(PORT, () => {
      console.log(
        `Server is running on : http://${HOSTNAME}:${PORT} 🚀 `.bgCyan
      );
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
