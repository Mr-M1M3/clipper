<script>
  import "../css/dashboard.css";
  import Nav from "./components/Dashboard_Nav.svelte";
  import Creator from "./components/Creator.svelte";
  import Home from './components/Home.svelte';
  import Settings from './components/Setting.svelte';

  // imports modules
  import { shouldDisplay } from "./components/modules/stores";
  import fetcher from "./components/modules/fetcher";
  import {onDestroy} from 'svelte';

  let display = false;
  const unSubscribe = shouldDisplay.subscribe((v) => {
    display = v;
  });

  onDestroy(unSubscribe);

  async function auth() {
    const RESPONSE = await fetcher("POST", "/user/login", {});
    if (!RESPONSE.ok) {
      location.assign("/");
    } else {
    return await RESPONSE.json();
    }
  }
  auth();
</script>

<Nav />
{#if display == 'creator'}
  <Creator />
  {:else if display == 'home'}
  {#await auth()}
    Loading...
  {:then user}
    <Home name={user.name} email={user.email} uid={user.uid}/>
  {/await}
  {:else if display == 'settings'}

  {#await auth()}
    Loading...
  {:then user}
    <Settings name={user.name} email={user.email} uid={user.uid}/>
  {/await}
{/if}
