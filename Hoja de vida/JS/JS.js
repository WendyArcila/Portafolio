const main = () => {
    let element = document.querySelector(".contenedor")
    let element2=document.querySelector(".contacto")
    let element3=document.querySelector(".descarga")
    let element4=document.querySelector("h1")
    let element5=document.querySelectorAll("h2")
    let element6=document.querySelector(".cuerpo")
    let element7=document.querySelector(".enlaces")
    let contenido=document.querySelectorAll(".contenido")
    let enunciado= document.querySelectorAll(".enunciado")

    enunciado.forEach((cadaEnunciado, i)=>{
        enunciado[i].addEventListener('click',()=>{
            contenido[i].classList.toggle('active')
        })
    })
}

const cambiarEstilo1= (clas1,clas2,clas3,clas4,clas5,clas6)=>{
    eliminarEstilo2(clas1,clas2,clas3,clas4,clas5,clas6)
    let element = document.querySelector(`.${clas1}`)
    element.classList.add("estilo1")
    cambiarEstilo1_2(clas2)
    cambiarEstilo1_3(clas3)
    cambiarEstilo1_3(clas4)
    cambiarEstilo1_2(clas5)
    cambiarEstilo1_4(clas6)
    cambiarEstilo1_1()
}
const cambiarEstilo1_1=() =>{
    let element = document.querySelector("h1")
    element.classList.add("estilo1_5")
}
const cambiarEstilo1_2= (clas)=>{
    let element = document.querySelector(`.${clas}`)
    element.classList.add("estilo1_2")
}
const cambiarEstilo1_3= (clas)=>{
    let element = document.querySelector(`.${clas}`)
    element.classList.add("estilo1_3")
}
const cambiarEstilo1_4= (clas)=>{
    let element = document.querySelector(`.${clas}`)
    element.classList.add("estilo1_4")
}
const cambiarEstilo2= (clas1,clas2,clas3,clas4,clas5,clas6,)=>{
    eliminarEstilo(clas1,clas2,clas3,clas4,clas5,clas6)
    let element = document.querySelector(`.${clas1}`)
    element.classList.add("estilo2")
    cambiarEstilo2_2(clas2)
    cambiarEstilo2_3(clas3)
    cambiarEstilo2_3(clas4)
    cambiarEstilo2_2(clas5)
    cambiarEstilo2_4(clas6)
    cambiarEstilo2_1()
}
const cambiarEstilo2_1=() =>{
    let element = document.querySelector("h1")
    element.classList.add("estilo2_5")
}
const cambiarEstilo2_2= (clas)=>{
    let element = document.querySelector(`.${clas}`)
    element.classList.add("estilo2_2")
}
const cambiarEstilo2_3= (clas)=>{
    let element = document.querySelector(`.${clas}`)
    element.classList.add("estilo2_3")
}
const cambiarEstilo2_4= (clas)=>{
    let element = document.querySelector(`.${clas}`)
    element.classList.add("estilo2_4")
}
const eliminarEstilo2= (clas1,clas2,clas3,clas4,clas5,clas6,)=>{
    let element = document.querySelector(`.${clas1}`)
    element.classList.remove("estilo2")
    eliminarEstilo2_2(clas2)
    eliminarEstilo2_3(clas3)
    eliminarEstilo2_3(clas4)
    eliminarEstilo2_2(clas5)
    eliminarEstilo2_4(clas6)
    eliminarEstilo2_1()
}
const eliminarEstilo2_1=() => {
    let element = document.querySelector("h1")
    element.classList.remove("estilo2_5")
}
const eliminarEstilo2_2= (clas)=>{
    let element = document.querySelector(`.${clas}`)
    element.classList.remove("estilo2_2")
}
const eliminarEstilo2_3= (clas)=>{
    let element = document.querySelector(`.${clas}`)
    element.classList.remove("estilo2_3")
}
const eliminarEstilo2_4= (clas)=>{
    let element = document.querySelector(`.${clas}`)
    element.classList.remove("estilo2_4")
}
const eliminarEstilo= (clas1,clas2,clas3,clas4,clas5,clas6,)=>{
    let element = document.querySelector(`.${clas1}`)
    element.classList.remove("estilo1")
    eliminarEstilo1_2(clas2)
    eliminarEstilo1_3(clas3)
    eliminarEstilo1_3(clas4)
    eliminarEstilo1_2(clas5)
    eliminarEstilo1_4(clas6)
    eliminarEstilo1_1()
}
const eliminarEstilo1_1=() =>{
    let element = document.querySelector("h1")
    element.classList.remove("estilo1_5")
}
const eliminarEstilo1_2= (clas)=>{
    let element = document.querySelector(`.${clas}`)
    element.classList.remove("estilo1_2")
}
const eliminarEstilo1_3= (clas)=>{
    let element = document.querySelector(`.${clas}`)
    element.classList.remove("estilo1_3")
}
const eliminarEstilo1_4= (clas)=>{
    let element = document.querySelector(`.${clas}`)
    element.classList.remove("estilo1_4")
}
const estiloOriginal=(clas1,clas2,clas3,clas4,clas5,clas6)=>{
    eliminarEstilo(clas1,clas2,clas3,clas4,clas5,clas6)
    eliminarEstilo2(clas1,clas2,clas3,clas4,clas5,clas6)

}
