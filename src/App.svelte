<script>
    import hero from "./assets/header.jpg";
    import irene from "./assets/fotoirene.png";
    import Footer from "./components/footer.svelte";
    import Modalform from "./components/modalform.svelte";
    import Inicio from "./components/inicio.svelte";
    import Portfolio from "./components/portfolio.svelte";
    import Texto from "./components/texto.svelte";
    import './css/styleCookies.css'
    // import '@beyonk/gdpr-cookie-consent-banner/dist/style.css'
    import GdprBanner from '@beyonk/gdpr-cookie-consent-banner'
    import {options} from './helpers/cookieOptions.js'
    import FooterOptions from './components/footerOptions.svelte'


    let showModal = false;
    let seleccion = 1;

    let selecText = 0;

    const initAnalytics=()=>{}




    function modalFuera() {
        showModal = false;
    }



    function deployText(event) {

       selecText=parseInt((event.detail.laid).slice(-1));


       console.log(selecText);
    }

    function selecPortfolio() {
        seleccion=2;
        selecText=0
    }

    const changeSelection=(e)=>{
        seleccion=e.detail.option
    }
</script>

<body class="debug-screens " id="App">
<GdprBanner {...options} on:analytics={initAnalytics} />

<div class="relative shadow-2xl">
    <img src={hero} alt="oficina">
</div>
<div class="font-Garamond absolute inset-0  ">
    <div class="flex justify-end text-white mr-36 mt-10">
        <p class="font-bold text-lg italic hover:underline cursor-pointer mx-5 hover:text-pink-400 "
           on:click={()=>seleccion=1}>Inicio</p>
        <p class="font-bold text-lg italic hover:underline cursor-pointer mx-5 hover:text-pink-400"
           on:click="{selecPortfolio}" >Portfolio</p>
        <p class="font-bold text-lg italic hover:underline cursor-pointer mx-5 hover:text-pink-400" on:click={()=>showModal=true}>Contacto</p>

    </div>
    <p class="  text-4xl text-pink-300 md:text-pink-200 text-center font-bold mt-6 ">Irene Villalobos Santos</p>
    <div class="flex items-center justify-center ">
        <img src="{irene}" alt="Irene Villalobos Santos" class="rounded-full w-32 m-5 ">
    </div>
    <p class=" text-3xl text-red-300 text-center italic font-bold">Redactora digital</p>
    <p class=" text-3xl text-red-300 text-center italic font-bold">Los textos de su sitio web o blog, ya no
        serán una carga.</p>
</div>
{#if seleccion === 1}
    <Inicio/>
{:else if seleccion===2}
    {#if selecText === 0}
        <Portfolio on:showText={deployText}/>
    {:else}
        <Texto elfichero="fichero_{(selecText)}.txt" eltitulo="titulo_{(selecText)}.txt"/>
    {/if}
{:else if seleccion===3}
    <FooterOptions opciones={3} />
{:else if seleccion===4}
    <FooterOptions opciones={4} />
{:else if seleccion===5}
    <FooterOptions opciones={5} />
{:else if seleccion===6}
    <FooterOptions opciones={6} />
{/if}


</body>
<Footer on:changePage={changeSelection}/>
{#if showModal}
    <Modalform on:cancelar={modalFuera}/>
{/if}

<style>


</style>
