import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ResumeInfoService } from '../../services/resumeinfo.service';

@Component({
  selector: 'app-discussions-topic',
  templateUrl: './discussions-topic.component.html',
  styleUrls: ['./discussions-topic.component.scss']
})
export class DiscussionsTopicComponent implements OnInit {
  expanded: boolean = false;
  showCreateForm: boolean = false;
  showCreateSecondForm: boolean = false;
  isExpanded: boolean = false;

  constructor(
    private resumeInfoService: ResumeInfoService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {

   }

  ngOnInit(): void {
    this.resumeInfoService.expanded$.subscribe(expanded => {
      this.expanded = expanded;
      this.adjustPosition();
    });
  }

  adjustPosition(): void {
    const discussionsTopicElement = this.elementRef.nativeElement.querySelector('.discussions-topic__container');
    const newMarginTop = this.expanded ? '20px' : '15px';
    this.renderer.setStyle(discussionsTopicElement, 'margin-top', newMarginTop);
  }

  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
  }

  @ViewChild('topicContainer') topicContainer!: ElementRef;

  submitTopic() {
    this.showCreateSecondForm = !this.showCreateSecondForm;
    this.isExpanded = true;
  }



}
