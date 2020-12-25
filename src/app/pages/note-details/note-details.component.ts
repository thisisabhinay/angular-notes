/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Note } from "src/app/shared/note.model";
import { NotesService } from "src/app/shared/notes.service";

@Component({
    selector: "app-note-details",
    templateUrl: "./note-details.component.html",
    styleUrls: ["./note-details.component.sass"]
})
export class NoteDetailsComponent implements OnInit {
    note: Note;

    constructor(
        private notesService: NotesService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        // We want to find if we are creating a new note or editing an existing one
        /* 
        =============================================================================
        An observer is just a callback function which will be executed each time 
        a new message is emitted from the 'observable', which in this case is the
        'params'

        This callback is executed each time there's a change in the route parameters
        ============================================================================= 
        */

        this.route.params.subscribe((params: Params) => { });
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
