package com.amina.movie;

import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;

@Entity
@Table(name="mystud")
public class MovieEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long movie_id;

    private String movName;

    private String genre;

    private Double rating;

    private Integer releaseYear;

    public MovieEntity(){

    }

    public MovieEntity(String nm,String gen,Double ra,Integer rely){
        this.movName=nm;
        this.genre=gen;
        this.rating=ra;
        this.releaseYear=rely;

    }
    
    // My getters and setters methods (0-0)
    //  (\_/)
    //  (0-0)
    //  / >x\
    public Long getId(){
        return movie_id;
    }

    public void setId(Long id){
        this.movie_id=id;
    }

    public String getName(){
        return movName;
    }

    public void setName(String n){
        this.movName=n;
    }

    public String getGenre(){
        return genre;
    }

    public void setGenre(String g){
        this.genre=g;
    }

    public Double getRating(){
        return rating;
    }

    public void setRating(Double dr){
        this.rating=dr;
    }

    public Integer getRelYear(){
        return releaseYear;
    }

    public void setRelYear(Integer y){
        this.releaseYear=y;
    }
}
