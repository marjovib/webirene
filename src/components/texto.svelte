<script>
    import {onMount} from "svelte";

    export let elfichero;
    export let eltitulo;

    $: textVisible = false;
    let eltexto
    onMount(async () => {
        textVisible = false;
        await fetch(`./textos/${elfichero}`,{mode:'no-cors'})
        // await fetch(`../../src/textos/${elfichero}`,{mode:'no-cors'})
            .then(response => response.text())
            .then((data) => {
                eltexto = data
                console.log(eltexto)
            })
        await fetch(`./textos/${eltitulo}`,{mode:'no-cors'})
        // await fetch(`../../src/textos/${eltitulo}`,{mode:'no-cors'})
            .then(response => response.text())
            .then((data) => {
                eltitulo = data
                console.log(eltitulo)
            })
        textVisible = true;
    })


</script>
<div class="container font-Garamond lg:mt-12 p-14 m-auto mt-60 sm:mt-40" >
    <div class="font-bold text-3xl border-2 border-light-gray-500 border-opacity-80 px-16 py-10 mb-4">
        {#if textVisible}
            {@html eltitulo}
        {:else}
            <svg class="animate-spin h-15 w-15 m-auto" >
                <!-- ... -->
            </svg>
        {/if}
    </div>

    <div class=" text-2xl border-2 border-light-gray-500 border-opacity-100 px-16 py-10 ">
        {#if textVisible}
            {@html eltexto}
        {:else}
            <svg class="animate-spin h-15 w-15 m-auto" >
                <!-- ... -->
            </svg>
        {/if}
    </div>
</div>