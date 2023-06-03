import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("db.sqlite");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 4000;
app.listen(PORT);
