<template>
  <div class="quiz">
    <img>
    <div class=""></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Quiz extends Vue {
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
  height: 100%;
  width: 100%;
  position: relative;

  >img {
    object-fit: contain;
    width: 100%;
    position: absolute;
    bottom: 0;
    @media screen and (min-width: 721px) {
      content: url('../assets/art/bg_intro_quiz_web.png');
    }
    @media screen and (max-width: 720px) {
      content: url('../assets/art/bg_intro_quiz_mobile.png');
    }
    
    
  }
}
</style>
