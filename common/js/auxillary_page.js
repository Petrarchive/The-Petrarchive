
function toggle_visibility(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}

$(document).ready(function() {
    applyStyling()
})

function applyStyling() {
    var headerHeight = $('#sticky-header').height()
    console.log(headerHeight)

    $('body > main').css('margin-top', headerHeight)
}