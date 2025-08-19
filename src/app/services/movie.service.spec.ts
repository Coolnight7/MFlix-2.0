import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MovieService } from './movie.service';
import { Movie } from '../models/movie'; 

describe('MovieService', () => {
  let service: MovieService;
  let httpTestingController: HttpTestingController;
  const apiUrl = 'http://localhost:8080/api/movies';

  beforeEach(() => {
    TestBed.configureTestingModule({
  
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });

    service = TestBed.inject(MovieService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

   afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all movies via GET request', () => {
    const mockMovies: Movie[] = [
      { id: 1, name: 'Inception', genre: 'Sci-Fi', relYear: 2010 },
      { id: 2, name: 'The Dark Knight', genre: 'Action', relYear: 2008 }
    ];

    service.getAllMovies().subscribe(movies => {
      expect(movies).toEqual(mockMovies);
      expect(movies.length).toBe(2);
    });

    const req = httpTestingController.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockMovies);
  });

   it('should retrieve a single movie by ID via GET request', () => {
    const mockMovie: Movie = { id: 1, name: 'Inception', genre: 'Sci-Fi', relYear: 2010 };
    const movieId = 1;

    service.getMovieById(movieId).subscribe(movie => {
      expect(movie).toEqual(mockMovie);
    });

    const req = httpTestingController.expectOne(`${apiUrl}/${movieId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockMovie);
  });
});