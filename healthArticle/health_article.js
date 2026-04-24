
//Access-Control-Allow-Origin: *
//Access-Control-Allow-Methods: GET, POST
//Access-Control-Allow-Headers: Content-Type
var xhr = new XMLHttpRequest();
var url = './health_article.json';
//var url = 'file:///health_article.json';
//var url = 'https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/health.json';
xhr.responseType =  'json';
xhr.open('GET', url, true);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.response);
    }
  };
  xhr.send();

//console.log(xhr.response.articles);
xhr.onload = function () {
if (xhr.status >= 200) {
var articles = xhr.response.articles;
      console.log(articles);
//var articles = xhr.response.articles;
var articlesDiv = document.getElementById('articles');

articles.forEach(function(article) {
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      var title = document.createElement('h2');
      title.textContent = article.title;

      var description = document.createElement('p');
      description.textContent = article.description;

      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      articlesDiv.appendChild(articleDiv);
});

var articleDiv = document.createElement('div');
articleDiv.classList.add('article');
articleDiv.appendChild(title);
//xhr.send();


    } else {
      console.error("Error loading JSON:", xhr.status);
    } };