import { Component, inject } from '@angular/core';
import { StudentsTableComponent } from '../../components/students-table/students-table.component';
import { Student } from '../../interfaces/students.interface';
import { StudentsService } from '../../services/students/students.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de estudiantes.
 *
 * Se utiliza para gestionar y mostrar un listado de estudiantes
 * utilizando el componente `StudentsTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `StudentsService`
 * para obtener los estudiantes y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  imports: [StudentsTableComponent, AlertComponent],
})
export class StudentsPage {
  /**
   * Listado de estudiantes obtenidos desde el servicio.
   * @type {Student[]}
   */
  students: Student[] = [];
  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener estudiantes.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private studentsService = inject(StudentsService);

  /**
   * Inicializa el componente y carga los estudiantes.
   * @remarks
   * Se suscribe al método `getAllStudents()` del servicio y
   * asigna los datos recibidos a la propiedad `students`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.studentsService.getAllStudents().subscribe({
      next: (students) => {
        this.students = students;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}