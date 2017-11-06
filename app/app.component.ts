import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

  <header>
    <nav class="navbar navbar-inverse">
        <div class="navbar-header">
        <a href="/" class="navbar-brand">My angular 2 app!</a>
        </div>
     </nav>
   </header>  
     
   <main>
    <div class="jumbotron">
      <h1>Welcome to Our App!</h1>
      <p>{{ message }}</p>
    </div>
    <div *ngFor ="let user of users">
        {{ user. name }} ({{ user.username }})
    </div>
    </main> 

   <footer class="text-center">
    Copywrite 2017 jordan is massive
   </footer> 
  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})
export class AppComponent {
    message ="Hello!";
    users = [{id: 34,  name: 'Jordan', username: 'jimmybrocken'},
             {id: 24,  name: 'Jon', username: 'jonisgay'},
             {id: 17,  name: 'Kim', username: 'kiki'}
    ];
}