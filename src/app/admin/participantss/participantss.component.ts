import { Component, OnInit } from '@angular/core';
import { FakeparticipantServiceService } from '../fakeparticipant-service.service';
@Component({
  selector: 'app-participantss',
  templateUrl: './participantss.component.html',
  styleUrls: ['./participantss.component.css']
})
export class ParticipantssComponent implements OnInit {
participantItems
  constructor(private participantItemService: FakeparticipantServiceService) { }
  nbpart: number;
  
  ngOnInit(): void {
    this.participantItems=this.participantItemService.get();
    console.log(this.participantItems);
    
  }

}
