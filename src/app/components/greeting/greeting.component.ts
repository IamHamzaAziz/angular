import { Component, input } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html'
})
export class GreetingComponent {
  constructor(public counterService: CounterService) {}

  // taking data from parent component
  message = input()
}
