<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1 El salario
      p.mb-4(data-aos="fade-left") El salario es la remuneración que recibe el trabajador como contraprestación directa de sus servicios. Puede pagarse en dinero o en especie e incluye los conceptos que tienen naturaleza salarial, conforme al artículo 127 del CST.
      .row.bg-c7
        .col-12(data-aos="fade-right")
          .px-4.pt-4.pt-lg-0
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src="@/assets/curso/temas/t2/img1.svg", alt="", style="width: 80px").m-auto
                  .col
                    p #[b Embargo del salario]
                    p.mb-0 Como regla general, el salario mínimo legal o convencional es inembargable, y del valor que lo exceda puede embargarse la quinta parte. Excepcionalmente, puede embargarse hasta el 50 % de cualquier salario, incluido el mínimo, en favor de cooperativas legalmente autorizadas o para cubrir obligaciones alimentarias, conforme a los artículos 154, 155 y 156 del CST.
              .col-lg-5
                figure
                  img(src="@/assets/curso/temas/t2/img2.svg", alt="", style="width: 350px").m-auto
      Separador
      .row.bg-c9
        .col-12.px-5
          #t_2_1
          .titulo-segundo.color-acento-contenido
            h2 2.1 Fijación del salario mínimo
          p.mb-4(data-aos="fade-left") La fijación del salario mínimo se realiza mediante el proceso de concertación regulado por la Ley 278 de 1996, que se presenta a continuación:
          .row.justify-content-center
            .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/temas/t2/img2.png", alt="", style="width: 500px").m-auto
              .row
                .col-12
                  .p-4.bg-c8
                    p.text-center #[b Paso 1. Concertación]
                    p.text-center.mb-0 La Comisión Permanente de Concertación de Políticas Salariales y Laborales, con participación del Gobierno, los empleadores y los trabajadores, analiza la propuesta de incremento.
            .col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/t2/img3.png", alt="", style="width: 500px").m-auto
              .row
                .col-12
                  .p-4.bg-c8
                    p.text-center #[b Paso 2. Análisis de factores]
                    p.text-center.mb-0 Se consideran la inflación, la productividad, el crecimiento del producto interno bruto y la participación de los salarios en el ingreso nacional.
            .col-md-5.col-lg-4(data-aos="fade-right")
              figure
                img(src="@/assets/curso/temas/t2/img4.png", alt="", style="width: 500px").m-auto
              .row
                .col-12
                  .p-4.bg-c8
                    p.text-center #[b Paso 3. Fijación]
                    p.text-center.mb-0 Si se alcanza un acuerdo, se adopta el valor concertado. Si no se alcanza, el Gobierno nacional fija el salario mínimo por decreto, de acuerdo con los criterios legales.
          Separador
          #t_2_2
          .titulo-segundo.color-acento-contenido
            h2 2.2 Salario mínimo
      .row.bg-c3
        .col-12(data-aos="fade-right")
          .px-4.pt-4.pt-lg-0
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src="@/assets/curso/temas/t2/img3.svg", alt="", style="width: 80px").m-auto
                  .col
                    p.mb-0 El salario mínimo es la remuneración mínima legal que debe recibir el trabajador, de acuerdo con la jornada y las condiciones de su vinculación. Su valor se establece para cada año. Para liquidar la nómina deben consultarse los decretos vigentes sobre salario mínimo y auxilio de transporte, así como los requisitos para reconocer este último.
              .col-lg-5
                figure
                  img(src="@/assets/curso/temas/t2/img4.svg", alt="", style="width: 350px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
