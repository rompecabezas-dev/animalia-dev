<template>
    <div class="results">
        <div class="content">
            <img :src="require(`../assets/img/animals/pictures/${myAnimal.pic}`)" :alt="myAnimal.name">
            <div>
                <p>{{results.disclaimer.toUpperCase()}}</p>
                <p>{{results.message}}</p>
                <p>Quer <a :href="`/${result[0]}`" @click.prevent="clickRedirect(`/${result[0]}`)">saber mais</a> sobre a sua versão animal? Navegue pelo nosso portal e divirta-se!</p>
            </div>
        </div>
        <div>
            <a href="/#animais" @click="clickRedirect('/')">EXPLORE O MUNDO ANIMÁLIA</a>
            <a href="/quiz" @click.prevent="clickRedirect('/quiz')">REFAZER O QUIZ</a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import results from '../assets/data/quiz/animal/results';
import { clickRedirect, animalVData } from '../assets/functions';

@Component
export default class MyAnimal extends Vue {
    @Prop() private result!: string;
    
    private get results() {
        switch(this.result[0]) {
            case 'arara-azul': 
                return results['arara-azul'];
            case 'elefante-da-savana':
                return results['elefante-da-savana'];
            case 'jacare-de-papo-amarelo':
                return results['jacare-de-papo-amarelo'];
            case 'macaco-prego':
                return results['macaco-prego'];
            case 'onca-pintada':
                return results['onca-pintada'];
            case 'tartaruga-oliva':
                return results['tartaruga-oliva'];
            default:
                return results['macaco-prego'];
        }
    }

    private get myAnimal() {
        return animalVData(this.result[0]);
    }

    private clickRedirect(location: string) {
        clickRedirect(this, location);
    }
}
</script>

<style scoped lang="scss">
.results {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr auto;

    .content {
        width: 66%;
        display: grid;
        justify-self: center;
        @media screen and (min-width: 721px) {
            grid-template-columns: auto auto;
            gap: 1.5vmax;
        }
        @media screen and (max-width: 720px) {
            width: 80%;
            grid-template-rows: auto;
            gap: 1.5vmax;
        }

        >img {
            object-fit: contain;
            justify-self: end;
            width: 100%;
        }

        >div {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            >p{
                margin: .5vmax;
                width: 100%;
                font-family: 'roboto-regular';
                color: $pink;
                font-size: 1vmax;
                @media screen and (max-width: 720px) {
                    font-size: 1.7vmax;
                    width: 100%;
                }

                &:nth-child(1) {
                    font-family: 'all-round-gothic-bold';
                    color: $teal;
                    font-size: 1.5vmax;
                    @media screen and (max-width: 720px) {
                        font-size: 2.5vmax;
                    }
                }
            } 
        }   
    }

    >div:nth-last-child(1) {
        width: 33%;
        justify-self: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'all-round-gothic-bold';
        color: $pink;
        margin-bottom: 2vmax;
        @media screen and (max-width: 720px) {
            flex-direction: column;
            align-items: center;
            width: 70%;
            margin-bottom: 12vmax;

            >* {
                margin: 1.5vmax 0;
            }
        }

        >a {
            border: 1px solid; 
            border-color: $pink;
            color: $pink;
            &:nth-child(1) {
                border-color: $lilac;
                color: $lilac;
            }
            padding: .25vmax .5vmax;
            border-radius: 10px;
            position: relative;
            font-size: 1vmax;
            cursor: pointer;
            @media screen and (max-width: 720px) {
                font-size: 1.6vmax;
            }
        }
    }
}
</style>
