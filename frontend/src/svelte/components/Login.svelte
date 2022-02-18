<script>
    // imports modules
    import fetcher from "./modules/fetcher";
    import { authStateStore } from "./modules/stores";
  
    // vars and consts
    let fetchState = '';
  
    // if invalid input
    let invalidEmail = false;
    let invalidPassword = false;
  
    // signup function
    async function signup(eventLog) {
      invalidEmail = invalidPassword = false;
      const DATA = new URLSearchParams(new FormData(eventLog.target));
      const RESPONSE = await fetcher('post', '/user/login', DATA);
      if(!RESPONSE.ok){
        RESPONSE.text().then(data => {
        if(data == 'invalid email or password'){
          invalidEmail = invalidPassword = true;
          fetchState = 'Invalid email or password';
        }else{
          fetchState = '';
        }
      });
      }else{
        window.location.assign('/dashboard.html');
      }
    }
  </script>
  
  <section
    class="signup py-3 my-3 max-w-lg mx-auto px-2 flex justify-center flex-col"
  >
    <h1 class="text-3xl text-center my-2">Login</h1>
    <h4 class="text-right text-lg my-2">
      Or, <button class="underline">Create an account</button>
    </h4>
    <form on:submit|preventDefault={signup}>
      <fieldset class=" w-full flex flex-wrap flex-col px-2">
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
  