import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import postsRoutes from "./routes/posts.js";
import commentsRoutes from "./routes/comments.js";
import errorHandler from "./middleware/errorHandler.js";
import path from "path";

const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comments", commentsRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "index.html"))
  );
}

app.use(errorHandler);

app.listen(PORT, () => {
  /*  console.log(`server running on port ${PORT}`); */
});
