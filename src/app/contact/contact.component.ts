import {AfterViewInit, Component, OnInit} from '@angular/core';
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
export class ContactComponent implements OnInit, AfterViewInit {
  isLinear = true;
  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  subjectFormGroup: FormGroup;
  contentFormGroup: FormGroup;
  public targetInput = 'input0';

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
        question: 'Are you sure you want to send this email?',
        message: 'An email conversation will be started between you and me.',
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

  ngAfterViewInit() {
    this.setFocus();
  }

  private setFocus() {
    let targetElem = document.getElementById(this.targetInput);
    setTimeout(function waitTargetElem() {
      if (document.body.contains(targetElem)) {
        targetElem.focus();
      } else {
        setTimeout(waitTargetElem, 100);
      }
    }, 100);
  }

  onChange(event: any) {
    let index = String(event.selectedIndex);
    this.targetInput = 'input' + index;
    this.setFocus();
  }
}
