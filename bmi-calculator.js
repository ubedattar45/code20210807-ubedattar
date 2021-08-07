var person = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg": 85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166, "WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female", "HeightCm": 167, "WeightKg": 82}];
document.getElementById('originalJson').innerHTML = JSON.stringify(person);
var HeightM, bmi, totalOverweight = 0;
for(let i = 0; i < person.length; i++){
    HeightM = person[i].HeightCm/100;
    bmi = person[i].WeightKg / (HeightM * HeightM);
    person[i].bmi = bmi;
    if(bmi < 18.5){
        person[i].Category = "Underweight";
        person[i].HealthRisk = "Malnutrition risk";
    }else if(bmi < 25){
        person[i].Category = "Normal weight";
        person[i].HealthRisk = "Low risk";
    }else if(bmi < 30){
        person[i].Category = "Overweight";
        person[i].HealthRisk = "Enhanced risk";
        totalOverweight++;
    }else if(bmi < 35){
        person[i].Category = "Moderately obese";
        person[i].HealthRisk = "Medium risk";
    }else if(bmi < 40){
        person[i].Category = "Severely obese";
        person[i].HealthRisk = "High risk";
    }else{
        person[i].Category = "Very severely obese";
        person[i].HealthRisk = "Very high risk";
    }
}

console.log(person);
console.log("The total number of overweight people : " + totalOverweight);

document.getElementById('updatedJson').innerHTML = JSON.stringify(person);
document.getElementById('overWeight').innerHTML = "The total number of overweight people : " + totalOverweight;
