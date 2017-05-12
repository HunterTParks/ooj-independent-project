$(document).ready(function(){
  $("form#mainForm").submit(function(event){
    event.preventDefault();

    var newPizza = new Pizza();
    newPizza.addSize(newPizza);
    newPizza.addToppings(newPizza);
    newPizza.getPrice(newPizza);
  });
});

function Pizza(){
  this.toppings = [];
  this.size = 0;
  this.price = 0;
}

Pizza.prototype.addSize = function(newPizza){
  newPizza.size = $("input:radio[name=size]:checked").val();
  return newPizza;
}

Pizza.prototype.addToppings = function(newPizza){
  $("input:checkbox[name = toppings]:checked").each(function(){
    newPizza.toppings.push($(this).val());
  });
  return newPizza;
}

Pizza.prototype.getPrice = function(newPizza){
  var size = (parseInt(newPizza.size) / 10);
  console.log(size);
  
}
