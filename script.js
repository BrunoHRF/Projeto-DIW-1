let req = new XMLHttpRequest ();
let url='https://newsapi.org/v2/top-headlines?country=br&apiKey=f095d06a96ad4b7096616efd9bbfd1f3';

function processaDados(){
    let dados = JSON.parse(req.responseText);
    console.log(dados)
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

    //Aplicação JSON de jornalistas//

let equipe =" ";
    for(i=0 ; i < db.data.length ; i++){
        equipe +=`<p>O jornalista : ${db.data[i].Jornalista}<br>`;
        equipe +=` Sua história : ${db.data[i].Descrição}<br>`;
        equipe +=` Seu cargo : ${db.data[i].Area}<br>`;
        equipe +=`${db.data[i].Nascimento}<br>`;
    }
    document.getElementById('lista').innerHTML = equipe;