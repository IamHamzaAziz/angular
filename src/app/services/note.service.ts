import { Injectable } from '@angular/core';
import { Note } from '../models/note.type';

@Injectable({
  providedIn: 'root'  // If we do not provide this, we have to provide it manually, now it is provided automatically for whole app
})
export class NoteService {
  // notes: Array<Note> = []

  // An array with dummy data
  notes: Note[] = [{
    id: 1,
    title: 'Note 1',
    content: 'Content 1',
    userId: 1
  }, {
    id: 2,
    title: 'Note 2',
    content: 'Content 2',
    userId: 2
  }]

  constructor() { }
}
