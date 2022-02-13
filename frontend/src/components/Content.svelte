<script>
  // no script needed
</script>

<section class="content px-5 my-4 max-w-5xl m-auto">
  <h1 class="text-5xl text-center font-paytone">Easy To Use</h1>
  <article class="steps-container grid grid-cols-1 gap-4 my-3">
    <aside class="step">
      <div class="image">
        <img src="/images/signup.svg" alt="" />
      </div>
      <div>
        <h1 class="step-count text-2xl font-andika text-center my-2">
          <span class="highlight text-scheme-red text-4xl">1.</span> Create an account
        </h1>
        <p class="desc text-center font-andika text-xl">
          To use JSON Hero, you must have to have an account
        </p>
      </div>
    </aside>

    <aside class="step">
      <div class="image">
        <img src="/images/copy-paste.svg" alt="" />
      </div>
      <div>
        <h1 class="step-count text-2xl font-andika text-center my-2">
          <span class="highlight text-scheme-red text-4xl">2.</span> Copy and Paste
          JSON
        </h1>
        <p class="desc text-center font-andika text-xl">
          The next step is easy. Paste JSON from your clipboard, and slap <span
            >Store</span
          > button.
        </p>
      </div>
    </aside>

    <aside class="step">
      <div class="image">
        <img src="/images/click-and-use.svg" alt="" />
      </div>
      <div>
        <h1 class="step-count text-2xl font-andika text-center my-2">
          <span class="highlight text-scheme-red text-4xl">3.</span> USE JSON
        </h1>
        <p class="desc text-center font-andika text-xl">
          Copy generated URL for your JSON, & you're good to go.
        </p>
      </div>
    </aside>
  </article>
</section>

<style lang="scss">
  .content {
    .steps-container {
      .step {
          margin: 1rem 0;
        display: grid;
        gap: 0.75fr;
        grid-template-columns: 1fr 1fr;

        div {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }

        &:nth-child(even){

            div:last-child{
                grid-column-start: 1;
                grid-row-start: 1;
            }
        }
      }
    }
  }
</style>
