import{a as d,i as m}from"./assets/vendor-CLWPeEjA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function u(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=u(e);fetch(e.href,n)}})();const l="f1fbcd3bf9d191b55c2bb9d6bb99db04",p=d.create({baseURL:"https://api.openweathermap.org/data/2.5/weather"});async function f(){const t={appid:l,q:i,units:"metric"};return(await p.get("",{params:t})).data}function h(t){switch(r.weatherContainer.classList.add("show"),r.cityName.innerHTML=t.name,r.temperature.innerHTML=Math.round(t.main.temp)+"°C",r.humidity.innerHTML=t.main.humidity+"%",r.windSpeed.innerHTML=t.wind.speed+" Km/h",t.weather[0].main){case"Clouds":r.weatherIcon.src="./src/img/clouds.png";break;case"Drizzle":r.weatherIcon.src="./img/drizzle.png";break;case"Mist":r.weatherIcon.src="./img/mist.png";break;case"Snow":r.weatherIcon.src="./img/snow.png";break;case"Rain":r.weatherIcon.src="./img/rain.png";break;default:r.weatherIcon.src="./img/clear.png"}}const r={form:document.querySelector("form"),searchInput:document.getElementById("query"),searchBtn:document.querySelector("button"),weatherContainer:document.querySelector(".weather-container"),weatherIcon:document.querySelector(".weather-icon"),weatherDescription:document.querySelector(".description"),cityName:document.querySelector(".city"),temperature:document.querySelector(".temperature"),humidity:document.querySelector(".humidity"),windSpeed:document.querySelector(".wind")};let i="";r.form.addEventListener("submit",y);async function y(t){if(t.preventDefault(),i=r.searchInput.value.trim(),i!=="")try{const o=await f(i);h(o)}catch(o){console.log(o),a("Invalid city name")}else a("Empty field!");r.form.reset()}function a(t){m.error({title:"Error",message:t,backgroundColor:"red",position:"topCenter",timeout:2e3,maxWidth:"300px"})}
//# sourceMappingURL=index.js.map
