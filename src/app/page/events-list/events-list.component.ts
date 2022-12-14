import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  eventList: Observable<Event[]> = this.eventService.getAll();

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {}

  onEventClicked(event: Event) {
    this.router.navigate([`/event/${event.id}`]);
  }
}


