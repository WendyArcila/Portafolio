const main = () => {
    let punto = document.querySelectorAll(".punto")
    let ejercicio = document.querySelectorAll(".ejercicio")

    punto.forEach((cadaPunto, i)=>{
        punto[i].addEventListener('click',()=>{
            ejercicio[i].classList.toggle('active')
        })
    })
}