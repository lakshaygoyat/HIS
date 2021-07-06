const { hospitals } = require("../data/hospitals.json");
const fs = require("fs");

const udpatePath = "data/hospitals.json";

const addHospitalData = (hospital) => {
  const found = hospitals.find(
    (e) =>
      e.contactnumber === hospital.contactnumber &&
      e.hospitalname === hospital.hospitalname
  );
  if (!found) {
    hospitals.push(hospital);
    fs.writeFileSync(udpatePath, JSON.stringify({ hospitals }));
    return true;
  }
  return false;
};

const updateHospitalData = (hospital) => {
  const found = hospitals.find(
    (e) => e.contactnumber === hospital.contactnumber
  );
  if (found) {
    hospitals.forEach((element) => {
      if (element.contactnumber === hospital.contactnumber)
        element.hospitalname = hospital.hospitalname;
    });
    fs.writeFileSync(udpatePath, JSON.stringify({ hospitals }));
    return true;
  }
  return false;
};

const deleteHospitalElement = (hospital) => {
  let index = -1;
  hospitals.forEach((e, i) => {
    if (e.contactnumber === hospital.contactnumber) index = i;
  });
  if (index !== -1) {
    hospitals.splice(index, 1);
    fs.writeFileSync(udpatePath, JSON.stringify({ hospitals }));
    return true;
  }
  return false;
};

module.exports = {
  addHospitalData,
  updateHospitalData,
  deleteHospitalElement,
};
