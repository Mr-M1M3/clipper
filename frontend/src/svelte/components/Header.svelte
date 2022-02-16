<script>
  // no script needed
</script>

<header class="max-w-screen h-screen relative font-paytone flex items-center overflow-hidden">
    <div class="content flex flex-col md:items-center w-full px-3">
        <h1 class="text-6xl mx-2 py-2  text-stroke font-extrabold">
            <span>Share</span>
        </h1>
        <h1 class="text-8xl mx-2 py-2 bg-scheme-dark text-stroke font-extrabold">
            <span>JSON</span>
        </h1>
        <h1 class="text-6xl mx-2 py-2 text-stroke font-extrabold">
            <span>Anytime</span>
        </h1>
        <h1 class="text-6xl mx-2 py-2 text-stroke font-extrabold">
            <span>Anywhere</span>
        </h1>
        <button
        class="text-scheme-dark border-2 font-bold border-scheme-dark px-2 py-4 mx-2 block my-4 rounded-lg font-andika md:w-1/2"
        >Get Started</button
        >
    </div>
    <div class="image-container flex-grow w-full hidden md:block">
        <img src="/images/idea.svg" alt="" class="max-w-full"/>
    </div>
</header>

<style lang="scss">
  header {
    top: 60px;
    height: calc(100vh - 60px);
    background-image: url("/images/wave.svg");
    background-repeat: no-repeat;
    background-size: cover;

    .content {
      h1 {
        background-clip: text;
        -webkit-background-clip: text;
        letter-spacing: 0.125rem;
        span {
          color: transparent;
        }
      }
    }
    .image-container{
        img{
            object-fit: cover;
        }
    }
  }
</style>
