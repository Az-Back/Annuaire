import { Component, OnInit } from '@angular/core';
import Json from '../../assets/liste.json';
import { People } from '../models/people';

@Component({
  selector: 'app-under40',
  templateUrl: './under40.component.html',
  styleUrls: ['./under40.component.css']
})
export class Under40Component implements OnInit {

  constructor() { }
  list: People[] = Json.results as any;

  under40! : People[];

  ngOnInit(): void {
    this.under40 = this.list.filter((People) => People.dob.age <= 40);
    this.list[0];
  }

}
