import { Component, OnInit } from '@angular/core';
import Json from '../../assets/liste.json';
import { People } from '../models/people';

@Component({
  selector: 'app-in40and60',
  templateUrl: './in40and60.component.html',
  styleUrls: ['./in40and60.component.css']
})
export class In40and60Component implements OnInit {

  constructor() { }

  list: People[] = Json.results as any;

  in40and60! : People[];

  ngOnInit(): void {
    this.in40and60 = this.list.filter(
      (People) => People.dob.age > 40 && People.dob.age <= 60
    );
  }

}
