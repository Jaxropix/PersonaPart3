import pool from "./database.js";

const setup = async () => {
  try {
    await pool.query(`
      DROP TABLE IF EXISTS persons;
      CREATE TABLE persons (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        type TEXT,
        weakness TEXT,
        attacks TEXT[],
        image TEXT
      );
    `);

    await pool.query(`
      INSERT INTO persons (id, name, type, weakness, attacks, image) VALUES
      ('izanagi', 'Izanagi', 'Persona', 'Wind', ARRAY['Cleave','Zio','Rakukaja'], '/img/izangi.jpeg'),
      ('yosuke', 'Yosuke Hanamura', 'Persona User', 'Electric', ARRAY['Garu','Dekaja','Sukukaja'], '/img/yosuke.jpeg'),
      ('chie', 'Chie Satonaka', 'Persona User', 'Fire', ARRAY['Bufu','Rampage','Rebellion'], '/img/chie.jpeg'),
      ('teddie', 'Teddie', 'Persona User', 'None', ARRAY['Bufu','Mabufu','Healing Wave'], '/img/teddie.jpg'),
      ('kanji', 'Kanji Tatsumi', 'Persona User', 'Wind', ARRAY['Zio','Power Charge','Mazio'], '/img/kanji.jpg');
    `);

    console.log("✅ Table created and data inserted");
  } catch (err) {
    console.error("❌ Error running reset.js:", err.message);
  } finally {
    await pool.end();
    process.exit();
  }
};

setup();
