$(document).ready(function(){
  var newAmountOfPizzas = new amountOfPizza();

  $("form#mainForm").submit(function(event){
    event.preventDefault();

    var newPizza = new Pizza();
    newPizza.addSize(newPizza);
    newPizza.addToppings(newPizza);
    newPizza.getPrice(newPizza);
    newAmountOfPizzas.getTotalPrice(newAmountOfPizzas, newPizza);
    console.log(newAmountOfPizzas.amount + "     " + newAmountOfPizzas.totalPrice);
    resetFields();
  });

});

function amountOfPizza(){
  this.amount = [];
  this.totalPrice = 0;
}
function Pizza(){
  this.toppings = [];
  this.size = 0;
  this.price = 0;
}

function resetFields(){
  $("input#pepperoni").prop('checked', false);
  $("input#sausage").prop('checked', false);
  $("input#anchovies").prop('checked', false);
  $("input#bacon").prop('checked', false);
  $("input#cheese").prop('checked', false);
  $("input#onions").prop('checked', false);
  $("input#peppers").prop('checked', false);
  $("input#olives").prop('checked', false);
  $("input#mushrooms").prop('checked', false);
  $("input#jalapenos").prop('checked', false);
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
  newPizza.price = (parseInt(newPizza.size) / 100);
  newPizza.addToppingsPrice(newPizza);

  return newPizza;
}

Pizza.prototype.addToppingsPrice = function(newPizza){
  for(var i = 0; i < newPizza.toppings.length; i++){
    newPizza.toppings[i] = parseInt(newPizza.toppings[i]);
    if(newPizza.toppings[i] % 2 === 0){
      newPizza.price += 1;
    }
  };
  return newPizza;
}

amountOfPizza.prototype.getTotalPrice = function(newAmountOfPizzas, newPizza){
  newAmountOfPizzas.amount.push(newPizza);
  console.log(newAmountOfPizzas.amount);
  newAmountOfPizzas.totalPrice += newPizza.price;
  return newAmountOfPizzas;
}
