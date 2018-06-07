$('#getWeatherBtn').click(()=>{
    $('.chart-container').hide();
    var cityname=$('#cityname').val();
    $.ajax({
        type: 'GET',
        url:`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=572e01f494d5c8e9baf8f328020a7d48`,
        success:(data)=>{
                $('#currentTemperature').html(parseInt(data.main.temp-270)),
                $('#currentHumidity').html(data.main.humidity),
                $('#currentPressure').html(data.main.pressure)
        },
    });
});
$('#getForecatBtn').click(()=>{
   $('.table').hide();
    var cityname=$('#cityname').val();
    $.ajax({
        type: 'GET',
        url: `http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=572e01f494d5c8e9baf8f328020a7d48`,
        success:(data)=>{
            

        },
    });
});