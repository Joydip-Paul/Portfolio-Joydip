import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      message:['',[Validators.required,Validators.minLength(10)]]
    })
  }

  onSubmit(){
    this.submitted = true;
    if(this.contactForm.invalid){
      return
    }
    alert("Success");
  }

}
