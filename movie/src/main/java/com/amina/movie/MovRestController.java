package com.amina.movie;

import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200") 
@RestController
@RequestMapping("/api/movies")
public class MovRestController {

    @Autowired
    private MovService mvs;

    @GetMapping
    public List<MovieEntity> getAllMovies() {
        return mvs.getAllMovies();
    }

   @GetMapping("/{movie_id}")
public ResponseEntity<MovieEntity> getMovieById(@PathVariable("movie_id") Long id) {
    Optional<MovieEntity> movie = mvs.getMovieById(id);
    if (movie.isEmpty()) {
        return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(movie.get());
}


    @PostMapping
    public MovieEntity createMovie(@RequestBody MovieEntity mo) {
        return mvs.addMovie(mo);
    }

   @PutMapping("/{movie_id}")
public ResponseEntity<MovieEntity> updateMov(@PathVariable("movie_id") Long id,@RequestBody MovieEntity mov) {
    if (!mvs.existsById(id)) {
        return ResponseEntity.notFound().build();
    }

    Optional<MovieEntity> updated = mvs.updateMov(id, mov);
    return updated.map(ResponseEntity::ok)
                  .orElseGet(() -> ResponseEntity.notFound().build());
}


    @DeleteMapping("/{movie_id}")
    public ResponseEntity<Void> delMovie(@PathVariable("movie_id") Long id) {
        if (!mvs.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        mvs.delMovie(id);
        return ResponseEntity.noContent().build();
    }
}
