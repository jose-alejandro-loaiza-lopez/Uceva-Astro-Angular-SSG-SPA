import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TEACHERS_MOCK } from '../../mocks/teachers.mocks';
import { TeachersTableComponent } from './teachers-table.component';

describe('TeachersTableComponent', () => {
  let component: TeachersTableComponent;
  let fixture: ComponentFixture<TeachersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada docente', () => {
    component.teachers = TEACHERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.teachers.length);
  });

  it('debería mostrar los datos del docente en cada columna', () => {
    component.teachers = TEACHERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const teacher = component.teachers[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(teacher.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(teacher.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(teacher.lastName);
      expect(columns[3].nativeElement.textContent.trim()).toBe(teacher.email);
      expect(columns[4].nativeElement.textContent.trim()).toBe(teacher.office);
    });
  });

  it('debería mapear cada facultad a su BadgeType correcto', () => {
    expect(component.facultyMap['Ingenieria']).toBe('success');
    expect(component.facultyMap['Salud']).toBe('danger');
    expect(component.facultyMap['CienciasEconomicas']).toBe('warning');
    expect(component.facultyMap['Educacion']).toBe('primary');
    expect(component.facultyMap['Humanidades']).toBe('secondary');
  });
  
});