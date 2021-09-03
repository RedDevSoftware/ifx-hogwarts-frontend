import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonHogwartsTableComponent } from './person-hogwarts-table.component';

describe('PersonHogwartsTableComponent', () => {
  let component: PersonHogwartsTableComponent;
  let fixture: ComponentFixture<PersonHogwartsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonHogwartsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonHogwartsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
