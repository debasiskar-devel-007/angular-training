import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazym1c1Component } from './lazym1c1.component';

describe('Lazym1c1Component', () => {
  let component: Lazym1c1Component;
  let fixture: ComponentFixture<Lazym1c1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lazym1c1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lazym1c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
