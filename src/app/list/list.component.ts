import { Component, OnInit } from '@angular/core';
import Json from '../../assets/liste.json';
import { People } from '../models/people';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() {}

  list: People[] = Json.results as any;

  under40! : People[];
  in40and60! : People[];
  more60! : People[];

  ngOnInit(): void {
    this.under40 = this.list.filter((People) => People.dob.age <= 40);

    this.in40and60 = this.list.filter
    (
      (People) => People.dob.age > 40 && People.dob.age <= 60
    );

    this.more60 = this.list.filter((People) => People.dob.age > 60);
    
    this.list[0];
  }

}
