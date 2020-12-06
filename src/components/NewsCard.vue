<template>
    <div>
        <!-- SECCION DE NOTICIAS -->
  <div class="container-xl my-5">
    <div class="row">
      <div class="col-12">
        <h2 id="news" class="text-center my-0" name="news">Noticias</h2>

        <!-- MENU DESPLEGABLE -->
        <div class="dropdown">
          <p>Seleccione una categoría de noticias: </p>
          <form class="my-3">
            <select name="Categorías" id="mySelect" class="custom-select">
              <option class="dropdown-item" value="world" selected="selected">El mundo</option>
              <option class="dropdown-item" value="business">Negocios</option>
              <option class="dropdown-item" value="technology">Tecnología</option>
              <option class="dropdown-item" value="entertainment">Entretenimiento
              </option>
              <option class="dropdown-item" value="sports">Deportes</option>
              <option class="dropdown-item" value="science">Ciencia</option>
              <option class="dropdown-item" value="health">Salud</option>
            </select>            
          </form>
        </div>
      </div>

      <!-- NOTICIA 1 -->
      <div class="col-6 mb-3">
        <div class="card">
          <img src="https://placeimg.com/640/480/people" class="card-img-top"
            id='NewsImage1' alt='imagen1'>
          <div class="card-body">
            <h5 class="card-title" id='NewsTitle1'>NOTICIA 1</h5>
            <p class="card-text" id='NewsText1'>Descripción noticia 1.</p>
            <a href="#" class="btn btn-primary" id='NewsButton1' target=”_blank>Ir al sitio</a>
          </div>
        </div>
      </div>

      <!-- NOTICIA 2 -->
      <div class="col-6 mb-3">
        <div class="card">
          <img src="https://placeimg.com/640/480/tech" class="card-img-top"
            id='NewsImage2' alt='imagen2'>
          <div class="card-body">
            <h5 class="card-title" id='NewsTitle2'>NOTICIA 2</h5>
            <p class="card-text" id='NewsText2'>Descripción noticia 2.</p>
            <a href="#" class="btn btn-primary" id='NewsButton2' target=”_blank>Ir al sitio</a>
          </div>
        </div>
      </div>

      <!-- NOTICIA 3 -->
      <div class="col-6 mb-3">
        <div class="card">
          <img src="https://placeimg.com/640/480/any" class="card-img-top"
            id='NewsImage3' alt='imagen3'>
          <div class="card-body">
            <h5 class="card-title" id='NewsTitle3'>NOTICIA 3</h5>
            <p class="card-text" id='NewsText3'>Descripción noticia 3.</p>
            <a href="#" class="btn btn-primary" id='NewsButton3' target=”_blank>Ir al sitio</a>
          </div>
        </div>
      </div>

      <!-- NOTICIA 4 -->
      <div class="col-6 mb-3">
        <div class="card">
          <img src="https://placeimg.com/640/480/nature" class="card-img-top"
            id='NewsImage4' alt='imagen4'>
          <div class="card-body">
            <h5 class="card-title" id='NewsTitle4'>NOTICIA 4</h5>
            <p class="card-text" id='NewsText4'>Descripción noticia 4.</p>
            <a href="#" class="btn btn-primary" id='NewsButton4' target=”_blank>Ir al sitio</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h2 id="team" class="text-center my-0" name="news">Equipo</h2>
    </div>
</template>

<script>

    export default {
        
        name: "NewsCard",
        props: {
            
        },
        data(){
            return{
                mensaje:"Hola como estás",
                enlace:"https://placeimg.com/640/480/any"
               
            }
        },
        mounted(){
            let myAPIToken = 'a632e1e55c9dcd58bf314ca7f7b0519e';

//LISTA DESPLEGABLE
let mySelect = document.getElementById('mySelect');

mySelect.onchange = function() {
    var categoria = document.getElementById("mySelect").value;

    let urlAPI = 'https://gnews.io/api/v4/top-headlines?'
            +'&topic='+categoria
            +'&lang=es'
            +'&max=4'
            +'&sortby=publishedAt'
            +'&token='+myAPIToken;
    
    bringNews(urlAPI);
}

//CONEXION CON API
const bringNews = async (urlAPI) => {
    const result = await fetch( urlAPI, {
        method: 'GET',
    });

    if (result.ok){
        var dataNews = await result.json();
        console.log(dataNews);
    }

    printNew(dataNews);
    return dataNews
}

//EXTRACCION E IMPRESION DE DATOS
const printNew = async (dataNews) => {
    
    for (let i = 0; i <= 3; i++) {
        
        let n = (i+1).toString();
        //Titulo
        const NewsTitle = document.getElementById('NewsTitle'+n);
        NewsTitle.textContent = dataNews.articles[i].title;

        //Texto
        const NewsText = document.getElementById('NewsText'+n);
        NewsText.textContent = dataNews.articles[i].description;

        //Boton
        const NewsButton = document.getElementById('NewsButton'+n);
        NewsButton.href = dataNews.articles[i].url;

        //Imagen
        const NewsImage = document.getElementById('NewsImage'+n);
        NewsImage.src = dataNews.articles[i].image;
    }
}

let urlAPIDefault = 'https://gnews.io/api/v4/top-headlines?'
+'&topic=world'
+'&lang=es'
+'&max=4'
+'&sortby=publishedAt'
+'&token='+myAPIToken;
bringNews(urlAPIDefault);
        },
       
        
    }






</script>

<style scoped>

</style>