import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'carro-entrada',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss']
})

export class EntradaComponent {
  carroForm!: FormGroup;
  private formBuilder = inject(FormBuilder);
  private route = inject(Router);
  constructor()
  {
    this.createForm();
  }

  createForm(): void{
    this.carroForm = this.formBuilder.group({
      Marca: ["", Validators.required],
      Modelo: ["", Validators.required],
      Placa: ["", Validators.required],
      HoraEntrada: ["", Validators.required],
    });
  }

  onSubmit(){
    const formValues = this.carroForm.value;
    console.log(formValues);
    this.route.navigate(['']);
  }
}
