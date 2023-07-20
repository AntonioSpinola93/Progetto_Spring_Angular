import { Component } from '@angular/core';
import { Contact } from '../models/Contact.model';
import { ContactService } from '../services/ContactService.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponentComponent {
  contact: Contact = {
    id: 0,
    name: '',
    email: '',
    message: ''
  };
  contacts: Contact[] = [];
  nome: string = '';
  email: string = '';
  filteredContacts: Contact[] = []; // Aggiunta della proprietà per i contatti filtrati

  constructor(private contactService: ContactService) { }

  submitForm() {
    this.contactService.addContact(this.contact).subscribe(
      response => {
        console.log('Contatto aggiunto con successo:', response);
        this.fetchContacts();
      },
      error => {
        console.log('Errore durante l\'aggiunta del contatto:', error);
      }
    );
  }

  fetchContacts() {
    this.contactService.getContacts().subscribe(
      response => {
        console.log('Contatti ricevuti con successo:', response);
        this.contacts = response;
        this.applyFilters(); // Applica i filtri dopo aver ricevuto i contatti
      },
      error => {
        console.log('Errore durante il recupero dei contatti:', error);
      }
    );
  }

  searchContacts() {
    this.applyFilters(); // Applica i filtri direttamente senza chiamare il servizio
  }

  applyFilters() {
    this.filteredContacts = this.contacts.filter(contact => {
      return (
        (!this.nome || contact.name.toLowerCase().includes(this.nome.toLowerCase())) &&
        (!this.email || contact.email.toLowerCase().includes(this.email.toLowerCase()))
      );
    });
  }

  deleteContact(contactId: number) {
    this.contactService.deleteContact(contactId).subscribe(
      response => {
        console.log('Contatto eliminato con successo:', response);
        this.fetchContacts(); // Aggiorna la lista dei contatti dopo l'eliminazione
      },
      error => {
        console.log('Errore durante l\'eliminazione del contatto:', error);
      }
    );
  }
}
