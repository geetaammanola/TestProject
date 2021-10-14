import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.page.html',
  styleUrls: ['./visitor-list.page.scss'],
})
export class VisitorListPage implements OnInit {
  VisitorHistory: any;
  localHistory: string;
  visit_details: any;

  constructor() { 

    this.visit_details=JSON.parse( localStorage.getItem("visits2"))
    console.log("  this.visit_details => ",   this.visit_details);


  }

  ngOnInit() {
  }

}
