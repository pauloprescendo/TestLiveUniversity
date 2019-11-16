function openOptions() {
  document.getElementById('options').style.width = '18%';
}

function closeOptions() {
  document.getElementById('options').style.width = '0';
}

$(document).mouseup((e) => {
  let options = $('#options');
  if (!options.is(e.target) && options.has(e.target).length === 0) {
    closeOptions();
  }
});

function loadItems() {
  let option = document.getElementById('select-options').value || '0';
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector('article ul').innerHTML = '';
      const list = JSON.parse(this.response).items;
      for ( let i = 0; i < list.length; i++ ) {
        let node = document.createElement('li');
        let textnode = document.createTextNode(`${list[i]}`);
        node.appendChild(textnode);
        document.querySelector('article ul').appendChild(node);
      }
    }
  };

  xhttp.open('GET',`option/${option}`, true);
  xhttp.send();
}