import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list: any = [
    {
      name:  'Customs Ruling (Advance) Rules, 2016'
    },
    {
      name: 'Advance Ruling Application Form',
    },
    {
      name: 'Advance Ruling Application Form (English)',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
