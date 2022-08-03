function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var cb = window.document.getElementById('cabeca')

    if (minutos < 10) {
        msg.innerHTML = `A agora são ${hora}:0${minutos} horas`
    } else {
        msg.innerHTML = `A agora são ${hora}:${minutos} horas`
    }

    if (hora >= 0 && hora < 12) {
        cb.innerHTML = 'Bom dia!'
        img.src = './imagem/fotomanha.png'
        document.body.style.background = '#ccb880'

    } else if (hora >= 12 && hora < 18) {
        cb.innerHTML = 'Boa tarde!'
        img.src = './imagem/fototarde.png'
        document.body.style.background = '#986166'

    } else {
        cb.innerHTML = 'Boa noite!'
        img.src = './imagem/fotonoite.png'
        document.body.style.background = '#3f355a'
    }
}