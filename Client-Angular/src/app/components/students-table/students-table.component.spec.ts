import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { STUDENTS_MOCK } from '../../mocks/students.mocks';
import { StudentsTableComponent } from './students-table.component';

describe('StudentsTableComponent', () => {
  let component: StudentsTableComponent;
  let fixture: ComponentFixture<StudentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsTableComponent);
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

  it('debería renderizar una fila por cada estudiante', () => {
    component.students = STUDENTS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.students.length);
  });

  it('debería mostrar los datos del estudiante en cada columna', () => {
    component.students = STUDENTS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const student = component.students[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(student.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(student.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(student.lastName);
      expect(columns[3].nativeElement.textContent.trim()).toBe(student.code);
      expect(columns[4].nativeElement.textContent.trim()).toBe(String(student.semester));
    });
  });

  it('debería mapear cada programa a su BadgeType correcto', () => {
    expect(component.programMap['Sistemas']).toBe('success');
    expect(component.programMap['Electronica']).toBe('primary');
    expect(component.programMap['Biomedica']).toBe('warning');
    expect(component.programMap['Industrial']).toBe('danger');
    expect(component.programMap['Ambiental']).toBe('secondary');
  });
  
});