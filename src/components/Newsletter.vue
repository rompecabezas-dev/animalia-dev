<template>
    <div class="newsletter">
        <p>PRONTO(A) PARA DESCORBRIR QUANTAS QUESTÕES VOCÊ ACERTOU?</p>
        <p>Preencha os campos abaixo para ver seu resultado!</p>
        <form name="subscription" @submit.prevent="sendUserData()">
            <input type="text" placeholder="Nome" name="nome">
            <input type="text" placeholder="Sobrenome" name="sobrenome">
            <input type="email" placeholder="E-mail" name="email">
            <span><input type="checkbox"> Eu autorizo o Animália a enviar e-mails para este endereço.</span>
            <button type="submit">Enviar</button>
        </form>
        <div>
            <a href="/#top" @click.prevent="clickRedirect('/')">&#60; PÁGINA INICIAL</a>
            <div @click="clickRedirect('/quiz')">REFAZER O QUIZ</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { clickRedirect } from '../assets/functions';

@Component
export default class Newsletter extends Vue {
    private clickRedirect(location: string) {
        clickRedirect(this, location);
    }

    private sendUserData() {
        this.$emit("confirmSubscription", {confirm:  true});
    }
}
</script>

<style scoped lang="scss">
.newsletter {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    >p{
        &:nth-child(1) {
            font-family: 'all-round-gothic-bold';
            color: $teal;
            text-align: center;
            font-size: 1.7vmax;
            margin: 1vmax 0;
            width: 33%;
            @media screen and (max-width: 720px) {
                width: 75%;
                font-size: 2.3vmax;
            }
        }

        &:nth-child(2) {
            font-family: 'roboto-regular';
            color: $pink;
            font-size: 1vmax;
            @media screen and (max-width: 720px) {
                font-size: 1.8vmax;
                margin: 1.5vmax 0;
            }
        }
    }

    >form {
        margin: 1vmax 0;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 720px) {
            width: 65%;
        }
        >* {
            margin: .5vmax 0;
        }

        >input[type=text], >input[type=email] {
            font-family: "roboto-regular";
            padding: .5vmax;
            border-radius: 5px;
            border: 1px solid $border;
            font-size: 1vmax;
            @media screen and (max-width: 720px) {
                font-size: 1.5vmax;
            }
            &:focus {
                border: 1px solid $border;
            }
        }

        >span {
            color: $pink;
            display: flex;
            align-items: center;
            font-size: 1vmax;
            @media screen and (max-width: 720px) {
                font-size: 1.2vmax;
            }
        }

        >button {
            width: max-content;
            padding: .8vmax 2.5vmax;
            align-self: center;
            border: none;
            background-color: $pink;
            color: white;
            border-radius: 25px;
            font-size: 1vmax;
            @media screen and (max-width: 720px) {
                font-size: 1.4vmax;
                padding: 1vmax 3vmax;
                margin: 1vmax;
            }

            &:active {
                outline: none;
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
        @media screen and (max-width: 720px) {
            width: 70%;
            margin: 2vmax 0;
        }
       
        >a {
            color: $pink;
            font-size: 1vmax;
            @media screen and (max-width: 720px) {
                font-size: 1.5vmax;
            }
            &:link {
                text-decoration: none;
            }
        }

        >div {
            border: 1px solid $pink;
            padding: .25vmax .5vmax;
            border-radius: 10px;
            position: relative;
            font-size: 1vmax;
            @media screen and (max-width: 720px) {
                font-size: 1.6vmax;
            }
        }
    }
}
</style>
