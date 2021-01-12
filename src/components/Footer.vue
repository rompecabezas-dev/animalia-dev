<template>
    <div class="footer-bar">
        <a href="https://www.instagram.com/rompecabezas.ent/" target="_blank">
            <img src="@/assets/img//rompecabezas.webp" alt="Rompecabezas">
        </a>
        <p>Copyright © Rompecabezas 2021</p>
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
    flex-direction: column;
    align-items: center;
    border-top: 1px solid $border;
    padding: 2vmax;
    position: relative;
    @media screen and (max-width: 720px) {
        padding: 2vmax 0;
    }

    img {
        object-fit: contain;
        width: 200px;
        margin: 1vmax 0;
    }

    p {
        font-size: 12px;
        position: absolute;
        bottom: 0;
        @media screen and (min-width: 721px) {
            right: 0;
            font-size: 14px;
        }
    }
}
</style>
