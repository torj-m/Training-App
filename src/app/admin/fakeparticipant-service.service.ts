import { Injectable } from '@angular/core';
import { ParticipantsITEMS } from '../participants';

@Injectable({
  providedIn: 'root'
})
export class FakeparticipantServiceService {

  constructor() { }
  get() {return ParticipantsITEMS;}
  add(participantItem) {
    participantItem.id = ParticipantsITEMS.length + 1;
    ParticipantsITEMS.push(participantItem);
    }

  delete(participantItem) {
      let index;
      index = ParticipantsITEMS.indexOf(participantItem);
      if (ParticipantsITEMS.indexOf(participantItem) >= 0) {
        ParticipantsITEMS.splice(index, 1);
      }
      }

  getSession(id: number) {
        return ParticipantsITEMS[id - 1];
        }
}
