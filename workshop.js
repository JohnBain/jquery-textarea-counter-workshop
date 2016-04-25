$('#the-textarea').keyup(function() {
    var string = $('#the-textarea').val()
    console.log(string.length);
    $( "span" ).text( 140 - string.length );
    if (string.length < 28)
        $("span").css('color', 'green');
    if (string.length > 28 && string.length < 126)
       $("span").css('color', 'gold');
    if (string.length > 126){
        $("span").css('color', 'red')
    }
});

