$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "getclass.php",
        data: {
            name: "Ábel"
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

