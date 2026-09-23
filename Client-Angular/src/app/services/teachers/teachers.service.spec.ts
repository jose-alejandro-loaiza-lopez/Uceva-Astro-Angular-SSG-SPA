import { TestBed } from '@angular/core/testing';
import { TeachersService } from './teachers.service';
import { TEACHERS } from '../../data/teachers.interface';

describe('TeachersService', () => {
  let service: TeachersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeachersService);
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllTeachers debería retornar un observable con los docentes', (done) => {
      service.getAllTeachers().subscribe(teachers => {
        expect(teachers).toEqual(TEACHERS);
        expect(teachers.length).toBe(TEACHERS.length);
        done();
      });
    });

  });
  
});