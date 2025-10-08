import pool from "../config/database.js";

// Get all persons
export const getAllPersons = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM persons");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

// Get one person by ID
export const getPersonById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM persons WHERE id = $1", [id]);
    if (!result.rows[0]) {
      return res.status(404).send("Person not found");
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
