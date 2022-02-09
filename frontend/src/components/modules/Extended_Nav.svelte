<script>
  // imports event dispatcher
  import { createEventDispatcher } from "svelte";
  // creates event dispatcher
  const dispatch = createEventDispatcher();

//   imports attribute passed from parent
  export let state = "inactive";

  // closes nav
  function close() {
    state = "inactive";
    // dipatches close event
    dispatch('close');
  }
</script>

<nav class="w-screen bg-white absolute bottom-0 left-0 {state}">
  <ul class="px-2">
    <li class="nav-link"><button class="extended-nav-btn">Signup</button></li>
    <li class="nav-link"><button class="extended-nav-btn">Login</button></li>
  </ul>
</nav>

<style lang="scss">
  nav {
      overflow: hidden;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
      animation: fromBottom 0.2s cubic-bezier(.18,.89,.32,1.28) 0s 1 alternate;
    &.inactive {
      display: none;
    }
    &.active {
      display: block;
    }
  }

//   animations
@keyframes fromBottom{
    from{
        transform: translateY(100%);
    }to{
        transform: translateY(0);
    }
}
</style>
