$(document).ready(function(){
  $("form#mainForm").submit(function(event){
    event.preventDefault();
    // debugger;

    var newPizza = new Pizza();
    newPizza.addToppings(newPizza);

  });
});

function Pizza(){
  this.toppings = [];
  this.size = "";
  this.price = "";
}

Pizza.prototype.addToppings = function(newPizza){
  $("input:checkbox[name = toppings]:checked").each(function(){
    newPizza.toppings.push($(this).val());
  });
  console.log(newPizza.toppings);

  return newPizza;
}
