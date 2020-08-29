import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { BannerComponent } from './components/banner/banner.component';
import { SidenavComponent } from './global/sidenav/sidenav.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { EventsComponent } from './components/events/events.component';
import { SupportUsComponent } from './components/support-us/support-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { AssociationComponent } from './components/association/association.component';
import { AssociationMembersComponent } from './components/association-members/association-members.component'; 


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SidenavComponent,
    UpcomingEventsComponent,
    EventsComponent,
    SupportUsComponent,
    ContactUsComponent,
    MemberListComponent,
    OurTeamComponent,
    AssociationComponent,
    AssociationMembersComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
