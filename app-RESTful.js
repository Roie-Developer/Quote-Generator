async function getQuote() {
    const apiUrl =
        "http://api.forismatic.com/api/1.0/?method=getQuote&len=eng&format=json";
    try {
        const response = await fetch(apiUrl);
        const quote = await response.json();
        console.log(quote);
    } catch (error) {
        console.log("No quote found", error);
    }
}