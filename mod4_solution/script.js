let smiat = new Array();
smiat[0]="Yaakov";
smiat[1]="John";
smiat[2]="Jen";
smiat[3]="jason";
smiat[4]="paul";
smiat[5]="frank";
smiat[6]="larry";
smiat[7]="paula";
smiat[8]="laura";
smiat[9]="jim";

let index = 0;

for (let i = 0; i < smiat.length; i++){
    if(smiat[i].charAt(index) === "J" || smiat[i].charAt(index) === "j"){
        console.log("Goodbye " + smiat[i]);
    }else {
        console.log("Hello " + smiat[i])
    }
    
}