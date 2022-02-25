<script>
  // imports module
  import fetcher from "./modules/fetcher";
  import debounce from "./modules/debounce";
  import { SvelteToast, toast } from "@zerodevx/svelte-toast";

  let status = "";

  async function submit(e) {
    const DATA = new FormData(e.target);
    let REQ = {};
    for (var pair of DATA.entries()) {
      REQ[pair[0]] = pair[1];
    }
    try {
      REQ.json = JSON.parse(REQ.json);
    } catch (error) {
      status = error.message;
    }
    REQ = JSON.stringify(REQ);
    const RESPONSE = await fetcher(
      "POST",
      "/json/add",
      REQ,
      "application/json"
    );
    if (!RESPONSE.ok) {
      RESPONSE.text().then((data) => {
        status = data;
        toast.push(status, {
          theme: {
            "--toastBackground": "#F56565",
            "--toastBarBackground": "#C53030",
          },
        });
      });
    } else {
      RESPONSE.text().then((id) => {
        status = `saved, id: ${id}`;
        toast.push(status, {
          theme: {
            "--toastBackground": "#48BB78",
            "--toastBarBackground": "#2F855A",
          },
        });
      });
    }
  }
</script>

<div class="modal w-screen  px-2 py-3">
  <form
    method="POST"
    class="w-full max-w-screen-sm m-auto"
    on:submit|preventDefault={debounce(submit, 500)}
  >
    <fieldset class="tab-container px-2 py-1 flex justify-between items-center">
      <div class="tab p-1 flex justify-center items-center border-r-2">
        <input
          name="nickname"
          class="name w-24 px-2 outline-none focus:border-b-2 border-scheme-light-dark"
          value="new_json"
          type="text"
          placeholder="Nickname"
          required
        />
        <span class="p-1 closer cursor-pointer">.json</span>
      </div>
      <button
        class="tab-save p-1 flex justify-center items-center justify-self-end"
        type="submit"
      >
        <ion-icon name="save-outline" class="p-1 closer cursor-pointer" />
      </button>
    </fieldset>
    <fieldset class="josn w-full">
      <textarea
        name="json"
        id="json"
        rows="15"
        class="resize-none w-full border-2 px-2 py-3 text-lg outline-none"
      />
      <br />
      <SvelteToast/>
    </fieldset>
  </form>
</div>

<style lang="scss">
  .modal {
    form {
      .tab-container {
        outline: 1px solid rgba(0, 0, 0, 0.1);

        .tab {
          ion-icon {
            // background-color: red;
            font-size: 20px;
            margin: 4px;
          }
        }
      }
    }
  }
</style>
