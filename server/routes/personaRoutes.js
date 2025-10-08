import express from "express";
import { getAllPersons, getPersonById } from "../controllers/personaController.js";

const router = express.Router();

router.get("/persons", async (req, res) => {
  try {
    const data = await getAllPersons();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/persons/:id", async (req, res) => {
  try {
    const person = await getPersonById(req.params.id);
    if (!person) return res.status(404).json({ error: "Not found" });
    res.json(person);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
