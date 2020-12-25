/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Note } from "src/app/shared/note.model";
import { NotesService } from "src/app/shared/notes.service";

@Component({
    selector: "app-note-details",
    templateUrl: "./note-details.component.html",
    styleUrls: ["./note-details.component.sass"]
})
export class NoteDetailsComponent implements OnInit {
    note: Note;

    constructor(private notesService: NotesService, private router: Router) { }

    ngOnInit(): void {
        this.note = new Note();
    }

    onSubmit(form: NgForm): void {
        this.notesService.add(form.value);
        this.router.navigateByUrl("/");
    }

    cancel(): void {
        this.router.navigateByUrl("/");
    }
}
