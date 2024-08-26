import { Component, OnInit, Input ,Output,EventEmitter } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

   @Input() price?:any;
   @Output() myOutput:EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendValue()
  {
    this.myOutput.emit(this.price)
  }


}
