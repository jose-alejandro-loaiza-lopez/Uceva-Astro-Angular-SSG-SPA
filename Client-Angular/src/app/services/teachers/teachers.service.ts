import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Teacher } from '../../interfaces/teachers.interface';
import { TEACHERS } from '../../data/teachers.interface';

/**
 * Servicio encargado de la gestión de docentes.
 *
 * Proporciona métodos para obtener información de docentes
 * desde la data local.
 *
 * @example
 * ```ts
 * constructor(private teachersService: TeachersService) {}
 *
 * this.teachersService.getAllTeachers().subscribe(teachers => {
 *   console.log(teachers);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  /**
   * Obtiene una lista de docentes desde el backend.
   *
   * @returns Observable que emite un array de docentes.
   *
   * @example
   * ```ts
   * this.teachersService.getAllTeachers().subscribe(teachers => {
   *   console.log(teachers);
   * });
   * ```
   */
  getAllTeachers(): Observable<Teacher[]> {
    return of(TEACHERS);
  }
}