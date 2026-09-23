import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../../interfaces/courses.interface';
import { COURSES } from '../../data/courses.interface';

/**
 * Servicio encargado de la gestión de cursos.
 *
 * Proporciona métodos para obtener información de cursos
 * desde la data local.
 *
 * @example
 * ```ts
 * constructor(private coursesService: CoursesService) {}
 *
 * this.coursesService.getAllCourses().subscribe(courses => {
 *   console.log(courses);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  /**
   * Obtiene una lista de cursos desde el backend.
   *
   * @returns Observable que emite un array de cursos.
   *
   * @example
   * ```ts
   * this.coursesService.getAllCourses().subscribe(courses => {
   *   console.log(courses);
   * });
   * ```
   */
  getAllCourses(): Observable<Course[]> {
    return of(COURSES);
  }
}