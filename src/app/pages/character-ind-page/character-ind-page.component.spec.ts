import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterIndPageComponent } from './character-ind-page.component';

describe('CharacterIndPageComponent', () => {
  let component: CharacterIndPageComponent;
  let fixture: ComponentFixture<CharacterIndPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterIndPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterIndPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
