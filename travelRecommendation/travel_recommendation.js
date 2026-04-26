const btnSearch = document.getElementById("btnSearch");
const MyReset = document.getElementById("btnReset"); 

function resetSearch() {
  document.getElementById("btnSearch").value = "";
}

function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
	const result = document.getElementById('resultDiv');
	result.innerHTML = '';

	fetch('travel_recommendation_api.json')
	.then(response => response.json())
	.then(data => {
	const theCondition = data.countries.find(item => item.name.toLowerCase() === input);

	if (theCondition) {
			  const cities = theCondition.cities.join(', ');
			  resultDiv.innerHTML += `<img src="${cities.imageUrl}" alt="hjh">`;
			  resultDiv.innerHTML += `<h2>${cities.name}</h2>`;
			  resultDiv.innerHTML += `<p><strong>Description:</strong> ${cities.description}</p>`;
	} else {
			  resultDiv.innerHTML = 'cities not found.';
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
	} */

	})
	.catch(error => {
			console.error('Error:', error);
			resultDiv.innerHTML = 'An error occurred while fetching data.';
	});
}
btnSearch.addEventListener('click', searchCondition);

