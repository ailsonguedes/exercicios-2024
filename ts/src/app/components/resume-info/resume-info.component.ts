import { Component, OnInit } from '@angular/core';
import { ResumeInfoService } from '../../services/resumeinfo.service';

@Component({
  selector: 'app-resume-info',
  templateUrl: './resume-info.component.html',
  styleUrls: ['./resume-info.component.scss']
})
export class ResumeInfoComponent implements OnInit {
  expanded: boolean = false;

  constructor(private resumeInfoService: ResumeInfoService) { }

  ngOnInit(): void {
  }

  expandirTexto(): void {
    this.expanded = true;
    this.resumeInfoService.setExpanded(true);
    console.log('press')
  }

  contrairTexto(): void {
    this.expanded = false;
    this.resumeInfoService.setExpanded(false);
    console.log('Botão "Ver menos" clicado.');
  }

}
