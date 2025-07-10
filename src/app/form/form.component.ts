import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.type';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html'
})
export class FormComponent {
  postsService = inject(PostsService);
  form: FormGroup;
  isSubmitting = false;
  buttonText = 'Submit';
  hasError = false;
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: [0, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.hasError = true;
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    this.isSubmitting = true;
    this.buttonText = 'Submitting...';

    const post: Post = this.form.value;
    this.postsService.createPost(post).subscribe({
      next: (res: Post) => {
        console.log('Post created:', res);
        this.isSubmitting = false;
        this.buttonText = 'Submit';
        this.hasError = false;
        this.errorMessage = '';
        this.form.reset({ title: '', body: '', userId: 0 });
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error:', err);
        this.isSubmitting = false;
        this.buttonText = 'Submit';
        this.hasError = true;
        this.errorMessage = 'Something went wrong';
      }
    });
  }
}