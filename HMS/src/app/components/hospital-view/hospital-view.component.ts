import { Component, OnInit } from '@angular/core';
import { HospitalServicesService } from 'src/app/services/hospital-services.service';


@Component({
  selector: 'app-root',
  templateUrl: './hospital-view.component.html',
  styleUrls: ['./hospital-view.component.css']
})



export class HospitalViewComponent implements OnInit {
  hospitals: any;
  Edit: boolean = false;
  submitted = false;
  message: string = "";
  hospital = {
    hospitalname: '',
    contactnumber: ''
  };
  constructor(public hs: HospitalServicesService) { }

  ngOnInit(): void {
    this.message = "";
    this.getHospitalData();
  }
  name: string = "hospitalname";
  reverse: boolean = false;
  sortbyhospital() {

  }
  getHospitalData() {
    this.hs.getHospitaldetails().subscribe((response) => { this.hospitals = response.data; },
      error => {
        console.log(error);
      });
  }

  saveHospital() {
    const data = {
      hospitalname: this.hospital.hospitalname,
      contactnumber: this.hospital.contactnumber
    }
    this.hs.create(data).subscribe((response) => {
      console.log(response);
      this.submitted = true;
    },
      error => {
        console.log(error);
      });
  }

  deleteHospital() {
    this.hs.deleteHospital(this.currenthospital.contactnumber).subscribe(response => {
      console.log(response);
      this.hs.getHospitaldetails().subscribe((response) => { this.hospitals = response.data; });
    },
      error => {
        console.log(error);
      }

    );
  }

  updateHospital() {
    this.Edit = true;
    this.hs.udpateHospital(this.currenthospital.hospitalname, this.currenthospital.contactnumber).subscribe(response => {
      console.log(response);
      this.message = "Hospital updated Successfully.";
    },
      error => {
        console.log(error);
      });


  }

}
