const btnSearch = document.getElementById("btnSearch");
const MyReset = document.getElementById("btnReset"); 
let i=0;

function resetSearch() {
  document.getElementById("btnSearch").value = "";
  resultDiv11.innerHTML = '';
  resultDiv12.innerHTML = '';
  resultDiv21.innerHTML = '';
  resultDiv22.innerHTML = '';
  resultDiv31.innerHTML = '';
  resultDiv32.innerHTML = '';
}

function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    resultDiv11.innerHTML = '';
    resultDiv12.innerHTML = '';
    resultDiv21.innerHTML = '';
    resultDiv22.innerHTML = '';
    resultDiv31.innerHTML = '';
    resultDiv32.innerHTML = '';

	fetch('travel_recommendation_api.json')
    .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement du fichier JSON');
        }
        //i=0;
        return response.json();
      })
      .then(data => {
        data.countries.forEach(country => {
          if (country.name.toLowerCase() === input) {
                country.cities.forEach(city => {
                if (i===0){
                        resultDiv11.innerHTML += `<img src="${city.imageUrl}" alt="hjh">`;
                        resultDiv21.innerHTML += `<h2>${city.name}</h2>`;
                        resultDiv31.innerHTML += `<p><strong>Description:</strong>${city.description}</p>`;
                        i += 1; 
                    } else {
                        resultDiv12.innerHTML += `<img src="${city.imageUrl}" alt="hjh">`;
                        resultDiv22.innerHTML += `<h2>${city.name}</h2>`;
                        resultDiv32.innerHTML += `<p><strong>Description:</strong>${city.description}</p>`;
                        i = 0; 
                }
                });
            }
      })
      data.temples.forEach(temple => {
          if (temple.name.toLowerCase() === input) {
                        resultDiv11.innerHTML += `<img src="${temple.imageUrl}" alt="hjh">`;
                        resultDiv21.innerHTML += `<h2>${temple.name}</h2>`;
                        resultDiv31.innerHTML += `<p><strong>Description:</strong>${temple.description}</p>`;
            }
      })
       data.beaches.forEach(beach => {
          if (beach.name.toLowerCase() === input) {
                        resultDiv11.innerHTML += `<img src="${beach.imageUrl}" alt="hjh">`;
                        resultDiv21.innerHTML += `<h2>${beach.name}</h2>`;
                        resultDiv31.innerHTML += `<p><strong>Description:</strong>${beach.description}</p>`;
            }
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
    })
}
btnSearch.addEventListener('click', searchCondition);

