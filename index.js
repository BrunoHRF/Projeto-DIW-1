    //Aplicação JSON de jornalistas para o index.

    let equipe =" ";
    console.log(equipe);
    for(i=0 ; i < db.data.length ; i++){
        equipe +=`<p>O jornalista : ${db.data[i].Jornalista}<br>`;
        equipe +=` Sua história : ${db.data[i].Descrição}<br>`;
        equipe +=` Seu cargo : ${db.data[i].Area}<br>`;
        equipe +=`${db.data[i].Nascimento}<br>`;
    }
    document.getElementById('lista').innerHTML = equipe;