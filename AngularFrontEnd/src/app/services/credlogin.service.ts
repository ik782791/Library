import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { user_details } from '../models/userdetails';
import { books } from '../models/books';
import { bookdet } from '../models/bookdet';

@Injectable({
  providedIn: 'root'
})
export class CredloginService {

  constructor(private http:HttpClient) { }

  getbyemail(em: any): Observable<user_details> {
    const urlfind="http://localhost:8080/finduseremail";
    return this.http.get(`${urlfind}/${em}`);
  }

  postNewBook(dt:any): Observable<any> {
   // console.log(dt)
    const urlfind="http://localhost:8080/addnewbook";
    return this.http.post(`${urlfind}`, dt)
    }


    postIssueBook(dt:any): Observable<any> {
       const urlfind="http://localhost:8080/issuebook";
       return this.http.post(`${urlfind}`, dt)
       }

 getbybookid(bkid: any): Observable<books> {
      const urlfind="http://localhost:8080/findbybookid";
      return this.http.get(`${urlfind}/${bkid}`);
    }

getallbooks(): Observable<books[]>
  {
  const urlfind="http://localhost:8080/allbooks";
  return this.http.get<books[]>(`${urlfind}`);
  }

  updatebookbyid(em: any): Observable<any> {
    const urlfind="http://localhost:8080/updatebookbyid";
    return this.http.put(`${urlfind}`,em);
  }


  deletebook(dt :any): Observable<any>
  {
    const urlfind="http://localhost:8080/deletebookid";
    return this.http.delete(`${urlfind}/${dt}`);
  }

  getbookdetbyid(bk:any):Observable<books>{
    const urlfind="http://localhost:8080/findtransid";
    return this.http.get(`${urlfind}/${bk}`);

  }


  deletebookdetid(dt :any): Observable<any>
  {
    const urlfind="http://localhost:8080/deletebookdetid";
    return this.http.delete(`${urlfind}/${dt}`);
  }


}
