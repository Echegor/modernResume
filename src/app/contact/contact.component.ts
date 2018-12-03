import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";
import {EmailService} from "../email.service";
import {Email} from "../data/email";

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

  // private api_url = 'https://luis-echegorri.herokuapp.com/email';
  private api_url = '/email';

  constructor(private _formBuilder: FormBuilder, private emailService: EmailService) {
  }

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

  sendEmail() {
    let email: Email = new Email();
    console.log("form value %o",this.nameFormGroup.get('nameControl').value);
    email.name = this.nameFormGroup.get('nameControl').value;
    email.theirEmail = this.emailFormGroup.get('emailControl').value;
    email.subject = this.subjectFormGroup.get('subjectControl').value;
    email.content = this.contentFormGroup.get('contentControl').value;
    this.emailService.sendEmail(email).subscribe((event) => {
      console.log("Received from sendEmail service %o",event);
    })
  }

}
