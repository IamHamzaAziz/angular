import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  message = signal('Ali')  // if we did not use signal here then it couldn't be called in child component

  // updateMessage() {
  //   console.log('User Typed')
  // }

  updateMessage(event: Event) {
    console.log(event)
    console.log('User Typed', (event.target as HTMLInputElement).value)
    this.message.set((event.target as HTMLInputElement).value)
  }
}
