$(document).ready(function(){
  $("form#mainForm").submit(function(event){
    event.preventDefault();
    debugger;

    var newPizza = new Pizza();

    $("input:checkbox[name = toppings]:checked").each(function(){
      newPizza.toppings.push($(this).val());
    });
    console.log(newPizza.toppings);
  });
});

function Pizza(){
  this.toppings = [];
  this.size = "";
  this.price = "";
}
