import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MyHeroComponent } from './components/my-hero/my-hero.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB80FsJOOabrT-T-cxAnSfCL4NKfF5_-xo",
  authDomain: "contactjd-b0d8e.firebaseapp.com",
  projectId: "contactjd-b0d8e",
  storageBucket: "contactjd-b0d8e.appspot.com",
  messagingSenderId: "556879638807",
  appId: "1:556879638807:web:cfa5d8bcea1454503ac752"
};


@NgModule({
  declarations: [
    HomeComponent,
    MyHeroComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactMeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ]
})
export class HomeModule { }
