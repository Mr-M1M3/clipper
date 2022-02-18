<script>
  import "../css/dashboard.css";
  import Nav from "./components/Dashboard_Nav.svelte";
  import Creator from "./components/Creator.svelte";

  // imports modules
  import { newJSON } from "./components/modules/stores";
  import fetcher from "./components/modules/fetcher";

  let shouldDisplay = false;
  newJSON.subscribe((v) => {
    shouldDisplay = v;
  });

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
{#if shouldDisplay}
  <Creator />
{/if}