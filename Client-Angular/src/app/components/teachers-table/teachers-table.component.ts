import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { TeacherFaculty, Teacher } from '../../interfaces/teachers.interface';

/**
 * Componente de tabla de docentes.
 *
 * Se utiliza para mostrar un listado de docentes en una tabla,
 * mostrando información como id, nombre, apellido, email, oficina
 * y un badge visual que indica la facultad de cada docente.
 *
 * @remarks
 * Este componente recibe los docentes desde un componente padre
 * a través del Input `teachers` y utiliza el mapeo `facultyMap`
 * para asignar colores a los badges según la facultad.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-teachers-table [teachers]="teachersList"></app-teachers-table>
 * ```
 */
@Component({
  selector: 'app-teachers-table',
  templateUrl: './teachers-table.component.html',
  imports: [BadgeAtom],
})
export class TeachersTableComponent {
  /**
   * Listado de docentes que se mostrarán en la tabla.
   * @type {Teacher[]}
   * @remarks
   * Este Input permite pasar un array de docentes desde un componente padre,
   * generalmente `TeachersPage`. Cada docente debe cumplir la interfaz `Teacher`.
   */
  @Input() teachers: Teacher[] = [];
  /**
   * Mapeo de facultades a tipos de Badge.
   * @type {Record<TeacherFaculty, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada facultad:
   * - 'Ingenieria' → 'success' (verde)
   * - 'Salud' → 'danger' (rojo)
   * - 'CienciasEconomicas' → 'warning' (amarillo)
   * - 'Educacion' → 'primary' (azul)
   * - 'Humanidades' → 'secondary' (gris)
   *
   * Esto permite que en la tabla cada docente tenga un badge visual que indique su facultad
   * de forma clara para el usuario.
   */
  facultyMap: Record<TeacherFaculty, BadgeType> = {
    'Ingenieria': 'success',
    'Salud': 'danger',
    'CienciasEconomicas': 'warning',
    'Educacion': 'primary',
    'Humanidades': 'secondary'
  }
}