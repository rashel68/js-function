function startFan(){
    console.log('Click the switch');
    console.log('Regulator diye spped ta ektu komao');
}
// startFan();
// var command = startFan();
// console.log(command);

// function fruits(){
//     var fruitsName = ['Orange', 'Apple', 'Tomato', 'Lichi', 'Dragon'];
//     console.log(fruitsName);
//     for(var i = 0; i<fruitsName.length; i++){
//         var fruitList = fruitsName[i]
//         console.log(i + '. ' +fruitList);
//     }
// }
// fruits();

// function perameter 
// function singara(takaDao){
//     console.log(takaDao);
// }
// var money = 250;
// singara(money);
// singara(150);

// starting perameter
function mango(taka){
    console.log('Customer: Ei nen taka', taka);
    console.log('ShopKeper: mama ektu wait koren, hisab kore nei');
    
    var perKgPrice = 50;
    var kgQuantity = taka / perKgPrice;
    // console.log('Mama apni mango peben', kgQuantity, 'kg');
    return kgQuantity;
}
// var money = 1500;
// // mango(money);
// var mangoPabo = mango(money);
// console.log(mangoPabo, 'Kg');


// multiple perameter 
function divisionMango(havMango, person){
    var perPerson =havMango / person;
    return perPerson;
}

// var mangoAche = 150;
// var manushAche = 10;
// var mangoPabe = divisionMango(mangoAche, manushAche);
// console.log('Per Person pabe', mangoPabe);
