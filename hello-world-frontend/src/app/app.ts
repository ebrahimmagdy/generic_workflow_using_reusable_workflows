import { Component, OnInit, inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  message = 'Loading...';

  private http = inject(HttpClient);

  ngOnInit() {
    this.http.get('http://localhost:8080/hello', { responseType: 'text' })
      .subscribe({
        next: data => this.message = data,
        error: () => this.message = 'Failed to load message'
      });
  }
}

bootstrapApplication(AppComponent)
  .catch((err: any) => console.error(err));
