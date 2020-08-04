//Hide notify-section contents
function hide() {
    document.getElementById("notifyMatch").style.display = "none";
    document.getElementById("notifyUnmatch").style.display = "none";
}
hide();

//Pin Generator function-- Generate a four digit random number
function pinGenerator() {
    let pinNumber = parseInt(Math.random() * 10000);
    //if condition to prevent 4 digit numbers with zeros at the beginning and making them as 3 digit or 2 digit number
    //if condition to bring pure 4 digit Numbers
    if (pinNumber > 999) {
        document.getElementById("pinnumberGenerate").value = pinNumber;
    }
    document.getElementById("pinNumberInput").value = "";
    hide();
}

//Input Number Function
function inputNumber(number) {
    const beforeNumber = document.getElementById("pinNumberInput").value;
    const afterNumber = beforeNumber + number;
    //if conditin called to limit the number of digits to 4.
    if (afterNumber.length < 5) {
        document.getElementById("pinNumberInput").value = afterNumber;
    }
}

//ClearAllNumber Function-- This will clear all the digits
function clearAllNumber() {
    document.getElementById("pinNumberInput").value = '';
}

//backspaceNumber Function-- This will clear the single last digit
function backspaceNumber() {
    const presentValue = document.getElementById("pinNumberInput").value;
    if (presentValue != '') {
        document.getElementById("pinNumberInput").value = presentValue.slice(0, -1);
    }
}

//Matching pin numbers -- MatchORNot function
function matchOrNot() {
    const pinGenerator = document.getElementById("pinnumberGenerate").value;
    const inputPin = document.getElementById("pinNumberInput").value;

    if (pinGenerator == inputPin) {
        document.getElementById("notifyMatch").style.display = "block";
        document.getElementById("notifyUnmatch").style.display = "none";
    }
    else {
        document.getElementById("notifyUnmatch").style.display = "block";
        document.getElementById("notifyMatch").style.display = "none";
    }
}

//ActionCount function
function actionCountdown() {
    const actionCount = parseInt(document.getElementById("actionCount").innerText);
    const actionLeft = document.getElementById("actionCount").innerText = actionCount - 1;
    if (actionLeft < 1) {
        document.getElementById("actionCount").innerText = 0;
        document.getElementById("submitBtn").style.display = "none";
        
    }
    }



//Try Again-- returnToTry function
function returnToTry() {
    actionCountdown();
    document.getElementById("notifyUnmatch").style.display = "none";
    document.getElementById("pinNumberInput").value = "";

}