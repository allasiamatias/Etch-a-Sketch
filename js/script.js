const container = document.querySelector(".container")
const button = document.querySelector(".btn-change")


for(let i = 0; i < 16 * 16; i++){
    const box = document.createElement("div")
    box.classList.add("celda")
    container.appendChild(box)
    
    box.style.width = `${960/16 +"px"}`
    box.style.height = `${960/16 +"px"}`
    let timer

    box.addEventListener("mouseenter",()=>{
        clearTimeout(timer)
        box.style.backgroundColor = randomColor()
    })
    box.addEventListener("mouseleave", ()=>{
        setTimeout(()=>{box.style.backgroundColor = ""},300) 
    })
}

function randomColor(){
    let red = Math.floor(Math.random() * 255) + 1
    let green = Math.floor(Math.random() * 255) + 1
    let blue = Math.floor(Math.random() * 255) + 1

    return "rgb(" + red + "," + green + "," + blue +")"
}

button.addEventListener("click", ()=>{
    let numero = Number(prompt(`Seleccione el numero de cuadriculas por lado, menos de 100`))

    if (numero > 100 || numero < 1 || isNaN(numero)){
        numero = Number(prompt("Asegurese de ingresar un numero menor a 100"))

        if (numero > 100 || numero < 1 || isNaN(numero)){
        console.error("Numero invalido, no se generara la grilla")
        return
        }
    } 

        container.innerHTML = ""
        for(let i = 0; i < numero * numero; i++){
            const box = document.createElement("div")
            box.classList.add("celda")
            container.appendChild(box)
            box.style.width = `${960/numero +"px"}`
            box.style.height = `${960/numero +"px"}`
    
            let timer

            box.addEventListener("mouseenter",()=>{
                clearTimeout(timer)
                box.style.backgroundColor = randomColor()
            })
            box.addEventListener("mouseleave", ()=>{
                setTimeout(()=>{box.style.backgroundColor = ""},300) 
            })
        }
})
