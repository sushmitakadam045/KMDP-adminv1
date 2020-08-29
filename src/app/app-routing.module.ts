import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { EventsComponent } from './components/events/events.component';
import { SupportUsComponent } from './components/support-us/support-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { AssociationComponent  } from './components/association/association.component';
import { AssociationMembersComponent } from './components/association-members/association-members.component';


const routes: Routes = [
  {path: 'banner',component: BannerComponent},
  {path: 'upcomingEvents',component: UpcomingEventsComponent},
  {path: 'events',component: EventsComponent},
  {path: 'supportUs',component: SupportUsComponent},
  {path: 'contactUs',component: ContactUsComponent},
  {path: 'memberList',component: MemberListComponent},
  {path: 'ourTeam',component: OurTeamComponent},
  {path: 'association',component: AssociationComponent},
  {path: 'associationMembers',component: AssociationMembersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
