import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  imports: [],
  templateUrl: './eventbinding.component.html',
  styleUrl: './eventbinding.component.css'
})
export class EventbindingComponent {

  myMethod(e : any){
    console.log(e.target.value)
  }
}
