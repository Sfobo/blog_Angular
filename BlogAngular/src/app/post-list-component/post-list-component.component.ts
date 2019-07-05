import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  title: string = 'Titre';
  content: string = 'Paragraphe';
  loveIts: number = 0;
  created_at: Date = new Date();

  constructor() {

  }

  ngOnInit() {
  }

  like(){
    this.loveIts ++;
    console.log(this.loveIts);
  }

  dislike(){
    this.loveIts --;
    console.log(this.loveIts);
  }
}
