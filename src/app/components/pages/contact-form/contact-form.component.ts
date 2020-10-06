
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  FormData: FormGroup;
  isMessageSent: boolean;
  showLoader: boolean;
  dots = '';

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      PhoneNumber: new FormControl(''),
      Subject: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(FormData) {
    this.showLoader = true;
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        this.isMessageSent = true;
        this.showLoader = false;
        this.FormData.reset();
      }, error => {
        console.warn(error.responseText);
        console.log({ error });
      });
  }

}
