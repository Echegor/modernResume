import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isLinear = true;
  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  subjectFormGroup: FormGroup;
  contentFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.nameFormGroup = this._formBuilder.group({
      nameControl: ['', Validators.required]
    });
    this.emailFormGroup = this._formBuilder.group({
      emailControl: ['', Validators.email]
    });
    this.subjectFormGroup = this._formBuilder.group({
      subjectControl: ['', Validators.required]
    });
    this.contentFormGroup = this._formBuilder.group({
      contentControl: ['', Validators.required]
    });
  }

}
