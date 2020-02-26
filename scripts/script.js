let d = new Date();
let months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
let days = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
let hours = d.getHours();
let ampm = hours >= 12 ? 'PM' : 'AM';

let addZero = (i) => {
    if (i < 10) {
         i = "0" + i;
      }
      return i;
}

$( document ).ready(function() {
    $('.lagom-day').text(`${days[d.getDay()]}`);
    $('.data').text(`${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`);
    $('.circle-with-text').text(`${d.getHours()}:${addZero(d.getMinutes())} ${ampm}`);
    $('.lagom-day-with-month').text(`${d.getDate()} ${months[d.getMonth()] + 'я'}`);
    $('.yesterday-day').text(`Вчера было ${d.getDate() -1} ${months[d.getMonth()] + 'я'}`)
    
    let key = "1c4eebc8041b000468a36804b0102a67";
    let weatherApi = "http://api.openweathermap.org/data/2.5/weather?";
    let city;
   // temp conversions
    
    
    $.getJSON("http://ipinfo.io/json",function(location){
      city = location.city;
      console.log(city);
      url = weatherApi + "appid=" + key + "&q=" + city;
      console.log(url);
         $.getJSON(url,function(weather){
           
           $("#place").html("Погода в " + weather.name);
           
           $("#cond").html(weather.weather[0].main);
           
                                       
          $("#temp").html(Math.round(weather.main.temp - 273.15));
           
           let Conditions = weather.weather[0].id;
           let K = weather.main.temp;
          
           
           $("#wind").html(weather.wind.speed);
           
           temp = weather.main.temp
           
           
           $("#btn").on("click",function(){
              if (trueFalse == true){
                $("#temp").html(Math.round(fTemp));
                  trueFalse = false;
              }
             else {$("#temp").html(Math.round(cTemp));
             trueFalse = true;};
           
            
             
          });
         if ((600 > Conditions) && (Conditions > 199)){
               $("#pic").attr("src", "http://demo.sc.chinaz.com/Files/pic/icons/6256/k12.png")
             }
           else if ((800 > Conditions) && (Conditions > 599)){
             $("#pic").attr("src", "https://d30y9cdsu7xlg0.cloudfront.net/png/33414-200.png")
           }
           else if (Conditions > 800){
             $("#pic").attr("src", "http://iconshow.me/media/images/ui/ios7-icons/png/256/cloudy-outline.png")
           }
           else if (Conditions == 800){
             $("#pic").attr("src", "https://cdn4.iconfinder.com/data/icons/proglyphs-weather/512/Partly_Cloudy-512.png")
           };
       });
    });
});




$(document).keypress(function (e) {
    if (e.which === 13) {
        let inputValue = $('#search').val();
        window.location = "https://www.google.com/search?q=" + inputValue;
        
    }
});


