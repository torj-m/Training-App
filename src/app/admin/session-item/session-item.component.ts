import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; 
import { FakesessionitemService } from '../fakesessionitem.service';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  @Input() session: any;
  @Output() participantsChange = new EventEmitter<any>();
  constructor(private sessionItemService: FakesessionitemService) { }

  ngOnInit(): void {
  }
  onDelete() {
    this.sessionItemService.delete(this.session);
  }
inscrire(){
    console.log('Nouvelle Inscription...');
    this.session.name="formation web";
    this.session.participants = +this.session.participants +1;
    console.log(this.session.participants + ' Participants');
    this.participantsChange.emit({ 
      value : this.session.participants
    });
    if (this.session.participants >= 20){
      this.session.isCompleted  =true;
    }
}

}
