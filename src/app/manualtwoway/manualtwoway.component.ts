import { Component } from '@angular/core';

@Component({
  selector: 'app-manualtwoway',
  imports: [],
  templateUrl: './manualtwoway.component.html',
  styleUrl: './manualtwoway.component.css'
})
export class ManualtwowayComponent {
  firstName = "";
  lastName = "";
  imagePath = "";
  imageDefaultSize = 300;
  imageCurrentSize = 300;

  setFirstName(e : any){
    this.firstName = e.target.value;
  }
  setLastName(e : any){
    this.lastName = e.target.value;
  }
  setImage(e : any){
    this.imagePath = e.target.value;
  }
  changeImgSize(e : any){
    this.imageCurrentSize = this.imageDefaultSize*e.target.value/100;
  }
}
