import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersPage } from './teachers.page';
import { provideHttpClient } from '@angular/common/http';
import { TeachersService } from '../../services/teachers/teachers.service';
import { TeachersTableComponent } from '../../components/teachers-table/teachers-table.component';
import { of, throwError } from 'rxjs';
import { TEACHERS_MOCK } from '../../mocks/teachers.mocks';
import { By } from '@angular/platform-browser';

describe('TeachersPage', () => {
  let component: TeachersPage;
  let fixture: ComponentFixture<TeachersPage>;
  let teachersService: TeachersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersPage, TeachersTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersPage);
    component = fixture.componentInstance;
    teachersService = TestBed.inject(TeachersService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllTeachers al iniciar', () => {
    const spyGetAllTeachers = jest.spyOn(teachersService, 'getAllTeachers').mockReturnValue(of(TEACHERS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllTeachers).toHaveBeenCalled();
  });

  it('debería asignar los docentes recibidos del servicio', () => {
    jest.spyOn(teachersService, 'getAllTeachers').mockReturnValue(of(TEACHERS_MOCK));
    fixture.detectChanges();
    expect(component.teachers).toEqual(TEACHERS_MOCK);
  });

  it('debería pasar los docentes al componente teachers-table', () => {
    jest.spyOn(teachersService, 'getAllTeachers').mockReturnValue(of(TEACHERS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TeachersTableComponent))
      .componentInstance;
    expect(tableComponent.teachers).toEqual(TEACHERS_MOCK);
  });

  it('debería manejar el error cuando falla getAllTeachers', () => {
    component.teachers = [];
    const errorResponse = new Error('Error al cargar docentes');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(teachersService, 'getAllTeachers').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(teachersService.getAllTeachers).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.teachers.length).toBe(0);
  });
});