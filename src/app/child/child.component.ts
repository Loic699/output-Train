import { Component, OnInit, Output, EventEmitter,  } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public Mot: string;

  @Output()
  public newOnomatopia: EventEmitter<string> = new EventEmitter;
  constructor() { }
 




  ngOnInit(): void {
  }
  sendOnomatopiaToParent() {
    this.newOnomatopia.emit(this.Mot);
  }
  
}
