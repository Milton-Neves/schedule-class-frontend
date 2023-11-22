import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}
  private contacts: Contact[] = [];

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('/api/contacts');
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }
}
