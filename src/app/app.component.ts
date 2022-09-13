/*
import { Component } from '@angular/core';

import TextFieldComponent from 'formiojs/components/textfield/TextField';


export default class CustomTextFieldComponent extends TextFieldComponent {
  // Override the createLabel method.
  createLabel(container: HTMLElement) {
    super.createLabel(container);
  }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'extend-formio';
}
*/

// import FormioForm from 'formiojs';

import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { Formio } from 'angular-formio';
// import { Router } from '@angular/router';
// import { FormioAuthService } from 'angular-formio/auth';
import { registerAutocompleteComponent } from './modal/modal.formio'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";
  builder = true;


  constructor(private injector: Injector) {
  }

  @ViewChild("json") jsonElement?: ElementRef;
  public form: Object = { components: [] };

  onChange(event: any) {
  }
  ngOnInit(): void {

  }
  
}