import { Component, OnInit } from '@angular/core';
import Json from '../../assets/liste.json';
import { People } from '../models/people';

@Component({
  selector: 'app-more60',
  templateUrl: './more60.component.html',
  styleUrls: ['./more60.component.css']
})
export class More60Component implements OnInit {

  constructor() { }
  list: People[] = Json.results as any;

  more60! : People[];

  ngOnInit(): void {
    this.more60 = this.list.filter((People) => People.dob.age > 60);
  }

}
