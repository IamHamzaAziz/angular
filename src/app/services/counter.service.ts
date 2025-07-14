import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = signal(0)
  message = signal('')

  updateValue(type: string) {
    this.message.set('')
    if (type === 'increment') {
      this.counter.update((prev) => prev + 1)
    } else if (type === 'decrement') {
      if (this.counter() === 0) {
        this.message.set('Counter is already at 0')
        return
      }
      this.counter.update((prev) => prev - 1)
    } else if (type === 'reset') {
      this.counter.set(0)
    }
  }
}
