import { Component,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Output';


  public onomatopoeias: string[] = []; 


  constructor(){}

  ngOnInit(){}

  onReceiveNewOnomatopia(bli:string) {
    this.onomatopoeias.push(bli);
    // 'String sent by child component to parent component'
  }
}
