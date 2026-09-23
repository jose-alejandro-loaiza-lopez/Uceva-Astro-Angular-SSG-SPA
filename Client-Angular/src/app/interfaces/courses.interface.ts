/**
 * Interfaz que representa un curso académico.
 *
 * Contiene la información básica necesaria para mostrar un curso
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada curso debe tener un `id` único, un `name` descriptivo,
 * un `code` interno, el semestre en el que se dicta, la cantidad
 * de `credits` y un `level` definido.
 *
 * @example
 * ```ts
 * const curso: Course = {
 *   id: 1,
 *   name: 'Arquitectura de Software',
 *   code: 'ARQ-401',
 *   semester: 4,
 *   credits: 3,
 *   level: 'Avanzado'
 * };
 * ```
 */
export interface Course {
  /** Identificador único del curso */
  id: number;

  /** Nombre o descripción del curso */
  name: string;

  /** Código interno del curso */
  code: string;

  /** Semestre en el que se dicta el curso */
  semester: number;

  /** Número de créditos académicos del curso */
  credits: number;

  /** Nivel o complejidad del curso */
  level: CourseLevel;
}

/**
 * Tipo de nivel de un curso.
 *
 * @remarks
 * Este tipo restringe los niveles a los valores predefinidos:
 * - 'Basico'
 * - 'Intermedio'
 * - 'Avanzado'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const nivel: CourseLevel = 'Intermedio';
 * ```
 */
export type CourseLevel = 'Basico' | 'Intermedio' | 'Avanzado';