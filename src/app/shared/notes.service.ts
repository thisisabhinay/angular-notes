/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from "@angular/core";
import { Note } from "./note.model";

@Injectable({
    providedIn: "root"
})
export class NotesService {

    // Create an array of 'Notes'
    // Here, we are assuming the id of the note be equivalent to its index in the array
    notes: Note[] = new Array<Note>();

    constructor() { }

    // Get a note from the given id
    get(id: number) {
        return this.notes[id];
    }

    // Get id of the given Note
    getId(note: Note) {
        return this.notes.indexOf(note);
    }

    // Add a new Note to the collection
    add(note: Note) {
        return this.notes.push(note) - 1; // Returns the index/id of the newly created note
    }

    // Get all complete collection of Note
    getAll() {
        return this.notes;
    }

    // Update the Note with given id and content
    update(id: number, title: string, body: string) {
        const note = this.notes[id];
        note.title = title;
        note.body = body;
    }

    // Deletes a Note from the collection
    delete(id: number) {
        this.notes.splice(id, 1);
    }
}
