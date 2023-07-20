import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-text-generation',
  templateUrl: './text-generation.component.html',
  styleUrls: ['./text-generation.component.css']
})
export class TextGenerationComponent {
  inputText = '';
  response = '';

  constructor(private http: HttpClient) { }
  generateText() {
    const endpoint = 'http://localhost:8080/generate-text';
    const payload = JSON.stringify({ inputText: this.inputText });
  
    this.http.post<any>(endpoint, payload).subscribe(
      response => {
        this.response = response.generatedText;
      },
      error => {
        console.error(error);
      }
    );
  }
  
}
