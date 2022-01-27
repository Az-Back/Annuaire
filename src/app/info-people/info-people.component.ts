import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Json from '../../assets/liste.json';
import { People } from '../models/people';

@Component({
  selector: 'app-info-people',
  templateUrl: './info-people.component.html',
  styleUrls: ['./info-people.component.css']
})
export class InfoPeopleComponent implements OnInit {
  constructor(private people: ActivatedRoute) {}

  list: People[] = Json.results as any;

  resultats!: People;

  ngOnInit(): void {
    this.people.params.subscribe((x: any) => {
      this.resultats = this.list.find(
        (people) => people.login.uuid === x.people
      )!;
    });
  }

}
