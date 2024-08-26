import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CredloginService } from '../services/credlogin.service';

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadimageComponent implements OnInit {

  submitted=false
  id?:any
  uploadedImage?:any
  postResponse?:any
  dbImage?:any


  form: FormGroup = new FormGroup({
    image:new FormControl(),
    bkid:new FormControl()
})

constructor(private http:HttpClient,private frmbuilder : FormBuilder,private cred:CredloginService,private route: ActivatedRoute,private router: Router){}

ngOnInit(){

          this.form = this.frmbuilder.group({
              image:['',Validators.required],
              })
          }

get func(): {
[key: string]: AbstractControl}
{
return this.form.controls;

}

onSubmit():void
      {
          this.submitted=true
          this.uploadimage()
      }

onImageUpload(event?:any) {
        this.uploadedImage = event.target.files[0];
      }

uploadimage()
      {
        const uploadImageData = new FormData();
        uploadImageData.append('image', this.uploadedImage, this.uploadedImage.name);
        uploadImageData.append('bkid', this.id);
    //Make a call to the Spring Boot Application to save the image
        this.http.post('http://localhost:8080/uploadimage', uploadImageData, { observe: 'response' })
        .subscribe((response) => {
                                  alert('Image uploaded successfully');
                                });
    }

GetBookId(data:number)
      {
        //console.log("Get : "+data)
        this.id = data
            this.cred.getbybookid(data).subscribe(
              (res) =>console.log(res)
              ,
              (e)=>console.log(e))
      }


viewimage()
{
  this.http.get('http://localhost:8080/getimage/' + this.id)
      .subscribe(
        res => {
          this.postResponse = res;
          this.dbImage = 'data:image/png;base64,' + this.postResponse.image;
        }
      );
}




}


