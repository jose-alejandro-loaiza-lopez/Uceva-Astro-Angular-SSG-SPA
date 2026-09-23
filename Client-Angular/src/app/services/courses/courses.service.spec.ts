import { TestBed } from '@angular/core/testing';
import { CoursesService } from './courses.service';
import { COURSES } from '../../data/courses.interface';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllCourses debería retornar un observable con los cursos', (done) => {
      service.getAllCourses().subscribe(courses => {
        expect(courses).toEqual(COURSES);
        expect(courses.length).toBe(COURSES.length);
        done();
      });
    });

  });
  
});