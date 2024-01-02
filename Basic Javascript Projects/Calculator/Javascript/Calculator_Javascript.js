//Object to keep track of values.
const Calculator = {
    Display_Value: '0',
    //Holds first operand, set at null to begin
    First_Operand: null,
    //Checks for second operand input
    Wait_Second_Operand: false,
    //Holds operator, set to null
    operator: null,
};

//This modifies values each time a button is clicked on
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    //This checks if second operand is input and sets Display_Value to key clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === 'O' ? digit : Display_Value + digit;
    }
}

//Section to handle decimal points.
function Input_Decimal(dot) {
    //Ensures accidental click doesnt cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

//Section to handle operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //When operator key is pressed, covert to a numbwe and store result
    //in Calculator.First_Operand if it doesn't exist.
    const Value_of_Input = parseFloat(Display_Value);
    //Checks if operator and second input exists, then updates the operator and exits
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        //If operator exists, searches for matching operator in Perform_Calculation
        //and executes it
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //Here we add a fixed amount of numbers after decimal
        result = Number(result).toFixed(9);
        //Removes trailing 0s
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//Function to update calculator screen
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//section for button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //Target variable is object to represent clicked element.
    const { target } = event;
    //If element clicked isnt button, exit function.
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //AC clears inputs
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
}) 