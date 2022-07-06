// :::::::::::::::::::::::::::::INTRO::::::::::::::::::::::::::::::
let totalPanier =0
let transfertPanier= 0
let pokemonName = 0
let storePokemonName=0
const textIntro =["Bonjour je ne suis pas Chen    ","     Bienvenue dans cette aventure qui n'est pas pokemon    ","    Car je n'ai pas les droits    ",'     choisit ton pokemon  ',''];
const textOutro =["Bon.       ",'        ',"Je pense que tu vas etre décu.     ","   Mais je n'ai rien coder de plus      ","   et de toutes facons     ",`    tu as des  pokédollars?     Je ne pense pas     `,''];
const chenSrcs=[['/img/chenl0.png','/img/chenl1.png','/img/chenl0.png','/img/chenl2.png'],['/img/chenf0.png','/img/chenf1.png','/img/chenf0.png','/img/chenf2.png'],['/img/chenb0.png','/img/chenb1.png','/img/chenb0.png','/img/chenb2.png']];
let pokemonsrcs=['/img/bulbi.png','/img/salam.png','/img/carap.png']
let srcsIndex = 0
let srcsIndexOutro=0
let source=0
let sourceOutro=0
let textLen=null;
let ligneDial =0;
let dialIntro = '';
let dialOutro=''
let n = 0;
let m=0
let lenIntro = textIntro[n].length;
let lenOutro = textOutro[m].length;
let arrayIntro = textIntro[n].split('');
let arrayOutro = textOutro[m].split('');
let revArrayIntro = arrayIntro.reverse();
let revArrayOutro = arrayOutro.reverse();
let popIntro = ''
let popOutro = ''
let transition=(lenIntro-1)
let transitionOutro=(lenOutro-1)
let marge=0
let margeOutro=0
let hauteur = 0
let hauteurOutro=0
let dialogue =''
let dialogueOutro=''
let walk=''
let walkOutro=''
let walkBackOutro=''
const setup=()=>{document.getElementById('bulbi').src=pokemonsrcs[0];
document.getElementById('salam').src=pokemonsrcs[1];
document.getElementById('carap').src=pokemonsrcs[2];}
let selectImgSrc=''


const margeIncrease =()=>{
    if(marge<42){
        marge+=2
    }else if(marge==42 && hauteur<20){
        marge=42
        hauteur+=4
    }else if(hauteur==20){
        clearInterval(walk)
        document.getElementById('chen').src=chenSrcs[srcsIndex][0];
        dialogue = setInterval(textPop,80)
    }
}




function startIntro(){
if(dialogue==''){
walk = setInterval(chenWalk,200)
document.getElementById('startButton').style.visibility='hidden';
}else{
    clearInterval(dialogue)
    clearInterval(walk)
    dialogue=''
}
}

function textPop(){
if(dialIntro.length <= lenIntro && n <3){
popIntro = revArrayIntro.pop()
dialIntro += popIntro;
document.getElementById('intro').innerHTML=dialIntro;
    if(dialIntro.length==transition && n<3){
        n=n+1
        lenIntro = textIntro[n].length;
        transition=lenIntro-1
        arrayIntro = textIntro[n].split('');
        revArrayIntro= arrayIntro.reverse()
        dialIntro=''
        console.log(n)
        console.log(textIntro[n])
}}  else if(n > 2){
        document.getElementById('intro').innerHTML='choisit ton pokemon'
        document.getElementById('choice').className='choice';
        
}
}



function chenWalk(){
margeIncrease()

if(marge<42){
if(source==0){
    source=1;
    document.getElementById('chen').src=chenSrcs[srcsIndex][source];
    document.getElementById('chen').style.marginLeft=`${marge}%`

}else if(source===1){
    source=2;
    
    document.getElementById('chen').src=chenSrcs[srcsIndex][source];
    document.getElementById('chen').style.marginLeft=`${marge}%`
}else if(source===2){
    source=3;
    
    document.getElementById('chen').src=chenSrcs[srcsIndex][source];
    document.getElementById('chen').style.marginLeft=`${marge}%`
}else if(source===3){
    source=0;
    
    document.getElementById('chen').src=chenSrcs[srcsIndex][source];
    document.getElementById('chen').style.marginLeft=`${marge}%`
}}else if(marge >= 42 && hauteur<20){
        srcsIndex=1
        console.log(hauteur)
        document.getElementById('chen').src=chenSrcs[srcsIndex][source];
        document.getElementById('chen').style.marginTop =`${hauteur}%`;
        // 
        if(source===0){
            source=1;
            document.getElementById('chen').src=chenSrcs[srcsIndex][source];
            document.getElementById('chen').style.marginTop =`${hauteur}%`;
        
        }else if(source===1){
            source=2;
            
            document.getElementById('chen').src=chenSrcs[srcsIndex][source];

            document.getElementById('chen').style.marginTop =`${hauteur}%`;
        }else if(source===2){
            source=3;
            
            document.getElementById('chen').src=chenSrcs[srcsIndex][source];
    
            document.getElementById('chen').style.marginTop =`${hauteur}%`
        }else if(source===3){
            source=0;
            
            document.getElementById('chen').src=chenSrcs[srcsIndex][source];

            document.getElementById('chen').style.marginTop =`${hauteur}%`
        }else if(hauteur===20){
            source=0
            document.getElementById('chen').src=chenSrcs[srcsIndex][0];
            document.getElementById('chen').style.marginLeft=`${marge}%`
            document.getElementById('chen').style.marginTop =`${hauteur}%`
            console.log(chenSrcs[srcsIndex][0])
        }
}
    }

function selectBulbi(){

        document.getElementById('select').style.visibility='visible';
        document.getElementById('selectImg').src=pokemonsrcs[0];
        localStorage.setItem(selectImgSrc,pokemonsrcs[0])
        pokemonName='Bulbizarre'

        document.getElementById('choice').style.marginTop='3%'
        document.getElementById('confirmText').innerHTML='Bulbizarre?';
        
    }
    function selectSalam(){

        document.getElementById('select').style.visibility='visible';
        document.getElementById('selectImg').src=pokemonsrcs[1];
        localStorage.setItem(selectImgSrc,pokemonsrcs[1])
        pokemonName='Salameche'
        document.getElementById('choice').style.marginTop='3%'
        document.getElementById('confirmText').innerHTML='Salameche?';
    }
    function selectCarap(){

        document.getElementById('select').style.visibility='visible';
        document.getElementById('selectImg').src=pokemonsrcs[2];
        localStorage.setItem(selectImgSrc,pokemonsrcs[2])
        pokemonName='Carapuce'
        document.getElementById('choice').style.marginTop='3%'
        document.getElementById('confirmText').innerHTML='Carapuce?';

    }
    function varStore(){
        localStorage.setItem(storePokemonName,pokemonName)
    }











// :::::::::::::::::::::::::::::SHOP:::::::::::::::::::::::::::
// création de la classe
// nom,prix,image

class Article {
    constructor(name, price, src) {
        this.name = name;
        this.price = price;
        this.src = src;
    }
}

// instance


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
];
let domPanier = document.getElementsByClassName('add');
let totalDom = document.getElementById('total').innerHTML;

let banSrc = ["img/boutique-pokemon-france.jpg ", "img/balls1.jpeg ", "img/potions.png", "img/small_img5ec52dc034d05_4820_baies.jpg", "img/objet.png "];
let buttonId = [' buttonBall ', ' buttonSoin ', 'buttonBaie ', ' buttonObj '];
let articleCount = 0;

let hiddenPanier =`<div class='text-center'>Panier</div>`;
let contentPanier = null;


let pricePanier=0


function nameArticle() {
    console.log(localStorage.getItem(pokemonName))
    for (let h=0 ; h <=23 ; h++) {
let articleName= document.getElementById(`article${h+1} `);
        articleName.innerHTML = articles[h].name;
        articleName.className = " text-black font-bold leading-loose ";
        console.log(h)
    }
};
nameArticle();





function popArticle(n) {
    contentPanier=`<div class='mx-32 my-2 grid grid-cols-3 font-bold bg-stone-500'><div class='justify-self-center'><img class=' h-auto w-20' src="${articles[n].src}"></div><div class='text-center self-center'>${ articles[n].name }</div><div class='text-center self-center'>${ articles[n].price }</div></div>`
    pricePanier=articles[n].price;

    if (n <= 5) {
        document.getElementById(' buttonBall ').innerHTML = 'ajouter au panier ';
        document.getElementById('imgBall ').src = articles[n].src;
        document.getElementById('imgBall ').className = 'h-auto   max-h-44 ';
        document.getElementById('transitionBall ').className = " bg-red-400 grid grid-cols-2 ";
        document.getElementById('priceBall ').innerHTML = `${ articles[n].name }: ${ articles[n].price } pokedollar`;
        document.getElementById('priceBall ').className = "text-center uppercase underline font-bold border-y-2  border-stone-500";

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
        document.getElementById('transitionBaie ').className = " bg-red-400 grid grid-cols-2 ";
        document.getElementById('priceBaie ').innerHTML = `${ articles[n].name }: ${ articles[n].price } pokedollar`;
        document.getElementById('priceBaie ').className = "text-center uppercase underline font-bold border-y-2  border-stone-400";
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
    if(document.getElementById('hiddenForm ').className ==' grid grid-cols-2'){
        document.getElementById('hiddenForm ').className = 'hidden'
    }
else{
    document.getElementById('hiddenForm ').className = 'h-auto w-auto grid grid-cols-2';
}
}

function col() {

    document.getElementById('hiddenForm ').className = 'hidden';
};

function articleIncrease(){
    articleCount+=1;

};
function log(){
    totalPanier+=pricePanier;
    articleCount+=1;
    hiddenPanier+=contentPanier;
    document.getElementById('list').innerHTML = `${hiddenPanier}`;

    document.getElementById('total').innerHTML=`Total : ${totalPanier}`;
    document.getElementById('pay').innerHTML=`Payer: ${totalPanier}`
    document.getElementById('total').className='text-center'
    console.log(totalPanier)
    document.getElementById('notif').innerHTML=articleCount;
    if(document.getElementById('notif').className==" hidden "){
        document.getElementById('notif').className="mb-8 absolute rounded-full h-3 w-3 content-end bg-red-500 font-bold text-xs text-center leading-3 text-white"
    }

}
const totalCount=()=>{

}
function colapsePanier(){
    if(document.getElementById('panier').className=='hidden'){
    document.getElementById('panier').className=` h-auto w-auto bg-red-400 text-bold text-white`;
}else{
    document.getElementById('panier').className='hidden';
}
};

function reset(){
    hiddenPanier=`<div>Panier</div>`
    totalPanier=0
    articleCount=0
    document.getElementById('list').innerHTML = `${hiddenPanier}`;
    document.getElementById('notif').className=' hidden ';
    document.getElementById('total').innerHTML=`Total : ${totalPanier}`;
    document.getElementById('pay').innerHTML=`Payer: ${totalPanier}`
}
function shopPopUp(){
    document.getElementById('body').className='w-auto blur-xl'
}
shopPopUp()
function shopGo(){
    document.getElementById('body').className='w-auto '
    document.getElementById('popUp').className='hidden'
}
// -------------------------Outtro---------------------
function margeIncreaseOutro (){
    if(margeOutro<42){
        margeOutro+=2
    }else if(margeOutro==42 && hauteurOutro<20){
        margeOutro=42
        hauteurOutro+=4
    }else if(hauteurOutro==20){
        clearInterval(walkOutro)
        document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][0];
        dialogueOutro = setInterval(textPopOutro,80)
    }
}
function margeDecreaseOutro (){
    console.log(hauteurOutro)
    if(hauteurOutro>0 && margeOutro<100){
        hauteurOutro-=4
    }else if(hauteurOutro == 0 && margeOutro<100){
        hauteurOutro=0
        margeOutro+=2
    }else if(margeOutro==100){
        startOutro()
        
        
    }
}
function textPopOutro(){
    if(dialOutro.length <= lenOutro && m < 6){
    popOutro = revArrayOutro.pop()
    dialOutro += popOutro;
    document.getElementById('outro').innerHTML=dialOutro;
        if(dialOutro.length==transitionOutro){
            m=m+1
            lenOutro = textOutro[m].length;
            transitionOutro=lenOutro-1
            arrayOutro = textOutro[m].split('');
            revArrayOutro= arrayOutro.reverse()
            dialOutro=''
            console.log(dialOutro)
    }}  else if(m==6){
        document.getElementById('carapOutro').style.visibility='visible'
            document.getElementById('outro').innerHTML=""
            walkBackOutro=setInterval(chenWalkBackOutro(),200)

    }
    }
    function startOutro(){
        console.log(localStorage.getItem(pokemonName))
        document.getElementById('carapOutro').src=localStorage.getItem(selectImgSrc)
        document.getElementById('carapOutro').style.visibility='hidden'
        if(dialogueOutro==''){
        walkOutro = setInterval(chenWalkOutro,200)
        }else{
            clearInterval(dialogueOutro)
            clearInterval(walkOutro)
            dialogueOutro=''
            document.getElementById('chenOutro').style.visibility='hidden';
            console.log(document.getElementById('outro').innerHTML)
            document.getElementById('carapOutro').style.visibility='visible'
            setTimeout(function(){ document.getElementById('outro').innerHTML=`${localStorage.getItem(storePokemonName)} revient ici!`},800)
            setTimeout(function(){document.getElementById('carapOutro').style.visibility='hidden'},1400)
            setTimeout(function(){document.getElementById('outro').innerHTML='Merci!'},1800)
        }}

function chenWalkOutro(){
    margeIncreaseOutro()
    if(margeOutro<42){
    if(sourceOutro==0){
        sourceOutro=1;
        document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
        document.getElementById('chenOutro').style.marginLeft=`${margeOutro}%`
    
    }else if(sourceOutro===1){
        sourceOutro=2;
        
        document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
        document.getElementById('chenOutro').style.marginLeft=`${margeOutro}%`
    }else if(sourceOutro===2){
        sourceOutro=3;
        
        document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
        document.getElementById('chenOutro').style.marginLeft=`${margeOutro}%`
    }else if(sourceOutro===3){
        sourceOutro=0;
        
        document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
        document.getElementById('chenOutro').style.marginLeft=`${margeOutro}%`
    }}else if(margeOutro == 42 && hauteurOutro<20){
            srcsIndexOutro=1
            console.log(hauteurOutro)
            document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
            document.getElementById('chenOutro').style.marginTop =`${hauteurOutro}%`;
            // 
            if(sourceOutro===0){
                sourceOutro=1;
                document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
                document.getElementById('chenOutro').style.marginTop =`${hauteurOutro}%`;
            
            }else if(sourceOutro===1){
                sourceOutro=2;
                
                document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
    
                document.getElementById('chenOutro').style.marginTop =`${hauteurOutro}%`;
            }else if(sourceOutro===2){
                sourceOutro=3;
                
                document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
                document.getElementById('chenOutro').style.marginLeft=`${margeOutro}%`
                document.getElementById('chenOutro').style.marginTop =`${hauteurOutro}%`
            }else if(sourceOutro===3){
                sourceOutro=0;
                
                document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
                document.getElementById('chenOutro').style.marginLeft=`${margeOutro}%`
                document.getElementById('chenOutro').style.marginTop =`${hauteurOutro}%`
            }else if(hauteurOutro===20){
                sourceOutro=0
                document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][0];
                document.getElementById('chenOutro').style.marginLeft=`${margeOutro}%`
                document.getElementById('chenOutro').style.marginTop =`${hauteurOutro}%`
                console.log(chenSrcs[srcsIndexOutro][0])
            }
    }
        }
function chenWalkBackOutro(){
    srcsIndexOutro=2
    console.log(margeOutro)
    margeDecreaseOutro()
    if(hauteurOutro>0){
        if(sourceOutro==0){
            sourceOutro=1;
            document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
            document.getElementById('chenOutro').style.marginTop=`${hauteurOutro}%`
        
        }else if(sourceOutro===1){
            sourceOutro=2;
            
            document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
            document.getElementById('chenOutro').style.marginTop=`${hauteurOutro}%`
        }else if(sourceOutro===2){
            sourceOutro=3;
            
            document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
            document.getElementById('chenOutro').style.marginTop=`${hauteurOutro}%`
        }else if(sourceOutro===3){
            sourceOutro=0;
            
            document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
            document.getElementById('chenOutro').style.marginTop=`${hauteurOutro}%`
        }}else if(hauteurOutro==0 && margeOutro<100){
                srcsIndexOutro=0
                console.log(hauteurOutro)
                document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
                document.getElementById('chenOutro').style.marginTop =`${hauteurOutro}%`;
                // 
                if(sourceOutro===0){
                    sourceOutro=1;
                    document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
                    document.getElementById('chenOutro').style.marginTop =`${hauteurOutro}%`;
                
                }else if(sourceOutro===1){
                    sourceOutro=2;
                    
                    document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
        
                    document.getElementById('chenOutro').style.marginTop =`${hauteurOutro}%`;
                }else if(sourceOutro===2){
                    sourceOutro=3;
                    
                    document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
                    document.getElementById('chenOutro').style.marginLeft=`${margeOutro}%`
                    document.getElementById('chenOutro').style.marginTop =`${hauteurOutro}%`
                }else if(sourceOutro===3){
                    sourceOutro=0;
                    
                    document.getElementById('chenOutro').src=chenSrcs[srcsIndexOutro][sourceOutro];
                    document.getElementById('chenOutro').style.marginLeft=`${margeOutro}%`
                    document.getElementById('chenOutro').style.marginTop =`${hauteurOutro}%`
                }else if(margeOutro===100){
                    sourceOutro=0
                    document.getElementById('chenOutro').style.visibility='hidden';
                    

                    
                }
        }
            }


