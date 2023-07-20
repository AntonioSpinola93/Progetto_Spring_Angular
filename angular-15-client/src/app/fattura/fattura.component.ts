import { Component } from '@angular/core';

@Component({
  selector: 'app-fattura-component',
  templateUrl: './fattura.component.html',
  styleUrls: ['./fattura.component.css']
})
export class FatturaComponent {
  recipient!: string;
  amount!: number;
  isInvoiceSent: boolean = false; // Aggiunta variabile per tracciare lo stato di invio

  submitInvoice() {
    // Simuliamo l'invio della fattura con un timeout di 2 secondi
    this.isInvoiceSent = false; // Ripristina lo stato di invio
    setTimeout(() => {
      this.isInvoiceSent = true; // Imposta lo stato di invio a true dopo 2 secondi
    }, 2000);
  }
}
