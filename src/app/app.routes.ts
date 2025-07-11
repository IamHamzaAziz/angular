import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'notes',
        loadComponent: () => import('./notes/notes.component').then(m => m.NotesComponent)
    },
    {
        path: 'posts',
        loadComponent: () => import('./posts/posts.component').then(m => m.PostsComponent)
    },
    {
        path: 'form',
        loadComponent: () => import('./form/form.component').then(m => m.FormComponent)
    }
];
