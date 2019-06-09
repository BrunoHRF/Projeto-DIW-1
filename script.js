//Api que irá trazer as notícias genericas em pt/br para nosa div content
let req = new XMLHttpRequest ();
let url='https://newsapi.org/v2/top-headlines?country=br&apiKey=f095d06a96ad4b7096616efd9bbfd1f3';

function processaDados(){
    let dados = JSON.parse(req.responseText);
    let saida='';
    for(i = 0; i < dados.articles.length; i++){
        if(i<9){
    saida += `<div class="noticias">
                <p class='titulos-noticias'>${dados.articles[i].title}</p>
                <img class='img-noticias' src="${dados.articles[i].urlToImage}">
                <p class='descricao-noticias'> Artigos ${dados.articles[i].description}"</p>
                </div>`}}
    document.getElementById('api').innerHTML = saida;
}

function getData(){
    req.onload = processaDados;
    req.open('GET',url,true);
    req.send();
}
getData();