import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";

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

  private api_url = 'https://luis-echegorri.herokuapp.com/email';

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {
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
    let params = new HttpParams();
    params.set(
      'name', this.nameFormGroup.getRawValue()
    ).set(
      'theirEmail', this.nameFormGroup.getRawValue()
    ).set(
      'subject', this.subjectFormGroup.getRawValue()
    ).set(
      'content', this.contentFormGroup.getRawValue()
    );

    this.http.get(this.api_url, {params: params}).subscribe(result => {
      console.log("Received result %o", result);
    });
  }

}
