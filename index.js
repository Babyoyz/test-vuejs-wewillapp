const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const {
  getAll_customer,
  insert_customer,
  updatecustomer,
  deletecustomer,
} = require("./src/Controllers/ApiController");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/getcustomer", getAll_customer);

app.post("/insertcustomer", insert_customer);

app.put("/updatecustomer", updatecustomer);

app.delete("/deletecustomer", deletecustomer);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
