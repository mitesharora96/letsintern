import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router'


import { AppComponent } from './app.component';
import {NavComponent} from './Navigation/nav.component'
import {HomeComponent} from './Home/home.component'
import {MainComponent} from './Main/main.component'

const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'Main', component:MainComponent},
  {path:'home/Main', component:MainComponent},
  {path:'home/:city', component:MainComponent},
  {path:'', component:HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
