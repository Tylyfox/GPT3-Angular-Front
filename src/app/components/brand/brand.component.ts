import { Component } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  google: string = './assets/google.png';
  dropbox: string = './assets/dropbox.png';
  shopify: string = './assets/shopify.png';
  slack: string = './assets/slack.png';
  atlassian: string = './assets/atlassian.png';
}
