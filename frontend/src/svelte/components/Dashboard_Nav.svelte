<script>
  // imports module
  import { shouldDisplay } from "./modules/stores";

  let activeIndex = 0;
  function toggleNav(n) {
    activeIndex = n;
    if(n == 0){
      shouldDisplay.set('home');
    }else if(n == 2){
      shouldDisplay.set('settings');
    }else{
      shouldDisplay.set('creator');
    }
  }
</script>

<nav
  class="max-w-screen-sm bg-scheme-red m-auto flex justify-center items-center fixed left-1/2 rounded-md"
>
  <ul class="flex justify-between items-center h-full">
    <li
      class="nav-btns h-full flex flex-col justify-center items-center w-16 py-1 {activeIndex ==
      0
        ? 'active'
        : ''}"
      on:click={() => {
        toggleNav(0);
      }}
    >
      <ion-icon name="home-outline" />
      <span class="title">Home</span>
    </li>
    <li
      class="nav-btns h-full flex flex-col justify-center items-center w-16 py-1 {activeIndex ==
      1
        ? 'active'
        : ''}"
      on:click={() => {
        toggleNav(1);
      }}
    >
      <ion-icon name="add-outline"/>
      <span class="title">Create</span>
    </li>
    <li
      class="nav-btns h-full flex flex-col justify-center items-center w-16 py-1 {activeIndex ==
      2
        ? 'active'
        : ''}"
      on:click={() => {
        toggleNav(2);
      }}
    >
      <ion-icon name="settings-outline" />
      <span class="title">Settings</span>
    </li>

    <div class="indicator bg-scheme-dark" />
  </ul>
</nav>

<style lang="scss">
  nav {
    height: 72px;
    width: calc(100vw - 1rem);
    bottom: 0.5rem;
    transform: translateX(-50%);
    ul {
      li {
        color: #fdfdfd;
        cursor: pointer;
        z-index: 2;
        position: relative;
        width: 66px;
        // background-color: red;

        ion-icon {
          font-size: 22px;
          transition: 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28);
        }
        .title {
          opacity: 0;
          position: absolute;
          transform: translateY(20px);
          transition: 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28);
        }

        &.active {
          ion-icon {
            transform: translateY(-35px);
          }
          .title {
            opacity: 1;
            transform: translateY(15px);
            font-weight: 600;
          }
        }

        @for $i from 1 through 3 {
          &:nth-child(#{$i}).active ~ .indicator {
            $val: 66px * ($i - 1);
            transform: translateX(#{$val});
          }
        }
      }

      .indicator {
        position: absolute;
        height: 64px;
        width: 64px;
        z-index: 1;
        top: -32px;
        border-radius: 32px;
        border: 2px solid #fdfdfd;
        transition: 0.5s;

        &::before {
          content: "";
          display: inline-block;
          position: absolute;
          top: 50%;
          left: 0;
          height: 20px;
          width: 20px;
          transform: translateX(-100%);
          border-top-right-radius: 20px;
          box-shadow: 0 -10px 0 0 #fdfdfd;
        }
        &::after {
          content: "";
          display: inline-block;
          position: absolute;
          top: 50%;
          right: 0;
          height: 20px;
          width: 20px;
          transform: translateX(100%);
          border-top-left-radius: 20px;
          box-shadow: 0 -10px 0 0 #fdfdfd;
        }
      }
    }
  }
</style>
