import { Component, OnInit } from '@angular/core';
/*My color choices for the h3 was meant to be atrocious,
hope it doesn't hurt.*/
@Component({
  selector: '[success-message]',
  templateUrl: './success-message.component.html',
  styles: [`
    h3 {
      background-color: salmon;
      color: yellow;
    }
  `]
})
export class SuccessMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
