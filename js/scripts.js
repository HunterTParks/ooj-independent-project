$(document).ready(function(){
  $("form#mainForm").submit(function(event){
    event.preventDefault();

    var newPizza = new Pizza();
    newPizza.addToppings(newPizza);
    newPizza.addSize(newPizza);

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
  return newPizza;
}

Pizza.prototype.addSize = function(newPizza){
  newPizza.size = $("input:radio[name=flavor]:checked").val();
  return newPizza;
}
