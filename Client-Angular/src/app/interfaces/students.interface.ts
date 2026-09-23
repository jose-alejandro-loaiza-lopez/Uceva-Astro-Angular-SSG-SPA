/**
 * Interfaz que representa un estudiante de la institución.
 *
 * Contiene la información básica necesaria para mostrar un estudiante
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada estudiante debe tener un `id` único, nombres y apellidos,
 * un código estudiantil, un programa académico (`program`) y el
 * semestre que cursa actualmente.
 *
 * @example
 * ```ts
 * const estudiante: Student = {
 *   id: 1,
 *   name: 'Laura',
 *   lastName: 'Cifuentes',
 *   code: '202411001',
 *   program: 'Sistemas',
 *   semester: 3
 * };
 * ```
 */
export interface Student {
  /** Identificador único del estudiante */
  id: number;

  /** Nombre del estudiante */
  name: string;

  /** Apellido del estudiante */
  lastName: string;

  /** Código estudiantil asignado por la institución */
  code: string;

  /** Programa académico del estudiante */
  program: StudentProgram;

  /** Semestre que cursa actualmente */
  semester: number;
}

/**
 * Tipo de programa académico de un estudiante.
 *
 * @remarks
 * Este tipo restringe los programas a los valores predefinidos:
 * - 'Sistemas'
 * - 'Electronica'
 * - 'Biomedica'
 * - 'Industrial'
 * - 'Ambiental'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const programa: StudentProgram = 'Industrial';
 * ```
 */
export type StudentProgram = 'Sistemas' | 'Electronica' | 'Biomedica' | 'Industrial' | 'Ambiental';