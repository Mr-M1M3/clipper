<script>
// imports css files
import "./tailwind.css"
// imports props
export let title;
export let header;
// imports components
import Nav from './components/Nav.svelte';
import Header from './components/Header.svelte';
import Content from './components/Content.svelte';
import Features from './components/Features.svelte';
</script>
<main class="min-h-screen">
    <Nav {title}/>
    <Header {header}/>
    <br>
    <Content/>
    <br>
    <Features/>
</main>