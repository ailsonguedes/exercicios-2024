import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-info',
  templateUrl: './resume-info.component.html',
  styleUrls: ['./resume-info.component.scss']
})
export class ResumeInfoComponent implements OnInit {
  expanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  expandirTexto(): void {
    this.expanded = !this.expanded;
    console.log('press')
  }

  contrairTexto(): void {
    this.expanded = !this.expanded;
  }

}
