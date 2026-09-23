# Análisis Técnico SPA vs SSG — Punto 1

**Institución:** Unidad Central del Valle del Cauca (UCEVA)
**Asignatura:** Arquitectura de Software — Taller 4
**Módulo evaluado:** Arquitecturas Frontend (SPA vs SSG)
**Repositorio:** https://github.com/jose-alejandro-loaiza-lopez/Uceva-Astro-Angular-SSG-SPA

---

## 1. Contexto del ejercicio

Sobre el monorepo base (una aplicación **Angular** con arquitectura SPA y una aplicación **Astro** con arquitectura SSG), se implementaron las mismas **3 vistas adicionales** en ambas tecnologías con igual contenido y estructura:

| # | Vista | Ruta Angular | Ruta Astro |
|---|-------|--------------|------------|
| 1 | Estudiantes | `/students` | `/students` |
| 2 | Cursos | `/courses` | `/courses` |
| 3 | Docentes | `/teachers` | `/teachers` |

Ambas aplicaciones comparten el mismo diseño (Bootstrap 5.3.8, Bootstrap Icons), los mismos datos mock (10 registros por entidad) y componentes equivalentes (tablas con badges de color por dominio).

## 2. Procedimiento

1. `cd Client-Angular && npm run build` → `dist/Angular-Standalone-Template`
2. `cd Astro-SSG && npm run build` → `dist`
3. Medición de tamaños reales por archivo sobre la salida de producción.

## 3. Comparación del tamaño del build

### 3.1 Angular (SPA) — total: **1.027,12 KB**

| Archivo | Tipo | Tamaño |
|---|---|---|
| `index.html` | HTML | 5,10 KB |
| `main-*.js` | JS principal | 259,35 KB |
| `polyfills-*.js` | Polyfills (Zone.js) | 33,72 KB |
| `scripts-*.js` | Bootstrap JS | 78,56 KB |
| `styles-*.css` | CSS (Bootstrap + personalizado) | 308,53 KB |
| `bootstrap-icons-*.woff` | Fuente | 176,06 KB |
| `bootstrap-icons-*.woff2` | Fuente | 130,90 KB |
| `3rdpartylicenses.txt` / `favicon.ico` | Otros | 34,90 KB |

> **JS total: ~371,63 KB** (main + polyfills + scripts). Estimación de transferencia real (gzip) de los chunks iniciales: **137,40 KB**.

### 3.2 Astro (SSG) — total: **630,37 KB**

| Archivo | Tipo | Tamaño |
|---|---|---|
| `index.html` | Redirección a `/users` | 0,26 KB |
| `users/index.html` | HTML estático | 3,36 KB |
| `products/index.html` | HTML estático | 2,89 KB |
| `current-date/index.html` | HTML estático | 1,46 KB |
| `students/index.html` | HTML estático | 3,23 KB |
| `courses/index.html` | HTML estático | 3,26 KB |
| `teachers/index.html` | HTML estático | 3,44 KB |
| `_astro/*.css` | CSS (Bootstrap + personalizado) | 304,77 KB |
| `_astro/*.woff` + `*.woff2` | Fuentes Bootstrap Icons | 307,00 KB |
| `favicon.svg` | Icono | 0,74 KB |

> **JS total: 0 KB.** La salida no contiene ni un solo byte de JavaScript propio; todos los HTMLs están pre-renderizados en tiempo de build.

### 3.3 Comparativa directa

| Métrica | Angular (SPA) | Astro (SSG) | Diferencia |
|---|---|---|---|
| Tamaño total del build | 1.027,12 KB | 630,37 KB | **SPA es ~63% más pesado** |
| JavaScript | 371,63 KB | **0 KB** | SPA: +371,63 KB |
| HTML a transferir en carga inicial | 5,10 KB (1 archivo) | ~3,44 KB (página solicitada) | Equivalente |
| CSS | 308,53 KB | 304,77 KB | Equivalente (Bootstrap compartido) |
| Páginas generadas | 1 | **7 archivos HTML** | SSG pre-genera todo |

## 4. Tiempo de carga estimado

La carga inicial se calcula como la suma de los recursos que el navegador debe descargar para mostrar **una vista** (HTML + CSS + JS + fuentes).

| Ancho de banda | Angular (SPA) ~1.007 KB | Astro (SSG) ~619 KB |
|---|---|---|
| 1 Mbps (~125 KB/s) | ≈ 8,1 s | ≈ 5,0 s |
| 5 Mbps (~625 KB/s) | ≈ 1,6 s | ≈ 1,0 s |
| 10 Mbps (~1.250 KB/s) | ≈ 0,8 s | ≈ 0,5 s |

**Observaciones:**
- La ventaja de SSG en carga inicial se debe a que **no transfiere JavaScript**. Angular debe descargar, parsear y ejecutar ~372 KB de JS (framework + polyfills + bootstrap) antes de poder pintar la primera vista; Astro envía HTML ya renderizado que el navegador pinta inmediatamente.
- En navegaciones posteriores la relación se invierte: en la SPA la navegación es **client-side** (no se vuelve a descargar el HTML, solo se re-renderiza la vista), mientras que en SSG cada navegación es una **nueva petición HTTP** de un archivo HTML distinto.

## 5. Dinámicas clave SPA vs SSG observadas en el caso práctico

| Aspecto | Angular (SPA) | Astro (SSG) |
|---|---|---|
| Renderizado | En el cliente (CSR). Angular JSON-parsea y re-renderiza la vista en el DOM | En tiempo de build (estático). El servidor entrega HTML final |
| Estado de la página | Maneja estados asíncronos `loading / error / success` con RxJS y control flow (`@switch`) | No existe estado en runtime: el HTML ya está resuelto |
| Fuente de datos | `Services` + RxJS (`Observable` que emite mocks locales) | Import directo de constantes `@data/*` en el frontmatter en tiempo de build |
| Navegación | Router de Angular, sin recarga de página | Cada ruta es un archivo HTML independiente |
| Primer pintado | Depende de la descarga/ejecución del bundle JS | Inmediato (HTML listo) |
| Código ejecutable | Framework completo (Zone.js, DI, router) | Solo HTML/CSS estáticos |
| SEO / indexación | Requiere SSR/PRPL o prerender para SEO óptimo | Óptimo por defecto (HTML indexable) |

## 6. Conclusión técnica

Para este caso de estudio —un repositorio y una landing/panel con datos mayormente **estáticos o mock**, contenido público y sin interacción compleja de usuario— la arquitectura **SSG (Astro) es más eficiente**: el build pesa **~39% menos** que la SPA (630 KB vs 1.027 KB), no transfiere JavaScript en la carga inicial (0 KB de JS vs 371 KB), y el tiempo de carga estimado en conexiones típicas es de **~1,6x menor**, con la ventaja añadida de un SEO y primer pintado superiores.

La arquitectura **SPA (Angular) resulta más eficiente cuando el contenido es dinámico y personalizado**, cuando se requiere interacción intensa, navegación instantánea sin recargas, gestión de estado compleja o consumo de múltiples APIs en runtime. En ese escenario el costo extra del bundle de JS se amortiza con la experiencia de navegación client-side.

**Recomendación final:** para sitios públicos, catálogos, landing pages y portales institucionales con contenido mayormente estático → **SSG**. Para aplicaciones de escritorio-web, dashboards, CRUDs y sistemas con mucha lógica de negocio en cliente → **SPA**. Un patrón híbrido (SSG con hidratación progresiva o Astro + islas) aprovecha lo mejor de ambos mundos.