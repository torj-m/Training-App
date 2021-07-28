import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantssComponent } from './participantss.component';

describe('ParticipantssComponent', () => {
  let component: ParticipantssComponent;
  let fixture: ComponentFixture<ParticipantssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
