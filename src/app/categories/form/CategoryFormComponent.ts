import { Component, EventEmitter, Output, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  templateUrl: './form.component.html',
  styles: ``
})
export class CategoryFormComponent {

  @Output() save = new EventEmitter();
  onSubmit() {
    console.log('botao salvar clicado no category-form.component.')
    this.save.emit(this.categoryForm.value);
  }

  @Output() back = new EventEmitter();

  onBack() {
    this.back.emit();
  }

  private fb = inject(FormBuilder)
  categoryForm = this.fb.group({
    id: [null],
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', Validators.required]
  })
}

