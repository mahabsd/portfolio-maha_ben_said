import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  hoverAbout: boolean = false
  hoverSkills: boolean = false
  hoverProjects: boolean = false
  hoverWork: boolean = false
  hoverContact: boolean = false
  helloPageContact: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
