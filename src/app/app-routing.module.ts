import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./pages/main-layout/main-layout.component";
import { NoteDetailsComponent } from "./pages/note-details/note-details.component";
import { NotesListComponent } from "./pages/notes-list/notes-list.component";

const routes: Routes = [
    {
        path: "",
        component: MainLayoutComponent,
        children: [
            {
                path: "",
                component: NotesListComponent
            }, {
                /* 
                    Make sure 'new' route is above ':id' route as Angular resolves routes 
                    from top to bottom.

                    So if the :id route is above the 'new' route and a request is made to
                    '/new' the Angular will match the :id route and treat the new string 
                    as the id parameter
                */
                path: "new",
                component: NoteDetailsComponent
            }, {
                path: ":id",
                component: NoteDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
