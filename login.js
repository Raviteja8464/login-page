let errtextele = document.getElementById("errtextMsg");
let errpassele = document.getElementById("errpassMsg");
let textele = document.getElementById("inputtextId")
let passele = document.getElementById("inputpassId")
let processEle = document.getElementById("processId")
let bgEle = document.getElementById("jscontainer")
let btnele = document.getElementById("btnId");

textele.addEventListener("blur",function(){
    errtextele.textContent = "equired"
})
/*passele.addEventListener("blur",function(){
    errpassele.textContent = "equired"
})*/

btnele.onclick = function(){
    
    //let textelefg = textele.value.length;

    if (textele.value === ""){
        errtextele.textContent = "*Required"
        //processEle.textContent = "";
    }
    else if (passele.value === "") {
           errpassele.textContent = "*Required"
           errtextele.textContent = ""
           //processEle.textContent=""
    }
    /*else if (textelefg <= 5){
        processEle.textContent = "Password is too short"
        processEle.style.color = "red";
        errtextele.textContent = ""
         errpassele.textContent = `Your password is only ${textelefg} letters`

    }*/
    else {
         processEle.textContent = `Hii ${textele.value}, Verifing your account`
         bgEle.classList.add("container2")
         errtextele.textContent = ""
         errpassele.textContent = textelefg
         
    }
    
}