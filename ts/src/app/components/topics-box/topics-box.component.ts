import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics-box',
  templateUrl: './topics-box.component.html',
  styleUrls: ['./topics-box.component.scss']
})
export class TopicsBoxComponent implements OnInit {
  expanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  expandir() {
    this.expanded = !this.expanded;
    console.log("Pressionado")
  }

}
