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

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Cirança
                img.setAttribute('src', './imagem/bebehomem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './imagem/jovemhomem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './imagem/adultohomem.png')
            } else {
                // Idoso
                img.setAttribute('src', './imagem/idosohomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Cirança
                img.setAttribute('src', './imagem/bebemulher.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './imagem/jovemmulher.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './imagem/adultomulher.png')
            } else {
                // Idoso
                img.setAttribute('src', './imagem/idosomulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}