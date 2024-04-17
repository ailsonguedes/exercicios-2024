import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionsCreateComponent } from './discussions-create.component';

describe('DiscussionsCreateComponent', () => {
  let component: DiscussionsCreateComponent;
  let fixture: ComponentFixture<DiscussionsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
