/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Note } from "src/app/shared/note.model";
import { NotesService } from "src/app/shared/notes.service";

@Component({
    selector: "app-note-details",
    templateUrl: "./note-details.component.html",
    styleUrls: ["./note-details.component.sass"]
})
export class NoteDetailsComponent implements OnInit {
    note: Note;

    constructor(private notesService: NotesService) { }

    ngOnInit(): void {
        this.note = new Note();
    }

    onSubmit(form: NgForm): void {
        this.notesService.add(form.value);
        console.log(this.notesService.getAll());
    }
}
