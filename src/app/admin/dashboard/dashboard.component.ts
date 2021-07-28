import { Component, OnInit } from '@angular/core';
import { FakesessionitemService } from '../fakesessionitem.service';
import { FakeparticipantServiceService } from '../fakeparticipant-service.service';
import { FakeFormateurServiceService } from '../fake-formateur-service.service';

export interface PeriodicElement {
  Track: string;
  Nombre: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Track: "MEAN Stack", Nombre: 2},
  {Track: "Android", Nombre: 2},
  {Track: "Ionic", Nombre: 1},
  {Track: "Angular", Nombre: 0},
  {Track: "NodeJS", Nombre: 0},
  {Track: "Xamarian", Nombre: 0},

];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private fakesessionItem: FakesessionitemService,
     private fakeparticipant: FakeparticipantServiceService,
     private fakeformateur: FakeFormateurServiceService ){}
  nbrSess: number; //nombre des sessions
  nbpart:number;  //nombre des participants
  nbform:number;  //nombre des formateurs
  partlist: any;  //liste des participants
  listsess: any;  //liste des sessions
  listform: any;  //liste des formateurs
  displayedColumns: string[] = ['Track','Nombre'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    //nombre de sessions:
    this.listsess=this.fakesessionItem.get();
    this.nbrSess=this.listsess.length;
    //nombre de participants:
    this.partlist=this.fakeparticipant.get();
    this.nbpart=this.partlist.length;
    //nombre de formateurs:
    this.listform=this.fakeformateur.get();
    this.nbform=this.listform.length;
  }

}
