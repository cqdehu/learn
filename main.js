


var hetfo = $('#hetfo')

var m3 = $('#m3')

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

    m3.append(hetfoRow)
    hetfoRow.appendChild(hetfoCol)
    hetfoCol.appendChild(hetfoP)
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
    secondColumnParagraph.textContent = terem;

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

var clicked = {
    'Hétfős': false,
    'Kedds': false,
    'Szerdas': false,
    'Csütörtöks': false,
    'Pénteks': false
  };
  
  $('#Hétfős').on('dblclick', function() {
    $('.Kedd, .Szerda, .Csütörtök, .Péntek, #Kedds, #Szerdas, #Csütörtöks, #Pénteks').fadeOut(500, function() {
      $('#Hétfős').delay(500).fadeIn(500);
    });
    clicked['Hétfős'] = !clicked['Hétfős'];
    if (clicked['Hétfős']) {
      $('.Kedd, .Szerda, .Csütörtök, .Péntek, #Kedds, #Szerdas, #Csütörtöks, #Pénteks').hide();
    } else {
      $('.Kedd, .Szerda, .Csütörtök, .Péntek, #Kedds, #Szerdas, #Csütörtöks, #Pénteks').show();
    }
  });
  
  $('#Kedds').on('dblclick', function() {
    $('.Hétfős, .Szerda, .Csütörtök, .Péntek, #Hétfős, #Szerdas, #Csütörtöks, #Pénteks').fadeOut(500, function() {
      $('#Kedds').delay(500).fadeIn(500);
    });
    clicked['Kedds'] = !clicked['Kedds'];
    if (clicked['Kedds']) {
      $('.Hétfő, .Szerda, .Csütörtök, .Péntek, #Hétfős, #Szerdas, #Csütörtöks, #Pénteks').hide();
    } else {
      $('.Hétfő, .Szerda, .Csütörtök, .Péntek, #Hétfős, #Szerdas, #Csütörtöks, #Pénteks').show();
    }
  });
  
  $('#Szerdas').on('dblclick', function() {
    $('.Hétfős, .Kedd, .Csütörtök, .Péntek, #Hétfős, #Kedds, #Csütörtöks, #Pénteks').fadeOut(500, function() {
      $('#Szerdas').delay(500).fadeIn(500);
    });
    clicked['Szerdas'] = !clicked['Szerdas'];
    if (clicked['Szerdas']) {
      $('.Hétfő, .Kedd, .Csütörtök, .Péntek, #Hétfős, #Kedds, #Csütörtöks, #Pénteks').hide();
    } else {
      $('.Hétfő, .Kedd, .Csütörtök, .Péntek, #Hétfős, #Kedds, #Csütörtöks, #Pénteks').show();
    }
  });

  $('#Csütörtöks').on('dblclick', function() {
    $('.Hétfős, .Kedd, .Szerda, .Péntek, #Hétfős, #Kedds, #Szerdas, #Pénteks').fadeOut(500, function() {
    $('#Csütörtöks').delay(500).fadeIn(500);
    });
    clicked['Csütörtöks'] = !clicked['Csütörtöks'];
    if (clicked['Csütörtöks']) {
    $('.Hétfő, .Kedd, .Szerda, .Péntek, #Hétfős, #Kedds, #Szerdas, #Pénteks').hide();
    } else {
    $('.Hétfő, .Kedd, .Szerda, .Péntek, #Hétfős, #Kedds, #Szerdas, #Pénteks').show();
    }
    });
    
    $('#Pénteks').on('dblclick', function() {
    $('.Hétfős, .Kedd, .Szerda, .Csütörtöks, #Hétfős, #Kedds, #Szerdas, #Csütörtöks').fadeOut(500, function() {
    $('#Pénteks').delay(500).fadeIn(500);
    });
    clicked['Pénteks'] = !clicked['Pénteks'];
    if (clicked['Pénteks']) {
    $('.Hétfő, .Kedd, .Szerda, .Csütörtöks, #Hétfős, #Kedds, #Szerdas, #Csütörtöks').hide();
    } else {
    $('.Hétfő, .Kedd, .Szerda, .Csütörtöks, #Hétfős, #Kedds, #Szerdas, #Csütörtöks').show();
    }
    });














