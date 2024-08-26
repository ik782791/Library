import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { books } from '../models/books';
import { CredloginService } from '../services/credlogin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Byte } from '@angular/compiler/src/util';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  @Output() bookid:EventEmitter<number>=new EventEmitter();

  data={}
  id?:number

  constructor(private cred:CredloginService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  addbookform=
  {
    bkid:0,
    bknm:'',
    author:'',
    price:'',
    image:Blob ,
    description:'',
    status:'Available'
  }

onsubmit(event?:any)
{

  this.data = {bknm:this.addbookform.bknm,
    author:this.addbookform.author,
    price:this.addbookform.price,
    description:this.addbookform.description,
    status:'Available'
  }

  this.cred.postNewBook(this.data)
  .subscribe(response => {
    //	console.log(response)
      this.id=response
    //  console.log(this.id)
      this.sendBookId()
})
    this.router.navigate(['/uploadimage']);

  }

  sendBookId()
  {
  this.bookid.emit(this.id)
  }

}



