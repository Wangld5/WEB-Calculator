function Calculate() {
    this.showArea = document.getElementById("show");
    this.expression = '';
    this.clean = function() {
        this.showArea.value = '0';
        this.expression = '';
    };
    this.deleteNumber = function() {
        this.expression = this.expression.substring(0, this.expression.length-1);
        this.showArea.value = this.expression;
    };
    this.showExpression = function(expression) {
        this.expression += expression;
        this.showArea.value = this.expression;
    };
    this.calculateResult = function() {
        var wrongMessage = "Invalid";
        if(this.expression.charAt(0) === "0" && this.expression.charAt(1) !== "."){
            this.showArea.value = wrongMessage;
            this.expression = "";
            return;
        }
        try{
            var result = eval(this.expression);
            this.showArea.value = parseFloat(result);
            this.expression = "";
        }catch(err){
            this.showArea.value = wrongMessage;
            this.expression = "";
        }
    };
}
   
function pageLoad() {
    var calculate = new Calculate();
    var ACkeyButton = document.getElementsByClassName("ACkeyButton");
    ACkeyButton[0].onclick = function() { 
        calculate.clean();
    };
    var deleteNumber = document.getElementById("deleteNumber");
    deleteNumber.onclick = function() { 
        calculate.deleteNumber();
    };
    var calculateResult = document.getElementById("calculateResult");
    calculateResult.onclick = function () {
        calculate.calculateResult();
    };
    var keyButton = document.getElementsByClassName("keyButton");
    for (var i in keyButton) {
        keyButton[i].onclick = (function(index) {
            return function() {
                calculate.showExpression(keyButton[index].innerHTML);
            };
        })(i);
    }
}