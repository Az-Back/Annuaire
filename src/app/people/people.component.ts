import { Component, Input, OnInit } from '@angular/core';
import { People } from '../models/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  constructor() { }
  @Input() people!: People;
  
  ngOnInit(): void {
  }

}
