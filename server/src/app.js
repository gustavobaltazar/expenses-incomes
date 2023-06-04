import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("db.sqlite");
const app = express();
app.use(cors());
app.use(express.json());
app.disable("etag");
const PORT = 4000;

const createExchangeTable = async () => {
  db.serialize(() => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS Exchange (exchangeId INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT, price NUMBER, dateExchange TEXT, category TEXT, typeExchange TEXT);"
    );
  });
};
createExchangeTable();

app.get("/exchanges", async (req, res) => {
  let sql = "SELECT * FROM Exchange;";
  db.serialize(() => {
    db.all(sql, function (err, rows) {
      if (err) {
        return res.status(500).json({ err, msg: err.message });
      }
      res.json({ exchanges: rows });
    });
  });
  return;
});

app.post("/new-exchange", async (req, res) => {
  console.log("REQ body: ", req.body);
  let date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
  console.log("data:", date);
  db.serialize(() => {
    db.run(
      "INSERT INTO Exchange (description, price, dateExchange, category, typeExchange) VALUES (?,?,?,?,?);",
      [
        req.body.description,
        req.body.price,
        date,
        req.body.category,
        req.body.typeExchange,
      ],
      function (err) {
        if (err) {
          return res.status(500).json({ err });
        }
        res.json({ msg: "ok" });
      }
    );
  });
  return;
});

app.delete("/delete-exchange/:id", async (req, res) => {
  let sql = "DELETE FROM Exchange WHERE exchangeId = ?;";
  db.serialize(() => {
    db.run(sql, [req.params.id], function (err) {
      if (err) {
        return res.status(500).json({ err });
      }
      res.json({ deleted: "ok" });
    });
  });
  return;
});

app.listen(PORT, () => {
  console.log(
    `\x1b[32m[START]\x1b[0m Server is running on \x1b[35mhttp://localhost:${PORT}\x1b[0m`
  );
});
