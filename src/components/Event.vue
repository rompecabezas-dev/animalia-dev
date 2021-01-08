<template>
  <div class="event">
    <div class="about" id="sobre">
      <p>ANIMÁLIA</p>
      <p>Uma imersão no fascinante mundo selvagem. Animália convida você a conhecer de perto bichos que fazem parte da riqueza e variedade da vida na Terra, mas que estão ameaçados de extinção ou em situação de vulnerabilidade.</p>
      <p>São animais da fauna brasileira e de outros continentes, representados em seus ecossistemas por esculturas incríveis, com cenografia e materiais todos certificados e sustentáveis. Uma experiência inesquecível de contato e conhecimento com a força e a beleza da natureza – que você pode ajudar a preservar.</p>
      <div class="socials">
        <a href="http://instagram.com/animaliaexperience" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a href="http://facebook.com/animaliaexperience" target="_blank">
          <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </a>
        <div class="follow">
          <p>SIGA NAS</p>
          <p>REDES SOCIAIS</p>
        </div>
      </div>
    </div>
    <div class="where" id="visite">
      <div class="title">
        AGENDA ANIMÁLIA
      </div>
      <div class="locations">
        <div class="locale">
          <p>SÃO PAULO</p>
          <p>De 09 a 31/01/2021</p>
          <p>Local: Morumbi Shopping (Avenida Roque Petroni Júnior, 1089 - Jardim das Acácias - CEP: 04707-900)</p>
          <p>Funcionamento: de segunda a domingo das 12h às 22h</p>
        </div>
        <div class="locale">
          <p>CURITIBA</p>
          <p>De 15/01 a 07/02/2021</p>
          <p>Local: Shopping Pátio Batel (Avenida do Batel, 1868 - Batel - CEP: 80420-090)</p>
          <!--
          <p>Funcionamento: de segunda a domingo das 10h às 22h</p>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheEvent extends Vue {
}
</script>

<style scoped lang="scss">

.event {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10vmin 0;
  @media screen and (max-width: 720px){
    flex-direction: column;
    align-items: center;
    padding: 6vmin 0;
  }
  @media screen and (min-width: 721px){
    justify-content: space-between;
  }

  .about {
    width: 33%;
    padding-left: 4vmax;
    display: grid;
    grid-template-rows: repeat(auto-fill, auto);
    gap: 3vmin;
    @media screen and (max-width: 720px) {
      padding: 0 3vmax;
      width: 100%;
      gap: 3vmax;
    }

    > p {
      color: $text;
      line-height: 2vmax;
      font-size: 1vmax;
      @media screen and (max-width: 720px) {
        font-size: 2vmax;
        line-height: 3vmax;
      }

      &:nth-child(1) {
        @media screen and (max-width: 720px) {
          text-align: center;
        }
        color: $pink;
        font-size: 3.5vmax;
        font-family: 'all-round-gothic-bold';
      }
    }

    .socials {
      width: max-content;
      font-size: 3.2vmax;
      display: grid;
      align-items: center;
      grid-template-columns: repeat(3, auto);
      gap: 1.5vmax;
      @media screen and (max-width: 720px) {
        justify-self: center;
        font-size: 5vmax;
      }
      a{
        color: $pink;

        :link {
          text-decoration: none;
        }
      }

      .follow {
        font-family: 'all-round-gothic-bold';
        font-size: 1.5vmax;
        color: $lilac;
        @media screen and (max-width: 720px) {
          font-size: 2.4vmax;
        }
      }
    }
  }

  .where {
    width: 40%;
    background-color: $blue;
    margin-right: 4vmax;
    border-radius: 10px;
    position: relative;
    height: max-content;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 720px) {
      width: 80%;
      margin: 8vmax 0;
      margin-bottom: 0;
      align-items: center;
    }

    .title {
      position: absolute;
      background-color: $orange;
      border-radius: 10px;
      padding: 1.2vmax;
      color: white;
      font-family: 'all-round-gothic-bold';
      font-size: 1.6vmax;
      @media screen and (min-width: 721px) {
        left: 5%;
        top: -5%;
      }
      @media screen and (max-width: 720px) {
        top: -4%;
        font-size: 2.2vmax;
        padding: 2vmax;
      }
    }

    .locations {
      padding: 3vmax;
      @media screen and (max-width: 720px) {
        padding: 5vmax;
      }

      .locale {
        padding: 2vmax 0;
        border-bottom: 3px solid white;
        color: white;
        font-size: 1.1vmax;
        line-height: 1.5vmax;

        @media screen and (max-width: 720px) {
          font-size: 2vmax;
          line-height: 3vmax;
        }

        &:nth-last-child(1) {
          border: none;
          padding-bottom: 0;
        }

        p:nth-child(1) {
          font-size: 1.2vmax;
          font-weight: bold;
          @media screen and (max-width: 720px) {
            font-size: 2.2vmax;
          }
        }
      }
    }

  }
}

</style>
