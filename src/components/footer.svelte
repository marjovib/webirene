<script>
    import {onMount, createEventDispatcher} from 'svelte'
    import {validateEmail, showMensaje} from '../helpers/utiles.js'
    import {newSuscriber, deleteSuscriber} from '../helpers/dataMail.js'


    let buttonSuscripcion
    let checkEstado
    let senderEmail
    let transMensaje
    let cargando_1
    let cargando_2
    let genOption = 0

    const Dispatch = createEventDispatcher()

    const changePage = (option) => {
        Dispatch('changePage', {
            'option': option
        })
    }


    const acceptPrivacidad = () => {
        checkEstado.checked === true ? buttonSuscripcion.disabled = false : buttonSuscripcion.disabled = true
        console.log(checkEstado.checked)
    }
    onMount(() => {
        checkEstado.checked = false
        buttonSuscripcion.disabled = true
    })

    const suscribir = async () => {
        if (!validateEmail(senderEmail.value)) {
            showMensaje('No es un email valido', 2, transMensaje)
        } else {
            try {
                cargando_1 = 'animate-spin'
                const transRespuesta = await newSuscriber({'mail': senderEmail.value})
                let transcolor
                transRespuesta['codigo'] === 1 ? transcolor = 2 : transcolor = 1
                showMensaje(transRespuesta['respuesta'], transcolor, transMensaje)
            } catch (e) {
                showMensaje('Ha ocurrido un error, intentelo más tarde ', 2, transMensaje)
            }
        }
        cargando_1 = ''
        senderEmail.value = ''


    }

    const unSuscribir = async () => {
        if (!validateEmail(senderEmail.value)) {
            showMensaje('No ha entrado un email valido', 2, transMensaje)
        } else {
            try {
                cargando_2 = "animate-spin"
                const transRespuesta = await deleteSuscriber({'mail': senderEmail.value})
                let transcolor
                transRespuesta['codigo'] === 1 ? transcolor = 2 : transcolor = 1
                showMensaje(transRespuesta['respuesta'], transcolor, transMensaje)
            } catch (e) {
                showMensaje('Ha ocurrido un error, intentelo más tarde ', 2, transMensaje)
            }
        }
        cargando_2 = ''
        senderEmail.value = ''
    }


</script>


<footer class="footer p-10 bg-pink-100 text-base-content">
    <div class=" text-gray-500 w-full">
        <span class="footer-title">Contacto</span>
        <a class="link link-hover font-bold my-4  w-full">📩 info@irenevillalobos.es</a>
        <a class="link link-hover font-bold w-full">📱 +34 640.895.233</a>
        <!--        <a class="link link-hover">Marketing</a>-->
        <!--        <a class="link link-hover">Advertisement</a>-->
    </div>
    <div class="text-gray-500 w-full">
        <span class="footer-title">Redes sociales</span>
        <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 class="fill-current my-4">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
        </a>
        <!--        <a ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>-->
        <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
        </a>
    </div>

    <div class="text-gray-500 w-full">
        <span class="footer-title">Aviso legal</span>
        <a on:click="{()=>changePage(3)}" class="link link-hover mt-4  w-full">Condiciones de uso</a>
        <a on:click="{()=>changePage(4)}" class="link link-hover mt-4  w-full">Política de privacidad</a>
        <a on:click="{()=>changePage(5)}" class="link link-hover mt-4  w-full">política de cookies </a>
        <a on:click="{()=>changePage(6)}" class="link link-hover mt-4  w-full">Aviso legal </a>
    </div>
    <div class="text-gray-500 w-full">
        <span class="footer-title">Newsletter</span>
        <div class="form-control w-80">
            <p class="font-bold " bind:this={transMensaje}></p>
            <label class="label">
                <span class="label-text">Entre su dirección mail</span>
            </label>
            <div class="relative">
                <input bind:this={senderEmail} type="text" placeholder="xxxxx@xxxxx.»»»"
                       class="input input-bordered w-full pr-16"/>
            </div>
            <div class="my-4">
                <button bind:this={buttonSuscripcion} class="btn btn-primary {cargando_1} rounded" on:click={suscribir}>
                    Suscribir
                </button>
                <button class="btn btn-primary {cargando_2}  rounded" on:click={unSuscribir}>Cancelar suscripción
                </button>
            </div>
            <div class="form-control">
                <label class="cursor-pointer label">
                    <span class="label-text">Aceptar política de privacidad y condiciones de uso</span>
                    <input bind:this={checkEstado} type="checkbox" checked="checked" class="checkbox checkbox-secondary"
                           on:click={acceptPrivacidad}/>
                </label>
            </div>

        </div>
    </div>
</footer>