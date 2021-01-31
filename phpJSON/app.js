document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'http://127.0.0.1/MyLibrary/phpapi/api/post/read.php', true);

  // console.log('READYSTATE', xhr.readyState);
  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      let output = '';

        response.forEach(function(body){
          output += `<li>${body.title}</li>`; 
        });


      document.querySelector('#output').innerHTML = output;
    }
  }

  xhr.send();
}
