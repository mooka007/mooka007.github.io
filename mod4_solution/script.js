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



for (let i = 0; i < smiat.length; i++){
    if(smiat[i].chatAT(0) === "J" || smiat[i].charAt(0) === "j"){
        console.log("Goodbye " + smiat[i]);
    }else {
        console.log("Hello " + smiat[i])
    }
    
}