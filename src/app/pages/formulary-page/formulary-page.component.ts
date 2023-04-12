import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulary-page',
  templateUrl: './formulary-page.component.html',
  styleUrls: ['./formulary-page.component.scss']
})
export class FormularyPageComponent {
  
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.contactForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      name: ["", [Validators.required, Validators.maxLength(10)]],
      age: ["", [Validators.required, Validators.max(100)]],
    })
  }

  submit(){
    console.log(this.contactForm.value);
    console.log(this.contactForm);
  }

}
