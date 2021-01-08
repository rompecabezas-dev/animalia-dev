<template>
  <div class="animals">
      <p>ANIMAIS</p>
      <div class="wrapper">    
        <div class="mosaic v1">
            <div class="animal-container" v-for="(animal, id) in mosaicData(mosaic.b1)" :key="id" :style="`background-color: ${animal.bg}`" @click="clickRedirect(`/${id}`)">
                <div class="animal-art" :style="animal.art != '' ? `background-image: url(${require(`../assets/art/animals/${animal.art}`)})` : ''"/>   
            </div>
        </div>
        <div class="mosaic v2">
            <div class="animal-container" v-for="(animal, id) in mosaicData(mosaic.b2)" :key="id" :style="`background-color: ${animal.bg}`" @click="clickRedirect(`/${id}`)">
                <div class="animal-art" :style="animal.art != '' ? `background-image: url(${require(`../assets/art/animals/${animal.art}`)})` : ''"/>     
            </div>
        </div>
        <div class="mosaic v3">
            <div class="animal-container" v-for="(animal, id) in mosaicData(mosaic.b3)" :key="id" :style="`background-color: ${animal.bg}`" @click="clickRedirect(`/${id}`)">
                <div class="animal-art" :style="animal.art != '' ? `background-image: url(${require(`../assets/art/animals/${animal.art}`)})` : ''"/>
            </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { clickRedirect, animalVData } from '@/assets/functions';

@Component
export default class Mosaic extends Vue {
    private clickRedirect(location: string) {
        clickRedirect(this, location);
    }

    private mosaicData(mosaic: Array<string>) {
        const data = Object();
        mosaic.forEach(id => {
            data[id] = animalVData(id);
        })
        return data;
    }

    private mosaic = {
        b1: [
            "onca-pintada",
            "lobo-vermelho",
            "mico-leao-dourado",
            "coala",
            "anta",
            "lobo-guara"
        ],
        b2: [
            "girafa-masai",
            "veado-campeiro",
            "elefante-da-savana",
            "ariranha",
            "arara-azul",
            "onca-parda"
        ],
        b3: [
            "jacare-de-papo-amarelo",
            "tartaruga-oliva",
            "jaguatirica",
            "macaco-prego",
            "flamingo-de-james",
            "pinguim-africano"
        ]
    }
}
</script>

<style scoped lang="scss">

.animals {
    width: 100%;
    padding: 0 4vmax;
    @media screen and (max-width: 720px) {
        padding: 0 3vmax;
        text-align: center;
    }

    h1 {
        display: none;
    }

    >p {
        color: $lilac;
        padding: 3vmin 0;
        font-family: 'all-round-gothic-bold';
        font-size: 2.8vmax;
        @media screen and (max-width: 720px) {
            font-size: 4vmax;
        }
    }

    .wrapper {
        width: 100%;
        display: grid;
        gap: .5vmax;
        @media screen and (min-width: 721px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (max-width: 720px) {
            grid-template-rows: repeat(3, 1fr);
        }

        .mosaic {
            position: relative;
            width: 100%;
            height: calc((100vw - 5px - 9vmax) / 3);
            @media screen and (max-width: 720px) {
                height: calc(100vw - 5px - 6vmax);
            }
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap: .5vmax;

            &.v1 :nth-child(1) {
                grid-column-start: 1;
                grid-column-end: 3;
                grid-row-start: 1;
                grid-row-end: 3;
            }

            &.v2 :nth-child(1) {
                grid-column-start: 1;
                grid-column-end: 3;
                grid-row-start: 2;
                grid-row-end: 4;
            }

            &.v3 :nth-child(1) {
                grid-column-start: 2;
                grid-column-end: 4;
                grid-row-start: 2;
                grid-row-end: 4 ;
            }

            .animal-container {
                border-radius: 10px;
                cursor: pointer;

                .animal-art {
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    height: 100%;
                    width: 100%;
                }
            }

        }
    }
}

</style>
