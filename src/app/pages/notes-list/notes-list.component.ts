/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from "@angular/core";
import { Note } from "src/app/shared/note.model";
import { NotesService } from "src/app/shared/notes.service";

@Component({
    selector: "app-notes-list",
    templateUrl: "./notes-list.component.html",
    styleUrls: ["./notes-list.component.sass"]
})
export class NotesListComponent implements OnInit {
    notes: Note[] = new Array<Note>();
    constructor(private notesService: NotesService) { }

    ngOnInit(): void {
        // Retrieving all notes from the NoteService
        this.notes = this.notesService.getAll();
    }

    deleteNote(id: number): void { // Assuming id to be an integer number
        this.notesService.delete(id);
    }

}
