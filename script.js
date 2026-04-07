async function askAI() {
    const userInput = document.getElementById('userInput').value;
    const responseText = document.getElementById('response');
    
    // अपनी API Key यहाँ "" के बीच में पेस्ट करें
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

        // अगर API की (Key) गलत है, तो यहाँ पता चल जाएगा
        if (data.error) {
            responseText.innerText = "API Error: " + data.error.message;
            return;
        }

        const aiReply = data.candidates.content.parts.text;
        responseText.innerText = aiReply;

    } catch (error) {
        responseText.innerText = "नेटवर्क या कोड में समस्या है।";
        console.error(error);
    }
}