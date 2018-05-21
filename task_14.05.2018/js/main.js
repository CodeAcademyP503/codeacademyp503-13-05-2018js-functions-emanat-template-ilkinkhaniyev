function changeUrl(text){
    document.location.href=text;
}

function addNumber(number){
    if(entryInput.value.length<=9){
        entryInput.value+=number;
        if(entryInput.value.length==10)
        forward.style.visibility="visible";
    }
}

function goForward(){

    if(entryInput.value=="0559256699"){
        alert("Name: Ilkin\nSurname: Khaniyev\nNumber: 0519256699");
    }else{
        alert("İstifadəçi tapılmadı")
    }
}

function clearInput(a){
    if(a==1){
        if(entryInput.value.length>0){
            var x = entryInput.value.substr(0, entryInput.value.length-1);
            entryInput.value = x;
        }
    }
    else{
        var b=entryInput.value.substr(0,0);
        entryInput.value = b;
    }
    if(entryInput.value.length !=8){
        forward.style.visibility="hidden";
    }
}
