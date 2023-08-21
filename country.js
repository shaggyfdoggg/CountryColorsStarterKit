class Country {
    constructor(name, lang, greeting, colors, image) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.image = image;
    }

    DisplayColors(){
        let colorNode = document.querySelector("#Color1");
        colorNode.style.backgroundColor = this.colors[0];
        let colorTwoNode = document.querySelector("#Color2");
        colorTwoNode.style.backgroundColor = this.colors[1];
        let colorThreeNode = document.querySelector("#Color3");
        colorThreeNode.style.backgroundColor = this.colors[2];
        let countryNameNode = document.querySelector("#CountryName");
        countryNameNode.innerText = this.name;
        let countryLanguageNode = document.querySelector("#OfficialLanguage");
        countryLanguageNode.innerText = this.lang;
        let greetingNode = document.querySelector("#HelloWorld");
        greetingNode.innerText = this.greeting;
        let imgNode = document.querySelector("#dog");
        imgNode.setAttribute("src", this.image);
        //document.querySelector("body").style.backgroundColor = this.colors[0];
    }

    // ChangeName(){
    //     let nameNode = document.querySelector("#CountryName");
    //     nameNode.innerText = this.name;
    //     document.querySelector("h2").appendChild(this.name);
    // }

}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQS3dAU92J60zkP2-HS5sC42rhZA8msV2vyQ&usqp=CAU");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYlehcYS8GcAVcdQ7CxXzJcEbaySRcUmx7w&usqp=CAU");
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK-dUDi6iP1tTEaNutufQjltUKuzZ2RyUung&usqp=CAU");


function SwitchCountry() {
    let input = document.querySelector("#CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        country.DisplayColors();
    }
    else if (input === "Mexico") {
        country = mexico;
        country.DisplayColors();
    }
    else if (input === "Algeria") {
        country = algeria;
        country.DisplayColors();
    }
}


