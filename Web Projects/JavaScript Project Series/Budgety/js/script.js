let budgetController = (function(){

    let data = {
        expensesAndIncomes: {
            inc: [],  // This will be array of Income Object
            exp: [],  // This will be array of Expense Object
        },
        totals:{ 
            totalIncome: 0,
            totalExpense: 0,
            overallIncome: 0,
        }
    }

    let Income = function(id, desc, value){
        this.id = id;
        this.desc = desc;
        this.value = value;
    }
    let Expense = function(id, desc, value){
        this.id = id;
        this.desc = desc;
        this.value = value;
    }

    return({
        addItem: function(type, desc, value){
            let id, item;
            if(data.expensesAndIncomes[type].length === 0){
                console.log("This will get id = 0");
                 id = 0;
            }
            else{
                id = data.expensesAndIncomes[type][data.expensesAndIncomes[type].length - 1].id + 1;
            }

            if(type === 'inc'){
                item = new Income(id, desc, value);
            }
            else if(type === 'exp'){
                item = new Expense(id, desc, value);
            } 

            data.expensesAndIncomes[type].push(item);
            return item;
        },

        calculateExpensePercentage: function(){
            return data.totals.overallIncome / data.totals.totalExpense * 100;    
        },
        addTotalExpense: function(value){
            data.totals.totalExpense += value;
        },
        addTotalIncome: function(value){
            data.totals.totalIncome += value;
        }, 
        overallIncome: function(income, expense){
            data.totals.overallIncome = income - expense;
        }, 

    });
})();


let uiController = (function(){

    let domElements = {
        inputType: ".budget-app__form__input--menu-btn",
        inputDesc: ".budget-app__form__input--text",
        inputNo: ".budget-app__form__input--number",
        btn: ".budget-app__form__check"
    }

    return({
        getInput: function(){
            return{
                type: document.querySelector(domElements.inputType).value,
                desc:  document.querySelector(domElements.inputDesc).value,
                no: document.querySelector(domElements.inputNo).value,
            };
        },
        getDomElements: function(){
            return domElements;
        }
    });
})();

let controller = (function(budgetCtrl, uiCtrl){
    let setupEventListeners = function(){
        let dom = uiCtrl.getDomElements();
        let btn = document.querySelector(dom.btn);
        btn.addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(e){
            if(e.which === 13 || e.keyCode === 13){
                ctrlAddItem();
            }
        });
    }

    let ctrlAddItem = function(){
        var input = uiCtrl.getInput();
        console.log(budgetCtrl.addItem(input.type, input.desc, input.no));
    }

    return({
        init: function(){
            setupEventListeners();
        }
    });
    

    
})(budgetController, uiController);

controller.init();
































// What are modules in java script?

// IIFE

// Module pattern returns an object containing all the
// functions that we want to be public.

 /* let budgetController = (function(){
    // These are private functions and variables
    let x = 23;
    let y = 54;
    add = function(x, y){
        return x + y;
    }

    return{
        // This function is exposed to the public
        publicFunction: function(){
            return add(x, y);
        }
    }
})(); */


/* let x = budgetController.publicFunction();
console.log(x); 


let uiController = (function(){ 
})(); */