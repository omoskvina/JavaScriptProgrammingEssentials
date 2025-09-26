var xhr = new XMLHttpRequest();
var url = './news_page.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function(){
    var news = xhr.response.news;
    console.log(news)
    var newsDiv = document.getElementById('news');
    news.forEach(function(story) {
        var storyDiv = document.createElement('div');
        storyDiv.classList.add('story');
  
        var headline = document.createElement('h2');
        headline.textContent = story.headline;
  
        var summary = document.createElement('p');
        summary.textContent = story.summary;
  
        var keyPointsHeader = document.createElement('h3');
        keyPointsHeader.textContent = 'Key Points:';
  
        var keyPointsList = document.createElement('ul');
        story.key_points.forEach(function(point) {
          var listItem = document.createElement('li');
          listItem.textContent = point;
          keyPointsList.appendChild(listItem);
        });
  
        var impactsHeader = document.createElement('h3');
        impactsHeader.textContent = 'Impacts:';
  
        var impactsList = document.createElement('ul');
        story.impacts.forEach(function(impact) {
          var listItem = document.createElement('li');
          listItem.textContent = impact;
          impactsList.appendChild(listItem);
        });
  
        storyDiv.appendChild(headline);
        storyDiv.appendChild(summary);
        storyDiv.appendChild(keyPointsHeader);
        storyDiv.appendChild(keyPointsList);
        storyDiv.appendChild(impactsHeader);
        storyDiv.appendChild(impactsList);
  
        newsDiv.appendChild(storyDiv);
      });
}

xhr.send();