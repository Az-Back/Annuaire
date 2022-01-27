import { Component, OnInit, Input } from '@angular/core';
import { Under40Component } from '../under40/under40.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private personnels: ActivatedRoute){} 
  @Input() people!: Under40Component;
  ngOnInit(): void {
}
}