import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ramverk1Component } from './ramverk1.component';

describe('Ramverk1Component', () => {
  let component: Ramverk1Component;
  let fixture: ComponentFixture<Ramverk1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ramverk1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ramverk1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
