$(document).ready(function(){
    $('body').fadeIn(500);
  });


//var m3 = document.createElement('div')
//m3.className = "m-3 "

function createDay(day) {
    var hetfoRow = document.createElement('div')
    hetfoRow.className = "row justify-content-center "
    hetfoRow.id = day + "s"

    var hetfoCol = document.createElement('div')
    hetfoCol.className = "col bg-light m-2 p-0 rounded "

    var hetfoP = document.createElement('p')
    hetfoP.className = "text-center TW m-0 py-3 px-2 "
    hetfoP.innerHTML = day

    if (hetfoRow.id.includes('Hétfős')) {
        $('#Hétfő').append(hetfoRow)
        hetfoRow.appendChild(hetfoCol)
        hetfoCol.appendChild(hetfoP)
    }

    if (hetfoRow.id.includes('Kedds')) {
        $('#Kedd').append(hetfoRow)
        hetfoRow.appendChild(hetfoCol)
        hetfoCol.appendChild(hetfoP)
    }

    if (hetfoRow.id.includes('Szerdas')) {
        $('#Szerda').append(hetfoRow)
        hetfoRow.appendChild(hetfoCol)
        hetfoCol.appendChild(hetfoP)
    }

    if (hetfoRow.id.includes('Csütörtöks')) {
        $('#Csütörtök').append(hetfoRow)
        hetfoRow.appendChild(hetfoCol)
        hetfoCol.appendChild(hetfoP)
    }

    if (hetfoRow.id.includes('Pénteks')) {
        $('#Péntek').append(hetfoRow)
        hetfoRow.appendChild(hetfoCol)
        hetfoCol.appendChild(hetfoP)
    }


}

let days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"]

for (let i = 0; i < days.length; i++) {
    createOneDay(days[i])
}

function createOneDay(day) {
    createDay(day)
}



function createClass(sorszam, tantargy, terem, nap) {
    // Create parent div element
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("row", "justify-content-center", nap);

    // Create child div element
    const childDiv = document.createElement("div");
    childDiv.classList.add("col", "bg-light", "m-2", "p-0", "rounded");
    childDiv.setAttribute("id", "");

    // Create inner row div element
    const innerRowDiv = document.createElement("div");
    innerRowDiv.classList.add("row");

    // Create first column of inner row div element
    const firstColumnDiv = document.createElement("div");
    firstColumnDiv.classList.add("col");

    // Create paragraph element for first column
    const firstColumnParagraph = document.createElement("p");
    firstColumnParagraph.classList.add("text-start", "TW", "m-0", "py-3", "px-2");
    firstColumnParagraph.textContent = tantargy;

    // Append paragraph element to first column div
    firstColumnDiv.appendChild(firstColumnParagraph);

    // Create second column of inner row div element
    const secondColumnDiv = document.createElement("div");
    secondColumnDiv.classList.add("col-3", "col-vertical-middle");

    // Create paragraph element for second column
    const secondColumnParagraph = document.createElement("p");
    secondColumnParagraph.classList.add("text-end", "TW", "m-0", "py-3", "px-2");
    secondColumnParagraph.textContent = terem+" ";

    // Create image element for level icon
    const levelIcon = document.createElement("img");
    levelIcon.classList.add("m-0", "p-0", "align-middle", "icon-link");
    levelIcon.setAttribute("src", "svg/level.svg");
    levelIcon.setAttribute("title", "level");

    // Append level icon to second column paragraph
    secondColumnParagraph.appendChild(levelIcon);

    // Append second column paragraph to second column div
    secondColumnDiv.appendChild(secondColumnParagraph);

    // Append first and second columns to inner row div
    innerRowDiv.appendChild(firstColumnDiv);
    innerRowDiv.appendChild(secondColumnDiv);

    // Append inner row div to child div
    childDiv.appendChild(innerRowDiv);

    // Create another child div element
    const childDiv2 = document.createElement("div");
    childDiv2.classList.add("col-1", "bg-light", "m-2", "p-0", "rounded", "col-vertical-middle");

    // Create paragraph element for second child div
    const childDiv2Paragraph = document.createElement("p");
    childDiv2Paragraph.classList.add("text-center", "TW", "m-0", "py-3", "px-2");
    childDiv2Paragraph.textContent = sorszam;

    // Append paragraph element to second child div
    childDiv2.appendChild(childDiv2Paragraph);

    // Append child divs to parent div
    parentDiv.appendChild(childDiv2);
    parentDiv.appendChild(childDiv);

    if (parentDiv.className.includes('Hétfő')) {
        $(parentDiv).insertAfter("#Hétfős");
    }

    if (parentDiv.className.includes('Kedd')) {
        $(parentDiv).insertAfter("#Kedds");
    }

    if (parentDiv.className.includes('Szerda')) {
        $(parentDiv).insertAfter("#Szerdas");
    }

    if (parentDiv.className.includes('Csütörtök')) {
        $(parentDiv).insertAfter("#Csütörtöks");
    }

    if (parentDiv.className.includes('Péntek')) {
        $(parentDiv).insertAfter("#Pénteks");
    }


}


$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "getclass.php",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {

                for (var i = 0; i < data.length; i++) {
                    var tantargy = data[i].tantargy
                    var terem = data[i].terem
                    var sorszam = data[i].sorszam
                    var nap = data[i].nap
                    createClass(sorszam, tantargy, terem, nap)


                }
            }
        }
    })
})


$('#Hétfős').on('dblclick', function () {
    $('.Kedd, .Szerda, .Csütörtök, .Péntek, #Kedds, #Szerdas, #Csütörtöks, #Pénteks').fadeOut(500);
    $('.Hétfő, #Hétfős').fadeIn(500)
});

$('#Hétfős').on('click', function () {
    $('.Kedd, .Szerda, .Csütörtök, .Péntek, #Kedds, #Szerdas, #Csütörtöks, #Pénteks').fadeIn(500);
});



$('#Kedds').on('dblclick', function () {
    $('.Hétfő, .Szerda, .Csütörtök, .Péntek, #Hétfős, #Szerdas, #Csütörtöks, #Pénteks').fadeOut(500);
});

$('#Kedds').on('click', function () {
    $('.Hétfő, .Szerda, .Csütörtök, .Péntek, #Hétfős, #Szerdas, #Csütörtöks, #Pénteks').fadeIn(500);
});















