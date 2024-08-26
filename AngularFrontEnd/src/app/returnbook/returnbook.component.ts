import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { bookdet } from '../models/bookdet';
import { books } from '../models/books';
import { CredloginService } from '../services/credlogin.service';

@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent implements OnInit {

bk?:books[] |any
bkid?:number[]=[]
bkdet?:bookdet |any
dt:any;


data={}

isdate = new Date().toDateString

retbook={
    transid:0,
    bkids:0,
    studentname:'',
    fine:0,
    returndate:Date,
    issuedate:Date
}


  constructor(private cred:CredloginService,private route: ActivatedRoute,private router: Router) { }


  ngOnInit(): void {

  this.cred.getallbooks().subscribe((res)=>{this.bk=res;
    for(let b of this.bk)
    {
      if(b["status"]=="Issue")
        {
            this.bkid?.push(b["bkid"])
        }
    }
  },(e)=>{console.log(e)})

  }


  onsubmit(event?:any)
  {
     this.cred.deletebookdetid(this.dt).subscribe(
       (res)=>{console.log(res)
       alert("Book is returned and fine collected....")
       this.retbook.studentname=''    
      this.retbook.returndate=Date
      this.retbook.issuedate=Date 
      this.retbook.fine=0
      }
      ,(e)=>console.log(e))
  }

onchangebook()
{
  this.retbook['bkids']=this.dt;
  this.cred.getbookdetbyid(this.dt).subscribe((res)=>{
    this.bkdet= res;
     
      this.retbook.studentname=this.bkdet["studentname"]     
      this.retbook.returndate=this.bkdet["returndate"]
      this.retbook.issuedate=this.bkdet["issuedate"]   
      if(new Date(this.bkdet["returndate"]) < (new Date()))
          this.retbook.fine=20
      else
          this.retbook.fine=0


 
      },
      (e)=>{console.log(e);})
}

}
