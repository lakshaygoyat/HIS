import { Component, OnInit } from '@angular/core';
import { HospitalServicesService } from 'src/app/services/hospital-services.service';
@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css']
})
export class DepartmentViewComponent implements OnInit {
  Departments: any;
  constructor(public hs: HospitalServicesService) { }

  ngOnInit(): void {
    this.hs.getDepartmentdetails().subscribe((response) => { this.Departments = response.data; })
  }

}
