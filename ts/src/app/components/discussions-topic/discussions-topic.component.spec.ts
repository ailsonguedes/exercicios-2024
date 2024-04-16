import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionsTopicComponent } from './discussions-topic.component';

describe('DiscussionsTopicComponent', () => {
  let component: DiscussionsTopicComponent;
  let fixture: ComponentFixture<DiscussionsTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionsTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionsTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
