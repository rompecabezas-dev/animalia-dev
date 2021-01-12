<template>
  <div class="quiz">
    <div class="present">
      <p>QUIZ</p>
      <div>ANIMÁLIA <img src="../assets/img/arts/quiz.webp"></div>
      <p class="quest">Quanto você aprendeu sobre o <b>Mundo Animália?</b></p>
      <a class="btn-start" href="/quiz-teste-seus-conhecimentos" @click.prevent="clickRedirect('/quiz-teste-seus-conhecimentos')">INICIAR</a>
      <a href="/#top" @click.prevent="clickRedirect('/')">&#60; PÁGINA INICIAL</a>
    </div>
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
    margin-top: 2vmax;
    font-family: 'all-round-gothic-bold';
    @media screen and (max-width: 720px) {
      margin-top: 15vmax;
    }


    p {
      &:nth-child(1){
        color: $lilac;
        font-size: 6.5vmax;
        padding-right: 7vmax;
        @media screen and (max-width: 720px) {
          font-size: 8vmax;
        }
      }
      &.quest {
        font-family: 'roboto-regular';
        color: $pink;
        margin: .5vmax 0;
        font-size: 1.2vmax;
        @media screen and (max-width: 720px) {
          font-size: 2vmax;
          margin: 1.5vmax 0;
        }
      }
    }

    >div {
      color: white;
      background-color: $pink;
      padding: 1.5vmax 3vmax;
      border-radius: 10px;
      position: relative;
      font-size: 4vmax;
      @media screen and (max-width: 720px) {
        font-size: 6.5vmax;
      }

      >img {
        position: absolute;
        object-fit: contain;
        height: 100%;
        top: -50%;
        right: -10%;
      }
    }

    a {
      color: $pink;
      font-size: 1vmax;
      @media screen and (max-width: 720px) {
        font-size: 1.5vmax;
      }
      &:link {
        text-decoration: none;
      }

      &.btn-start {
        color: $lilac;
        border: 4px solid $pink;
        border-radius: 25px;
        font-size: 1.8vmax;
        padding: .5vmax 2.5vmax;
        margin: 3vmax;
        @media screen and (max-width: 720px) {
          font-size: 2.3vmax;
          border: 2px solid $pink;
          margin: 5vmax;
        }
      }
    }
  }
}
</style>
