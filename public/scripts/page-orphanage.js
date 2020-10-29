const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControll: false
}

//create map

const map = L.map('mapid', options).setView([-1.4606116,-48.4959768], 15);

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]

})


//crateand add marker
L
.marker([-1.4606116,-48.4959768], {icon})
.addTo(map)


function selectImage(event) {
    const button = event.currentTarget

//remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }
//selecionar a imagem clicada
const image = button.children[0]

const imageContainer = document.querySelector(".orphanage-details > img")

//atualizar o container de image
imageContainer.src = image.src


//adicionar a class .active para este botao
button.classList.add('active')
}
