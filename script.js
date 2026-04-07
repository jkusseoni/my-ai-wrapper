function askAI() {
    const input = document.getElementById('userInput').value;
    const response = document.getElementById('response');
    
    if (input) {
        response.innerText = "आपने पूछा: " + input + "\n(AI अभी कनेक्ट होना बाकी है...)";
    } else {
        response.innerText = "कृपया कुछ लिखें!";
    }
}