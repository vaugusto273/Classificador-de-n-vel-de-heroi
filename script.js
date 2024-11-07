/*Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- ✅ Variáveis
- ✅ Operadores
- ❓ Laços de repetição - I don't know exactly where use a loop, que only thing that came in my mind was to show the switch case working in any case
- ✅ Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"*/

let HeroName = "Vaugusto";
let HeroXP = 99999;
let HeroLevel = "";

/*I Could choose to use a JSON like that below, but i prefer to do that in another challenge
let Hero = {
    Name: "",
    XP: ""
}*/

switch(true){
    case (HeroXP <= 1000):
        HeroLevel = "Ferro"
        console.log(`O Herói de nome ${HeroName} está no nível de ${HeroLevel}`);
        break;
    case (HeroXP >= 1001 && HeroXP <= 2000):
        HeroLevel = "Bronze"
        console.log(`O Herói de nome ${HeroName} está no nível de ${HeroLevel}`);
        break;
    case (HeroXP >= 2001 && HeroXP <= 5000):
        HeroLevel = "Prata"
        console.log(`O Herói de nome ${HeroName} está no nível de ${HeroLevel}`);
        break;
    case (HeroXP >= 5001 && HeroXP <= 7000):
        HeroLevel = "Ouro"
        console.log(`O Herói de nome ${HeroName} está no nível de ${HeroLevel}`);
        break;
    case (HeroXP >= 7001 && HeroXP <= 8000):
        HeroLevel = "Platina"
        console.log(`O Herói de nome ${HeroName} está no nível de ${HeroLevel}`);
        break;
    case (HeroXP >= 8001 && HeroXP <= 9000):
        HeroLevel = "Anscendente"
        console.log(`O Herói de nome ${HeroName} está no nível de ${HeroLevel}`);
        break;
    case (HeroXP >= 9001 && HeroXP <= 10000):
        HeroLevel = "Imortal"
        console.log(`O Herói de nome ${HeroName} está no nível de ${HeroLevel}`);
        break;
    case (HeroXP >= 10001):
        HeroLevel = "Radiante"
        console.log(`O Herói de nome ${HeroName} está no nível de ${HeroLevel}`);
        break;
    default:
        console.log("Error: XP out of bounds or with wrong value type");
        break;
}