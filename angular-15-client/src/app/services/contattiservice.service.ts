import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contatto } from '../models/contatto.model';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {
  private baseUrl = 'http://localhost:8080/api/contatti';

  constructor(private http: HttpClient) { }

  creaContatto(contatto: Contatto): Observable<Contatto> {
    return this.http.post<Contatto>(this.baseUrl, contatto);
  }
}
