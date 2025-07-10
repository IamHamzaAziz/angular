import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html'
})
export class GreetingComponent {
  // taking data from parent component
  message = input()
}
