import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('mobilemenu') mobilemenu!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  toogleMobileMenu(): void {
    this.mobilemenu.nativeElement.classList.toggle("hidden")
  }

}
