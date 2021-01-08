<template>
  <div class="home">
    <animalia id="animalia"/>
    <mosaic id="animais"/>
    <the-event/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Animalia from '@/components/Animalia.vue';
import Mosaic from '@/components/Mosaic.vue'
import TheEvent from '@/components/Event.vue';

@Component({
  components: {
    Animalia,
    Mosaic,
    TheEvent
  },
})
export default class Home extends Vue {
  private subjects = ['animalia', 'animais', 'sobre', 'visite']

  created() {
    document.title = 'Animália';
  }

  mounted() {
    const spyList = Array<any>();
    this.subjects.forEach(i => {
      spyList.push({
        name: i,
        element: document.getElementById(i) as HTMLElement
      })
    })
    this.$emit('scrollSpy', spyList);
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fill);
  gap: 5vmin;
  justify-content: center;
  align-items: center;
}
</style>
