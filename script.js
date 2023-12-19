var button = document.getElementById("submit");
// console.log(button);
button.addEventListener("click",orders);

// Function to perform action
function orders()
{
    // Get form input values
    var first_name = document.getElementById("first-name").value;
    var last_name = document.getElementById("last-name").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;

    var female_rad = document.getElementById("female").value;
    var male_rad = document.getElementById("male").value;

    if (male_rad!="") {
        var gender="Male";
    } else {
        var gender ="Female";
    } 
    var food = document.getElementsByClassName("cuisines");
    var checkedValues =[];
    // console.log(food.length);
    for(i=0;i<food.length;i++)
    {
        if(food[i].checked)
        {
            checkedValues.push(food[i].value);
        }
    }
checkedValues = checkedValues.join(",");

    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;


    // Get table and creating the new rows
    var table= document.getElementById("list_table");
    var insert_rows= table.insertRow(table.rows.length);

    // Inserting the row cells in new rows
    var cell_1=insert_rows.insertCell(0);
    var cell_2=insert_rows.insertCell(1);
    var cell_3=insert_rows.insertCell(2);
    var cell_4=insert_rows.insertCell(3);
    var cell_5=insert_rows.insertCell(4);
    var cell_6=insert_rows.insertCell(5);
    var cell_7=insert_rows.insertCell(6);
    var cell_8=insert_rows.insertCell(7);

    // Setting values in the cells
    cell_1.innerText=first_name;
    cell_2.innerText=last_name;
    cell_3.innerText=address;
    cell_4.innerText=pincode;
    cell_5.innerText=gender;
    cell_6.innerText=checkedValues;
    cell_7.innerText=state;
    cell_8.innerText=country;

    // Clear the form field after submittion
    document.getElementById("form").reset();
}