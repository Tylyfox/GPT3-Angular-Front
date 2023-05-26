import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  features: { imgUrl: string, date: string, title: string }[] = [
    {
      imgUrl: "./assets/blog02.png",
      date: "Sep 26, 2021",
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
      imgUrl: "./assets/blog03.png",
      date: "Sep 26, 2021",
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
      imgUrl: "./assets/blog04.png",
      date: "Sep 26, 2021",
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
      imgUrl: "./assets/blog05.png",
      date: "Sep 26, 2021",
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    }
  ];
}
