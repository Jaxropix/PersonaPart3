import express from "express";
import personaRoutes from "./routes/personaRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", personaRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
