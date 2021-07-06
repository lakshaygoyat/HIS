import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalViewComponent } from './components/hospital-view/hospital-view.component';
import { DepartmentViewComponent } from './components/department-view/department-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HospitalViewComponent,
    DepartmentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([

      { path: 'department', component: DepartmentViewComponent },
      { path: '', redirectTo: '/hospital-view', pathMatch: 'full' }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
