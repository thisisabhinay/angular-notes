import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotesListComponent } from './pages/notes-list/notes-list.component';

const routes: Routes = [
    {
        path: "",
        component: NotesListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
