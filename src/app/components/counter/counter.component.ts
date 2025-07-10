import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  counter = signal(0)
  message = ''  // we can also use signal here and later we will use this.message.set

  updateValue(type: string) {
    if (type === 'increment') {
      this.message = ''
      this.counter.update((val) => val + 1)
    } else if (type === 'decrement') {
      this.message = ''
      if (this.counter() == 0) {
        this.message = 'Counter is already at 0'
        return
      }
      this.counter.update((val) => val - 1)
    } else if (type === 'reset') {
      this.message = ''
      this.counter.set(0)
    }
  }
}
