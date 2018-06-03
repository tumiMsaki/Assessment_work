window.onload = function() {
    var input = document.querySelector(".input");
    var main = document.querySelector(".main");
    var submit = document.querySelector(".submit");

    submit.addEventListener('click', function() {
        ajax({
            method: 'POST',
            url: 'http://localhost:8888/',
            data: {
                ID: input.value,
                remind: main.value,
            },
            success: function(data) {
                main.value = data;
            }


        });
    })
}