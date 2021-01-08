<template>
  <div class="summary">
    <div class="content">
      <p>{{animal.vData.name.toUpperCase()}}</p>
      <div class="wrapper">
        <div class="aka">
          <div class="animal-container" :style="`background-color: ${animal.vData.bg}`">
            <video v-if="animal.vData.clip != ''" class="animal-clip" muted loop autoplay @click.right.prevent>
              <source :src="require(`../assets/clips/${animal.vData.clip}`)" type="video/mp4">
            </video>
            <div v-else class="animal-art" :style="animal.vData.art != '' ? `background-image: url(${require(`../assets/art/animals/${animal.vData.art}`)})` : ''"/>
          </div>
          <p v-if="animal.iData.aka != ''"><b>Também conhecid{{animal.iData.sub}} como:</b> {{animal.iData.aka}}</p>
          <p v-else></p>
          <article><b>Situação: {{animal.iData.situation.toUpperCase()}}</b></article>
        </div>
        <div class="trivia">
          <article>
            <p><b>Características:</b> {{animal.iData.info}}</p>
          </article>
          <article>
            <p><b>Habitat:</b> {{animal.iData.habitat}}</p>
          </article>
          <article>
            <p><b>PRINCIPAIS AMEAÇAS:</b></p>
            <ul>
              <li v-for="(item, index) in animal.iData.threats" :key="`t_${index}`"><span>•</span> {{item}}</li>
            </ul>
          </article>
        </div>
        <div class="card">
          <img :src="require(`../assets/pictures/${animal.vData.pic}`)" :alt="animal.vData.name">
          <div class="stats">
            <ul>
              <li>Nome científico: {{animal.iData.cname}}</li>
              <li>Ordem: {{animal.iData.order}} | Família: {{animal.iData.family}}</li>
              <li v-for="(i, index) in animal.iData['summary-character']" :key="`sc_${index}`">{{i}}</li>
            </ul>
          </div>
          <!--
          -->
        </div>
      </div>
      <a href="#animais" @click="clickRedirect('/')">&#60; VOLTAR PARA ANIMAIS</a>
    </div>
    <img class="detail-left" src="../assets/art/detail_animals_web_l.png">
    <img class="detail-right" src="../assets/art/detail_animals_web_r.png">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { animalVData, animalIData, clickRedirect } from '../assets/functions';

@Component({
  components: {
  },
})
export default class Info extends Vue {

  private get id() {
    return this.$route.params.animal;
  }

  private get animal() {
    const vData = animalVData(this.id);
    const iData = animalIData(this.id);
    return {
      vData,
      iData
    }
  }

  private clickRedirect(location: string) {
    clickRedirect(this, location);
  }

  created() {
    document.title = `Animália — ${this.animal.vData.name}`;
  }

  mounted() {
    const spyList = Array<any>();
    this.$emit('scrollSpy', spyList);
  }
}
</script>

<style lang="scss" scoped>
.summary {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 10vmin;
  @media screen and (max-width: 720px) {
    margin-bottom: 6vmin;
  }

  >img {
    position: absolute;
    bottom: 0;
    object-fit: contain;
    width: 10%;
    @media screen and (max-width: 720px){
      display: none;
    }

    &.detail-right {
      right: 0;
      top: 10%;
    }

    &.detail-left {
      left: 0;
      top: 30%;
    }
  } 
}

.content {
  width: 80%;
  height: max-content;
  display: grid;
  grid-template-rows: auto;
  gap: 2vmax;
  margin: 2vmax 0;
  @media screen and (max-width: 720px) {
    margin: 4vmax 0;
  }
  color: rgba(black, .7);
  justify-self: center;

  @mixin text-base {
    color: $pink;
    font-family: 'all-round-gothic-bold';
  }

  >p {
    @include text-base();
    font-size: 2vmax;
    @media screen and (max-width: 720px) {
      font-size: 4vmax;
      text-align: center;
    }
  }

  >a {
    @include text-base();
    font-size: 1vmax;
    @media screen and (max-width: 720px) {
      font-size: 2vmax;
    }

    &:link {
      text-decoration: none;
    }
  }

  .wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    @media screen and (min-width: 721px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 6vmax;
      margin-top: 0;
    }
    @media screen and (max-width: 720px) {
      grid-template-rows: repeat(3, auto);
      gap: 4vmax;
    }

    .aka {
      width: 100%;
      height: 100%;
      @media screen and (max-width: 720px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .animal-container {
        border-radius: 10px;
        width: 100%;
        height: calc((80vw - 5px - 12vmax) / 3);
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 720px) {
          height: calc((100vw - 5px) * 0.8);
        }

        .animal-art {
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          height: 95%;
          width: 95%;
        }

        video.animal-clip {
          height: 95%;
          width: 95%;
          object-fit: contain;

          &::-webkit-media-controls {
            display: none;
          }
        }
      }

      >p {
        margin: 1.3vmax 0;
        font-size: 1vmax;
        @media screen and (max-width: 720px) {
          font-size: 2vmax;
          text-align: center;
        }
      }

      >article {
        width: max-content;
        color: white;
        background-color: $lilac;
        padding: .5vmax 1.5vmax;
        border-radius: 10px;
        letter-spacing: .05vmax;
        font-size: .8vmax;
        @media screen and (max-width: 720px) {
          font-size: 1.7vmax;
          padding: 1vmax 2vmax;
        }
      }
    }

    .trivia {
      width: 100%;
      border-top: 3px solid $pink;
      line-height: 1.2vmax;
      @media screen and (max-width: 720px) {
        line-height: 2.6vmax;
      }

      >article {
        margin: 1.5vmax 0;
        font-size: .9vmax;
        @media screen and (max-width: 720px) {
          font-size: 1.8vmax;
          margin: 2vmax 0;
        }
        >ul {
          list-style: none;
          >li >span {
            font-size: 1.1vmax;
            @media screen and (max-width: 720px) {
              font-size: 2.2vmax;
            }
          } 
        }
      }

      :nth-last-child(1) > p {
        color: $pink;
      }
    }

    .card {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      >img {
        object-fit: contain;
        width: 100%;
        height: auto;
      }

      .stats {
        width: 100%;
        background-color: rgba($orange, 1);
        color: white;
        border-radius: 15px;
        margin-top: -10%;
        font-size: .9vmax;
        padding: 0 1.5vmax;
        @media screen and (max-width: 720px) {
          font-size: 1.9vmax;
          padding: 0 3vmax;
        }

        >ul {
          list-style: none;
          >li {
            margin: 1.1vmax 0;
            @media screen and (max-width: 720px) {
              margin: 3vmax 0;
            }
            &:before {
              content: '-';
              margin: 0 .5vmax;
              @media screen and (max-width: 720px) {
                margin: 0 1vmax;
              }
            }
          }
        }
      }
    }

  }
}
</style>
