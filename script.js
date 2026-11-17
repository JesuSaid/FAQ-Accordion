const allbuttons = document.querySelectorAll('.faq__trigger')

allbuttons.forEach( button => {
    button.addEventListener('click', (event) => {
        const element = event.currentTarget
        const control = element.getAttribute('aria-controls')
        const text = document.getElementById(control)
        const expanded = element.getAttribute('aria-expanded')
        if (expanded === 'true') {
            element.setAttribute('aria-expanded', 'false')
            text.setAttribute('hidden', '')
        } else {
            element.setAttribute('aria-expanded', 'true')
            text.removeAttribute('hidden')
        }
    })
});