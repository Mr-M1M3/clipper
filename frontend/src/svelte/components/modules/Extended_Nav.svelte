<script>
  // imports modules
  import {authStateStore} from "./stores";
</script>

<nav class="w-full bg-white fixed bottom-0 left-0 z-10 md:hidden">
  <ul class="px-2">
    <li class="nav-link"><button class="extended-nav-btn" on:click="{() => {authStateStore.update((v) => v == 'signup' ? false : 'signup')}}">Signup</button></li>
    <li class="nav-link"><button class="extended-nav-btn" on:click="{() => {authStateStore.update((v) => v == 'login' ? false : 'login')}}">Login</button></li>
  </ul>
</nav>

<style lang="scss">
  nav {
      overflow: hidden;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
      animation: fromBottom 0.2s cubic-bezier(.18,.89,.32,1.28) 0s 1 alternate;
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
