export const options = {

    cookieName: 'irene_lopd',
    showEditIcon: false,

    /**
     * These are the top two lines of text on the banner
     * The 'description' field can include html such as links
     **/
    heading: 'LOPD-Protección de datos',
    // description: 'We use cookies to offer a better browsing experience, analyze site traffic, personalize content, and serve targeted advertisements. Please review our <a href="/privacy-policy">privacy policy page</a>. By clicking accept, you consent to our privacy policy & use of cookies.',
    description:'Utilizamos cookies para ofrecer una mejor experiencia de navegación, analizar el tráfico, personalizar contenido, y mostrar anuncios optimizados. Por favor revise nuestra  política de privacidad y la información sobre cookies. Al hacer click usted consiente y acepta nuestra política de privacidad y uso de cookies.',

    /**
     * All the button labels and aria-label content.
     **/
    acceptLabel: 'Confirmar todo',
    rejectLabel: 'Rechazar todo',
    settingsLabel: 'Preferencias',
    closeLabel: 'Cerrar ventana',
    editLabel: 'Editar configuración',

    /**
     * These are the default opt-ins and their descriptions.
     * When value is set to true, the option will automatically be checked on load.
     *
     * If you want to hide a category, simply set it to false, e.g. 'marketing: false'
     **/
    choices: {
        necessary: {
            label: "Necessary cookies",
            description: "Utilizada para el control de cookies, no puede ser desactivada.",
            value: true
        },
        tracking: {
            label: "Tracking cookies",
            description: "Utilizada para publicidad.",
            value: true
        },
        analytics: {
            label: "Analytics cookies",
            description: 'Utilizada para el control de Google Analytics, una herramienta de terceros ofrecida por Google para el seguimiento del comportamiento del usuario.',
            value: true
        },
        marketing: {
            label: "Marketing cookies",
            description: "Utilizada para datos de marketing.",
            value: true
        }
    },



    /**
     * These are the functions which are run if a user opts-in to that category.
     * You should drop your cookies here (or set a variable to control the later dropping of cookies.
     *
     * If you are using svelte, you can use events instead - see the Svelte section below.
     **/
    categories: {
        analytics: function() {
            console.log('No analytics cookies specified')
        },
        tracking: function() {
            console.log('No tracking cookies specified')
        },
        marketing: function() {
            console.log('No marketing cookies specified')
        },
        necessary: function() {
            console.log('No necessary cookies specified')
        }
    }
}
// GdprConsent.attachBanner(document.body, options)