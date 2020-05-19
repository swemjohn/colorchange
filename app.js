
const dispcolor = document.getElementById('area');

const orange = document.getElementById('orange');
const blue = document.getElementById('blue');
const green = document.getElementById('green');


//Event Listeners
orange.addEventListener('click', function()
{
  dispcolor.style.backgroundColor = "orange";
});

blue.addEventListener('click', function()
{
  dispcolor.style.backgroundColor = "blue";
});

green.addEventListener('click', function()
{
  dispcolor.style.backgroundColor = "green";
});
