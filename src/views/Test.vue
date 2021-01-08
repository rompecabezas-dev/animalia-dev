<template>
  <div class="test">
    <div class="question" v-if="current > -1">
      {{ questionList[current].question }}
      <ul>
        <li v-for="(item, index) in shuffleArray(questionList[current].choices)" :key="`ch_${index}`">{{item}}</li>
      </ul>
      <p>Resposta: {{questionList[current].answer}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import questions from '../assets/data/quiz/questions';
import results from '../assets/data/quiz/results';
import { shuffleArray } from '../assets/functions';

@Component({
  components: {
  },
})
export default class Test extends Vue {

  private current = -1;
  private questionList!: Array<any>;

  private shuffleArray(array: Array<any>) {
    return shuffleArray(array);
  }

  created() {
    document.title = 'Quiz Animália';
  }

  mounted() {
    this.questionList = shuffleArray(questions);
    this.current = 0;
    const spyList = Array<any>();
    this.$emit('scrollSpy', spyList);
  }
}
</script>

<style lang="scss" scoped>
.test {
  width: 100%;
  height: 100%;
  
}
</style>
