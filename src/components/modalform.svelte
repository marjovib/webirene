<script>
    import {createEventDispatcher,afterUpdate} from "svelte";
    import {showMensaje} from "../helpers/utiles.js"
    import {validateEmail} from "../helpers/utiles.js"
    import {mailWeb} from "../helpers/dataMail.js"


    let transMensaje
    let transEmail=""
    let asunto=""
    let texto=""
    let loadenvio=""
    let disabled=false
    let checkFields

   afterUpdate(()=>{
      if (checkFields){checkFields.disabled=transEmail.length===0||asunto.length===0||texto.length===0}

       console.log(transEmail.length)
    })


    const checkMail=()=> {
        if (!validateEmail(transEmail)) {
            showMensaje("El email introducido no es correcto", 2, transMensaje)
            transEmail=""

        }
    }

    const enviar=async()=> {
        loadenvio="animate-spin"
        try {
            let formData = new FormData()
            let color
            formData.append('email', transEmail)
            formData.append('asunto', asunto)
            formData.append('texto', texto)
            const respuesta = await mailWeb(formData)
            console.log(respuesta)
            respuesta['codigo']===1?color=2:color=1
            showMensaje('Gracias por tu interés, te contestaremos a la mayor brevedad',color,transMensaje)
        } catch {
            showMensaje('Ha ocurrido un error inténtalo más tarde',2,transMensaje)
        }
        loadenvio=""
        creaEvento()
    }

    const dispatch = createEventDispatcher()

    function creaEvento() {
        dispatch('cancelar')
    }

</script>

<div id="modalform" class="modal modal-open">
    <div class="modal-box">
        <form id="consulta" action="">
            <div class="font-Garamond text-xs italic">
                <p class="font-bold text-lg" bind:this={transMensaje}></p>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Introduzca su email</span>
                    </label>
                    <input bind:value={transEmail} type="text" placeholder="Su email" class="input input-bordered input-xs" required on:change={checkMail}>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Tema de su consulta</span>
                    </label>
                    <input  bind:value={asunto} type="text"  class="input input-bordered input-xs" required>
                </div>

                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Su consulta</span>
                    </label>
                    <textarea bind:value={texto} class="textarea h-24 textarea-bordered" placeholder="Describa sus necesidades, le contestaré a la mayor brevedad" required></textarea>
                </div>
            </div>
            <div class="modal-action">
                <button  bind:this={checkFields} class="btn btn-primary {loadenvio} mb-6" type="submit" on:click|preventDefault={enviar} >Enviar</button>
                <a href="/components/modal#" class="btn" on:click|preventDefault={creaEvento}>Close</a>
            </div>
        </form>
    </div>
</div>


