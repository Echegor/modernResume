import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";
import {EmailService} from "../email.service";
import {Email} from "../data/email";
import {MatDialog, MatSnackBar} from "@angular/material";
import {DialogComponent} from "../dialog/dialog.component";

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

  constructor(
    private _formBuilder: FormBuilder,
    private emailService: EmailService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog) {
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
    console.log("form value %o", this.nameFormGroup.get('nameControl').value);
    email.name = this.nameFormGroup.get('nameControl').value;
    email.theirEmail = this.emailFormGroup.get('emailControl').value;
    email.subject = this.subjectFormGroup.get('subjectControl').value;
    email.content = this.contentFormGroup.get('contentControl').value;
    this.emailService.sendEmail(email).subscribe((event) => {
      console.log("Received from sendEmail service %o", event);
      this.snackBar.open(
        'Email sent!',
        '',
        {duration: 1000}
      );
    })
  }

  sendPressed() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Email',
        message: 'Are you sure you want to send this email? I will receive and email and you will be cc\'d on it',
        yesMessage: 'Yes' ,
        noMessage: 'No'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed with result ' + result);
      if(result){
        this.sendEmail();
      }
    });
  }
}
