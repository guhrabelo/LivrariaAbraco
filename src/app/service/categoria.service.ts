import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  // token = {
  //   headers: new HttpHeaders().set('Authorization',this.token)
  // }

  getAllCategoria():Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:8080/categoria'/*,this.token*/)
  }

  postCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>('http://localhost:8080/categoria',categoria /*,this.token*/)
  }

}
