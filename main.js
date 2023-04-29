$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "getclass.php",
        data: {
            name: "Abel"
        },
        success: function (response) {
            if (response == "success") {
                alert(":D")
            } else {
                alert(response)
            }
        }
    })
})


var hetfo = $('hetfo')

var m3 = document.createElement('div')
m3.className = "m-3 "

var dayRow1 = document.createElement('div')
dayRow1.className = "row justify-content-center "

var dayCol1 = document.createElement('div')
dayCol1.className = "col bg-light m-2 p-0 rounded "

var dayP1 = document.createElement('p')
dayP1.className = "text-center TW m-0 py-3 px-2 "
dayP1.innerHTML = "Hétfő"


hetfo.appendChild(m3)
m3.appendChild(dayRow1)
dayRow1.appendChild(dayCol1)
dayCol1.appendChild(dayP1)






