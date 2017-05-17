// Ready function loads when the page is loaded or refreshed
$(document).ready(function(){
  // amountofPizza constructor used for storing each individual pizza
  var newAmountOfPizzas = new amountOfPizza();

  // Function that displays the main title of the program
  // Will display the restaurant's name, a choice of 3 premade
  // pizzas, and an option to create your own pizza.
  showMainTitle();

  // Click function used when you click on 'Click here to make a custom pizza'
  $("#entryButton").click(function(){

    // Function that displays the MAIN site where you can
    // create a custom pizza
    showMainSite();
  });

  // Click function used when you click on 'Make another pizza?'
  $("#final").click(function(){

    //A different function that displays the main title
    // PLEASENOTE!!!!! from this point in the app, I couldn't
    // take the variables into the 'showMainTitle' without
    // bugs so I had to create a new function
    showTitleAgain();
  });

  // Click function that automatically makes a cheese pizza
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
    $("#PizzaTotal").empty();
    hideMainSite();
    $("#PizzaTotal").append(newAmountOfPizzas.totalPrice);
  });

  // Click function that automatically makes a pepperoni pizza
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
    $("#PizzaTotal").empty();
    hideMainSite();
    $("#PizzaTotal").append(newAmountOfPizzas.totalPrice);
  });

  // Click function that automatically makes a meat lovers pizza
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
    $("#PizzaTotal").empty();
    hideMainSite();
    $("#PizzaTotal").append(newAmountOfPizzas.totalPrice);
  });

  // Click function that hides everything on screen
  // and displays address and contact information
  $("#address").click(function(){
    $("#finalScreen").removeClass('visible');
    $("#finalScreen").addClass('fadeOutDown hidden');
    setTimeout(function(){
      $("#orderAddress").removeClass('hidden');
      $("#orderAddress").addClass('animated bounceInUp')
    }, 700);
  })

  //submit form used in taking user input for custom made pizzas
  $("form#mainForm").submit(function(event){
    event.preventDefault();

    // Constructs a new pizza everytime a form is submitted
    var newPizza = new Pizza();

    var pizzaSize = $("input:radio[name=size]:checked").val();
    newPizza.addSize(newPizza, pizzaSize);

    //Method used to count toppings

    newPizza.addToppings(newPizza, pizzaSize);

    //Method used to count toppings and raise the price based
    //on certain toppings
    var toppings = $("input:checkbox[name = toppings]:checked").val();
    newPizza.getPrice(newPizza, toppings);

    //Method used in storing each pizza into another constructor and
    //adding up the total price of every pizza together
    newAmountOfPizzas.getTotalPrice(newAmountOfPizzas, newPizza);

    // function that resets every input value
    // var resetFields = function(){
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
    // };

    // function that hides the custom pizza screen
    // and displays a menu asking if you would like to make
    // another pizza
    hideMainSite();

    // Displays the total price of the pizzas to the screen
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

amountOfPizza.prototype.showOrder = function(newAmountOfPizzas){
return this.totalPrice;
}

Pizza.prototype.addSize = function(newPizza, pizzaSize){
  newPizza.size = pizzaSize;
  return newPizza;
}

Pizza.prototype.addToppings = function(newPizza, toppings){
  $(toppings).each(function(){
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
