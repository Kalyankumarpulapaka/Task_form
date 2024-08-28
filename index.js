function myfun(event){
    event.preventDefault();
    var Firstname= document.getElementById("Firstname").value;
    console.log(Firstname)
    var lastname= document.getElementById("lastname").value;
    console.log(lastname)
    var address= document.getElementById("address").value;
    console.log(address)
    var selectedGender = document.querySelector('input[name="gender"]:checked');
    if (selectedGender) {
        selectedGender = selectedGender.value; // Accessing the value property
        console.log(selectedGender);
    } else {
        console.log("No gender selected");
    }

    var pincode= document.getElementById("pincode").value;
    console.log(pincode)

    var foodSelect = document.getElementById("food");
    var selectedFoods = [];
    for (var i = 0; i < foodSelect.options.length; i++) {
        if (foodSelect.options[i].selected) {
            selectedFoods.push(foodSelect.options[i].text); // Using text instead of value
        }
    }
    console.log(selectedFoods);

    var State= document.getElementById("State").value;
    console.log(State)
    var Country= document.getElementById("Country").value;
    console.log(Country)

    var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];

    var createrow=document.createElement("tr");
    var number=1;
    var datanew=[number,Firstname,lastname,address,selectedGender,pincode,selectedFoods.join(", "),State,Country];
    for(var i=0;i<datanew.length;i++){
        var kalyan=document.createElement("td");
        kalyan.innerHTML=datanew[i];
        createrow.appendChild(kalyan);
           number=number+1;

    }
    table.appendChild(createrow);
}
