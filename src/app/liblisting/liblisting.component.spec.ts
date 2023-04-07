import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiblistingComponent } from './liblisting.component';

describe('LiblistingComponent', () => {
  let component: LiblistingComponent;
  let fixture: ComponentFixture<LiblistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiblistingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiblistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
