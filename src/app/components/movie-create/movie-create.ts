import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-create', 
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './movie-create.html', 
  styleUrls: ['./movie-create.css'] 
})
export class MovieCreateComponent implements OnInit { 
  movieForm: FormGroup;
  isEditMode = false;
  movieId?: number;
  formTitle = 'Create Movie';

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.movieForm = this.fb.group({
      name: ['', Validators.required],
      genre: ['', Validators.required],
      relYear: ['', [Validators.required, Validators.min(1888)]],
      rating: ['', [Validators.min(1), Validators.max(10)]]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.movieId = +id;
        this.formTitle = 'Edit Movie';
        this.movieService.getMovieById(this.movieId).subscribe((movie) => {
          this.movieForm.patchValue(movie);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.movieForm.valid) {
      const movieData: Movie = this.movieForm.value;
      if (this.isEditMode && this.movieId) {
        this.movieService.updateMovie(this.movieId, movieData).subscribe(() => {
          this.router.navigate(['/movies']);
        });
      } else {
        this.movieService.createMovie(movieData).subscribe(() => {
          this.router.navigate(['/movies']);
        });
      }
    } else {
      this.movieForm.markAllAsTouched();
    }
  }
}