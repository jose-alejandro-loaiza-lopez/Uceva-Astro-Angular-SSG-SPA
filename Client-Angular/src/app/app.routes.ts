import { Routes } from '@angular/router';
import { DatePage } from './pages/date/date.page';
import { ProductsPage } from './pages/products/products.page';
import { UsersPage } from './pages/users/users.page';
import { StudentsPage } from './pages/students/students.page';
import { CoursesPage } from './pages/courses/courses.page';
import { TeachersPage } from './pages/teachers/teachers.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  { path: 'products', component: ProductsPage },

  /**
   * Ruta de la fecha.
   *
   * @remarks
   * Renderiza el componente `DatePage`, encargado
   * de mostrar la fecha actual del sistema.
   */
  { path: 'date', component: DatePage },

  /**
   * Ruta de estudiantes.
   *
   * @remarks
   * Renderiza el componente `StudentsPage`, encargado
   * de mostrar y gestionar el listado de estudiantes.
   */
  { path: 'students', component: StudentsPage },

  /**
   * Ruta de cursos.
   *
   * @remarks
   * Renderiza el componente `CoursesPage`, encargado
   * de mostrar y gestionar el listado de cursos.
   */
  { path: 'courses', component: CoursesPage },

  /**
   * Ruta de docentes.
   *
   * @remarks
   * Renderiza el componente `TeachersPage`, encargado
   * de mostrar y gestionar el listado de docentes.
   */
  { path: 'teachers', component: TeachersPage },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];