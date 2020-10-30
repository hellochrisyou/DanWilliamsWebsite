import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LessonsComponent } from './lessons/lessons.component';
import { MediaComponent } from './media/media.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'biography', component: BiographyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'media', component: MediaComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
