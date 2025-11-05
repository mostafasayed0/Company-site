import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ToastrModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  private readonly _FormBuilder = inject(FormBuilder);
  private toastr = inject(ToastrService);
  contactForm: FormGroup = this._FormBuilder.group({
    fname: [
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    lname: [
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    email: [null, [Validators.required, Validators.email]],
    phone: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^(\+?(?:20|966|971|965|974|973|968|962|961|212|213|216|218|249|963|964|967|970))?[0-9]{6,12}$/
        ),
      ],
    ],

    message: [null, [Validators.required, Validators.minLength(3)]],
    acceptTerms: [false, Validators.requiredTrue],
  });

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.toastr.success('تم إرسال رسالتك بنجاح ✅', 'شكراً لك!');
      console.log(this.contactForm.value);
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
