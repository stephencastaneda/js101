console.log('objects')

const wordLength = (word) => {
    return word.length;
}



console.log(wordLength('cat'));
console.log(wordLength('monkeybutt'));


const ageCheck = (age) => {
     if(age >= 21){
         console.log("Party!!");
     } else {
   console.log('no drinks for you')
     }
}
ageCheck(12);
ageCheck(24);

const expense = {
    dateCreated: '01/17/2020',
    location: 'Baja Burrito',
    cost: 12.57, 
    isGood: true
}
//dot notation
console.log(expense.cost);

//bracket notation 
console.log(expense['cost'])

const employee = {
    dateHired: '01/17/2020',
    from: 'Nashville',
    collegeDegree: true,
    hourlyWage: 15.50,
    firstName: 'Stephen',
    lastName: 'Castaneda',
}

const statusMaker = (emp)=> {
   if (emp.firstName[0] === 'M') {
       emp.status = 'vip';  

   } else {
      emp.status = 'peasant';
       
   }
   return emp;
}
console.log(statusMaker(employee));
