/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Note } from "src/app/shared/note.model";
import { NotesService } from "src/app/shared/notes.service";

@Component({
    selector: "app-note-details",
    templateUrl: "./note-details.component.html",
    styleUrls: ["./note-details.component.sass"]
})
export class NoteDetailsComponent implements OnInit {
    note: Note;
    noteId: number;
    new: boolean;

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

        this.route.params.subscribe((params: Params) => {
            this.note = new Note();
            if (!params.id) {
                this.new = true;
                return;
            }
            this.note = this.notesService.get(params.id);
            this.noteId = parseInt(params.id); // Assuming Id(s) to be a integer number
            this.new = false;
        });
    }

    onSubmit(form: NgForm): void {
        this.new ?
            this.notesService.add(form.value) :
            this.notesService.update(this.noteId, form.value.title, form.value.body);

        // Route back to home page (Notes List View)
        this.router.navigateByUrl("/");
    }

    cancel(): void {
        this.router.navigateByUrl("/");
    }
}
