const { departments } = require("../data/departments.json");
const fs = require("fs");

const udpatePath = "data/departments.json";

const addDepartmentData = (department) => {
  const found = departments.find(
    (e) =>
      e.hospitalname === department.hospitalname &&
      e.departmentname === department.departmentname
  );
  if (!found) {
    departments.push(department);
    fs.writeFileSync(udpatePath, JSON.stringify({ departments }));
    return true;
  }
  return false;
};

const updateDepartmentData = (department) => {
  const found = departments.find(
    (e) =>
      e.hospitalname === department.hospitalname &&
      e.departmentname === department.departmentname
  );
  if (found) {
    departments.forEach((element) => {
      if (
        element.departmentname === department.departmentname &&
        element.hospitalname === department.hospitalname
      ) {
        if (department.head) element.head = department.head;
        if (department.contactnumber)
          element.contactnumber = department.contactnumber;
        console.log(element);
      }
    });
    fs.writeFileSync(udpatePath, JSON.stringify({ departments }));
    return true;
  }
  return false;
};

const deleteDepartmentElement = (department) => {
  let index = -1;
  departments.forEach((e, i) => {
    if (
      e.departmentname === department.departmentname &&
      e.hospitalname === department.hospitalname
    )
      index = i;
  });
  if (index !== -1) {
    departments.splice(index, 1);
    fs.writeFileSync(udpatePath, JSON.stringify({ departments }));
    return true;
  }
  return false;
};

module.exports = {
  addDepartmentData,
  updateDepartmentData,
  deleteDepartmentElement,
};
