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
                alert(":C")
            }
        }
    })
})

