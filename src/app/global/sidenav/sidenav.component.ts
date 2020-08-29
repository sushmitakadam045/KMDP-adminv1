import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { UpcomingEventsComponent } from '../../components/upcoming-events/upcoming-events.component';
import { EventsComponent } from '../../components/events/events.component';
import { SupportUsComponent } from '../../components/support-us/support-us.component';
import { ContactUsComponent } from '../../components/contact-us/contact-us.component';
import { MemberListComponent } from '../../components/member-list/member-list.component';
import { OurTeamComponent } from '../../components/our-team/our-team.component';
import { AssociationComponent  } from '../../components/association/association.component';
import { AssociationMembersComponent } from '../../components/association-members/association-members.component';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
  routes1:any
  routerConfig: any
  constructor() { }

  ngOnInit(): void {
    this.routerConfig = [
      {
        path: 'banner',
        component: BannerComponent,
        label:'Banner'
      },
      {
        path: 'upcomingEvents',
        component: UpcomingEventsComponent ,
        label:'Upcoming Events'
      },
      {
        path: 'events',
        component: EventsComponent,
        label:'Events'
      },
      {
        path: 'supportUs',
        component: SupportUsComponent,
        label:'Support Us'
      },
      {
        path: 'contactUs',
        component: ContactUsComponent,
        label:'Contact Us'
      },
      {
        path: 'memberList',
        component: MemberListComponent,
        label:'Member List'
      },
      {
        path: 'ourTeam',
        component: OurTeamComponent,
        label:'Our Team'
      },
      {
        path: 'association',
        component: AssociationComponent,
        label:'Association'
      },
      {
        path: 'associationMembers',
        component: AssociationMembersComponent,
        label:'Association Members'
      },

    ];
    // this.routes1=['Banner','Upcoming Events','Events','Support Us','Contact Us','Member List','Our Team','Association','Association Members']
  }
}