$(document).ready(function() {
    var dropdown = document.getElementById('dropdown');
    var today = new Date();
    for (var i = 0; i <= 7; i++) {
        var option = document.createElement("option");
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate() - i);
        option.text = date;
        dropdown.add(option);
    }
});