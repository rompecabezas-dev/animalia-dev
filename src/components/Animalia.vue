<template>
    <div class="animalia">
        <div class="wrapper">
            <div class="info">
                <div class="intro">
                    UM MERGULHO NO FASCINANTE MUNDO SELVAGEM
                </div>
                <div class="invite">
                    <span>ANIMÁLIA</span> convida você a conhecer de perto bichos que fazem parte da vida na Terra, mas que estão ameaçados de extinção ou em situação de vulnerabilidade. Explore este mundo navegando pelo site ou curtindo presencialmente nossa exposição com esculturas incríveis para você fotografar. Quem vai embarcar nessa?
                </div>
                <div class="quiz-btn" @click="clickRedirect('/quiz')">
                    <div class="btn-title">QUIZ ANIMÁLIA</div>
                    <div class="btn-text">Teste seus conhecimentos sobre o <b>Mundo Animália</b></div>
                    <img src="../assets/img/arts/quiz.png" alt="Quiz Animália">
                </div>
            </div>
            <img class="art">
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { clickRedirect } from '../assets/functions';

@Component
export default class Animalia extends Vue {
    private clickRedirect(url: string) {
        clickRedirect(this, url);
    }
}
</script>

<style scoped lang="scss">
    .animalia {
        width: 100%;
        height: 100%;
        @media screen  and (min-width: 721px){
            
        }
        
        .wrapper {
            position: relative;
            height: 100%;
            width: 100%;
            display: grid;
            grid-template-columns: 35% 1fr;
            grid-template-areas: 'info image';
            padding-left: 4vmax;
            @media screen and (max-width: 720px) { 
                padding: 0 3vmax;
                display: flex;
                flex-direction: column-reverse;
            }

            .art {
                grid-area: image;
                object-fit: contain;
                @media screen and (max-width: 720px) {
                    position: relative;
                    width: 100%;
                    content: url('../assets/img/arts/art_mobile.png');
                }
                @media screen and (min-width: 721px) {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    height: 120%;
                    content: url('../assets/img/arts/art_web.png');
                }
            }

            .info {
                grid-area: info;
                width: 100%;
                z-index: 300;
    
                >div {
                    margin: 3vmin 0;
                    width: 100%;
                }
    
                .intro {
                    font-family: 'all-round-gothic-bold';
                    color: $teal;
                    font-size: 3.5vmax;
                    @media screen and (max-width: 720px) {
                        font-size: 18px;
                    }
                }
    
                .invite {
                    font-size: 1.2vmax;
                    color: $text;
                    line-height: 1.9vmax;
                    @media screen and (max-width: 720px) {
                        line-height: 18px;
                        font-size: 13px;
                    }
    
                    span {
                        color: $orange;
                        font-weight: bold;
                    }
                }
    
                .quiz-btn {
                    color: white;
                    background-color: $pink;
                    border-radius: 15px;
                    padding: 1vmax;
                    padding-right: 7vmax;
                    display: grid;
                    gap: .7vmax;
                    margin: 4vmax 0;
                    width: max-content;
                    position: relative;
                    user-select: none;
                    cursor: pointer;
                    @media screen and (max-width: 720px) {
                        padding: 3vmax;
                        width: 90%;    
                    }
    
    
                    .btn-title {
                        font-family: 'all-round-gothic-bold';
                        font-size: 1.4vmax;
                        @media screen and (max-width: 720px) {
                            font-size: 18px;    
                        }
                    }
    
                    .btn-text {
                        font-size: .8vmax;
                        @media screen and (max-width: 720px) {
                            font-size: 12px;
                            width: 70%;
                        }
                    }

                    img {
                        position: absolute;
                        right: -10%;
                        height: 110%;
                        object-fit: contain;
                    }
                }
            }
        }
    }
</style>
