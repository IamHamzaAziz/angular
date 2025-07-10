import { Component, inject, OnInit, signal } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes.component.html'
})
export class NotesComponent implements OnInit {
  notesService = inject(NoteService)
  notes = signal<Array<Note>>([])

  // runs when this notes component is initialized
  ngOnInit(): void {
    // console.log(this.notesService.notes)
    this.notes.set(this.notesService.notes)
  }
}
