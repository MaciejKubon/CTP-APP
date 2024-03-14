import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-navbar.component.html',
  styleUrl: './left-navbar.component.css',
})
export class LeftNavbarComponent {
  NumberLab: number;
  constructor() {
    this.ClickLabButton;
    this.NumberLab = 1;
  }
  @Output() NewActiveLab = new EventEmitter<number>();

  ClickLabButton(value: number) {
    this.NumberLab = value;
    this.NewActiveLab.emit(this.NumberLab);
  }
}
