import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from '../resume/resume.component';
import { HomeComponent } from '../home/home.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { TravelComponent } from '../travel/travel.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
	{	path: '', component: HomeComponent },
	{	path: 'resume', component: ResumeComponent},
	{	path: 'about-me', component: AboutMeComponent},
	{ 	path: 'travel', component: TravelComponent },
	{   path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [],
	imports: [
	  	RouterModule.forRoot(routes),
	    CommonModule
	],
	exports: [
		RouterModule 
	],
})
export class AppRoutingModule { }
