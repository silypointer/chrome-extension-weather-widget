jQuery(document).ready(function() {
    
    jQuery('.result').hide();
    //jQuery('.note').hide();
    jQuery('.note_desc').hide();
    jQuery('.note').click(function () {
        jQuery('.note_desc').fadeToggle();
    });

    jQuery('#search').click(function() {
        var city = jQuery('#city').val();
        var numbers_present = /\d/.test(city);
        if(city.length < 3 || numbers_present === true) {
            alert("Please add proper city for getting current weather forcast.");
            return false;
        }
        
        // var url = 'http://rohanpneo-eval-test.apigee.net/weatherapi?city='+city;
        var url = 'http://rohanpneo-eval-prod.apigee.net/weatherapi?city='+city;

        jQuery.getJSON(url, function(json_data){
        if (json_data.success == false) {
            alert(json_data.error.info);
            return false;
        } else {
            var localTime = json_data.location.localtime;
            var currentTemp = json_data.current.temperature;
            var currentDesc = json_data.current.weather_descriptions;
            
            jQuery('#search_form').hide();
            jQuery('.note_desc').hide();
            jQuery('.note').hide();
            jQuery('.result').show();
            
            jQuery('.city').html(city);
            jQuery('.result .localTime').html(localTime);
            jQuery('.result .currentTemp').html(`<p>`+currentTemp+`&#8451;</p>`);
            jQuery('.result .currentDesc').html(currentDesc);
        }
            
        });
    return false;

    });
});