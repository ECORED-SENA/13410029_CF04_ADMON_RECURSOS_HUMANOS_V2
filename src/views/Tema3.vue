<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Jornada laboral, horas extras y recargos
      .row.bg-c3
        .col-12(data-aos="fade-right")
          .px-4.pt-4.pt-lg-0
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src="@/assets/curso/temas/t3/img1.svg", alt="", style="width: 80px").m-auto
                  .col
                    p.mb-0 La liquidación de las horas extras y los recargos depende de la jornada pactada, del horario en que se presta el servicio y de las disposiciones vigentes para el período de pago. Las reglas generales y las fechas de aplicación de los cambios normativos se presentan a continuación.
              .col-lg-5
                figure
                  img(src="@/assets/curso/temas/t3/img2.svg", alt="", style="width: 350px").m-auto
      Separador
      #t_3_1
      .titulo-segundo.color-acento-contenido
        h2 3.1 Jornada laboral máxima semanal
      p.mb-4(data-aos="fade-right") La Ley 2101 de 2021 estableció la reducción gradual de la jornada laboral máxima semanal, y la Ley 2466 de 2025 modificó el artículo 161 del CST manteniendo esa aplicación gradual (Congreso de la República de Colombia, 2025). Los aspectos principales se presentan a continuación:
      .row.bg-c6
        .col-12.p-5(data-aos="fade-left")
          .tarjeta.tarjeta--azul1.p-4
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Jornada máxima]
                  p.mb-0 El límite general fue de cuarenta y cuatro (44) horas semanales hasta el 14 de julio de 2026 y es de cuarenta y dos (42) horas desde el 15 de julio de 2026.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t3/img1.png' alt='', style="width: 410px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Trabajo suplementario]
                  p.mb-0 Es el trabajo que excede la jornada ordinaria o la máxima legal aplicable.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t3/img2.png' alt='', style="width: 410px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Límite de horas extras]
                  p.mb-0 Como regla general, las horas extras no pueden superar dos (2) horas diarias ni doce (12) horas semanales, sin perjuicio de las excepciones legales.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t3/img3.png' alt='', style="width: 410px").m-auto
      Separador
      #t_3_2
      .titulo-segundo.color-acento-contenido
        h2 3.2 Recargo nocturno y horas extras
      .row.align-items-center.mb-4(data-aos="fade-down")
        .col-md-auto.mb-4.mb-md-0
          figure
            img(src="@/assets/curso/temas/t1/img11.svg", alt="", style="width: 80px").m-auto
        .col
          p.mb-0 El trabajo nocturno comprende el horario entre las 7:00 p. m. y las 6:00 a. m. del día siguiente. La Ley 2466 de 2025 adelantó su inicio, que anteriormente era a las 9:00 p. m., y este cambio se aplica desde el 25 de diciembre de 2025 (Congreso de la República de Colombia, 2025). Los porcentajes de recargo se presentan a continuación:
      .titulo-sexto.color-acento-contenido.mb-3
        p.mb-0 #[b Tabla 1.] Recargos nocturnos y horas extras
      .tabla-a.color-acento-contenido(data-aos="fade-down")
        table
          thead
            tr
              th Concepto
              th Recargo sobre la hora ordinaria
          tbody
            tr
              td Recargo nocturno (trabajo ordinario en horario nocturno)
              td 35 %
            tr
              td Hora extra diurna
              td 25 %
            tr
              td Hora extra nocturna
              td 75 %
      Separador
      #t_3_3
      .titulo-segundo.color-acento-contenido
        h2 3.3 Recargos por trabajo en días de descanso obligatorio y festivos
      p.mb-4(data-aos="fade-right") La Ley 2466 de 2025 estableció el incremento gradual del recargo por trabajo en días de descanso obligatorio o festivos, hasta alcanzar el 100 % sobre el valor de la hora ordinaria (Congreso de la República de Colombia, 2025). Los porcentajes y sus períodos de aplicación se presentan a continuación:
      .titulo-sexto.color-acento-contenido.mb-3
        p.mb-0 #[b Tabla 2.] Recargos por trabajo en días de descanso obligatorio o festivos
      .tabla-a.color-acento-contenido.mb-4(data-aos="fade-down")
        table
          thead
            tr
              th Periodo
              th Recargo aplicable
              th Vigencia
          tbody
            tr
              td Antes de la reforma
              td 75 %
              td Hasta el 30 de junio de 2025
            tr
              td Desde el 1 de julio de 2025
              td 80 %
              td Hasta el 30 de junio de 2026
            tr
              td Desde el 1 de julio de 2026
              td 90 %
              td Hasta el 30 de junio de 2027
            tr
              td Desde el 1 de julio de 2027
              td 100 %
              td En adelante
      p.mb-4(data-aos="fade-right") El cálculo del pago en estos días se presenta a continuación:
      .row.bg-c1
        .col-12.px-5
          TabsB.color-primario.mb-4(data-aos="fade-left")
            .p-4.p-md-5(titulo="Trabajo ordinario diurno" icono="@/assets/curso/temas/t3/img3.svg")
              .row.justify-content-center.align-items-center
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src="@/assets/curso/temas/t3/img4.png", alt="", style="width: 410px").m-auto
                .col-lg-6
                  p #[b Trabajo ordinario diurno]
                  p.mb-0 Al valor de la hora ordinaria se suma el recargo aplicable. Entre el 1 de julio de 2026 y el 30 de junio de 2027 el recargo es del 90 %, por lo que el valor total equivale al 190 % de la hora ordinaria.
            .p-4.p-md-5(titulo="Trabajo ordinario nocturno" icono="@/assets/curso/temas/t3/img4.svg")
              .row.justify-content-center.align-items-center
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src="@/assets/curso/temas/t3/img5.png", alt="", style="width: 410px").m-auto
                .col-lg-6
                  p #[b Trabajo ordinario nocturno]
                  p.mb-0 Se suman el recargo aplicable por ese día y el recargo nocturno del 35 %. Entre el 1 de julio de 2026 y el 30 de junio de 2027 los recargos suman el 125 %, y al incluir el valor de la hora ordinaria el pago total equivale al 225 %.
            .p-4.p-md-5(titulo="Horas extras" icono="@/assets/curso/temas/t3/img5.svg")
              .row.justify-content-center.align-items-center
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src="@/assets/curso/temas/t3/img6.png", alt="", style="width: 410px").m-auto
                .col-lg-6
                  p #[b Horas extras]
                  p.mb-0 Si se trata de una hora extra, debe aplicarse el recargo correspondiente al trabajo suplementario.
          .row.align-items-center.mb-4(data-aos="fade-down")
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/temas/t3/img6.svg", alt="", style="width: 80px").m-auto
            .col
              p El incremento gradual del recargo debe aplicarse desde las fechas establecidas por la ley y no requiere un acuerdo entre las partes para su reconocimiento.
              p.mb-0 Para profundizar en estos temas se recomienda consultar los siguientes recursos:
          .tarjeta.color-primario.p-3.mb-4(data-aos="fade-left")
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/t3/img7.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.text-white.mb-1 Ley 2466 de 2025, reforma laboral
                    p.text-white.mb-0 Para profundizar en los cambios introducidos por la reforma laboral colombiana, se invita a consultar la siguiente normativa: Ley 2466 de 2025, reforma laboral.
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=260676" target="_blank")
                      span.txt-c1 Ir al enlace
                      i.txt-c1.fas.fa-link

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
