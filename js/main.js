var SearchIn =document.querySelector('.input')
var OneRoom =document.querySelector('.One')
var TwoRoom =document.querySelector('.Two')
function ClickKitty(){
 switch( Math.floor( SearchIn.value / 10)){
    case 0: OneRoom.textContent = " "
    break
    case 1: OneRoom.textContent = "o'n"
    break
    case 2: OneRoom.textContent = "yigirma"
    break
    case 3: OneRoom.textContent = "o'ttiz"
    break
    case 4: OneRoom.textContent = "qirq"
    break
    case 5: OneRoom.textContent = "ellik"
    break
    case 6: OneRoom.textContent = "oltmish"
    break
    case 7: OneRoom.textContent = "yetmish"
    break
    case 8: OneRoom.textContent = "sakson"
    break
    case 9: OneRoom.textContent = "to'xson"
    break
    default:
        OneRoom.textContent = "Error"
 }
 switch( SearchIn.value % 10){
    case 0: TwoRoom.textContent = ""
    break
    case 1: TwoRoom.textContent = "bir"
    break
    case 2: TwoRoom.textContent = "ikki"
    break
    case 3: TwoRoom.textContent = "uch"
    break
    case 4: TwoRoom.textContent = "to'rt"
    break
    case 5: TwoRoom.textContent = "besh"
    break
    case 6: TwoRoom.textContent = "olti"
    break
    case 7: TwoRoom.textContent = "yetti"
    break
    case 8: TwoRoom.textContent = "sakkiz"
    break
    case 9: TwoRoom.textContent = "to'qqiz"
    break
    default:
        TwoRoom.textContent = ">:("
 }
 OneRoom.style.fontFamily ='Arial';
 TwoRoom.style.fontFamily ='Arial';
}