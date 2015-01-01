$(document).ready(function () {
    $('body').keydown(function(e){
        if (e.keyCode == 39) {
            if (isInitiator) {
                incrA_x = 0.01;
            } else {
                incrB_x = 0.01;
            }
        } else if (e.keyCode == 37) {
            if (isInitiator) {
                incrA_x = -0.01;
            } else {
                incrB_x = -0.01;
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
