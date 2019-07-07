import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BlogAngular';
  posts =[
    {
        title: 'Titre du premier poste.',
        content: 'Blalbla du premier poste.',
        loveIts: 2,
        created_at: new Date()
    },
    {
        title: 'Titre du deuxieme poste.',
        content: 'Blalbla du deuxieme poste.',
        loveIts: -1,
        created_at: new Date()
    },
    {
        title: 'Titre du Troisieme poste.',
        content: 'Blalbla du Troisieme poste.',
        loveIts: 0,
        created_at: new Date()
    }
  ]
}
