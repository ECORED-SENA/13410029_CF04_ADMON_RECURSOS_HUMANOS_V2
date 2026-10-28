<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Verificar la comprensión de los elementos de la nómina, los aportes a seguridad social y parafiscales, las prestaciones sociales, el salario y la liquidación de horas extras y recargos, conforme a la Ley 2466 de 2025.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la primera etapa de elaboración de la nómina?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recibir las novedades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Gestionar el pago.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aprobar la nómina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fijar el salario mínimo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. <em>Board</em> del <em>software</em> EAGLE.',
        },
        {
          id: 2,
          texto: '¿Qué se hace durante la liquidación de la prenómina?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se revisan posibles errores.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se paga la prima.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se fija el salario mínimo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se embarga el salario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué comprende el devengado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los ingresos antes de deducciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo las deducciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo los aportes patronales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente el salario neto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál de los siguientes conceptos es una deducción?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aporte del trabajador a pensión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Provisión de vacaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aporte patronal a riesgos laborales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Provisión de cesantías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué representan las apropiaciones?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aportes y provisiones del empleador.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Descuentos judiciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ingresos del trabajador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente comisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cómo se obtiene el valor neto por pagar?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Devengado menos deducciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Devengado más deducciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Apropiaciones menos salario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Salario más aportes patronales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es la tarifa general de cotización a salud?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '12,5 %.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '4 %.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '8,5 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '16 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué porcentaje de pensión corresponde generalmente al empleador?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '12 %.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '4 %.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '8 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '16 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Quién asume la totalidad de la cotización a riesgos laborales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El empleador.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El trabajador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La caja de compensación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El SENA.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué porcentaje corresponde a las cajas de compensación familiar?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '4 %.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '2 %.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '3 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '12 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cuándo se paga la prima de servicios según el componente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Junio y diciembre.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Enero y julio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Marzo y septiembre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Abril y octubre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál es la tasa anual de intereses sobre cesantías?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '12 %.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '4,17 %.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '8,33 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '16 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuántos días hábiles de vacaciones se reconocen por año de servicio?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Quince.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diez.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Doce.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Treinta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué norma regula el proceso de concertación del salario mínimo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 278 de 1996.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ley 2101 de 2021.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ley 2466 de 2025.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Decreto 2663 de 1950.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué sucede si no hay acuerdo sobre el salario mínimo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lo fija el Gobierno por decreto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se suspende la nómina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Lo determina cada trabajador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se elimina el auxilio de transporte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
