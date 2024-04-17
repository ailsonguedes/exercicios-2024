import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ResumeInfoService } from '../../services/resumeinfo.service';

@Component({
  selector: 'app-discussions-topic',
  templateUrl: './discussions-topic.component.html',
  styleUrls: ['./discussions-topic.component.scss']
})
export class DiscussionsTopicComponent implements OnInit {
  expanded = false;
  showCreateForm: boolean = false;

  constructor(
    private resumeInfoService: ResumeInfoService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.resumeInfoService.expanded$.subscribe(expanded => {
      this.expanded = expanded;
      console.log('Expanded:', this.expanded);
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

  submitTopic() {
    // Aqui você pode adicionar a lógica para lidar com o envio do tópico
    alert('Tópico enviado!');
  }
}
