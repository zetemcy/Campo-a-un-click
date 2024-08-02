const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

$next.addEventListener(
  'click',
  () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
  },
);

$prev.addEventListener(
  'click',
  () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
  },
);

function mostrar(){
  document.getElementById('ocl').style.display = "block";
}
function ocultar(){
  document.getElementById('ocl').style.display = "none";
}
function mostrar2(){
  document.getElementById('ocl2').style.display = "block";
}
function ocultar2(){
  document.getElementById('ocl2').style.display = "none";
}

if(document.querySelector('#container-slider')){
  setInterval('funcionEjecutar("siguiente")',8000);
}
//------------------------------ LIST SLIDER -------------------------
if(document.querySelector('.listslider')){
  let link = document.querySelectorAll(".listslider li a");
  link.forEach(function(link) {
     link.addEventListener('click', function(e){
        e.anteriorentDefault();
        let item = this.getAttribute('itlist');
        let arrItem = item.split("_");
        funcionEjecutar(arrItem[1]);
        return false;
     });
   });
}

function funcionEjecutar(side){
   let parentTarget = document.getElementById('slider');
   let elements = parentTarget.getElementsByTagName('li');
   let curElement, siguienteElement;

   for(var i=0; i<elements.length;i++){

       if(elements[i].style.opacity==1){
           curElement = i;
           break;
       }
   }
   if(side == 'anterior' || side == 'siguiente'){

       if(side=="anterior"){
           siguienteElement = (curElement == 0)?elements.length -1:curElement -1;
       }else{
           siguienteElement = (curElement == elements.length -1)?0:curElement +1;
       }
   }else{
       siguienteElement = side;
       side = (curElement > siguienteElement)?'anterior':'siguiente';

   }
   
   //PUNTOS INFERIORES
   let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
   elementSel[curElement].classList.remove("item-select-slid");
   elementSel[siguienteElement].classList.add("item-select-slid");
   elements[curElement].style.opacity=0;
   elements[curElement].style.zIndex =0;
   elements[siguienteElement].style.opacity=1;
   elements[siguienteElement].style.zIndex =1;
}

const produtos = ['papa','cebolla','cacao','frijol','yuca','cafe','maiz','canna']
const links = ['./assets/images/papas.jpg','./assets/images/cebolla.jpg','./assets/images/cacao.jpeg','./assets/images/maiz-y-frijoles.jpg','./assets/images/yuca.jpg','./assets/images/R.jpeg','./assets/images/maiz.jpeg','./assets/images/canaa.png']
const cambio = document.querySelector("#cambio");
for (let x = 0; x < produtos.length; x++) {
  console.log(cambio);
  console.log(cambio.innerHTML);
  cambio.innerHTML += `
  <div class="product">
    <img class="product__image" src="${links[x]}" alt="">
    <h2 class="product__title">${produtos[x]}</h2>
    <p class="product__description"> ${produtos[x]}</p>
    <div class="product_btn">
      <button>Comprar</button>
      <button>Agregar</button>
    </div>
    </div>`;
  }
  
  
