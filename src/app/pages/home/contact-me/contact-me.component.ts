import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;
  isSuccess:boolean = false;
  username: string = '';

  private contactJd: AngularFirestoreCollection<any>;
  constructor(private formBuilder: FormBuilder, private fireStore: AngularFirestore) { }

  ngOnInit(): void {
    this.contactJd = this.fireStore.collection('enquiry');
    this.contactForm = this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      message:['',[Validators.required,Validators.minLength(10)]]
    })
  }

  onSubmit(data:any){
    this.contactJd.add(data).then(res=>{
      console.log(data);
    })
    .catch(err=>{
      console.log(err);
    })
    this.submitted = true;
    if(this.contactForm.invalid){
      return
    }
    else {
      this.isSuccess = true;
    }
    setTimeout(()=>{
      this.isSuccess = false;
    },3000)
  }

}
