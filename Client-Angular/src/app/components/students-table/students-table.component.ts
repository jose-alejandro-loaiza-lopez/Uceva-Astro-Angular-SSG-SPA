import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { StudentProgram, Student } from '../../interfaces/students.interface';

/**
 * Componente de tabla de estudiantes.
 *
 * Se utiliza para mostrar un listado de estudiantes en una tabla,
 * mostrando información como id, nombre, apellido, código, semestre
 * y un badge visual que indica el programa académico de cada estudiante.
 *
 * @remarks
 * Este componente recibe los estudiantes desde un componente padre
 * a través del Input `students` y utiliza el mapeo `programMap`
 * para asignar colores a los badges según el programa.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-students-table [students]="studentsList"></app-students-table>
 * ```
 */
@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  imports: [BadgeAtom],
})
export class StudentsTableComponent {
  /**
   * Listado de estudiantes que se mostrarán en la tabla.
   * @type {Student[]}
   * @remarks
   * Este Input permite pasar un array de estudiantes desde un componente padre,
   * generalmente `StudentsPage`. Cada estudiante debe cumplir la interfaz `Student`.
   */
  @Input() students: Student[] = [];
  /**
   * Mapeo de programas académicos a tipos de Badge.
   * @type {Record<StudentProgram, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada programa:
   * - 'Sistemas' → 'success' (verde)
   * - 'Electronica' → 'primary' (azul)
   * - 'Biomedica' → 'warning' (amarillo)
   * - 'Industrial' → 'danger' (rojo)
   * - 'Ambiental' → 'secondary' (gris)
   *
   * Esto permite que en la tabla cada estudiante tenga un badge visual que indique su programa
   * de forma clara para el usuario.
   */
  programMap: Record<StudentProgram, BadgeType> = {
    'Sistemas' : 'success',
    'Electronica': 'primary',
    'Biomedica': 'warning',
    'Industrial': 'danger',
    'Ambiental': 'secondary'
  }
}