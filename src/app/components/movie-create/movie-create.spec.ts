import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MovieCreateComponent } from './movie-create'; 
import { MovieService } from '../../services/movie.service';

describe('MovieCreateComponent', () => { 
  let component: MovieCreateComponent;
  let fixture: ComponentFixture<MovieCreateComponent>; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MovieCreateComponent, 
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [ MovieService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCreateComponent); 
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});