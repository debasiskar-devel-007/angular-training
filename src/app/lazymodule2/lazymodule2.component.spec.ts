import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazymodule2Component } from './lazymodule2.component';

describe('Lazymodule2Component', () => {
  let component: Lazymodule2Component;
  let fixture: ComponentFixture<Lazymodule2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lazymodule2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lazymodule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
