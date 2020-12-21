/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Note } from "src/app/shared/note.model";

@Component({
    selector: "app-note-details",
    templateUrl: "./note-details.component.html",
    styleUrls: ["./note-details.component.sass"]
})
export class NoteDetailsComponent implements OnInit {
    note: Note;

    constructor() { }

    ngOnInit(): void {
        this.note = new Note();
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    onSubmit(form: NgForm) {
        console.log(form);
    }
}
