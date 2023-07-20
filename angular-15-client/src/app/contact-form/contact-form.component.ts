import { Component } from '@angular/core';
import { Contatto } from '../models/contatto.model';
import { ContattiService } from '../services/contattiservice.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contatto: Contatto = {
    id: 0,
    nome: '',
    email: '',
    telefono: '',
    richiesta: '',
    sesso: '',
    dataDiNascita: '',
    codiceFiscale: ''
  };

  constructor(private contattiService: ContattiService) {}

  submitForm() {
    this.contattiService.creaContatto(this.contatto)
      .subscribe(() => {
        alert('Contatto salvato con successo!');
        this.resetForm();
      }, () => {
        alert('Errore durante il salvataggio del contatto. Riprova più tardi.');
      });
  }

  resetForm() {
    this.contatto = {
      id: 0,
      nome: '',
      email: '',
      telefono: '',
      richiesta: '',
      sesso: '',
      dataDiNascita: '',
      codiceFiscale: ''
    };
  }
}
