$(document).ready(function(){
  var newAmountOfPizzas = new amountOfPizza();
  var str = 0;

  showMainTitle();

  $("#entryButton").click(function(){
    showMainSite();
  });

  $("#final").click(function(){
    showMainSite();
  });

  $("form#mainForm").submit(function(event){
    event.preventDefault();
    debugger;
    var newPizza = new Pizza();
    newPizza.addSize(newPizza);
    newPizza.addToppings(newPizza);
    newPizza.getPrice(newPizza);
    newAmountOfPizzas.getTotalPrice(newAmountOfPizzas, newPizza);
    console.log(newAmountOfPizzas.amount + "     " + newAmountOfPizzas.totalPrice);

    resetFields();
    hideMainSite();

    $("#PizzaTotal").append(newAmountOfPizzas.totalPrice);
  });

});

function showMainTitle(){
  $("#mainIntroTitle").removeClass('hidden');
  $("#mainIntroTitle").addClass('animated fadeInUp visible');
  setTimeout(function(){
    $("#premade").removeClass('hidden');
    $("#premade").addClass('animated fadeInUp visible');
    $("#entryButton").removeClass('hidden');
    $("#entryButton").show().addClass('animated fadeInUp visible');
  }, 1500);
}

function showMainSite(){
  $("#mainIntro").addClass('animated fadeOutDown');
  $("#premade").addClass('animated fadeOutDown');
  setTimeout(function(){
    $("#premade").addClass('hidden');
    $("#finalScreen").removeClass('visible');
    $("#finalScreen").addClass('hidden');
    $("#topOfPage").removeClass('hidden');
    $("#topOfPage").addClass('animated fadeIn visible');
    $("#mainForm").removeClass('hidden');
    $("#mainForm").addClass('animated zoomIn visible');
  }, 700);
}

function hideMainSite(){
  $("#topOfPage").addClass('fadeOut hidden');
  $("#mainForm").addClass('fadeOut hidden');
  setTimeout(function(){
    $("#finalScreenCol1").removeClass('hidden');
    $("#finalScreenCol1").addClass('animated zoomIn visible');
    $("#finalScreen").removeClass('hidden');
    $("#finalScreen").addClass('visible');
  }, 700);
}

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
  $("#PizzaTotal").empty();
}

amountOfPizza.prototype.showOrder = function(newAmountOfPizzas){
return this.totalPrice;
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
