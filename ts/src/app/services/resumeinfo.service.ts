import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeInfoService {
  private expandedSubject = new BehaviorSubject<boolean>(false);
  expanded$ = this.expandedSubject.asObservable();

  constructor() { }

  setExpanded(expanded: boolean) {
    this.expandedSubject.next(expanded);
  }
}
