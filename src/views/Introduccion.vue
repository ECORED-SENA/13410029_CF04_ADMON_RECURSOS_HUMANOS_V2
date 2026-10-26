<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.bg-c1
        .col-12.px-5
          p(data-aos="fade-right") La gestión de la nómina y las prestaciones sociales ha evolucionado con la incorporación de herramientas tecnológicas. El uso de software especializado facilita el registro de novedades, el cálculo de los pagos y el control de las obligaciones laborales. Sin embargo, la precisión de los resultados depende de la calidad de la información registrada y de la aplicación de la normativa vigente.
          .row.align-items-center
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c2.shadow-lg.mb-4
                figure.mb-3
                  img(src="@/assets/curso/temas/intro/img1.svg", alt="", style="width: 80px")
                p.mb-0 Este componente formativo explica los elementos de la nómina y su relación con el salario, la seguridad social, los aportes parafiscales y las prestaciones sociales. Su estudio permite comprender las obligaciones del empleador y los conceptos que intervienen en el cálculo de los pagos a los trabajadores.
              p La Ley 2466 de 2025, sancionada el 25 de junio de 2025, introdujo cambios en la jornada laboral, el horario nocturno y los recargos por trabajo en días de descanso obligatorio o festivos. Estos cambios inciden en la liquidación de la nómina y se estudian junto con sus fechas de aplicación (Congreso de la República de Colombia, 2025).
            .col-lg-5(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/intro/img2.svg", alt="", style="width: 460px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
