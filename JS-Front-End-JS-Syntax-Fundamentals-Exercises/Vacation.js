
function vacation(groupOfPeople, typeOfGroup, dayOfWeek){

    const isFriday = dayOfWeek === "Friday";
    const isSaturday = dayOfWeek === "Saturday";
    const isSunday = dayOfWeek === "Sunday";

    
    const isStudents = typeOfGroup === "Students";
    const isBusiness = typeOfGroup === "Business";
    const isRegular = typeOfGroup === "Regular";

    let priceSinglePerson = 0; 

    if (isFriday){

        if (isStudents) {
            priceSinglePerson += 8.45;
        } else if (isBusiness){
            priceSinglePerson += 10.90;
        } else if (isRegular){
            priceSinglePerson += 15;
        }
    } else if (isSaturday){
        if (isStudents) {
            priceSinglePerson += 9.80;
        } else if (isBusiness){
            priceSinglePerson += 15.60;
        } else if (isRegular){
            priceSinglePerson += 20;
        }
    } else if (isSunday){
        if (isStudents) {
            priceSinglePerson += 10.46;
        } else if (isBusiness){
            priceSinglePerson += 16;
        } else if (isRegular){
            priceSinglePerson += 22.50;
        }
    }

        const totalSumGroup = groupOfPeople * priceSinglePerson;

        const totalSumWithDiscount = isStudents && groupOfPeople >= 30 ? totalSumGroup - totalSumGroup * 0.15    
        : isBusiness && groupOfPeople >= 100 ? (groupOfPeople -10) * priceSinglePerson 
        : isRegular && groupOfPeople >= 10 && groupOfPeople <= 20 ? totalSumGroup - totalSumGroup * 0.05 
        : totalSumGroup;


        console.log(`Total price: ${totalSumWithDiscount.toFixed(2)}`);
     
}

    vacation (40,"Regular","Saturday");