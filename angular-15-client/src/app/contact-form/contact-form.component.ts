import { Component } from '@angular/core';
import { ContattiService } from '../services/contattiservice.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contatto: any = {};
  dynamicFields: any[] = [];

  constructor(private contattiService: ContattiService) {}

  addField() {
    this.dynamicFields.push({
      label: 'New Field',
      name: 'field' + this.dynamicFields.length,
      type: 'text',
      value: ''
    });
  }

  removeField(index: number) {
    this.dynamicFields.splice(index, 1);
  }

  submitForm() {
    const formData = {
      ...this.contatto,
      dynamicFields: this.dynamicFields
    };
    this.contattiService.creaContatto(formData)
      .subscribe(() => {
        alert('Form submitted successfully!');
        this.resetForm();
      }, () => {
        alert('Errore durante il salvataggio del contatto. Riprova più tardi.');
      });
  }

  resetForm() {
    this.contatto = {};
    this.dynamicFields = [];
  }
}
