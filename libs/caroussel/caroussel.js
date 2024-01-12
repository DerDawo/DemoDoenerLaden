function $className(className){return document.getElementsByClassName(className)}
function $id(id){return document.getElementById(id)}

const carousselItems = $className("caroussel-item");

let carousselItemDots;
let carousselItemOrderList = [];
let activeItem = 0;

window.addEventListener("load",initCaroussel);
function initCaroussel(){
    createCarousselActions()
    createCarousselItemDots()

    const previousCarousselItem = $id("previous-caroussel-item");
    const nextCarousselItem = $id("next-caroussel-item");
    previousCarousselItem.addEventListener("click",toPreviousCarousselItem)
    nextCarousselItem.addEventListener("click",toNextCarousselItem)

    selectCarousselItem(activeItem)
}

function createCarousselActions(){
    const actionsHTML = 
    `<div class="caroussel-actions">
        <div class="caroussel-buttons">
            <button id="previous-caroussel-item"><div class="arrow-box pointing-left"></div></button>
            <button id="next-caroussel-item"><div class="arrow-box pointing-right"></div></button>
        </div>
        <div class="caroussel-dots"><div>
    </div>`
    $className("caroussel")[0].insertAdjacentHTML("beforeend",actionsHTML)
}

function createCarousselItemDots(){
    let i = 0
    for (const item of carousselItems){
        item.classList.add("hide-caroussel-item")

        $className("caroussel-dots")[0].innerHTML += `<label><input id="caroussel-item-dot_${i}" class="caroussel-item-dot" name="caroussel-item-dot" value="${i}" type="radio"></label>`
        carousselItemOrderList.push(i)
        i++
    }
    
    carousselItemDots = $className("caroussel-item-dot")
    for (const dot of carousselItemDots){
        dot.addEventListener("click",showDirectlyCarousselItem)
    } 
}

function toPreviousCarousselItem(){
    activeItem -= 1
    if(activeItem < 0) {activeItem = carousselItemOrderList.length-1}
    if(activeItem > carousselItemOrderList.length-1) {activeItem = 0}

    selectCarousselItem(activeItem)
}

function toNextCarousselItem(){
    activeItem += 1
    if(activeItem < 0) {activeItem = carousselItemOrderList.length-1}
    if(activeItem > carousselItemOrderList.length-1) {activeItem = 0}

    selectCarousselItem(activeItem)
}

function selectCarousselItem(index){
    carousselItemDots[index].click()
    showCarousselItem()
}

function showDirectlyCarousselItem(){
    activeItem = Number(this.value)
    showCarousselItem() 
}

function showCarousselItem(){
    for (let i = 0; i < carousselItems.length; i++){
        const item = carousselItems[i]
        if(i === activeItem){
            item.classList.remove("hide-caroussel-item")
            item.classList.add("show-caroussel-item")
        } else {
            item.classList.remove("show-caroussel-item")
            item.classList.add("hide-caroussel-item")
        }
    }
}

