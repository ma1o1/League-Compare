window.addEventListener('load', function() {
        
        document.querySelector("#su_button").addEventListener("click",dobijson);
        
});


var dobijson=function(event){
            var rawjson = httpGet("https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/Panda%20and%20Box?api_key=cef0d580-375a-4dd3-b690-8790fb75af20");
    		console.log(rawjson);
    		
    		var obj = JSON.parse(rawjson);
    		document.querySelector("#json").innerHTML = obj.pandaandbox.name +" " + obj.pandaandbox.summonerLevel;
        }
        
function httpGet(theUrl)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }