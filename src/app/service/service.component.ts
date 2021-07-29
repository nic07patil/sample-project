import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  
  model :any;

  constructor() { }

  ngOnInit() {
  
  this.model=
  [
    { 
      firstname: 'Bhavana',
      lastname: 'Nikam',
      point: 10

    },
    {
      firstname: 'Aakanksha',
      lastname: 'Nikam',
      point: 20
    },
    {
      firstname: 'Bhaghya',
      lastname: 'Bhaskaran',
      point: 10
    }
  ]
}

}
