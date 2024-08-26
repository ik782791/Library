import { Component, OnInit } from '@angular/core';
import { books } from '../models/books';
import { CredloginService } from '../services/credlogin.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  bk?:books[]
  price?:any


  constructor(private cred:CredloginService) { }


  ngOnInit(): void
  {
      this.getallbooksfromservice();
  }

  getallbooksfromservice()
  {
    this.cred.getallbooks().subscribe(
    (res)=>{
      this.bk = res
    }
      ,
      (e)=>console.log(e))
  }

  GetNewPrice(data:any)
    {
      this.price=data
    }

  updatebookprice(b ?:books |any)
    {
      b.price = this.price;

      this.cred.updatebookbyid(b).subscribe(
          (res)=>{console.log(res)
          alert("New Price for Book is Updated in Database.");
          }
        ,
        (e)=>{console.log(e)});
    }
    deletebook(b?:number | any)
    {
        this.cred.deletebook(b).subscribe((res)=>{console.log(res)
        alert("Book has been deleted from Database.");
        this.getallbooksfromservice();
        },
          (e)=>console.log(e))
    }
}
