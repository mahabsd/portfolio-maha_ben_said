import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }
  goToResume(){
    this.document.location.href = "http://localhost:4200/assets/BenSaidMaha-Resume.pdf";
}
}
