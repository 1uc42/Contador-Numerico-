let adc=document.querySelector("input#txtnumber")
let list=document.querySelector("select#flist")
let res=document.querySelector("div#res")
let valores=[]


function isnum(n){
    if(Number(n)>= 1&& Number(n)<=100 ) {
    return true
} else{
    return false
}
}

function inlist(n,l){
    if(l.indexOf(Number(n)) !=-1 ) {
    return true
} else {
    return false
}
}

function adicionar(){
    if(isnum(adc.value) && ! inlist(adc.value, valores)) {
        valores.push(Number(adc.value))
        let item=document.createElement("option")
        item.text=(`valor ${adc.value} recebido`)
        list.appendChild(item)
        res.innerHTML=''
    } else{
        window.alert("valor invalidado ou já encontrado, digite novamente")
    }
adc.value =''
adc.focus() 
}

function finalizar(){
    if(valores.length == 0 ){
        window.alert("comece digitando")
    } else {
        let soma=0
        let media=0
        let tot=valores.length
        let maior=valores[0]
        let menor=valores[0]

        for(let pos in valores){
            soma +=valores[pos]
            if (valores[pos]>maior)
                maior=valores[pos]
            if(valores[pos]<menor)    
                menor=valores[pos]
            
        }
        media=soma/tot
        res.innerHTML=""
        res.innerHTML+= `<p>voce tem ${tot} numeros cadastrado.</p>`
        res.innerHTML+= `<p>o menor numero é ${menor}</p>`
        res.innerHTML+= `<p>o maior numero é ${maior}</p>`
        res.innerHTML+=`<p> a soma entre os numeros é de ${soma}</p>`
        res.innerHTML+=`<p> a media dos numeros digitadados é ${media}</p>`
    }
}
