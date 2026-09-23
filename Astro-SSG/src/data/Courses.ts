import type { Course } from "@interfaces/Courses";

/**
 * Listado de cursos académicos de la institución.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * información básica de cursos, utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {Course[]}
 */
export const COURSES: Course[] = [
  {
    id: 1,
    name: 'Arquitectura de Software',
    code: 'ARQ-401',
    semester: 4,
    credits: 3,
    level: 'Avanzado'
  },
  {
    id: 2,
    name: 'Programación I',
    code: 'PRO-101',
    semester: 1,
    credits: 4,
    level: 'Basico'
  },
  {
    id: 3,
    name: 'Estructuras de Datos',
    code: 'EST-202',
    semester: 2,
    credits: 3,
    level: 'Intermedio'
  },
  {
    id: 4,
    name: 'Bases de Datos',
    code: 'BDD-203',
    semester: 2,
    credits: 4,
    level: 'Intermedio'
  },
  {
    id: 5,
    name: 'Ingeniería de Software',
    code: 'ING-302',
    semester: 3,
    credits: 3,
    level: 'Intermedio'
  },
  {
    id: 6,
    name: 'Sistemas Operativos',
    code: 'SIS-303',
    semester: 3,
    credits: 3,
    level: 'Avanzado'
  },
  {
    id: 7,
    name: 'Matemáticas Discretas',
    code: 'MAT-102',
    semester: 1,
    credits: 4,
    level: 'Basico'
  },
  {
    id: 8,
    name: 'Redes de Computadores',
    code: 'RED-304',
    semester: 4,
    credits: 3,
    level: 'Avanzado'
  },
  {
    id: 9,
    name: 'Lógica de Programación',
    code: 'LOG-101',
    semester: 1,
    credits: 2,
    level: 'Basico'
  },
  {
    id: 10,
    name: 'Inteligencia Artificial',
    code: 'IA-405',
    semester: 5,
    credits: 4,
    level: 'Avanzado'
  }
];