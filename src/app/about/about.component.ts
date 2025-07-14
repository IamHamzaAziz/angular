import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  constructor(public counterService: CounterService) {}
}
