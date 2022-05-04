class Article {
    constructor(name, price, src) {
        this.name = name;
        this.price = price;
        this.src = src;
    }
}
let articles = [
    new Article('poke-ball', 200, 'img/3D-pokemon-pokeball-model_600.jpg'),
    new Article('super-ball', 400, 'img/Super_ball_replique_pokemoms_1.jpg'),
    new Article('hyper-ball', 600, 'img/Replique-Diecast-Hyper-Ball-Pokemon2.jpg'),
    new Article('scuba-ball', 800, 'img/scuba.jpeg'),
    new Article('safari-ball', 800, 'img/safari.jpeg'),
    new Article('love-ball', 800, 'img/loveball.jpeg'),
    new Article('potion', 100, 'img/potion.png'),
    new Article('hyper-potion', 500, 'img/hyper.jpg'),
    new Article('potion-max', 800, 'img/mega.jpg'),
    new Article('rappel', 600, 'img/revive.jpeg'),
    new Article('rappel-max', 1500, 'img/maxrevive.jpeg'),
    new Article('herbe-rappel', 1500, 'img/herb.jpeg'),
    new Article('Ceriz', 200, 'img/ceriz.png'),
    new Article('Kika', 200, 'img/kika.png'),
    new Article('Mepo', 200, 'img/mepo.png'),
    new Article('Framby', 200, 'img/r.png'),
    new Article('Nanana', 200, 'img/nanana.png'),
    new Article('Nanab', 200, 'img/nanab.png'),
    new Article('Attaque +', 2000, 'img/xaccuracy.png'),
    new Article('Defense +', 2000, 'img/X_Defensebig.png'),
    new Article('Vitesse +', 2000, 'img/pokemon-x-speed.png'),
    new Article('Veste de combat', 2500, 'img/veste-combat.png'),
    new Article('Casque brut', 2500, 'img/casque-brut.png'),
    new Article('Lunettes choix', 2500, 'img/lunette.png')
]

let banSrc = ["img/boutique-pokemon-france.jpg ", "img/balls1.jpeg ", "img/potions.png", "img/small_img5ec52dc034d05_4820_baies.jpg", "img/objet.png "];
let buttonId = [' buttonBall ', ' buttonSoin ', 'buttonBaie ', ' buttonObj '];

function nameArticle(n) {
    let nameArticle = 0;
    let h = n;
    for (n in articles) {
        h += 1;
        nameArticle = `article${h} `;
        document.getElementById(nameArticle).innerHTML = articles[n].name;
        document.getElementById(nameArticle).className = " text-black font-bold leading-loose ";
    }
};
nameArticle(0);





function popArticle(n) {

    if (n <= 5) {
        document.getElementById(' buttonBall ').innerHTML = 'ajouter au panier ';
        document.getElementById('imgBall ').src = articles[n].src;
        document.getElementById('imgBall ').className = 'h-auto   max-h-44 ';
        document.getElementById('transitionBall').className = " bg-red-400 grid grid-cols-2 ";
        document.getElementById('priceBall').innerHTML = `${ articles[n].name }: ${ articles[n].price } pokedollar`;
        document.getElementById('priceBall').className = "text-center uppercase underline font-bold border-y-2  border-stone-500";
    } else
    if (n >= 6 && n <= 11) {
        document.getElementById(' buttonSoin ').innerHTML = `ajouter au panier `;
        document.getElementById('imgSoin ').src = articles[n].src;
        document.getElementById('imgSoin ').className = 'h-auto   max-h-44';
        document.getElementById('transitionSoin ').className = " bg-red-400 grid grid-cols-2 ";
        document.getElementById('priceSoin ').innerHTML = `${ articles[n].name }: ${ articles[n].price } pokedollar`;
        document.getElementById('priceSoin ').className = "text-center uppercase underline font-bold border-y-2  border-stone-400";
    } else if (n >= 12 && n <= 17) {
        document.getElementById('buttonBaie ').innerHTML = `Ajouter au panier `;
        document.getElementById('imgBaie ').src = articles[n].src;
        document.getElementById('imgBaie ').className = 'h-auto   max-h-44';
        document.getElementById('transitionBaie').className = " bg-red-400 grid grid-cols-2 ";
        document.getElementById('priceBaie').innerHTML = `${ articles[n].name }: ${ articles[n].price } pokedollar`;
        document.getElementById('priceBaie').className = "text-center uppercase underline font-bold border-y-2  border-stone-400";
    } else if (n > 17) {
        document.getElementById(' buttonObj ').innerHTML = `ajouter au panier `;
        document.getElementById('imgObj ').src = articles[n].src;
        document.getElementById('imgObj ').className = 'h-auto   max-h-44 ';
        document.getElementById('transitionObj ').className = " bg-red-400 grid grid-cols-2 ";
        document.getElementById('priceObj ').innerHTML = `${ articles[n].name }: ${ articles[n].price } pokedollar`;
        document.getElementById('priceObj ').className = "text-center bg-white uppercase underline font-bold border-y-2  border-stone-400";
    }
};

function mouseOver(n) {
    document.getElementById(' banniere ').src = banSrc[n];
}

function hiddenform() {
    let n = document.getElementById('hiddenForm').className;
    document.getElementById('hiddenForm').className = 'h-auto w-auto';
}

function colapseForm() {
    document.getElementById('hiddenForm').className = 'hidden';
}