// src https://docs.google.com/document/d/1LBbJzEIjOT-i6nI_tldOnHiPxX9R8qHJIjeSG8wdRnM/edit

/* Task1 Sukurti klasę Marsas. Sukurti statinį metodą pridetiPalydovą(), kuris sukuria naują Marsas objektą, turintį dvi savybes id: rand 100000 - 999999 ir pavadinimas: pagal taisyklę iškvietus pirmą kartą “Deimas”, antrą kartą “Fobas”. Metodas grąžina Marsas objektą. Metodą iškvietus trečią, ketvirtą ir t.t. kartus, metodas turi nekurti daugiau naujų Marsas objektų, o grąžintiatsitiktine tvarka, vieną iš dviejų jau sukurtų Marsas objektų.Tarkim penkis kartus iškvietus metodą, turime matyti tik du skirtingus objektus (žiūrim pagal id).*/

class Marsas {
  static palydovai = [];
  static pridetiPalydovą() {
    if (this.palydovai.length < 2) {
      const palydovas = new this();
      palydovas.id = this.rand(100000, 999999);
      palydovas.pavadinimas =
        this.palydovai.length % 2 === 0 ? "Deimas" : "Fobas";
      this.palydovai.push(palydovas);
      return palydovas;
    } else {
      return this.palydovai[this.rand(0, 1)];
    }
  }
  static rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

const palydovas1 = Marsas.pridetiPalydovą();
console.log(palydovas1);
const palydovas2 = Marsas.pridetiPalydovą();
console.log(palydovas2);
const palydovas3 = Marsas.pridetiPalydovą();
console.log(palydovas3);
const palydovas4 = Marsas.pridetiPalydovą();
console.log(palydovas4);
const palydovas5 = Marsas.pridetiPalydovą();
console.log(palydovas5);
console.log(Marsas.palydovai);

/* Task2 Sukurti klasę Puodelis. Puodelis turi dvi savybes: spalva ir ipilta. Sukurti statinį metodą gamintiPuodelius(), kuris pagamina du objektus su savybių reikšmėm: “raudonas”, “pilnas” ir “geltonas”, “tuščias”. Sukurti statinį metodą perpilti(), kuris “pilną” puodelį padaro tuščią ir atvirkščiai.Sukurti statinį metodus ispiltiViska(), kuris abu puodelius padaro “tuščius” ir ipiltiIAbu(), kuris abu puodelius padaro “pilnus”. Po šių metodų iškvietimo, metodas perpilti() turi veikti korektiškai ir logiškai (arba abu “tušti” arba abu “pilni”). */

class Puodelis {
  static puodeliai = [];
  static gamintiPuodelius() {
    if (this.puodeliai.length === 0) {
      this.puodeliai.push(new this("raudonas", "pilnas"));
      this.puodeliai.push(new this("geltonas", "tuščias"));
    }
    return this.puodeliai;
  }
  static perpilti() {
    this.check();
    const newCups = [];
    newCups.push(new this(this.puodeliai[0].spalva, this.puodeliai[1].ipilta));
    newCups.push(new this(this.puodeliai[1].spalva, this.puodeliai[0].ipilta));
    this.puodeliai = newCups;
    return this.puodeliai;
  }
  static ispiltiViska() {
    this.check();
    const newCups = [];
    newCups.push(new this(this.puodeliai[0].spalva, "tuščias"));
    newCups.push(new this(this.puodeliai[1].spalva, "tuščias"));
    this.puodeliai = newCups;
    return this.puodeliai;
  }
  static ipiltiIAbu() {
    this.check();
    const newCups = [];
    newCups.push(new this(this.puodeliai[0].spalva, "pilnas"));
    newCups.push(new this(this.puodeliai[1].spalva, "pilnas"));
    this.puodeliai = newCups;
    return this.puodeliai;
  }
  static check() {
    if (this.puodeliai.length !== 2) {
      this.reset();
    } else {
      this.puodeliai.forEach((cup) => {
        if (typeof cup !== "object") {
          console.log(typeof cup);
          this.reset();
        } else if (
          !cup.hasOwnProperty("spalva") ||
          !cup.hasOwnProperty("ipilta")
        ) {
          this.reset();
        }
      });
    }
  }
  static reset() {
    this.puodeliai.length = 0;
    this.gamintiPuodelius();
  }
  constructor(spalva, ipilta) {
    this.spalva = spalva;
    this.ipilta = ipilta;
  }
}

console.log(Puodelis.gamintiPuodelius());
console.log(Puodelis.perpilti());
console.log(Puodelis.ispiltiViska());
console.log(Puodelis.ipiltiIAbu());

/*Task3 Sukurti klasę Taskas, kuris turi savybę taskas rand 100-999. Sukurti klasę Taskai, kuris turi savybe taskai, kuri yra masyvas iš 10 Taskas objektų. Sukurkite išorinį kintamąjį (nepriklausantį jokiai klasei) daugTasku, kuris yra masyvas iš 10 elementų, o kiekvienas elementas yra Taskai objektas. Išrūšiuokite masyvą daugTasku, pagal taskų sumą nuo didžiausio iki mažiausio.*/

class Taskas {
  constructor() {
    this.taskas = this.rand(100, 999);
  }
  rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

class Taskai {
  constructor() {
    this.taskai = [];
    for (let i = 0; i < 10; i++) {
      this.taskai.push(new Taskas());
    }
  }
}

const daugTasku = [];
for (let i = 0; i < 10; i++) {
  daugTasku.push(new Taskai());
}
console.log(daugTasku);

daugTasku.sort(function (a, b) {
  let sumA = 0;
  let sumB = 0;
  a.taskai.forEach((element) => (sumA += element.taskas));
  b.taskai.forEach((element) => (sumB += element.taskas));
  return sumA - sumB;
});
console.log(daugTasku);

/* Task4 Sukurti klasę Div. Sukūrus naują objektą iš šios klasės HTML’e turi atsirasti naujas <div> tagas su rand 1000 - 9999 skaičiumi viduje. Sukurti metodą spalva(color), kuris keistų to <div> tago spalvą. Taip pat statinį metodą visuSpalva(color), kuris keistų visų <div> tagų, sukurtų per klasę, spalvą.*/

class Div {
  static id = 0;
  static visuSpalva(color) {
    document
      .querySelectorAll(".divTagsCreatedFromDivClass")
      .forEach((div) => (div.style.color = color));
  }
  constructor() {
    const div = document.createElement("div");
    div.innerText = this.rand(1000, 9999);
    this.id = this.constructor.id++;
    div.id = this.id;
    div.classList.add("divTagsCreatedFromDivClass");
    document.querySelector("body").appendChild(div);
  }
  rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  spalva(color) {
    document.getElementById(this.id).style.color = color;
  }
}

const div1 = new Div();
const div2 = new Div();
const div3 = new Div();
const div4 = new Div();
div1.spalva("#0057B8");
div2.spalva("#0057B8");
div3.spalva("#FFD700");
div4.spalva("#FFD700");
// Div.visuSpalva("red");

/* Task5 Sukurti klasę Post. Kuriant objektą iš šios klasės, reikia įrašyti id savybę, pasirinktinai nuo 1 iki 100. Objektas turi turėti visas savybes gautas iš serverio adresu: https://jsonplaceholder.typicode.com/posts/1 (objektas su id: 1). */

class Post {
  constructor(id) {
    //nesupratau ka tas pasirinktinai reiskia ar ivesti konkretu sk nuo 1 iki 100 kuriant ar padauoti random kuriant tai padariau kad jei nurodytas sk nuo 1 iki 100 kai kurimas objketas is klases grazintu pagal nurodyta id o jei nenurodytas ar nurodytas netinkamas imtu random nuo 1 iki 100
    this.id = id >= 1 && id <= 100 && id % 1 === 0 ? id : this.rand(1, 100);
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then((response) => response.json())
      .then((data) => {
        Object.keys(data).forEach((key) => {
          this[key] = data[key];
        });
      });
  }
  rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

const test1 = new Post();
console.log(test1);
const test11 = new Post(11);
console.log(test1);
