function myFunction() {
    const protagonists = ["El Hijo Del Santo", "Headbanger Mosh", "Akebono", "The Rock", "Headbanger Thrasher",
     "Mideon", "Mistico", "Homero Simpson", "Kane", "Wally Yamaguchi", "Pete Gas", "Joey Abs", "Flae Blazer",
    "The Shockmaster", "The Black Scorpion", "Burt Reynolds", "Sade", "Jerry Seinfeld", "Blackheart Destruction",
    "Blackheart Apocalypse", "The Great Kabuki", "Big John Studd", "JC Denton", "The Computer Man"]

    const titles = [" III Esq.", " the Damned", " 2: Electric Boogaloo", " of Hell", " loves to code!", " HATES to code...",
" thought they were going to Disneyland", " wants to have lunch"]

    const sentences = ["This was to be the start of a terrible tale.", "Nobody could figure out what their motive was.",
    "How a humble town encountered this mysterious individual continues to mystify those who hear of the legend."]

    const sentences2 = ["Centuries may pass by, but still the myth survives.", "We begin our story at where else but the Post Office.",
"A warning for those who are easily frightened: You will not be frightened."]

     var protagonist = Math.floor(Math.random() * protagonists.length);
     var title = Math.floor(Math.random() * titles.length)
     var sentence = Math.floor(Math.random() * sentences.length)
     var sentence2 = Math.floor(Math.random() * sentences2.length)

     let goodguy = protagonists[protagonist]
     let namer = titles[title]
     let words = sentences[sentence]
     let words2 = sentences2[sentence2]
     
     document.getElementById("demo").innerHTML = goodguy + namer

     document.getElementById("demo2").innerHTML = words

     document.getElementById("demo3").innerHTML = words2
}