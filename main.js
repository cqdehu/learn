$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "getclass.php",
        data: {
            name: "Abel"
        },
        success: function (response) {
            if (response == "success") {
                console.log(":D")
            } else {
                console.log(response)
            }
        }
    })
})


var hetfo = $('#hetfo')

var m3 = $('#m3')

//var m3 = document.createElement('div')
//m3.className = "m-3 "

var hetfoRow = document.createElement('div')
hetfoRow.className = "row justify-content-center "

var hetfoCol = document.createElement('div')
hetfoCol.className = "col bg-light m-2 p-0 rounded "

var hetfoP = document.createElement('p')
hetfoP.className = "text-center TW m-0 py-3 px-2 "
hetfoP.innerHTML = "Hétfő"

m3.append(hetfoRow)
hetfoRow.appendChild(hetfoCol)
hetfoCol.appendChild(hetfoP)


var hetfoClass1 = document.createElement('div')
hetfoClass1.className = "row justify-content-center "

var hetfoClass1Order = document.createElement('div')
hetfoClass1Order.className = "col-1 bg-light m-2 p-0 rounded col-vertical-middle "











