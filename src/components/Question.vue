<template>
  <div class="question">
    <div>{{ question.question }}</div>
    <ul>
        <li v-for="(item, index) in shuffleChoices(question.choices)" :key="`ch_${index}`" @click="choose(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { shuffleArray } from '../assets/functions';

@Component
export default class Question extends Vue {
    @Prop() private question!: { question: string; choices: Array<string>|any; answer?: string };

    private shuffleChoices() {        
        if (this.question.answer)
        {
            return shuffleArray(this.question.choices);
        }
        return shuffleArray(Object.values(this.question.choices));
    }

    private choose(userAnswer: string) {
        if (this.question.answer) {
            if (userAnswer === this.question.answer) {
            this.$emit("userResult", {earned: 1});
            } else {
                this.$emit("userResult", {earned: 0});
            }
        } else {
            this.$emit("userResult", {earned: Object.keys(this.question.choices).find(k => this.question.choices[k] === userAnswer)});
        }
    }
}
</script>

<style scoped lang="scss">
.question {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;

    >div {
        background-color: $pink;
        max-width: 50%;
        border-radius: 25px;
        color: white;
        padding: 3vmax;
        font-size: 1vmax;
        @media screen and (max-width: 720px) {
            font-size: 2vmax;
            max-width: 90%;
        }
    }

    >ul {
        list-style: none;
        margin: 1vmax 0;
        @media screen and (max-width: 720px) {
            margin: 2vmax 0;
        }
        >li {
            padding: .5vmax 1.5vmax;
            border: 2px solid;
            border-radius: 15px;
            margin: 1vmax 0;
            color: $lilac;
            font-size: 1vmax;
            cursor: pointer;
            @media screen and (max-width: 720px) {
                font-size: 2vmax;
                margin: 2vmax 0;
                }

            &:nth-child(1) {
                border-color: $teal;
                &:active {
                    background-color: $teal;
                    color: white;
                    
                }
            }
            &:nth-child(2) {
                border-color: $pink;
                &:active {
                    background-color: $pink;
                    color: white;
                }
            }
            &:nth-child(3) {
                border-color: $orange;
                &:active {
                    background-color: $orange;
                    color: white;
                }
            }
            &:nth-child(4) {
                border-color: $blue;
                &:active {
                    background-color: $blue;
                    color: white;
                }
            }
            &:nth-child(5) {
                border-color: $yellow;
                &:active {
                    background-color: $yellow;
                    color: white;
                }
            }
            &:nth-child(6) {
                border-color: $lilac;
                &:active {
                    background-color: $lilac;
                    color: white;
                }
            }
        }
    }
}
</style>
