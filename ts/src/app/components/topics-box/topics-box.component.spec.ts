import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsBoxComponent } from './topics-box.component';

describe('TopicsBoxComponent', () => {
  let component: TopicsBoxComponent;
  let fixture: ComponentFixture<TopicsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
