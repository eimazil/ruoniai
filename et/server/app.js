const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");
app.use(cors());
const mysql = require("mysql");
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "electronic",
});

//CREATE
app.post("/server/suppliers", (req, res) => {
  const sql = `
    INSERT INTO electricity_supplier (title, price)
    VALUES (?, ?)
    `;
  con.query(sql, [req.body.title, req.body.price], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
app.post("/server/consumers", (req, res) => {
  const sql = `
    INSERT INTO electricity_consumers (name, surname, counter_number, supplier_id)
    VALUES (?, ?, ?, ?)
    `;
  con.query(
    sql,
    [req.body.name, req.body.surname, req.body.number, req.body.supplier_id],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.post("/server/bills", (req, res) => {
  const sql = `
    INSERT INTO bills (invoice, kwh, total, consumer_id)
    VALUES (?, ?, ?, ?)
    `;
  con.query(
    sql,
    [req.body.invoice, req.body.kwh, req.body.total, req.body.consumer_id],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

//READ ALL
app.get("/server/suppliers", (req, res) => {
  const sql = `
    SELECT *
    FROM electricity_supplier
    `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
app.get("/server/consumers", (req, res) => {
  const sql = `
    SELECT *
    FROM electricity_consumers
    `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/server/bills", (req, res) => {
  const sql = `
    SELECT b.*, name, surname, title, s.id AS sid
    FROM bills AS b
    INNER JOIN electricity_consumers AS c
    ON b.consumer_id = c.id
    INNER JOIN electricity_supplier AS s
    ON c.supplier_id = s.id
    `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/server/all", (req, res) => {
  const sql = `
    SELECT c.*, s.id AS sid, title, price
    FROM electricity_supplier AS s
    INNER JOIN electricity_consumers AS c
    ON c.supplier_id = s.id
    `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//DELETE
app.delete("/server/suppliers/:id", (req, res) => {
  const sql = `
    DELETE FROM electricity_supplier
    WHERE id = ?
    `;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//EDIT
app.put("/server/suppliers/:id", (req, res) => {
  const sql = `
    UPDATE electricity_supplier
    SET title = ?, price = ?
    WHERE id = ?
    `;
  con.query(
    sql,
    [req.body.title, req.body.price, req.params.id],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.put("/server/consumers/:id", (req, res) => {
  const sql = `
    UPDATE electricity_consumers
    SET name = ?, surname = ?, counter_number = ?, supplier_id = ?
    WHERE id = ?
    `;
  con.query(
    sql,
    [
      req.body.name,
      req.body.surname,
      req.body.counter_number,
      req.body.supplier_id,
      req.params.id,
    ],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.delete("/server/consumers/:id", (req, res) => {
  const sql = `
    DELETE FROM electricity_consumers
    WHERE id = ?
    `;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.delete("/server/bills/:id", (req, res) => {
  const sql = `
    DELETE FROM bills
    WHERE id = ?
    `;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Elektra teka per ${port} portą!`);
});
