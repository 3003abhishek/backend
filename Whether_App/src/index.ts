let findCity=()=>{
    let city:HTMLInputElement|null=document.getElementById("city") as HTMLInputElement;

    console.log(city.value);
    getdata(city.value);
}

async function getdata(city:string|null){
    

    let res:Response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=580158ec6bb51e45d6c2306abc5c72a2`);

    res=await res.json();
    console.log(res);

    append(res);
}


let append=(res)=>{
  let display:HTMLElement|null=document.getElementById("display") as HTMLElement;
  display.innerText="";

  let h1:HTMLElement=document.createElement("h1");
  h1.innerText=res.weather[0].description;

  display.append(h1);

}




document.getElementById("btn")?.addEventListener("click",findCity);