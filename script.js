 function renderlogic(){
   
        
    let returnedResponse=this.responseText;
    let responseDataAsObject=JSON.parse(returnedResponse);


    let ul=document.createElement('ul');
     
    responseDataAsObject.data.forEach(item => {
        let li=document.createElement('li');
        // li.textContent=item.first_name +'  '+item.last_name;

        li.textContent=`${item.name} ${item.year} ${item.color}`


        ul.appendChild(li);

    })   
    
    document.getElementById('colortheme').appendChild(ul);

    } 
 let requist=new XMLHttpRequest();
requist.addEventListener('load', renderlogic);
requist.open('GET','https://reqres.in/api/unknown');
requist.send(); 




// const colortheme =["color", "year", "color-code"];



// let navl=colortheme.length;
// let navtxt=navl[i];

// for(let i=0; i<navl; i++){
//     navtxt+=<li>+nav[i]+</li>;
    
// }

// document.getElementById("colortheme").innerHTML=navtxt; 




