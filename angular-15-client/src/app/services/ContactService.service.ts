import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/api/contatti/contacts';

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }

  searchContacts(filtriContatti: any): Observable<Contact[]> {
    return this.http.post<Contact[]>(`${this.apiUrl}/search`, filtriContatti);
  }

  deleteContact(contactId: number): Observable<any> {
    const url = `${this.apiUrl}/${contactId}`;
    return this.http.delete(url);
  }
}
