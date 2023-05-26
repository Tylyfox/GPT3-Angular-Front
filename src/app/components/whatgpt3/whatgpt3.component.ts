import { Component } from '@angular/core';

@Component({
  selector: 'app-whatgpt3',
  templateUrl: './whatgpt3.component.html',
  styleUrls: ['./whatgpt3.component.css']
})
export class Whatgpt3Component {
  features: { title: string, text: string }[] = [
    {
      title: "Chatbots",
      text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought."
    },
    {
      title: "Knowledgebase",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
    },
    {
      title: "Education",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
    }
  ];
}
