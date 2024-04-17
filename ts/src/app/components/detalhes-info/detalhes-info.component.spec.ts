import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesInfoComponent } from './detalhes-info.component';

describe('DetalhesInfoComponent', () => {
  let component: DetalhesInfoComponent;
  let fixture: ComponentFixture<DetalhesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
