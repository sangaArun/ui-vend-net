$(function() {

    $('#side-menu').metisMenu();

});
$(function() {

      $("#menu-toggle").click(function(e) {
            console.log('toggle');
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
});
