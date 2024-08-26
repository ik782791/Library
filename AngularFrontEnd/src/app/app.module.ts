import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddbookComponent } from './addbook/addbook.component';
import { UploadimageComponent } from './uploadimage/uploadimage.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    EmployeeloginComponent,
    AdminhomeComponent,
    AddbookComponent,
    UploadimageComponent,
    UpdatebookComponent,
    EmployeehomeComponent,
    IssuebookComponent,
    ReturnbookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule,HttpClientModule,ReactiveFormsModule,

    RouterModule.forRoot([


        {path:'admin',component:AdminloginComponent},
        {path:'emp',component:EmployeeloginComponent},
        {path:'adminhome',component:AdminhomeComponent},
        {path:'uploadimage',component:UploadimageComponent},
        {path:'employeehome',component:EmployeehomeComponent},
     


     //   {path: '', redirectTo: '/home', pathMatch: 'full' },
     //   {path:"custlogin",component:CustomerloginpageComponent},
      // {path:"clogin",component:LogincustComponent},
      //  {path:"custhome",component:CustomerHomePageComponent},



     // {path:"addproduct",component:AddproductComponent},
     // {path:"aqa",component:CustomerhomeComponent},
     // {path: 'bill/:id', component: BillComponent },
     // {path:"updateproduct/:id",component:UpdateprdtComponent},
    // {path: '**', component:PagenotfoundComponent},
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
