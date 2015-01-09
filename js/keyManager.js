$(document).ready(function () {
    $('body').keydown(function(e){
        if (e.keyCode == 39) {
            if (isInitiator) {
                incrA_x = 0.05;
            } else {
                incrB_x = 0.05;
            }
        } else if (e.keyCode == 37) {
            if (isInitiator) {
                incrA_x = -0.05;
            } else {
                incrB_x = -0.05;
            }
        }
    });
    $('body').keyup(function(e){
        if (e.keyCode == 37 || e.keyCode == 39) {
            if (isInitiator) {
                incrA_x = 0.0;
            } else {
                incrB_x = 0.0;
            }
        }
    });
});
