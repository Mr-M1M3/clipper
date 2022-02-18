<script>
// imports css files
import "../css/landingpage.css"
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
import Login from './components/Login.svelte';

// imports module
import {authStateStore}  from "./components/modules/stores";
import fetcher from './components/modules/fetcher';


async function redirect(){ // if user is logged in, redirects
        const RESPONSE = await fetcher('POST', '/user/login', {});
        RESPONSE.json().then(data => {
            window.location.assign('/dashboard.html');
        }).catch(error => {
        });
    }

redirect();

// toggles signup-login-landing_page
function toggleAuthState(new_state){
    authStateStore.update(state => new_state);
}
let authState = false;
authStateStore.subscribe((v) => {authState = v});
</script>
<main class="min-h-screen">
    <Nav {title} position="{authState == 'signup' || authState == 'login' ? 'static' : 'fixed'}"/>
    {#if authState == 'signup'}
    <Signup/>
    {:else if authState == 'login'}
    <Login/>
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