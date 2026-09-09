import { Component, HostListener, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DarkmodeService } from 'src/app/service/darkmode/darkmode.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;
  isSuccess: boolean = false;
  username: string = '';

  showDiv: boolean = false;

  private contactJd: AngularFirestoreCollection<any>;
  constructor(private formBuilder: FormBuilder, private fireStore: AngularFirestore, private darkModeService: DarkmodeService) { }

  ngOnInit(): void {
    this.contactJd = this.fireStore.collection('enquiry');
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  onSubmit(data: any) {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return
    }

    this.username = data.name;
    this.contactJd.add(data).catch(err => console.log(err));

    const whatsappMessage = `Hello Joydip, my name is ${data.name}.\n\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
    window.open(`https://wa.me/8801759696957?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    this.isSuccess = true;

    setTimeout(() => {
      this.isSuccess = false;
      this.contactForm.reset();
      this.submitted = false;
    }, 3000)
  }
}
