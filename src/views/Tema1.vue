<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 El proceso de la nómina
      .row.bg-c4
        .col-12.px-5
          .row.bg-c3.mb-4
            .col-12(data-aos="fade-right")
              .px-4.pt-4.pt-lg-0
                .row.align-items-center
                  .col-lg-7.mb-4.mb-lg-0
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src="@/assets/curso/temas/t1/img1.svg", alt="", style="width: 80px").m-auto
                      .col
                        p.mb-0 La normativa laboral colombiana establece las obligaciones del empleador en materia de pago de salarios y reconocimiento de los derechos de los trabajadores. Este componente aborda la gestión de la nómina en las relaciones laborales reguladas por el Código Sustantivo del Trabajo (CST); la vinculación al sector público puede estar sujeta a regímenes específicos. La elaboración de la nómina sigue las etapas que se presentan a continuación:
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/temas/t1/img2.svg", alt="", style="width: 410px").m-auto
          .row(data-aos="fade-down")
            .col-lg-6.col-xl-3.mb-4.mb-xl-0
              .p-4.bg-c5.shadow-lg
                figure.mb-3
                  img(src="@/assets/curso/temas/t1/img3.svg", alt="", style="width: 80px").m-auto
                p.text-center #[b Paso 1. Recibir las novedades]
                p.text-center.mb-0 Se reciben, registran y clasifican las novedades del período, como horas extras, incapacidades, licencias o ingresos y retiros de personal.
            .col-lg-6.col-xl-3.mb-4.mb-xl-0
              .p-4.bg-c5.shadow-lg
                figure.mb-3
                  img(src="@/assets/curso/temas/t1/img4.svg", alt="", style="width: 80px").m-auto
                p.text-center #[b Paso 2. Liquidar la prenómina]
                p.text-center.mb-0 Se revisa y liquida la prenómina para detectar errores antes del cálculo definitivo.
            .col-lg-6.col-xl-3.mb-4.mb-lg-0
              .p-4.bg-c5.shadow-lg
                figure.mb-3
                  img(src="@/assets/curso/temas/t1/img4.svg", alt="", style="width: 80px").m-auto
                p.text-center #[b Paso 3. Revisar y aprobar]
                p.text-center.mb-0 La nómina se presenta para su revisión y aprobación por los responsables de talento humano, gerencia y gestión financiera, según el procedimiento de la organización.
            .col-lg-6.col-xl-3
              .p-4.bg-c5.shadow-lg
                figure.mb-3
                  img(src="@/assets/curso/temas/t1/img4.svg", alt="", style="width: 80px").m-auto
                p.text-center #[b Paso 4. Gestionar el pago]
                p.text-center.mb-0 La nómina aprobada se remite al área financiera para gestionar el pago.
          Separador
          #t_1_1
          .titulo-segundo.color-acento-contenido
            h2 1.1 Elementos de la nómina
          p.mb-4 La nómina se compone de tres elementos, que se presentan a continuación:
      TabsB.color-primario.mb-4(data-aos="fade-left")
        .p-4.p-md-5(titulo="El devengado" icono="@/assets/curso/temas/t1/img7.svg")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t1/img3.png", alt="", style="width: 410px").m-auto
            .col-lg-6
              p #[b El devengado]
              p.mb-0 Corresponde al total de ingresos del trabajador durante el período de pago. Incluye el salario básico, las horas extras, los recargos por trabajo nocturno o en días de descanso obligatorio o festivos, las comisiones y el auxilio de transporte, cuando corresponda. El total devengado constituye el valor bruto antes de las deducciones.
        .p-4.p-md-5(titulo="Las deducciones" icono="@/assets/curso/temas/t1/img8.svg")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t1/img4.png", alt="", style="width: 410px").m-auto
            .col-lg-6
              p #[b Las deducciones]
              p.mb-0 Son los valores que se descuentan del devengado del trabajador. Incluyen los aportes a salud y pensión, los aportes adicionales al sistema pensional cuando correspondan, la retención en la fuente, las libranzas, los embargos judiciales y otros descuentos legalmente autorizados.
        .p-4.p-md-5(titulo="Las apropiaciones" icono="@/assets/curso/temas/t1/img9.svg")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t1/img5.png", alt="", style="width: 410px").m-auto
            .col-lg-6
              p #[b Las apropiaciones]
              p.mb-0 Corresponden a los aportes y las provisiones a cargo del empleador. Comprenden su participación en salud y pensión, la cotización a riesgos laborales, los aportes parafiscales y las provisiones para prestaciones sociales y vacaciones.
      .row.align-items-center(data-aos="fade-down")
        .col-md-auto.mb-4.mb-md-0
          figure
            img(src="@/assets/curso/temas/t1/img10.svg", alt="", style="width: 80px").m-auto
        .col
          p.mb-0 El valor neto por pagar se obtiene al restar las deducciones del total devengado, es decir, neto por pagar = devengado - deducciones.
      Separador
      #t_1_2
      .titulo-segundo.color-acento-contenido
        h2 1.2 Seguridad social, aportes parafiscales y prestaciones sociales
      p.mb-4(data-aos="fade-right") Las obligaciones de seguridad social y los aportes parafiscales se calculan sobre el ingreso base de cotización o la base legal correspondiente, como se presenta a continuación:
      .row.bg-c6.mb-4
        .col-12.p-5(data-aos="fade-left")
          .tarjeta.tarjeta--azul1.p-4
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Salud]
                  p.mb-0 La tarifa general de cotización es del 12,5 % del ingreso base de cotización. El 4 % está a cargo del trabajador y el 8,5 %, del empleador. La obligación del empleador debe revisarse frente a las exoneraciones legales aplicables.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t1/img7.png' alt='', style="width: 410px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Pensión]
                  p.mb-0 La tarifa general de cotización es del 16 % del ingreso base de cotización. El 4 % está a cargo del trabajador y el 12 %, del empleador. Los aportes adicionales y sus condiciones deben verificarse conforme al régimen pensional vigente.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t1/img8.png' alt='', style="width: 410px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Riesgos laborales]
                  p.mb-0 El empleador debe afiliar al trabajador al sistema de riesgos laborales y asumir la totalidad de la cotización. La tarifa depende de la clase de riesgo de la actividad, clasificada de I a V.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t1/img9.png' alt='', style="width: 410px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Aportes parafiscales]
                  p.mb-0 Están a cargo del empleador y equivalen al 4 % para las cajas de compensación familiar, el 3 % para el ICBF y el 2 % para el SENA, sobre la base legal correspondiente. Las exoneraciones previstas en el artículo 114-1 del Estatuto Tributario pueden aplicar a los aportes al ICBF y al SENA y al aporte patronal a salud, si se cumplen los requisitos legales.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t1/img10.png' alt='', style="width: 410px").m-auto
      .row.align-items-center.mb-4(data-aos="fade-down")
        .col-md-auto.mb-4.mb-md-0
          figure
            img(src="@/assets/curso/temas/t1/img11.svg", alt="", style="width: 80px").m-auto
        .col
          p.mb-0 Las prestaciones sociales y las vacaciones también forman parte de las obligaciones del empleador y se provisionan mensualmente, como se presenta a continuación:
      .row.align-items-center.mb-4
        .col-lg-9.mb-4.mb-lg-0(data-aos="fade-left")
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
            .row(titulo="Prima de servicios")
              .col-12
                p.mb-0 Equivale a un mes de salario por año trabajado, o al valor proporcional por fracción de año, y se paga en junio y diciembre. Su provisión mensual de referencia es de aproximadamente el 8,33 % de la base correspondiente.
            .row(titulo="Cesantías")
              .col-12
                p.mb-0 Equivalen a un mes de salario por año trabajado, o al valor proporcional por fracción de año. Su provisión mensual de referencia es de aproximadamente el 8,33 %.
            .row(titulo="Intereses sobre cesantías")
              .col-12
                p.mb-0 Se calculan al 12 % anual, o proporcional por fracción de año. Este porcentaje no corresponde a una tarifa mensual.
            .row(titulo="Vacaciones")
              .col-12
                p.mb-0 Descanso remunerado de quince (15) días hábiles por año de servicio. Su provisión mensual de referencia es de aproximadamente el 4,17 % de la base aplicable.
            .row(titulo="Dotación")
              .col-12
                p.mb-0 Se reconoce cuando se cumplen los requisitos legales.
        .col-lg-3(data-aos="fade-right")
          figure
            img(src="@/assets/curso/temas/t1/img11.png", alt="", style="width: 280px").m-auto
      .row.bg-c3
        .col-12(data-aos="fade-right")
          .px-4.pt-4.pt-lg-0
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src="@/assets/curso/temas/t1/img12.svg", alt="", style="width: 80px").m-auto
                  .col
                    p.mb-0 Estos porcentajes orientan la provisión contable y no sustituyen las fórmulas legales de liquidación ni la determinación de la base de cada concepto.
              .col-lg-5
                figure
                  img(src="@/assets/curso/temas/t1/img13.svg", alt="", style="width: 350px").m-auto

</template>

<script>
export default {
  name: 'Tema1',
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
