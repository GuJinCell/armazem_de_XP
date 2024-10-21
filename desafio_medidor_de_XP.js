let nome = 'Cleber';
let XP = Math.floor(Math.random() * 12001) + 1;
const rank = ['Ferro','Bronze','Prata','Ouro','Platina','Ascendente','Imortal','Radiante']
if(XP <= 1000){
    console.log(`O Herói de nome ${nome} está no nível de ${rank[0]}`)
}else if(XP >1000 && XP <= 2000){
    console.log(`O Herói de nome ${nome} está no nível de ${rank[1]}`)
}else if(XP >2000 && XP <= 5000){
    console.log(`O Herói de nome ${nome} está no nível de ${rank[2]}`)
}else if(XP >5000 && XP <= 7000){
    console.log(`O Herói de nome ${nome} está no nível de ${rank[3]}`)
}else if(XP >7000 && XP <= 8000){
    console.log(`O Herói de nome ${nome} está no nível de ${rank[4]}`)
}else if(XP >8000 && XP <= 9000){
    console.log(`O Herói de nome ${nome} está no nível de ${rank[5]}`)
}else if(XP >9000 && XP <= 10000){
    console.log(`O Herói de nome ${nome} está no nível de ${rank[6]}`)
}else if(XP >10000){
    console.log(`O Herói de nome ${nome} está no nível de ${rank[7]}`)
}
console.log(XP)