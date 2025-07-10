import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotesComponent } from './notes/notes.component';
import { PostsComponent } from './posts/posts.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'notes',
        component: NotesComponent
    },
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: 'form',
        component: FormComponent
    }
];
