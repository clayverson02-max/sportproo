# Athlete Path Selector

Quiero crear una landing page con un mecanismo de selección de audiencia, sin usar un 
quiz de preguntas — solo una elección directa que lleva a la persona a una sección de 
oferta específica para ella.

=== ESTRUCTURA ===

1. SECCIÓN SELECTOR (lo primero que se ve al entrar a la página)
- Título: "Elige tu camino. Entrena con el método completo para tu deporte."
- Subtítulo: "Una sola plataforma, entrenamientos organizados en video, hecha a la 
  medida de lo que tú juegas."
- 3 tarjetas grandes, clicables, en fila (o apiladas en mobile):
  a) 🏈 Fútbol Americano — "Fuerza, velocidad y explosividad. El método completo para 
     dominar la línea."
  b) ⚽ Fútbol de Campo — "Técnica, gambeta y visión de juego. +2.000 ejercicios 
     organizados por posición."
  c) 🔥 Los Dos Deportes — "Fuerza de un lado, técnica del otro. El atleta más completo 
     se entrena con ambos."

2. COMPORTAMIENTO AL HACER CLIC
Al hacer clic en una tarjeta, la sección selectora se oculta (o se colapsa hacia arriba, 
tipo acordeón) y se revela ÚNICAMENTE la sección de oferta correspondiente a esa elección, 
con una animación suave de transición. Debe haber un pequeño botón o link "← Elegir otro 
deporte" en la parte superior de cada sección de oferta, para volver al selector si la 
persona se equivocó.

3. TRES SECCIONES DE OFERTA (cada una oculta por defecto, se muestra solo tras la elección)

--- SECCIÓN "Fútbol Americano" ---
Hook: "¿Quieres ser el jugador que rompe la línea, que corre más rápido, que golpea más 
fuerte que cualquiera en la cancha?"
Agitación: "La mayoría entrena sin ningún plan: levanta peso al azar, corre sin técnica, 
come lo que encuentra. Así no se construye un atleta explosivo, se construye cansancio 
sin resultado."
Lista "Lo que recibes" (con iconos):
🏋️ Entrenamientos de gimnasio enfocados en fuerza y potencia explosiva
🏈 Entrenamientos en campo: técnica de posición, jugadas y lectura del juego
⚡ Estrategias de velocidad y aceleración
🦵 Rutinas específicas de salto e impulso
🥗 Rutina alimentaria completa
🔥 Recetas para aumentar energía y adrenalina
Oferta: pago único, acceso de por vida, 7 días de garantía. Botón CTA: "Quiero el método 
de Fútbol Americano"

--- SECCIÓN "Fútbol de Campo" ---
Hook: "¿Cansado de entrenar sin método y llegar al partido sin saber si estás preparado?"
Agitación: "Buscar ejercicios sueltos en internet no te da progresión. Sin un sistema 
real, entrenas mucho y avanzas poco."
Lista "Lo que recibes":
⚽ Más de 2.000 ejercicios organizados por posición y categoría
🎥 Más de 250 sesiones completas, con video de cada ejercicio
📈 Progresión real, semana a semana
🥗 Rutina alimentaria completa
Oferta: pago único, acceso de por vida, 7 días de garantía. Botón CTA: "Quiero el método 
de Fútbol de Campo"

--- SECCIÓN "Los Dos Deportes" ---
Hook: "¿Y si la fuerza de un deporte y la técnica del otro se combinaran en un solo 
entrenamiento?"
Cuerpo: "El fútbol americano te da fuerza, explosividad y resistencia. El fútbol de 
campo te da técnica corporal, gambeta y posicionamiento. Por separado, son dos deportes. 
Juntos, son la fórmula del atleta completo."
Lista "Lo que recibes":
🏈 Todo el entrenamiento de fútbol americano: gimnasio, campo, velocidad, nutrición
⚽ Todo el entrenamiento de fútbol de campo: +2.000 ejercicios, +250 sesiones
🥗 Dos rutinas alimentarias completas
🎥 Todo organizado en video, en una sola plataforma
Oferta: pago único, acceso de por vida, 7 días de garantía. Botón CTA: "Quiero la 
Plataforma Completa (los dos deportes)"

=== ESTILO VISUAL ===
Usar el mismo sistema de diseño de mis otras páginas: verde (#16a34a) como color 
principal, tarjetas con bordes redondeados, iconos emoji, fondo claro con acentos 
oscuros en las secciones de oferta. Diseño 100% mobile-first, ya que la mayoría del 
tráfico es de celular.

=== TÉCNICO ===
No usar lógica de quiz ni puntaje. Es solo una elección directa (como un router simple): 
un estado (state) que guarda qué opción fue elegida, y renderiza condicionalmente la 
sección correspondiente. Mantener todo en una sola página (no rutas separadas de URL), 
para no perder tráfico si alguien comparte el link directo.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sportproo.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/987f507d-4de3-418c-a60f-b0e44e01ec11).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
