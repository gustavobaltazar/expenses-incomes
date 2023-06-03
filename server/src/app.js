import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("db.sqlite");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 4000;
app.listen(PORT);
app.set("etag", false);

const createTransactionTable = async () => {
  db.serialize(() => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS Transaction (transactionId, INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT, dateIncome DATE, category TEXT, typeTransaction TEXT)"
    );
  });
};
createTransactionTable();

app.get("/transactions", async (req, res) => {
  let sql = "SELECT * FROM Transaction";
  db.serialize(() => {
    db.all(sql, function (err, rows) {
      if (err) return res.status(500).json({ err, msg: err.message });
      res.json({ transactions: rows });
    });
  });
});
