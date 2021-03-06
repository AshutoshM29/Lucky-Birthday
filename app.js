const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");
const privacyButton = document.querySelector("#cross-btn");
const privacyMessage = document.querySelector("#privacy-message");

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.innerText = "Your birthday is lucky đ";
    } else {
        outputBox.innerText = "Your birthday is not lucky âšī¸";
    }
}


function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob)
    compareValues(sum, luckyNumber.value)
    else
    outputBox.innerText="Please enter both the fields đ "
}


function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

checkNumberButton.addEventListener("click", checkBirthDateIsLucky);

privacyButton.addEventListener("click", () => {
    privacyMessage.style.display="none";
});