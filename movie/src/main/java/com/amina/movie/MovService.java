package com.amina.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class MovService {

    @Autowired
    public MovieRepository mvrepos;

    public MovService(MovieRepository mr)
    {
        this.mvrepos=mr;
    }

    public List<MovieEntity> getAllMovies(){
        return mvrepos.findAll();
    }

    public Optional<MovieEntity> getMovieById(Long id) {
    return mvrepos.findById(id);

    }

    public MovieEntity addMovie(MovieEntity mo){
        return mvrepos.save(mo);
    }

    public Optional<MovieEntity> updateMov(Long id,MovieEntity up){
        //MovieEntity movie;
        return mvrepos.findById(id).map(movie->{
            movie.setName(up.getName());
            movie.setGenre(up.getGenre());
            movie.setRating(up.getRating());
            movie.setRelYear(up.getRelYear());
            return mvrepos.save(movie);
        });
    }

    public boolean delMovie(Long id){
        if(!mvrepos.existsById(id)){
            return false;
        }
        mvrepos.deleteById(id);
        return true;
    }

    public boolean existsById(Long id) {
    return mvrepos.existsById(id); 
}

   
}
