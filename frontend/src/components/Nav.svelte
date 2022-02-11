<script>
  // imports components
  import Extended from "./modules/Extended_Nav.svelte";
  //   imports props
  export let title;
  // variables
  let togglerState = "inactive";

  // nav toggler
  function toggle_nave() {
    togglerState = togglerState == "inactive" ? "active" : "inactive";
  }
</script>

<nav
  class="bg-scheme-red-transparent text-white flex justify-between items-center px-2 py-3 fixed top-0 left-0 w-full z-10"
>
  <div class="logo w-full font-bold">
    <h1 class="title text-xl">{title}</h1>
  </div>
  <ul class="nav-lists hidden">
    <li class="nav-links"><button>Home</button></li>
    <li class="nav-links"><button>Who?</button></li>
    <li class="nav-links"><button>Why?</button></li>
  </ul>
  <div class="nav-toggler">
    <span class="toggler {togglerState}" on:click={toggle_nave} />
  </div>
</nav>
<Extended
  state={togglerState}
  on:close={() => {
    togglerState = "inactive";
  }}
/>

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
        // the togler
        height: auto;
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
