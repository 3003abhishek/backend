"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
let findCity = () => {
    let city = document.getElementById("city");
    console.log(city.value);
    getdata(city.value);
};
function getdata(city) {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=580158ec6bb51e45d6c2306abc5c72a2`);
        res = yield res.json();
        console.log(res);
        append(res);
    });
}
let append = (res) => {
    let display = document.getElementById("display");
    display.innerText = "";
    let h1 = document.createElement("h1");
    h1.innerText = res.weather[0].description;
    display.append(h1);
};
(_a = document.getElementById("btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", findCity);
