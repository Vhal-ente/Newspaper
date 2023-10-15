
fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b55e8bac31f54317a6a245f3c247dcac")
  .then((data) => {

    console.log(data);
    return data.json();
  })
  
  .then((comObj) => {
  
    return comObj.articles
  })
  .then(data => {
    data.forEach(element => {
      console.log(element);
      let load = document.querySelector("#loader");
      load.style.display = "none";
      let news = document.querySelector(".text-contentList");
      news.innerHTML += `<div class="text-content">
     
      <div class="img-container"><img class="img-1" src=${element.urlToImage}></div>
      <p class="p-txt">Author: ${element.author}</p>
      <p>Description: ${element.description}</p>
      <p> Content: ${element.content}</p>
      <p> Published@: ${element.publishedAt}</p>
      <p><a class="readmore" href="${element.url}"  target="_blank">Read more</a></p>
      </div>`
      
    });
  });

  
          
          
          