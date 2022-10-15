class GroceryItem {
    name = "";
    price = 0;
}

let storedList = JSON.parse(localStorage.getItem('storedList')) || [];

const tile1 = document.querySelector(".col-md-3.w3ls_w3l_banner_left.w3ls_w3l_banner_left_asdfdfd");
const tile2 = document.querySelector(".col-md-3.w3ls_w3l_banner_left.bread");
const tile3 = document.querySelector(".col-md-3.w3ls_w3l_banner_left.w3ls_w3l_banner_left_asd");

const tiles = [tile1, tile2, tile3];

tiles.forEach(tile => {
    let button = tile.querySelector(".addtolist").querySelector(".button");
    let name = tile.querySelector('p').innerText;
    let price = tile.querySelector('h4').innerText.split(' ')[0];

    button.addEventListener("click", () => {
        item = new GroceryItem;
        item.name = name;
        item.price = price;
        storedList.push(item);
        localStorage.setItem('storedList', JSON.stringify(storedList));
    })
})