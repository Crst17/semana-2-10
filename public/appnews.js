

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
