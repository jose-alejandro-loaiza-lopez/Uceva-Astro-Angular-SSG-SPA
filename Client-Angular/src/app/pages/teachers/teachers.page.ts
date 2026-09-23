import { Component, inject } from '@angular/core';
import { TeachersTableComponent } from '../../components/teachers-table/teachers-table.component';
import { Teacher } from '../../interfaces/teachers.interface';
import { TeachersService } from '../../services/teachers/teachers.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de docentes.
 *
 * Se utiliza para gestionar y mostrar un listado de docentes
 * utilizando el componente `TeachersTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `TeachersService`
 * para obtener los docentes y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.page.html',
  imports: [TeachersTableComponent, AlertComponent],
})
export class TeachersPage {
  /**
   * Listado de docentes obtenidos desde el servicio.
   * @type {Teacher[]}
   */
  teachers: Teacher[] = [];
  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener docentes.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private teachersService = inject(TeachersService);

  /**
   * Inicializa el componente y carga los docentes.
   * @remarks
   * Se suscribe al método `getAllTeachers()` del servicio y
   * asigna los datos recibidos a la propiedad `teachers`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.teachersService.getAllTeachers().subscribe({
      next: (teachers) => {
        this.teachers = teachers;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}