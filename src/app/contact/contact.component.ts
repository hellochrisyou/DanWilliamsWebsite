import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../service/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  FormData: FormGroup;
  constructor(private fb: FormBuilder, private contact: ContactService) { }

  ngOnInit(): void {
    this.FormData = this.fb.group({
      Fullname: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Comment: ['', [Validators.required]]
    });
  }

  onSubmit(FormData) {
    console.log(FormData);
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm';
        console.log(response);
      }, error => {
        console.warn(error.responseText);
        console.log({ error });
      });
  }
}
