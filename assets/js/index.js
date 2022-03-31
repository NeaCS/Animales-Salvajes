import {
    Aguila,
    Leon,
    Lobo,
    Oso,
    Serpiente
} from './animales.js'


//funcion para llamar a la data mediante async
let datosAnimales = (() => {
    const urlbase = "/animales.json";
    const request = async (url) => {
        const results = await fetch(url);
        const datos = await results.json();
        const todoslosdatos = datos.animales;
        console.log(todoslosdatos);

        document.getElementById("btnRegistrar").addEventListener('click', () => {

            //selección de los elementos del DOM

            let animalName = document.getElementById("animal").value;
            let animalAge = document.getElementById("edad").value;
            let animalComments = document.getElementById("comentarios").value;
            let animalPreview = document.getElementById("preview");
            let animalBox = document.getElementById("Animales");

                //funcion que inserta las imagenes del animal 
            let getImagen =  (async() => {
                todoslosdatos.forEach((a) => {
                    if (a.name === animalName) {
                        animalPreview.innerHTML = `<img src='assets/imgs/${a.imagen}' class='h-100 w-100' style='object-fit: cover;'>`;
                        animalBox.innerHTML += `<div class='card w-25 h-50' style='width: 18rem;'>
                                    <img src='assets/imgs/${a.imagen}' class='card-img-top h-75' style='object-fit: cover;'>
                                <div class='card-body bg-secondary h-25 p-0 d-flex align-content-center justify-content-center'>
                                    <img class='audio' type='button' src='assets/imgs/audio.svg' class='w-25'>
                                </div>
                            </div>`;
                    }
                })
            })();

            // condicionales para crear las instancias

            if (animalName === "Leon") {
                let newLeon = new Leon(animalName, animalAge, todoslosdatos[0].imagen, animalComments, todoslosdatos[0].sonido)
                console.log(newLeon);

            } else if (animalName === "Lobo") {
                let newLobo = new Lobo(animalName, animalAge, todoslosdatos[1].imagen, animalComments, todoslosdatos[1].sonido)
                console.log(newLobo);
                

            } else if (animalName === "Oso") {
                let newOso = new Oso(animalName, animalAge, todoslosdatos[2].imagen, animalComments, todoslosdatos[2].sonido)
                console.log(newOso);

            } else if (animalName === "Serpiente") {
                let newSerpiente = new Serpiente(animalName, animalAge, todoslosdatos[3].imagen, animalComments, todoslosdatos[3].sonido)
                console.log(newSerpiente)

            } else if (animalName === "Aguila") {
                let newAguila = new Aguila(animalName, animalAge, todoslosdatos[4].imagen, animalComments, todoslosdatos[4].sonido)
                console.log(newAguila)
            }


            vaciarForm();
        });

        //funcion para vaciar el formulario
        let vaciarForm = () => {
            document.getElementById("animal").value = "";
            document.getElementById("edad").value = "";
            document.getElementById("comentarios").value = "";


        }
    }
    return request(urlbase)
})();
