import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { ContactComponent } from '../app/components/contact/contact.component';
import { BlogComponent } from '../app/components/blog/blog.component';
import { QuizComponent } from '../app/components/quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    },
    {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
