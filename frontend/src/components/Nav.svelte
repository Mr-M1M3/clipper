<script>
  // imports components
  import Extended from "./modules/Extended_Nav.svelte";
  //   imports props
  export let title;
  // variables
  let opened = false;

  // nav toggler
  function toggle_nav() {
    opened = !opened;
  }
</script>

<nav
  class="bg-scheme-red-transparent text-white flex justify-between md:justify-around items-center px-2 py-3 fixed top-0 left-0 w-full z-10"
>
  <div class="logo font-bold font-andika">
    <h1 class="title text-2xl">{title}</h1>
  </div>
  <div class="auth-btn hidden md:flex bg-blak">
    <button class="mx-3 bg-scheme-dark font-bold px-4 py-2 rounded-md signup">Sign Up</button>
    <button class="mx-3 bg-scheme-dark font-bold px-4 py-2 rounded-md login">Login</button>
  </div>
  <div class="nav-toggler md:hidden">
    <span class="toggler {opened ? 'active' : 'inactive'}" on:click={toggle_nav} />
  </div>
</nav>
{#if opened}
  <Extended/>
{/if}

<style lang="scss">
  nav {
      height: 60px;
    div.logo {
      h1.title {
        text-shadow: 0 0 1px #21325e;
      }
    }
    .nav-toggler {
      .toggler {
        // the toggler
        height: 28px;
        width: 30px;
        display: inline-block;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;

        &::before {
          content: "";
          display: inline-block;
          height: 3px;
          width: 100%;
          background-color: #fdfdfd;
          position: absolute;
          transform: translateY(-12px);
          box-shadow: 0 12px 0 #fdfdfd;
          transition: 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
        }

        &::after {
          content: "";
          display: inline-block;
          height: 3px;
          width: 100%;
          background-color: #fdfdfd;
          position: absolute;
          transform: translateY(12px);
          transition: 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
        }

        // active state
        &.active::before {
          box-shadow: 0 0 0 rgba(0, 0, 0, 0);
          transform: translateY(0) rotate(45deg);
        }

        &.active::after {
          transform: translateY(0) rotate(-45deg);
        }
      }
    }
  }
</style>
