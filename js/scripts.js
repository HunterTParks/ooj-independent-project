$(document).ready(function(){
  var newAmountOfPizzas = new amountOfPizza();
  var str = 0;

  showMainTitle();

  $("#entryButton").click(function(){
    showMainSite();
  });

  $("#final").click(function(){
    showTitleAgain();
  });

  $("#cheesePizza").click(function(){
    var newPizza = new Pizza();
    newPizza.size = "950";
    newPizza.toppings.push("8");
    newPizza.price = 9.5;
    newAmountOfPizzas.amount.push(newPizza);
    newAmountOfPizzas.getTotalPrice(newAmountOfPizzas, newPizza);
    $("#mainIntro").addClass('animated fadeOutDown');
    $("#premade").removeClass('animated fadeInUp');
    $("#premade").addClass('animated fadeOutDown');
    setTimeout(function(){
      $("#mainIntro").removeClass('animated fadeOutDown');
      $("#premade").removeClass('animated fadeOutDown')
      $("#mainIntro").addClass('hidden');
      $("#premade").addClass('hidden');
    }, 700);
    hideMainSite();
    resetFields();
    $("#PizzaTotal").append(newAmountOfPizzas.totalPrice);
  });

  $("#pepperoniPizza").click(function(){
    var newPizza = new Pizza();
    newPizza.size = "950";
    newPizza.toppings.push("8", "2");
    newPizza.price = 10.5;
    newAmountOfPizzas.amount.push(newPizza);
    newAmountOfPizzas.getTotalPrice(newAmountOfPizzas, newPizza);
    $("#mainIntro").addClass('animated fadeOutDown');
    $("#premade").removeClass('animated fadeInUp');
    $("#premade").addClass('animated fadeOutDown');
    setTimeout(function(){
      $("#mainIntro").removeClass('animated fadeOutDown');
      $("#premade").removeClass('animated fadeOutDown')
      $("#mainIntro").addClass('hidden');
      $("#premade").addClass('hidden');
    }, 700);
    hideMainSite();
    resetFields();
    $("#PizzaTotal").append(newAmountOfPizzas.totalPrice);
  });

  $("#meatPizza").click(function(){
    var newPizza = new Pizza();
    newPizza.size = "950";
    newPizza.toppings.push("8", "2", "4", "6", "10");
    newPizza.price = 12.5;
    newAmountOfPizzas.amount.push(newPizza);
    newAmountOfPizzas.getTotalPrice(newAmountOfPizzas, newPizza);
    $("#mainIntro").addClass('animated fadeOutDown');
    $("#premade").removeClass('animated fadeInUp');
    $("#premade").addClass('animated fadeOutDown');
    setTimeout(function(){
      $("#mainIntro").removeClass('animated fadeOutDown');
      $("#premade").removeClass('animated fadeOutDown')
      $("#mainIntro").addClass('hidden');
      $("#premade").addClass('hidden');
    }, 700);
    hideMainSite();
    resetFields();
    $("#PizzaTotal").append(newAmountOfPizzas.totalPrice);
  });

  $("#address").click(function(){
    $("#finalScreen").removeClass('visible');
    $("#finalScreen").addClass('fadeOutDown hidden');
    setTimeout(function(){
      $("#orderAddress").removeClass('hidden');
      $("#orderAddress").addClass('animated bounceInUp')
    }, 700);
  })

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
  $("#mainIntroTitle").removeClass('fadeOutUp hidden');
  $("#mainIntro").removeClass('fadeOutDown hidden');
  $("#mainIntro").addClass('animated fadeInUp');
  $("#mainIntroTitle").addClass('animated fadeInUp visible');
  setTimeout(function(){
    $("#premade").removeClass('hidden');
    $("#premade").addClass('animated fadeInUp visible');
    $("#entryButton").removeClass('hidden');
    $("#entryButton").show().addClass('animated fadeInUp visible');
  }, 1500);
}

function showTitleAgain(){
  $("#finalScreen").addClass('animated fadeOutDown hidden');
  $("#finalScreen").removeClass('visible fadeOutDown')
  // $("#finalScreenCol1").removeClass('visible');
  // $("#finalScreenCol1").addClass('animated fadeOutDown');
  setTimeout(function(){
    $("#premade").removeClass('animated fadeOutDown');
    $("#mainIntro").removeClass('animated fadeOutDown');
    $("#entryButton").removeClass('animated fadeOutDown');
    $("#entryButton").addClass('hidden');
    showMainTitle();
  })
}

function showMainSite(){
  $("#mainIntro").addClass('animated fadeOutDown hidden');
  $("#premade").removeClass('animated fadeInUp');
  $("#premade").addClass('animated fadeOutDown');
  setTimeout(function(){
    $("#mainIntro").removeClass('animated fadeOutDown');
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
    $("#topOfPage").removeClass('fadeOut');
    $("#mainForm").removeClass('fadeOut');
    $("#finalScreenCol1").removeClass('hidden');
    $("#finalScreenCol1").addClass('visible animated bounceInUp');
    $("#finalScreen").removeClass('hidden');
    $("#finalScreen").addClass('visible animated bounceInUp');
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
