const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const { hospitals } = require("./data/hospitals.json");
const { departments } = require("./data/departments.json");
const {
  addHospitalData,
  updateHospitalData,
  deleteHospitalElement,
} = require("./services/hospitalServices");
const {
  addDepartmentData,
  updateDepartmentData,
  deleteDepartmentElement,
} = require("./services/departmentServices");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,PATCH,POST,DELETE,OPTIONS,HEAD"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Accept,Origin, Accept-Language, Content-Language, Content-Type, " +
      "x-user-token, Session-Token"
  );
  next();
});
app.use(express.json());

// Hospital APIs

app.get("/hospital", (req, res) => {
  res.json({ data: hospitals });
});

app.post("/hospital", (req, res) => {
  const { hospitalname, contactnumber } = req.body;
  if (contactnumber && hospitalname) {
    const added = addHospitalData({ hospitalname, contactnumber });
    if (added)
      res.json({ message: "Sussessfully added data", data: hospitals });
    else res.json({ message: "Already present" });
  } else res.json({ error: "Please provide some value" });
});

app.put("/hospital", (req, res) => {
  const { contactnumber, hospitalname } = req.body;

  const found = hospitals.find((e) => contactnumber === e.contactnumber);
  if (found) {
    const updated = updateHospitalData({ hospitalname, contactnumber });
    if (updated)
      res.json({ message: "Sussessfully updated data", data: hospitals });
    else res.json({ error: "Some error occured, please try again" });
  }
  res.json({ message: "NO such data found", data: hospitals });
});

app.delete("/hospital", (req, res) => {
  const { contactnumber } = req.body;
  const deleted = deleteHospitalElement({ contactnumber });
  if (deleted)
    res.json({ message: "Sussessfully deleted data", data: hospitals });
  else res.json({ error: "Some error occured, please try again" });
});

// department APIs

app.get("/department", (req, res) => {
  res.json({ data: departments });
});

app.post("/department", (req, res) => {
  const { departmentname, head, contactnumber, hospitalname } = req.body;
  if (departmentname && hospitalname) {
    const added = addDepartmentData({
      departmentname,
      head,
      contactnumber,
      hospitalname,
    });
    if (added)
      res.json({ message: "Sussessfully added data", data: departments });
    else res.json({ error: "Some error occured, please try again" });
  } else res.json({ error: "Please enter correct data" });
});

app.put("/department", (req, res) => {
  const { departmentname, head, contactnumber, hospitalname } = req.body;

  console.log(departmentname, hospitalname, "server");

  const found = departments.find(
    (e) =>
      departmentname === e.departmentname && hospitalname === e.hospitalname
  );
  if (found) {
    const updated = updateDepartmentData({
      departmentname,
      head,
      contactnumber,
      hospitalname,
    });
    if (updated)
      res.json({ message: "Sussessfully updated data", data: departments });
    else res.json({ error: "Some error occured, please try again" });
  } else res.json({ error: "No such data found" });
});

app.delete("/department", (req, res) => {
  const { departmentname, hospitalname } = req.body;
  const deleted = deleteDepartmentElement({ departmentname, hospitalname });
  if (deleted)
    res.json({ message: "Sussessfully deleted data", data: departments });
  else res.json({ error: "Some error occured, please try again" });
});

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
