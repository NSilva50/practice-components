import { Component, OnInit } from '@angular/core';
//css composed of bad mixes of colors. Warning message is default.
@Component({
  selector: 'warning-message',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h3>
        WARNING! UNKNOWN USER DETECTED!
        </h3>
        <hr>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./warning-message.component.css']
})
export class WarningMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
