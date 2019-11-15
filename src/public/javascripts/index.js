function openOptions() {
  document.getElementById('options').style.width = '180px';
}

function closeOptions() {
  document.getElementById('options').style.width = '0';
}

$('body,html').click((e) => {
  var options = $('#btn-options');
  if (!options.is(e.target) && $('#options').has(e.target).length === 0) {
    closeOptions();
  }
});
