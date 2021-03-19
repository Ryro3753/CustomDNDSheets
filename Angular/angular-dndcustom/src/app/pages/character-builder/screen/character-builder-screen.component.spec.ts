import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBuilderScreenComponent } from './character-builder-screen.component';

describe('CharacterBuilderScreenComponent', () => {
  let component: CharacterBuilderScreenComponent;
  let fixture: ComponentFixture<CharacterBuilderScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterBuilderScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterBuilderScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
