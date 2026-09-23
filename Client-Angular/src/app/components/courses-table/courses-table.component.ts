import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { CourseLevel, Course } from '../../interfaces/courses.interface';

/**
 * Componente de tabla de cursos.
 *
 * Se utiliza para mostrar un listado de cursos en una tabla,
 * mostrando información como id, nombre, código, semestre, créditos
 * y un badge visual que indica el nivel de cada curso.
 *
 * @remarks
 * Este componente recibe los cursos desde un componente padre
 * a través del Input `courses` y utiliza el mapeo `levelMap`
 * para asignar colores a los badges según el nivel.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-courses-table [courses]="coursesList"></app-courses-table>
 * ```
 */
@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  imports: [BadgeAtom],
})
export class CoursesTableComponent {
  /**
   * Listado de cursos que se mostrarán en la tabla.
   * @type {Course[]}
   * @remarks
   * Este Input permite pasar un array de cursos desde un componente padre,
   * generalmente `CoursesPage`. Cada curso debe cumplir la interfaz `Course`.
   */
  @Input() courses: Course[] = [];
  /**
   * Mapeo de niveles de cursos a tipos de Badge.
   * @type {Record<CourseLevel, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada nivel:
   * - 'Basico' → 'success' (verde)
   * - 'Intermedio' → 'warning' (amarillo)
   * - 'Avanzado' → 'danger' (rojo)
   *
   * Esto permite que en la tabla cada curso tenga un badge visual que indique su nivel
   * de forma clara para el usuario.
   */
  levelMap: Record<CourseLevel, BadgeType> = {
    'Basico' : 'success',
    'Intermedio': 'warning',
    'Avanzado': 'danger',
  }
}