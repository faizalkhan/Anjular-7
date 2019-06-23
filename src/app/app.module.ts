import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';

import { Approute} from './app.routes';
import { RouterModule } from '@angular/router';
 
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopBarComponent,
    DashboardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(Approute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
