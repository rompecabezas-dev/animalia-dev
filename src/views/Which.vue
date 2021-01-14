<template>
  <div class="test">
    <img class="dright">
    <img class="dleft">
    <div class="content">
      <div class="quiz">
        <p>QUIZ</p>
        <div>ANIMÁLIA <img src="../assets/img/arts/quiz.webp"></div>
        <p class="quest">Qual animal você seria no <b>Animália?</b></p>
      </div>
      <div v-if="current >= 10" class="completion">
        <newsletter v-if="!subscribed" @subscribed="viewResults()"/>
        <my-animal v-else :result="result"/>
      </div>
      <question v-else-if="current >= 0" :question="questionList[current]" @userResult="nextQuestion($event)"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import questions from '../assets/data/quiz/animal/questions';
import { shuffleArray } from '../assets/functions';
import Question from '../components/Question.vue';
import Newsletter from '../components/Newsletter.vue';
import MyAnimal from '../components/MyAnimal.vue';

@Component({
  components: {
    Question,
    Newsletter,
    MyAnimal
  },
})
export default class Test extends Vue {

  private current = -1;
  private score!: Map<string, number>;
  private questionList!: Array<any>;
  private subscribed = false;

  private get result() {
    return Array.from(this.score.entries()).sort((e1, e2) => {
      return e2[1] - e1[1];
    })[0];
  }

  private nextQuestion(event: {earned: string}) {
    this.score.set(event.earned, (this.score.get(event.earned) ?? 0) + 1);
    this.current += 1;
  }

  private viewResults() {
    (document.getElementById('lead') as HTMLButtonElement).click();
    this.subscribed = true;
  }

  created() {
    document.title = 'Quiz Animália';
  }

  mounted() {
    this.questionList = shuffleArray(questions);
    this.score = new Map<string, number>();
    this.current = 0;
    const spyList = Array<any>();
    this.$emit('scrollSpy', spyList);
  }
}
</script>

<style lang="scss" scoped>
.test {
  cursor: default;
  height: 100%;
  width: 100%;
  position: relative;
  @media screen and (max-width: 720px) {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    background-image: url('../assets/img/arts/bg_quiz_mobile.webp');
  }

  >img {
    @media screen and (max-width: 720px) {
      display: none;
    }
    object-fit: contain;
    height: 80%;
    position: absolute;
    bottom: 0;
    &.dleft {
      left: 0;
      content: url('../assets/img/arts/quiz_detail_left_web.webp');
    }
    &.dright {
      right: 0;
      content: url('../assets/img/arts/quiz_detail_right_web.webp');
    }
  }

  .content {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 1.5vmax;

    .quiz {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      font-family: 'all-round-gothic-bold';
      @media screen and (max-width: 720px) {
        margin-top: 4vmax;
      }

      p {
        &:nth-child(1){
          color: $lilac;
          font-size: 3.5vmax;
          padding-right: 4vmax;
          @media screen and (max-width: 720px) {
            font-size: 5vmax;
          }
        }
        &.quest {
          font-family: 'roboto-regular';
          color: $pink;
          margin: .5vmax 0;
          font-size: .8vmax;
          @media screen and (max-width: 720px) {
            font-size: 1.5vmax;
            margin: 1vmax 0;
          }
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

    .completion {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
