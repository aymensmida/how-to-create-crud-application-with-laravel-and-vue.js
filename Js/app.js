$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function CopyToClipboard(containerid) {
    let btn = $("#" + containerid).find("button");
    let icone = $(btn).find("i");
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().empty();
        window.getSelection().addRange(range);
        $(btn).attr('data-original-title', 'Copied').tooltip('show');
        $(icone).removeClass("fa fa-clipboard");
        $(icone).addClass("fa fa-clipboard-check");

    }
    setTimeout(function () {
        $(btn).attr('data-original-title', 'Copy to Clipboard').tooltip('hide');
        $(icone).removeClass("fa fa-clipboard-check");
        $(icone).addClass("fa fa-clipboard");
    }, 2000)
    document.execCommand("copy");
}