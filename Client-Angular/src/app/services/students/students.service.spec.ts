import { TestBed } from '@angular/core/testing';
import { StudentsService } from './students.service';
import { STUDENTS } from '../../data/students.interface';

describe('StudentsService', () => {
  let service: StudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsService);
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllStudents debería retornar un observable con los estudiantes', (done) => {
      service.getAllStudents().subscribe(students => {
        expect(students).toEqual(STUDENTS);
        expect(students.length).toBe(STUDENTS.length);
        done();
      });
    });

  });
  
});