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
        
        // चेक करें कि AI ने जवाब दिया है या नहीं
        if (data.candidates && data.candidates.content.parts.text) {
            responseText.innerText = data.candidates.content.parts.text;
        } else {
            responseText.innerText = "माफ़ कीजिये, AI अभी जवाब नहीं दे पा रहा।";
        }

    } catch (error) {
        responseText.innerText = "माफ़ कीजिये, नेटवर्क या की (Key) में गड़बड़ है।";
        console.error(error);
    }
}