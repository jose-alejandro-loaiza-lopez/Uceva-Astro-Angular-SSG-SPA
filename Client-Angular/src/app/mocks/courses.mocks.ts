import { Course } from "../interfaces/courses.interface";

export const COURSES_MOCK: Course[] = [
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
    }
];