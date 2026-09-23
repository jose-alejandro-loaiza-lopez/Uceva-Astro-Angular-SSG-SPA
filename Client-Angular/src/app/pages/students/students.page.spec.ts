import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsPage } from './students.page';
import { provideHttpClient } from '@angular/common/http';
import { StudentsService } from '../../services/students/students.service';
import { StudentsTableComponent } from '../../components/students-table/students-table.component';
import { of, throwError } from 'rxjs';
import { STUDENTS_MOCK } from '../../mocks/students.mocks';
import { By } from '@angular/platform-browser';

describe('StudentsPage', () => {
  let component: StudentsPage;
  let fixture: ComponentFixture<StudentsPage>;
  let studentsService: StudentsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsPage, StudentsTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsPage);
    component = fixture.componentInstance;
    studentsService = TestBed.inject(StudentsService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllStudents al iniciar', () => {
    const spyGetAllStudents = jest.spyOn(studentsService, 'getAllStudents').mockReturnValue(of(STUDENTS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllStudents).toHaveBeenCalled();
  });

  it('debería asignar los estudiantes recibidos del servicio', () => {
    jest.spyOn(studentsService, 'getAllStudents').mockReturnValue(of(STUDENTS_MOCK));
    fixture.detectChanges();
    expect(component.students).toEqual(STUDENTS_MOCK);
  });

  it('debería pasar los estudiantes al componente students-table', () => {
    jest.spyOn(studentsService, 'getAllStudents').mockReturnValue(of(STUDENTS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(StudentsTableComponent))
      .componentInstance;
    expect(tableComponent.students).toEqual(STUDENTS_MOCK);
  });

  it('debería manejar el error cuando falla getAllStudents', () => {
    component.students = [];
    const errorResponse = new Error('Error al cargar estudiantes');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(studentsService, 'getAllStudents').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(studentsService.getAllStudents).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.students.length).toBe(0);
  });
});