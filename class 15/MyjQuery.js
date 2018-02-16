 console.log("hello");




//____________________________________ CALCULATOR____________________//


 $("#btn").click(function(){
 	var num1 = $("#num1").val();
 	var num2 = $("#num2").val();
 	var ops = $("#ops").val();

 	if(ops == "Add") {
 		var result = parseFloat(num1) + parseFloat(num2);
 	}

 	if(ops == "Subtract") {
 		var result = parseInt(num1) - parseInt(num2); // parse Int for whole number
 	}

 	if(ops == "Divide") {
 		var result = parseFloat(num1) / parseFloat(num2);   // to see exact result instead of whole number
 	}

 	if(ops == "Multiply") {
 		var result = parseFloat(num1) * parseFloat(num2);   // float for exact result
 	}

 	result = result.toFixed(2);  // two numbers after dot



 	$("#result").html(result);
 })


//____________________________________ PIZZA ONLINE ____________________//



$("#btn2").click(function(){

	if ($("#cheese").is(":checked")) {
		$("#result2").html("You ordered Cheese");
	}
	if  ($("#pepperoni").is(":checked")) {
		$("#result2").append("<br> You ordered Pepperoni"); // append to show two results together
	}
	if  ($("#deliver").is(":checked")) {
		$("#result2").append("<br> Your order will be delivered"); // append to show two results together
	}
})



//____________________________________ WORKSHOP ____________________//








$("#btn3").click(function(){

let customer = $("#customer").val(); 
let szs = $("#szs").val(); 
let qty = $("#qty").val(); 
let tp = $("input[customer=toppings]:checked").attr("id");
let pz = {
            small: 7.99,
            medium: 9.99,
            large: 11.99
        }
$("#result3").html("<br>Thanks " + customer + ", <br> Your order is "+ qty + " " + szs + " pizza(s). <br> Cost: $" + parseFloat(pz[szs] * parseInt(qty)));
            if($("#dev").is(":checked")){
                $("#result3").append("<br>Order will be delivered");
            };
            let toppings = {
                ch: "cheese",
                pep: "pepperoni"
            }
            $("#result3").append("<br> The topping is " + toppings[tp]);

            })	





//     $("#btn").click(function(){
//         let name = $("#name").val();
//         let size = $("#size").val();
//         let qty = $("#qty").val();
//         let top = $("input[name=topping]:checked").attr("id");
//         let pizza = {
//             small: 7.99,
//             medium: 9.99,
//             large: 11.99
//         }
//         $("#order").html("<br>Thanks " + name + ", <br> Your order is "+ qty + " " + size + " pizza. <br> Cost: $" + parseFloat(pizza[size] * parseInt(qty)));
//             if($("#deliver").is(":checked")){
//                 $("#order").append("<br>Order will be delivered");
//             };
//             let topping = {
//                 cheese: "cheese",
//                 pepperoni: "pepperoni"
//             }
//             $("#order").append("<br> The topping is " + topping[top]);
//     })
// </script>






    


// inputbox  element.val()
// selectbox  element.val()
// checkbox (element).is(":checked")
// radio (element).is(":checked")



