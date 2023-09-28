import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDoctorComponent } from './components/view-doctor/view-doctor.component';
import { UpdateSurgeryComponent } from './components/update-surgery/update-surgery.component';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { ViewSpecializationComponent } from './components/view-specialization/view-specialization.component';
import { ViewTodaysSurgeryComponent } from './components/view-todays-surgery/view-todays-surgery.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes=[{path:'', redirectTo: 'home', pathMatch: 'full'},
{ path: 'home', component: HomePageComponent },
{ path: 'doctor', component: ViewDoctorComponent },
{ path: 'doctor/:docId', component: UpdateDoctorComponent },
{ path: 'specialization', component: ViewSpecializationComponent },
{ path: 'specialization/:specializationCode', component: ViewDoctorComponent },
{ path: 'updatedoctors', component: UpdateDoctorComponent},
{ path: 'todaySurgery', component: ViewTodaysSurgeryComponent },
{ path: 'addDoctor', component: AddDoctorComponent },
{ path: 'editSurgery/:surgeryId', component: UpdateSurgeryComponent },
// { path: 'registration', component: RegistrationPageComponent},
// { path: 'login', component: LoginPageComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
