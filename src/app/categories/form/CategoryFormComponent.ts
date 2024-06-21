import { Component, EventEmitter, Input, Output, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../category.dto';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './form.component.html',
  styles: ``
})
export class CategoryFormComponent {

  @Output() save = new EventEmitter<Category>();

  onSubmit() {
    console.log('botao salvar clicado no category-form.component.')
    this.save.emit(this.categoryForm.value as Category);
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

  @Input()
   set category(category: Category) {
    this.categoryForm.setValue(category);
  }

}