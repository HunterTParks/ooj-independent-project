$(document).ready(function(){
  $("form#mainForm").submit(function(event){
    event.preventDefault();
  });
});

function Pizza(){
  this.toppings = [];
  this.size = size;
  this.price = price;
}
