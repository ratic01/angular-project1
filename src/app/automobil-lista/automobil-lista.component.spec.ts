import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobilListaComponent } from './automobil-lista.component';

describe('AutomobilListaComponent', () => {
  let component: AutomobilListaComponent;
  let fixture: ComponentFixture<AutomobilListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutomobilListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomobilListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
