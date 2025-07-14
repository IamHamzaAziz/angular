import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  constructor(public counterService: CounterService) {}

  updateValue(type: string) {
    this.counterService.updateValue(type);
  }
}
