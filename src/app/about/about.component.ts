import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
clsName = 'container-one';
clsName2 = 'container-two';
  constructor() { }

  ngOnInit() {
  }

}
