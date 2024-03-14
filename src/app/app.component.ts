import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CTP-APP';
  ActiveLab: Number = 1;
  ChangeActiveLab(value: number) {
    this.ActiveLab = value;
    console.log(this.ActiveLab);
  }
}
