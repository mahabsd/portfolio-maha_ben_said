import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
showDetails: boolean = false;
showDetailssecondproject: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
