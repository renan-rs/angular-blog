import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent implements OnInit {

  @Input()
  photoCover:string = ""
  @Input()
  actorName:string= ""
  @Input()
  actorChar:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
