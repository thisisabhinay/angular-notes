/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, ElementRef, Input, OnInit, Output, Renderer2, ViewChild, EventEmitter } from "@angular/core";

@Component({
    selector: "app-note-card",
    templateUrl: "./note-card.component.html",
    styleUrls: ["./note-card.component.sass"]
})
export class NoteCardComponent implements OnInit {

    @Input("title") title: string;
    @Input("body") body: string;
    @Input("link") link: string;

    @Output("delete") deleteEvent: EventEmitter<void> = new EventEmitter<void>();

    @ViewChild("truncator") truncator: ElementRef<HTMLElement>;
    @ViewChild("bodyText") bodyText: ElementRef<HTMLElement>;

    constructor(private renderer: Renderer2) { }

    ngOnInit(): void {
        /*
        NOT WORKING:
        
        // If text not overflowing, hide the tuncator
        
        const style = window.getComputedStyle(this.bodyText.nativeElement, null);
        const viewableHeight = parseInt(style.getPropertyValue("height"), 10);

        if (this.bodyText.nativeElement.scrollHeight <= viewableHeight) {
            this.renderer.setStyle(this.truncator.nativeElement, "didplay", "none");
        }
        */
    }

    deleteNote(): void {
        this.deleteEvent.emit();
    }

}
