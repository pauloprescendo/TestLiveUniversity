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

function showItems() {
  let select, div;
  select = document.getElementById('select-options').value;
  div = document.querySelectorAll('article ul div');

  for (let i = 0; i < div.length; i++) {
    if (select !== "") {
      if ( `li-${select}` == div[i].className ) {
        div[i].style.display = 'block';
      } else {
        div[i].style.display = 'none';
      }
    } else {
      div[i].style.display = 'block';
    }
  }
}