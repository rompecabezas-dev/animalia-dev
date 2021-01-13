<template>
  <div class="quiz">
    <div class="present">
      <p>QUIZ</p>
      <div>ANIMÁLIA <img src="../assets/img/arts/quiz.webp"></div>
    </div>
    <div class="quests">
      <div class="wrapper">
        <div class="quest">
          <p>Quanto você aprendeu<br> sobre o <b>Mundo Animália?</b></p>
          <a href="/quiz-teste-seus-conhecimentos" @click.prevent="clickRedirect('/quiz-teste-seus-conhecimentos')">INICIAR</a>
        </div>
        <div class="quest">
          <p>Qual animal você seria<br> no <b>Animália?</b></p>
          <a href="/quiz-que-animal-seria-voce" @click.prevent="clickRedirect('/quiz-que-animal-seria-voce')">INICIAR</a>
        </div>
      </div>
    </div>
    <a href="/#top" @click.prevent="clickRedirect('/')">&#60; PÁGINA INICIAL</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { clickRedirect } from '../assets/functions';

@Component({
  components: {
  },
})
export default class Quiz extends Vue {
  private clickRedirect(location: string) {
    clickRedirect(this, location);
  }
  
  created() {
    document.title = 'Quiz Animália';
  }

  mounted() {
    const spyList = Array<any>();
    this.$emit('scrollSpy', spyList);
  }
}
</script>

<style lang="scss" scoped>
.quiz {
  text-align: center;
  cursor: default;
  height: 100%;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  background-image: url('../assets/img/arts/bg_intro_quiz_web.webp');
  @media screen and (max-width: 720px) {
    background-image: url('../assets/img/arts/bg_intro_quiz_mobile.webp');
  }

  .present {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-family: 'all-round-gothic-bold';
    @media screen and (max-width: 720px) {
      margin-top: 4vmax;
    }

    p {
      color: $lilac;
      font-size: 3.5vmax;
      padding-right: 4vmax;
      @media screen and (max-width: 720px) {
        font-size: 5vmax;
      }
    }

    >div {
      color: white;
      background-color: $pink;
      padding: 1vmax 2vmax;
      border-radius: 10px;
      position: relative;
      font-size: 3vmax;
      @media screen and (max-width: 720px) {
        font-size: 3.5vmax;
      }

      >img {
        position: absolute;
        object-fit: contain;
        height: 100%;
        top: -50%;
        right: -10%;
      }
    }
  }
  
  .quests {
    display: block;
    width: 100%;
    @media screen and (max-width: 720px) {
      width: calc(100vw - 5px);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
    }

    .wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 5vmax;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin: 3vmax 0;

      @media screen and (max-width: 720px) {
        margin: 4vmax 0;
        width: max-content;
        gap: 0;
        display: grid;
        grid-template-columns: repeat(2, calc(100vw - 5px));
      }

      .quest {
        text-align: center;
        border: 3px solid $pink;
        border-radius: 25px;
        padding: 4vmax 3vmax;
        display: grid;
        gap: 1vmax;
        @media screen and (max-width: 720px) {
          width: 60%;
          scroll-snap-align: center;
          justify-self: center;
        }
        @media screen and (min-width: 721px) {  
          &:nth-child(1) {
            grid-column-start: 2;
            grid-column-end: 3;
          }
          &:nth-child(2) {
            grid-column-start: 3;
            grid-column-end: 4;
          }
        }

        &:hover {
          border-color: $lilac;
        }
        
        >p {
          color: $pink;
          font-family: 'roboto-regular';
          margin: .5vmax 0;
          font-size: 1.3vmax;
          @media screen and (max-width: 720px) {
            font-size: 2.5vmax;
          }
        }

        >a {
          font-family: 'all-round-gothic-bold';
          color: $lilac;
          border: 3px solid $pink;
          border-radius: 15px;
          font-size: 1vmax;
          padding: .5vmax 2.5vmax;
          @media screen and (max-width: 720px) {
            font-size: 2.3vmax;
            border: 2px solid $pink;
            margin: 5vmax;
          }

          &:hover {
            background-color: $pink;
            color: white;
          }
        }
      }
    }
  }

  >a {
    display: block;
    font-family: 'all-round-gothic-bold';
    color: $pink;
    font-size: 1vmax;
    @media screen and (max-width: 720px) {
      font-size: 1.5vmax;
      margin-top: 3vmax;
    }
  }
}
</style>
