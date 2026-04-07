async function askAI() {
    const userInput = document.getElementById('userInput').value;
    const responseText = document.getElementById('response');
    
    // अपनी API Key यहाँ डालें
    const API_KEY = "AIzaSyCyE9fN9A5VQ8jN6DBTKuTTk0rwhl1MGzw"; 

    if (!userInput) {
        responseText.innerText = "कृपया कुछ लिखें!";
        return;
    }

    responseText.innerText = "सोच रहा हूँ... 🤔";

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: userInput }] }]
            })
        });

        const data = await response.json();
        const aiReply = data.candidates.content.parts.text;
        responseText.innerText = aiReply;

    } catch (error) {
        responseText.innerText = "माफ़ कीजिये, कुछ गड़बड़ हो गई।";
        console.error(error);
    }
}