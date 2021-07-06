import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalServicesService {

  id: string = "";
  data: any;
  constructor(private http: HttpClient) { }
  urlfetchdept: string = "http://localhost:5000/department";
  urlfetch: string = "http://localhost:5000/hospital";
  getHospitaldetails() {
    return this.http.get<Config>(this.urlfetch);
  }

  deleteHospital() {
    return this.http.delete<Config>(this.urlfetch);
  }

  updateHospital(id,data) {
    return this.http.put(`${this.urlfetch}/${id}`,data);
  }

  addHospital(data) {
    return this.http.post<Config>(this.urlfetch, data);
  }

  getDepartmentdetails() {
    return this.http.get<DepartmentView>(this.urlfetchdept);
  }

  deleteDepartment() {
    return this.http.delete<DepartmentView>(this.urlfetchdept);
  }
  updateDepartment(id,data) {
return this.http.put(`${this.urlfetchdept}/${id}`,data);
  }
  addDepartment(data) {
return this.http.post<DepartmentView>(this.urlfetchdept, data);
  }

}
interface Config {
  data: [
    {
      hospitalname: string, contactnumber: string
    }
  ];
}

interface DepartmentView {
  data: [
    {
      departmentname: string, head: string, contactnumber: string, hospitalname: string
    }
  ];
}