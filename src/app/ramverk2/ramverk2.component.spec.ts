import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ramverk2Component } from './ramverk2.component';

describe('Ramverk2Component', () => {
  let component: Ramverk2Component;
  let fixture: ComponentFixture<Ramverk2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ramverk2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ramverk2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
