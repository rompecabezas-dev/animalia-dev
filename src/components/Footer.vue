<template>
    <div class="footer-bar">
        <div class="info">
            <p>Animália</p>
            <a href="#">Fale conosco</a>
        </div>
        <div class="prod">
            <p>Idealizado e produzido</p>
            <a href="http://www.rompecabezas.com.br" target="_blank">
                <img src="@/assets/rompecabezas.png" alt="Rompecabezas">
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {

}
</script>

<style scoped lang="scss">
    .footer-bar {
        width: 85%;
        height: max-content;
        display: flex;
        justify-content: center;
        border-top: 1px solid $border;
        padding: 2vmax;
        @media screen and (max-width: 720px) {
            flex-direction: column;
            padding: 0;
        }

        div {
            padding: 0 2vmax;
            @media screen and (max-width: 720px) {
                padding: 2vmax 0;
            }
        }

        .info {
            display: flex;
            flex-direction: column;
            font-size: 14px;

            p {
                font-weight: bold;
                margin-bottom: .25vmax;
            }

            a {
                color: black;
                margin: .25vmax 0;
                width: max-content;
                
                &:link {
                    text-decoration: none;
                }
            }
        }

        .prod {
            display: flex;
            flex-direction: column;

            @media screen and (max-width: 720px) {
                border-top: 1px solid $border;
            }

            p {
                font-size: 12px;
            }

            img {
                object-fit: contain;
                width: 200px;
                margin: 1vmax 0;
                @media screen and (max-width: 720px) {
                    width: 50%;
                }
            }
        }
    }
</style>
