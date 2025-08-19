import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-details.html', 
  styleUrls: ['./movie-details.css']
})
export class MovieDetailsComponent implements OnInit {
  movie?: Movie; 

  constructor(
    private movieService: MovieService, 
    private route: ActivatedRoute       
  ) {}

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getMovieById(+id).subscribe((data) => {
        this.movie = data; 
      });
    }
  }
}