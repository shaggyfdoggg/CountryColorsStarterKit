class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
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
        //document.querySelector("body").style.backgroundColor = this.colors[0];
    }

    // ChangeName(){
    //     let nameNode = document.querySelector("#CountryName");
    //     nameNode.innerText = this.name;
    //     document.querySelector("h2").appendChild(this.name);
    // }

}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"]);


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


