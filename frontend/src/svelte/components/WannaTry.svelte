<script>
// imports module
import {authStateStore}  from "./modules/stores";
</script>
<section class="px-5 my-4 max-w-5xl m-auto">
    <h1 class="text-5xl text-center font-paytone mx-3 my-3">Want To Give It A Try?</h1>
    <article class="buttons">
        <button class="px-4 py-3  rounded-md bg-scheme-dark text-white font-bold font-andika" on:click="{() => {authStateStore.set('signup')}}">Create An Account</button>
        <button class="px-4 py-3  rounded-md bg-scheme-dark text-white font-bold font-andika" on:click="{() => {authStateStore.set('login')}}">Login</button>
    </article>
</section>
<style lang="scss">
    section{
        .buttons{
            padding: 0 1rem;
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }
    }
</style>