import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VisitorDataService } from '../services/visitor-data.service';



@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.page.html',
  styleUrls: ['./visitor-form.page.scss'],
})
export class VisitorFormPage implements OnInit {
  visit: FormGroup;
  localHistory: any;
  // old_visit: Array <any> =[];

  d: Date;
  today: string;
  constructor(public formBuilder : FormBuilder, public VisitorData :VisitorDataService) { 
    localStorage.setItem("visited" , "notvisited");
    console.log("all logs==> " ,JSON.parse( localStorage.getItem("visits2")));

    // getting Current Date
    this.d = new Date();
    this.today = this.d.getDate() + "-" +(this.d.getMonth() + 1) +"-" +this.d.getFullYear();
    console.log(" today ==> ", this.today);

    
  }

  ngOnInit() {
    this.visit = this.formBuilder.group({
     
  name : ['', Validators.required],
 email: ['', Validators.compose([
  Validators.required,
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
     ])],
  type_of_visit : ['', Validators.required],
  person_to_visit : ['', Validators.required],
  date_of_entry : [ this.today],
  time_of_entry : ['', Validators.required],
  // time_of_exit : ['', Validators.required],
  time_of_exit : [''],
    })
  }

  // validation Messages
 validation_messages = {

    'name': [{
        type: 'required',
        message: 'Name is required.'
      },
   ],


    'email': [{
        type: 'required',
        message: 'Email id is required.'
      },
      {
        type: 'pattern',
        message: 'please enter valid email'
      }
    ],


    'type_of_visit': [{
      type: 'required',
      message: 'Type of visit  is required.'
    }],

    'person_to_visit': [{
      type: 'required',
      message: 'Person to visit  is required.'
    }],

    'date_of_entry': [{
      type: 'required',
      message: 'Date of entry  is required.'
    }],

    'time_of_entry': [{
      type: 'required',
      message: 'time of entry  is required.'
    }],

   };

   newVisit(visit_Record){

   var old_visit: any;
   var old_visit1:any;
   var visit_Status: string;
   var vis_data = [];

   visit_Record =visit_Record.value;

    // converting string to Object
  old_visit=  JSON.stringify( localStorage.getItem("visits2"));
  console.log("old visit1 ==> " ,JSON.parse(old_visit));

  old_visit1 = JSON.parse( localStorage.getItem("visits2"));
  console.log("old visit1 array==> " ,old_visit1);


   var data = {};


   if(  localStorage.getItem("visited")=='visited'){

    // console.log(" #####old_visit.length ==> " ,JSON.parse( localStorage.getItem("visits2")).length);
    // var len =JSON.parse( localStorage.getItem("visits2")).length; 

// to store the last logs
console.log(" #####old_visit.length ==> " ,old_visit.length);
    for(var key =0; key <JSON.parse( localStorage.getItem("visits2")).length; key++) {
      // var data = {};
    

          data["email"] = old_visit1[key].email;
          data["name"] = old_visit1[key].name;
          data["type_of_visit"] = old_visit1[key].type_of_visit;
          data["person_to_visit"] = old_visit1[key].person_to_visit;
          data["date_of_entry"] = old_visit1[key].date_of_entry;
          data["time_of_entry"] = old_visit1[key].time_of_entry;
          data["time_of_exit"] = old_visit1[key].time_of_exit;
         
      }
 }   
  vis_data.push(data);
 
  localStorage.setItem("visits2" , JSON.stringify( vis_data))
  console.log("after 1st push==> " ,JSON.parse( localStorage.getItem("visits2")));

    var data2 = {};
        data2["email"] = visit_Record.email;
        data2["name"] = visit_Record.name;
        data2["type_of_visit"] = visit_Record.type_of_visit;
        data2["person_to_visit"] = visit_Record.person_to_visit;
        data2["date_of_entry"] = visit_Record.date_of_entry;
        data2["time_of_entry"] = visit_Record.time_of_entry;
        data2["time_of_exit"] = visit_Record.time_of_exit;
    vis_data.push(data2);

console.log("vis_data==> " ,  vis_data);
    localStorage.setItem("visits2" , JSON.stringify( vis_data))
    console.log("old_visit ==> " ,JSON.parse( localStorage.getItem("visits2")));
    localStorage.setItem("visited" , "visited");

   }
}
