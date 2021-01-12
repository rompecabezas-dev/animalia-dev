<template>
  <div class="test">
    <div class="content">
      <div class="quiz">
        <p>QUIZ</p>
        <div>ANIMÁLIA <img src="../assets/img/arts/quiz.webp"></div>
        <p class="quest">Quanto você aprendeu sobre o <b>Mundo Animália?</b></p>
      </div>
      <div v-if="current >= 10" class="completion">
        <newsletter v-if="!subscribed" @subscribed="viewResults()"/>
        <results v-else :score="score"/>
      </div>
      <question v-else-if="current >= 0" :question="questionList[current]" @userResult="nextQuestion($event)"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import questions from '../assets/data/quiz/questions';
import { shuffleArray } from '../assets/functions';
import Question from '../components/Question.vue';
import Newsletter from '../components/Newsletter.vue';
import Results from '../components/Results.vue';

@Component({
  components: {
    Question,
    Newsletter,
    Results
  },
})
export default class Test extends Vue {

  private current = -1;
  private score = 0;
  private questionList!: Array<any>;
  private subscribed = false;

  private nextQuestion(event: {earned: number}) {
    this.score += event.earned
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
    this.score = 0;
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
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  background-image: url('../assets/img/arts/bg_quiz_web.webp');
  @media screen and (max-width: 720px) {
    background-image: url('../assets/img/arts/bg_quiz_mobile.webp');
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
