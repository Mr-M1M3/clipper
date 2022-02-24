<script>
  // imports modules
  import fetcher from "./modules/fetcher";
  import { authStateStore } from "./modules/stores";

  // vars and consts
  let fetchState = '';

  // if invalid input
  let invalidEmail = false;
  let invalidPassword = false;
  let invalidName = false;

  // signup function
  async function signup(eventLog) {
    invalidEmail = invalidPassword = invalidName = false;
    const DATA = new URLSearchParams(new FormData(eventLog.target));
    const RESPONSE = await fetcher('post', '/user/register', DATA);
    if(!RESPONSE.ok){
      RESPONSE.text().then(data => {
        console.log(data)
      if(data == 'invalid data'){
        invalidEmail = invalidName = true;
        fetchState = 'Invalid name or password';
      }else if(data == 'user exists'){
        invalidEmail = true;
        fetchState = 'User exists with that email';
      }else if(data == 'invalid password'){
        invalidPassword = true;
        fetchState = 'Password is not strong enough';
      }else{
        fetchState = '';
      }
    });
    }else{
      authStateStore.set('login');
    }
  }
</script>

<section
  class="signup py-3 my-3 max-w-lg mx-auto px-2 flex justify-center flex-col"
>
  <h1 class="text-3xl text-center my-2">Sign Up For An Account</h1>
  <h4 class="text-right text-lg my-2">
    Or, <button class="underline">Login With an Existing Account</button>
  </h4>
  <form on:submit|preventDefault={signup}>
    <fieldset class=" w-full flex flex-wrap flex-col px-2">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        class="my-2 px-3 py-2 rounded-sm border-2 outline-1 outline-scheme-red {invalidName
          ? 'border-red-700'
          : ''}"
        required
        autocomplete="on"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email Address"
        class="my-2 px-3 py-2 rounded-sm border-2 outline-1 outline-scheme-red {invalidEmail
          ? 'border-red-700'
          : ''}"
        required
        autocomplete="on"
      />
      <input
        type="password"
        name="password"
        placeholder="Top Secret Password"
        class="my-2 px-3 py-2 rounded-sm border-2 outline-1 outline-scheme-red {invalidPassword
          ? 'border-red-700'
          : ''}"
        required
      />

      <span class="text-right px-2 my-1 capitalize text-scheme-dark {fetchState ? 'block' : 'hidden'}">{fetchState}</span>
      <input
        type="submit"
        value="submit"
        class="px-2 py-3 my-1 capitalize bg-scheme-red rounded-md text-white cursor-pointer"
      />
      <span
        class="block text-center px-2 my-1 py-3 capitalize rounded-md text-scheme-dark cursor-pointer"
        on:click={() => {
          authStateStore.set(false);
        }}>Go Back</span
      >
    </fieldset>
  </form>
</section>
