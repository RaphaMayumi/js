let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) //contexto do node é chamado de global... no browser é window
comparaComThis(this) // neste caso this não é this, porém na arrow funtion ele é

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //agora será falso pois o this está apontando para esse obj
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)
//na arrow o this aponta para o objeto corrente, para o modulo... o contexto em que ela foi escrita, e isso não muda
//não é alterado mesmo com o bind

comparaComThisArrow = comparaComThisArrow.bind(obj) //obj declarado na linha 8
comparaComThisArrow(obj) //mesmo assim nãoé alterado
comparaComThisArrow(module.exports)
