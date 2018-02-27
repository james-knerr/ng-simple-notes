import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { NoteVM } from '../../shared.module/models/note-vm';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public notes = new Array<NoteVM>();
  public selectedNoteId = null;

  constructor(private _mainService: MainService) {}

ngOnInit() {
  this.getNotes();
}

private getNotes() {
  this._mainService.getNotes().subscribe(k => {
    this.notes = k;
  });
}

public deleteNote(event: any, noteId: number) {
  event.stopPropagation();
  this.notes[noteId].isDeleted = true;
  if (this.selectedNoteId === noteId) {
    this.selectedNoteId = null;
  }
}

public noteSelected(noteId: number) {
  this.selectedNoteId = noteId;
}
}
