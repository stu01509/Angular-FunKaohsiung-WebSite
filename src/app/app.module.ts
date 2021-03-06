import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routeComponent } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SiteComponent } from './site/site.component';
import { FoodComponent } from './food/food.component';
import { ActivityComponent } from './activity/activity.component';
import { TrafficComponent } from './traffic/traffic.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ScrollEventDirective } from './scroll-event.directive';
import { FooterComponent } from './footer/footer.component';
import { IGComponent } from './ig/ig.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    routeComponent,
    NavComponent,
    HomeComponent,
    SiteComponent,
    FoodComponent,
    ActivityComponent,
    TrafficComponent,
    AboutComponent,
    NotFoundComponent,
    ScrollEventDirective,
    FooterComponent,
    IGComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
