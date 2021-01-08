<template>
    <div class="results">
        <p>{{results.disclaimer.toUpperCase()}}</p>
        <p>{{results.message}}</p>
        <div>
            <a href="/#animais" @click="clickRedirect('/')">EXPLORE O MUNDO ANIMÁLIA</a>
            <a href="/quiz" @click.prevent="clickRedirect('/quiz')">REFAZER O QUIZ</a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import results from '../assets/data/quiz/results';
import { clickRedirect } from '../assets/functions';

@Component
export default class Results extends Vue {
    @Prop() private score!: number;
    
    private get results() {
        switch(this.score) {
            case 0:
                return results.zero;
            case 1:
                return results.one;
            case 2:
                return results.two;
            case 3:
                return results.three;
            case 4:
                return results.four;
            case 5:
                return results.five;
            case 6:
                return results.six;
            case 7:
                return results.seven;
            case 8:
                return results.eight;
            case 9:
                return results.nine;
            case 10:
                return results.perfect;
            default:
                return results.zero;
        }
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
    display: flex;
    flex-direction: column;
    align-items: center;

    >p{
        margin: 1vmax;
        &:nth-child(1) {
            width: 33%;
            text-align: center;
            font-family: 'all-round-gothic-bold';
            color: $teal;
            font-size: 2vmax;
            @media screen and (max-width: 720px) {
                font-size: 3vmax;
                width: 70%;
            }
        }

        &:nth-child(2) {
            width: 33%;
            font-family: 'roboto-regular';
            color: $pink;
            font-size: 1.1vmax;
            @media screen and (max-width: 720px) {
                font-size: 1.7vmax;
                width: 70%;
            }
        }
    }

    >div {
        display: flex;
        width: 33%;
        align-items: center;
        justify-content: space-between;
        font-family: 'all-round-gothic-bold';
        color: $pink;
        margin: 5vmax 0;
        @media screen and (max-width: 720px) {
            flex-direction: column;
            align-items: center;
            width: 70%;
            margin: 5vmax 0;

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

            &:link{
                text-decoration: none;
            }
        }
        /*
        >div {
            
        }
        */
    }
}
</style>
