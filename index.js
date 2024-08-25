const eleman = document.getElementById("anahat");
var i = 0;
const fonksiyon = (elemanlar) =>{
    elemanlar.forEach((element) => {
        eleman.innerHTML += `<div class="card">
                <div class="topimg">
                    <img src="${element.image}" alt="" id="${i}img">
                </div>
                <div class="bottext">
                    <div class="itemname">
                        <span><b>${element.title}</b></span>
                    </div>
                    <div class="price">
                        <span><i><b>${element.price}$</b></i></span>
                    </div>
                    <div class = "description" id="${i}">
                        ${element.description}
                    </div>
                    <div class="rewiewbutton" onclick="rewiew(${i})">
                        <i 
                            class="fa-solid fa-question fa-shake fa-2xl"
                            style="color: #c8b1b1;"
                        >
                        </i>
                    </div>
                    <div class="addtocartbutton">
                        <i 
                            class="fa-solid fa-basket-shopping fa-flip fa-2xl"
                        >
                        </i>
                    </div>
                </div>
            </div>`
        i +=1;
    });
}
function rewiew(index){
    const description = document.getElementById(index).innerHTML;
    const aciklama = document.getElementById("aciklama");
    aciklama.innerHTML = description;
    const beforeimg = document.getElementById(index+"img").src;
    const img = document.getElementById("descriptionimg");
    img.src=beforeimg;
    const translucentscreen = document.getElementById("translucentscreen");
    translucentscreen.style = `display : flex ;`;
    const descriptionscreen = document.getElementById("descriptionscreen");
    descriptionscreen.style = `display : flex;`;
}
function closetab(){
    const translucentscreen = document.getElementById("translucentscreen");
    translucentscreen.style = `display : none ;`;
    const descriptionscreen = document.getElementById("descriptionscreen");
    descriptionscreen.style = `display : none;`;
}
fetch('https://fakestoreapi.com/products')
            .then((res)=>{
                return res.json();
            })
            .then((res) => { 
                fonksiyon(res);
            })