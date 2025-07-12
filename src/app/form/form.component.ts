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
  message = '';
  messageClass = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: [0, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    this.message = ''
    this.messageClass = ''

    if (this.form.invalid) {
      this.message = 'Please fill in all fields';
      this.messageClass = 'text-red-500';
      return;
    }

    this.isSubmitting = true;
    this.buttonText = 'Submitting...';

    const post: Post = this.form.value;
    this.postsService.createPost(post).subscribe({
      next: (res: Post) => {
        this.message = 'Post created successfully';
        console.log(this.message);
        this.messageClass = 'text-green-500';
        console.log('Post created:', res);
        this.isSubmitting = false;
        this.buttonText = 'Submit';
        this.form.reset({ title: '', body: '', userId: 0 });
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error:', err);
        this.isSubmitting = false;
        this.buttonText = 'Submit';
        this.message = 'Something went wrong';
        this.messageClass = 'text-red-500';
      }
    });
  }
}