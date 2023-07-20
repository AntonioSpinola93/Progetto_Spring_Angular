export interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  sesso?: string; // Aggiunta della proprietà sesso
  dataDiNascita?: string; // Aggiunta della proprietà dataDiNascita
  codiceFiscale?: string; // Aggiunta della proprietà codiceFiscale
}
