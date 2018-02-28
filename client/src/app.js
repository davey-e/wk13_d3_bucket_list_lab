const app = function(){
    const url = "https://restcountries.eu/rest/v2/all";

    makeRequest(url, requestComplete);
}

const makeRequest = function(url, callback){
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', callback);
    request.send();
}

const requestComplete = function(){
    if(this.status !== 200){
        return;
    }
    const jsonString = this.responseText;
    const countries = JSON.parse(jsonString);
    console.log(countries);
    
}



document.addEventListener('DOMContentLoaded', app);