

const quoteWarmUp =() =>{
    fetch("/api/quotes",{
        method: "GET",
        cache: "reload",
        // body: JSON.stringify({ quotes }),
      headers: { "Content-Type": "application/json" },
    })
        .then(function(response){
            return response.json();
    }).then((data)=>{
        let quoteSpace=document.querySelector(".quote-text");
        console.log(data);
        const randomIndex=Math.floor(Math.random()*data.length);

        const randomQuote=data[randomIndex];
        console.log(randomQuote);

        quoteSpace.textContent= JSON.stringify(randomQuote);
    });
}

quoteWarmUp();

