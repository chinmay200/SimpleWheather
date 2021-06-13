// window.addEventListener('load' , () =>{
//     let lon;
//     let lat;
//     let api;
//     var tempnum = document.getElementById('tempnum');
//     var desc = document.getElementById('description');
//     var loc = document.getElementById('location');
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition((position) =>{
//             lon = position.coords.longitude;
//             lat = position.coords.latitude;
//             api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b86fd8f7708187a762619d1377a88ec7`;
//             fetch(api)
//             .then(response =>{
//                 return response.json();
//             })
//             .then((data) =>{
//                 console.log(data);
//                 const {temp} = data.main;
//                 tempnum.textContent = temp + ' \'c';
//                 const {description} = data.weather[0];
//                 desc.textContent = description;
//                 console.log(data.name);
//                 loc.textContent = data.name;
//             })
//         })
//     }
//     else{
//         console.log("unable");
//     }
// })
$(function () {
    let lon;
    let lat;
    let api;
    $(window).on('load' , ()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(pos =>{
                lon = pos.coords.longitude;
                lat = pos.coords.latitude;
                api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b86fd8f7708187a762619d1377a88ec7`;
                fetch(api)
                .then(res=>{
                    return res.json();
                })
                .then(data =>{
                    let tempnum = data.main.temp;
                    $('.temp').append('<h2 id = "tempnum">' +tempnum+ ' '+ '\'c</h2>');
                    let desc = data.weather[0].description;
                    $('.description').append('<h2 id="description">' + desc + '</h2>');
                    let loc = data.name;
                    $('.city-icon').append('<h1 id = "location">' + loc + '</h1>');
                    console.log(data);
                    let icon = data.weather[0].id;
                    if(icon == 800){
                        $('.city-icon').append('<img src="./images/sun.png" alt="non" srcset="" class="sun">');
                    }
                    else if(icon >= 200 && icon <=232){
                        $('.city-icon').append('<img src="./images/storm.png" alt="non" srcset="" class="cloud">');
                    }
                    else if(icon >= 300 && icon <=321){
                        $('.city-icon').append('<img src="./images/drizzle.png" alt="non" srcset="" class="clamcloud">');
                    }
                    else if(icon >= 500 && icon <=531){
                        $('.city-icon').append('<img src="./images/rain.png" alt="non" srcset="" class="cloud">');
                    }
                    else if(icon >= 600 && icon <= 622){
                        $('.city-icon').append('<img src="./images/snow.png" alt="non" srcset="" class="sun">');
                    }
                    else if(icon >= 700 && icon <= 781){
                        $('.city-icon').append('<img src="./images/fog.png" alt="non" srcset="" class="calmcloud">');
                    }
                    else{
                        $('.city-icon').append('<img src="./images/cloud.png" alt="non" srcset="" class="sun">');
                    }
                })
            })
        }
    })
})
