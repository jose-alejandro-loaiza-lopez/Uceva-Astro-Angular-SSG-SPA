/**
 * Interfaz que representa un docente de la institución.
 *
 * Contiene la información básica necesaria para mostrar un docente
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada docente debe tener un `id` único, nombres y apellidos,
 * un correo electrónico válido, una facultad (`faculty`) a la que
 * pertenece y el número de oficina asignado.
 *
 * @example
 * ```ts
 * const docente: Teacher = {
 *   id: 1,
 *   name: 'Jesús',
 *   lastName: 'Mejía',
 *   email: 'jesus.mejia@uceva.edu.co',
 *   faculty: 'Ingenieria',
 *   office: 'OF-201'
 * };
 * ```
 */
export interface Teacher {
  /** Identificador único del docente */
  id: number;

  /** Nombre del docente */
  name: string;

  /** Apellido del docente */
  lastName: string;

  /** Correo electrónico del docente */
  email: string;

  /** Facultad a la que pertenece el docente */
  faculty: TeacherFaculty;

  /** Número de oficina asignada al docente */
  office: string;
}

/**
 * Tipo de facultad de la institución.
 *
 * @remarks
 * Este tipo restringe las facultades a los valores predefinidos:
 * - 'Ingenieria'
 * - 'Salud'
 * - 'CienciasEconomicas'
 * - 'Educacion'
 * - 'Humanidades'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const facultad: TeacherFaculty = 'Salud';
 * ```
 */
export type TeacherFaculty = 'Ingenieria' | 'Salud' | 'CienciasEconomicas' | 'Educacion' | 'Humanidades';