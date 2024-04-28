function checkInput() {
    if(document.form4.username.value == "" || document.form4.phone.value == ""){
        alert("未入力の項目があります。");
        return false;
    }else{
        return true;
    }
}