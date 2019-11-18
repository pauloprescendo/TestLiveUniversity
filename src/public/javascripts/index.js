/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const btnPrevious = document.getElementById('btn-previous');
const btnNext = document.getElementById('btn-next');
let iptQuantity = document.getElementById('input-quantity').value;
let itemsResponse = [];
let currentPage = 1;

function openOptions() {
  document.getElementById('options').style.width = '18%';
}

function closeOptions() {
  document.getElementById('options').style.width = '0';
}

$(document).mouseup((e) => {
  const options = $('#options');
  if (!options.is(e.target) && options.has(e.target).length === 0) {
    closeOptions();
  }
});

function quantityPages() {
  return Math.ceil(itemsResponse.length / iptQuantity);
}

function showItems(list) {
  const ul = document.querySelector('article ul');
  ul.innerHTML = '';
  list.forEach((value) => {
    const node = document.createElement('li');
    const textnode = document.createTextNode(value);
    node.appendChild(textnode);
    ul.appendChild(node);
  });
}

function pagination(list, quantity) {
  const items = list.slice((currentPage - 1) * quantity, currentPage * quantity);
  showItems(items);
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    pagination(itemsResponse, iptQuantity);
  }
}

function nextPage() {
  if (currentPage < quantityPages()) {
    currentPage++;
    pagination(itemsResponse, iptQuantity);
  }
}

function loadItems() {
  const btnQuantity = document.getElementById('button-quantity');
  const sltOption = document.getElementById('select-options').value;
  iptQuantity = document.getElementById('input-quantity').value;
  const xhttp = new XMLHttpRequest();
  if (iptQuantity >= 1 && iptQuantity <= 3 && sltOption) {
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        btnQuantity.classList.remove('button-quantity');
        itemsResponse = JSON.parse(this.response).items;
        currentPage = 1;
        pagination(itemsResponse, iptQuantity);
      }
    };
    xhttp.open('GET', `option/${sltOption}`, true);
    xhttp.send();
  } else {
    btnQuantity.classList.add('button-quantity');
  }
}

document.getElementById('input-quantity').onkeypress = (event) => {
  if (event.keyCode == 13 || event.which == 13) {
    loadItems();
  }
};
