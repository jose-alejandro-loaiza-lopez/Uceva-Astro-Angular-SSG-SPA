import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../../interfaces/students.interface';
import { STUDENTS } from '../../data/students.interface';

/**
 * Servicio encargado de la gestión de estudiantes.
 *
 * Proporciona métodos para obtener información de estudiantes
 * desde la data local.
 *
 * @example
 * ```ts
 * constructor(private studentsService: StudentsService) {}
 *
 * this.studentsService.getAllStudents().subscribe(students => {
 *   console.log(students);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  /**
   * Obtiene una lista de estudiantes desde el backend.
   *
   * @returns Observable que emite un array de estudiantes.
   *
   * @example
   * ```ts
   * this.studentsService.getAllStudents().subscribe(students => {
   *   console.log(students);
   * });
   * ```
   */
  getAllStudents(): Observable<Student[]> {
    return of(STUDENTS);
  }
}