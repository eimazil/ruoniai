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
  database: "ruoniu_filmai",
});

//CREATE
app.post("/server/cats", (req, res) => {
  const sql = `
    INSERT INTO cats (cat_title)
    VALUES (?)
    `;
  con.query(sql, [req.body.title], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/server/movies", (req, res) => {
  const sql = `
    INSERT INTO movies (title, price, cat_id)
    VALUES (?, ?, ?)
    `;
  con.query(
    sql,
    [req.body.title, req.body.price, req.body.cat_id],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

// app.post("/server/bills", (req, res) => {
//   const sql = `
//     INSERT INTO bills (invoice, kwh, total, consumer_id)
//     VALUES (?, ?, ?, ?)
//     `;
//   con.query(
//     sql,
//     [req.body.invoice, req.body.kwh, req.body.total, req.body.consumer_id],
//     (err, result) => {
//       if (err) throw err;
//       res.send(result);
//     }
//   );
// });

//READ
app.get("/server/cats", (req, res) => {
  const sql = `
    SELECT *
    FROM cats
    `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/server/movies", (req, res) => {
  const sql = `
    SELECT m.*, cat_title
    FROM movies AS m
    INNER JOIN cats AS c
    ON m.cat_id = c.id
    `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
// app.get("/server/consumers", (req, res) => {
//   const sql = `
//     SELECT *
//     FROM electricity_consumers
//     `;
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// app.get("/server/all", (req, res) => {
//   const sql = `
//     SELECT c.*, s.id AS sid, title, price
//     FROM electricity_supplier AS s
//     INNER JOIN electricity_consumers AS c
//     ON c.supplier_id = s.id
//     `;
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

//DELETE
app.delete("/server/cats/:id", (req, res) => {
  const sql = `
    DELETE FROM cats
    WHERE id = ?
    `;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.delete("/server/movies/:id", (req, res) => {
  const sql = `
    DELETE FROM movies
    WHERE id = ?
    `;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// //EDIT
app.put("/server/cats/:id", (req, res) => {
  const sql = `
    UPDATE cats
    SET cat_title = ?
    WHERE id = ?
    `;
  con.query(sql, [req.body.title, req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.put("/server/movies/:id", (req, res) => {
  const sql = `
    UPDATE movies
    SET title = ?, price = ?, cat_id=?
    WHERE id = ?
    `;
  con.query(
    sql,
    [req.body.title, req.body.price, req.body.cat_id, req.params.id],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

// app.put("/server/consumers/:id", (req, res) => {
//   const sql = `
//     UPDATE electricity_consumers
//     SET name = ?, surname = ?, counter_number = ?, supplier_id = ?
//     WHERE id = ?
//     `;
//   con.query(
//     sql,
//     [
//       req.body.name,
//       req.body.surname,
//       req.body.counter_number,
//       req.body.supplier_id,
//       req.params.id,
//     ],
//     (err, result) => {
//       if (err) throw err;
//       res.send(result);
//     }
//   );
// });

// app.delete("/server/consumers/:id", (req, res) => {
//   const sql = `
//     DELETE FROM electricity_consumers
//     WHERE id = ?
//     `;
//   con.query(sql, [req.params.id], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// app.delete("/server/bills/:id", (req, res) => {
//   const sql = `
//     DELETE FROM bills
//     WHERE id = ?
//     `;
//   con.query(sql, [req.params.id], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

app.listen(port, () => {
  console.log(`Filmų serveris veikia ${port} porte!`);
});
