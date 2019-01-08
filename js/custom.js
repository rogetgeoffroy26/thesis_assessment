const app = document.getElementById('root');

/*const logo = document.createElement('img');
logo.src = 'logo.png';*/

const container = document.createElement('div');
container.setAttribute('class', 'container');
const row = document.createElement('div');
row.setAttribute('class', 'row');

//app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(posts => {
      const item = document.createElement('div');
      item.setAttribute('class', 'col-md-6 col-sm-12 portfolio-item');

      const h1 = document.createElement('h1');
      h1.textContent = posts.title;

      const p = document.createElement('p');
      posts.body = posts.body.substring(0, 300);
      p.textContent = `${posts.body}...`;

      container.appendChild(row);
      row.appendChild(item);
      item.appendChild(h1);
      item.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();