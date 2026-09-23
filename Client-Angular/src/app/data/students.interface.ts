import { Student } from "../interfaces/students.interface";

/**
 * Listado de estudiantes de la institución.
 *
 * Esta constante representa un conjunto de datos de prueba (mock)
 * que simula la respuesta de un backend REST.
 *
 * Se utiliza principalmente para:
 * - Pruebas unitarias
 * - Prácticas de componentes
 * - Ejercicios de arquitectura modular
 *
 * @type {Student[]}
 */
export const STUDENTS: Student[] = [
  {
    id: 1,
    name: 'Laura',
    lastName: 'Cifuentes',
    code: '202411001',
    program: 'Sistemas',
    semester: 3
  },
  {
    id: 2,
    name: 'Santiago',
    lastName: 'Angulo',
    code: '202311002',
    program: 'Industrial',
    semester: 5
  },
  {
    id: 3,
    name: 'Valentina',
    lastName: 'Ospina',
    code: '202412003',
    program: 'Electronica',
    semester: 2
  },
  {
    id: 4,
    name: 'Sebastián',
    lastName: 'Quintero',
    code: '202313004',
    program: 'Biomedica',
    semester: 6
  },
  {
    id: 5,
    name: 'Mariana',
    lastName: 'Giraldo',
    code: '202414005',
    program: 'Ambiental',
    semester: 2
  },
  {
    id: 6,
    name: 'Andrés',
    lastName: 'Patiño',
    code: '202322006',
    program: 'Sistemas',
    semester: 8
  },
  {
    id: 7,
    name: 'Isabella',
    lastName: 'Rojas',
    code: '202413007',
    program: 'Industrial',
    semester: 3
  },
  {
    id: 8,
    name: 'Juan',
    lastName: 'Vélez',
    code: '202411008',
    program: 'Electronica',
    semester: 4
  },
  {
    id: 9,
    name: 'Camila',
    lastName: 'Zapata',
    code: '202311009',
    program: 'Biomedica',
    semester: 7
  },
  {
    id: 10,
    name: 'Nicolás',
    lastName: 'Castaño',
    code: '202412010',
    program: 'Ambiental',
    semester: 1
  }
];