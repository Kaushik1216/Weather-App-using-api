const submitBtn =document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('name');
const temp =document.getElementById('temp');
const datahide = document.querySelector('.middle_layer');

const resetBtn =document.getElementById('resetBtn')
const kaushik = document.getElementById('status');
const getInfo = async(event)=>{
    event.preventDefault();//to prevent uncessay refresh of page after click on submit button
   let cityval =cityName.value;//to get data which is written in field

    if(cityval==""){
        city_name.innerText =`Plz write the name of city before search`;
        datahide.classList.add('data_hide');
    }else{
        try {
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=c46ab9338547afa4b67e1c9c0da9cbdb`;
        const response = await  fetch(url);//Asyc await only work in asyc function //wait till data not get
        const data = await response.json();
        const arrData = [data];
        city_name.innerText =`${arrData[0].name},${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;
        let temStatus = arrData[0].weather[0].main;
        if(temStatus == "Sunny"){
            kaushik.innerHTML="<i class='fa-solid fa-sun' style='color:#eccc68;'></i>";
         }else if(temStatus == "Clouds"){
            kaushik.innerHTML="<i class='fa-solid fa-cloud' style='color:#f1f2f6;'></i>";
         }else if(temStatus =="Rain"){
             kaushik.innerHTML="<i class='fa-solid fa-cloud-rain' style='color:#a4b0be;'></i>";
         }else{
            kaushik.innerHTML="<i class='fa-solid fa-cloud' style='color:#44c3de;'></i>";
         }
         datahide.classList.remove('data_hide');
    }catch{
            city_name.innerText =`Plz enter city name properly`; 
            datahide.classList.add('data_hide');
        }
    }
}
function reset(){
    datahide.classList.add('data_hide');
    city_name.innerText =`Get Output Here`;
}

resetBtn.addEventListener('click',reset);
submitBtn.addEventListener('click',getInfo);