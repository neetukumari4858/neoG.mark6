var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");

var serverURl="	https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(text){
    return serverURl+ "?" + "text=" + text
}
function errorHandler(error){
    console.log("error ocurred",error);
    alert("something wrong with server! try again after some time")

}
function clickHandler(){
    console.log("clicked!")
    var inputText=txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedText=json.contents.translated;
        outputdiv.innerText=translatedText;
    })
    .catch(errorHandler)
        
};
btnTranslate.addEventListener("click",clickHandler)


    
