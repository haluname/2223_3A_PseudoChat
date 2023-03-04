/*
    TESTO DELLA VERIFICA DI TPSIT
    Viene richiesto di modificare i file html e js in modo tale da:

    - visualizzare DINAMICAMENTE gli utenti nell'aside (barra laterale sinistra) 
        # ogni utente è un nuovo LI
        # ogni utente in base al genere dovrà essere raffigurato tramite l'icona corretta
        # sotto l'icona dovrà essere rafficurato il nome con l'iniziale maiuscola del nome e l'iniziale maiuscola del cognome
        # il cognome dovrà essere troncato e seguito da . (come si vede nel file originale)

    - aggiornare automaticamente l'header della sezione nel momento in cui clicco su un utente dell'aside
        # modificare l'icona
        # modificare il nome e cognome
        # aggiornare l'ora a proprio piacimento (PER IL MASSIMO DEL PUNTEGGIO: creare un array parallelo con le ore)
    
    - aggiungere DINAMICAMENTE I MESSAGGI
        #Non importa se si utilizza ut1 per l'utente 0 o ut2, l'importante è la coerenza

    - PER IL 10. Gestite il bottone di invio in basso 
        #se il campo di testo non è vuoto aggiungere il messaggio in coda agli altri del personaggio selezionato


        
*/


function init(){

   
    let list = " ";
    let persone= " ";
    


    for (let i in nomeUtenti) {

        if(i!=0){

        persone += lista(nomeUtenti[i], genereUt[i], cognomeUtenti[i], i);

        }
    }

    document.getElementById("listUtenti").innerHTML = persone;

}




function lista(nomeUtenti, genereUt, cognomeUtenti, i){


    if(genereUt=="m"){

        genere="face";
    }
    else{
        genere="face_3";
    }

    return `
        <li id="${nomeUtenti}">
            <div class="material-symbols-outlined icone" onclick='clicca(${nomeUtenti})'>
                ${genere}
            </div>
            ${nomeUtenti + '.' + cognomeUtenti.substring(0,1)}
        </li>
`;
}


function clicca(nomeUte){

    let nome = document.getElementById("divNome");
    let ora = document.getElementById("divUltimoMes");
    let persona = document.getElementsByTagName("li");
    let face = document.getElementById("faccia");
    
    ora.innerText="Oggi alle 9:00";

    nome.innerText=nomeUte;

    if(genereUt=="m"){

        face.innerHTML="face"
    }
    else
    {
        face.innerHTML="face_3"
    }

    console.log(ora)    


}