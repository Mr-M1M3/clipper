<script>
// imports css files
import "./tailwind.css"
// imports props
export let title;
// imports components
import Nav from './components/Nav.svelte';
import Header from './components/Header.svelte';
import Content from './components/Content.svelte';
import Features from './components/Features.svelte';
import WannaTry from './components/WannaTry.svelte';
import Footer from './components/Footer.svelte';
import Signup from './components/Signup.svelte';

// imports module
import {authStateStore}  from "./components/modules/stores";

// toggles signup-login-landing_page
function toggleAuthState(new_state){
    authStateStore.update(state => new_state);
}
let authState = false;
authStateStore.subscribe((v) => {authState = v})
</script>
<main class="min-h-screen">
    <Nav {title} position="{authState == 'signup' ? 'static' : 'fixed'}"/>
    {#if authState == 'signup'}
    <Signup/>
    {:else}
    <Header/>
    <br>
    <Content/>
    <br>
    <Features/>
    <br>
    <WannaTry/>
    <br>
    <Footer/>
    {/if}
</main>