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
	//const result1 = document.getElementById('resultDiv1');
	//const result2 = document.getElementById('resultDiv2');
    //const result3 = document.getElementById('resultDiv3');
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

      .catch(error => {
        console.error('Erreur:', error);
      });
    })
}
            
/*	if (theCondition === temples) {
			  const temples = theCondition.temples.join(', ');
			  resultDiv.innerHTML += `<img src="${temples.imageUrl}" alt="hjh">`;
			  resultDiv.innerHTML += `<h2>${temples.name}</h2>`;
			  resultDiv.innerHTML += `<p><strong>Description:</strong> ${temples.description}</p>`;
	} else {
			  resultDiv.innerHTML = 'temples not found.';
	}

	if (theCondition === beaches) {
			  const beaches = theCondition.beaches.join(', ');
			  resultDiv.innerHTML += `<img src="${beaches.imageUrl}" alt="hjh">`;
			  resultDiv.innerHTML += `<h2>${beaches.name}</h2>`;
			  resultDiv.innerHTML += `<p><strong>Description:</strong> ${beaches.description}</p>`;
	} else {
			resultDiv.innerHTML = 'beaches not found.';
	} 

	})
	.catch(error => {
			console.error('Error:', error);
			resultDiv.innerHTML = 'An error occurred while fetching data.';
	});*/

btnSearch.addEventListener('click', searchCondition);

