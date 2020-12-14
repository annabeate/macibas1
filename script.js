async function getDraugi()
{
    let datiNoApi = await fetch('https://annabeate.github.io/macibas1/draugi.json')
    let datiJson = await datiNoApi.json();
   return datiJson;
}



async function raditDatus()
{
    let t=document.getElementById('dati-draugi')
    let draugiJSON = await getDraugi();
    for (let i = 0; i < draugiJSON.draugi.length; i++)
      {
        
        t.innerHTML += `
          <tr>
            <td>${draugiJSON.draugi[i].Name}</td>
            <td>${draugiJSON.draugi[i].Surname}</td>
            <td>${draugiJSON.draugi[i].Phone_nr}</td>
          </tr>
        `
      } 
    console.log(draugiJSON);





    
}

raditDatus();

