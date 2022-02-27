<script>
  // imports props
  export let name = "";
  // export let email = '';
  export let uid = "";

  // imports modules
  import fetcher from "./modules/fetcher";
  import debounce from "./modules/debounce";
  import { SvelteToast, toast } from "@zerodevx/svelte-toast";

  // fetch all json
  let json_arr = [];
  async function getAllJSON() {
    const RESPONSE = await fetcher("GET", `/json/all/${uid}`);
    const DATA = await RESPONSE.text()
    .then((data) => {
      json_arr = JSON.parse(data);
    })
    .catch((error) => {
      console.error(error);
    });
  }
  getAllJSON();

    let delete_status = '';
    async function deleteJSON(id){
      const RESPONSE = await fetcher("DELETE", `json/delete/${id}`);
      const DATA = await RESPONSE.text();
      delete_status = DATA;
      if(!RESPONSE.ok){
        toast.push(delete_status, {
          theme: {
            "--toastBackground": "#F56565",
            "--toastBarBackground": "#C53030",
          },
        });
      }else{
        toast.push(delete_status, {
          theme: {
            "--toastBackground": "#48BB78",
            "--toastBarBackground": "#2F855A",
          },
        });
      }
      getAllJSON();
    }
</script>

<div
  class="flex justify-center items-end flex-col px-2 py-3 max-w-screen-sm m-auto"
>
  <span
    class="font-bold font-andika text-xl p-3 w-10 h-10 text-white bg-scheme-dark rounded-full flex justify-center items-center"
    >{name[0]}</span
  >
  <span class="font-bold">{name}</span>
</div>
<section class="dash px-2">
  <table
    class="max-w-screen-sm m-auto px-2 flex flex-col justify-center flex-wrap"
  >
    {#each json_arr as json}
      <tr class="border-2 border-scheme-dark my-1 px-2">
        <td class="py-2 h-full text-center w-xs">
          {json.nickname}
        </td>
        <td class="text-center px-2 mx-2">
          {json._id}
        </td>
        <td>
          <ion-icon name="trash-outline" class="text-xl cursor-pointer" on:click="{() => {deleteJSON(json._id)}}"></ion-icon>
        </td>
      </tr>
      {:else}
      No JSON was Stored Yet...
      {/each}
    <div class="toast-wrapper">
      <SvelteToast/>
      </div>
  </table>
</section>

<style lang="scss">
  tr {
    display: grid;
    grid-template-columns: 25% 70% 5%;

    td {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: scroll;
      /* Hide scrollbar for Chrome, Safari and Opera */
      &::-webkit-scrollbar {
        display: none;
      }

      /* Hide scrollbar for IE, Edge and Firefox */
      &{
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }
    }
  }
  .toast-wrapper{
    text-transform: capitalize;
}
</style>
