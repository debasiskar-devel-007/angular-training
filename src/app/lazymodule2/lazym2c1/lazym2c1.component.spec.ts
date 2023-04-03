import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazym2c1Component } from './lazym2c1.component';

describe('Lazym2c1Component', () => {
  let component: Lazym2c1Component;
  let fixture: ComponentFixture<Lazym2c1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lazym2c1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lazym2c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
