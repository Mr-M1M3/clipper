<script>
// imports css files
import "./tailwind.css"
// imports props
export let title;
export let header;
// imports components
import Nav from './components/Nav.svelte';
import Header from './components/Header.svelte';
</script>
<main class="min-h-screen">
    <Nav {title}/>
    <Header {header}/>
</main>