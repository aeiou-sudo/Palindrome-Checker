const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');

const checkForPalindrome = input => {
    const originalInput = input;
    // Cache DOM references
    if(input !== "") {
        // Process the input text
        const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
        const isPalindrome = lowerCaseStr.split("").reverse().join("") === lowerCaseStr;
        const palindromeResult = `${originalInput} is ${isPalindrome ? "" : "not "}a palindrome`;
        
        const newDiv = document.getElementById("result");
        newDiv.style.display = "block";
        newDiv.textContent = palindromeResult;
    } else {
        alert('Please input a value');
        return;
    }

}
checkPalindromeBtn.addEventListener('click', () => {
    checkForPalindrome(userInput.value);
    userInput.value = '';
});
  
userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkForPalindrome(userInput.value);
        userInput.value = '';
    }
});