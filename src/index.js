module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let last;
    let use = false;

    for (var i = 0; i < str.length; i++) {
        if (str[i] == '[' || str[i] == '(' || str[i] == '{' || str[i] == '1' || str[i] == '3' || str[i] == '5') { // если на входе скобка открыв., то добавляем в стэк
            stack.push(str[i]);
        } else if (str[i] == ']' || str[i] == ')' || str[i] == '}' || str[i] == '2' || str[i] == '4' || str[i] == '6') { //если на входе закрыв. скобка
            if (stack.length !== 0) { //если стек не пустой
                last = stack[stack.length - 1]; //проверяем какая последняя и сравниваем
                if ((last == '[' && str[i] == ']') || (last == '(' && str[i] == ')') || (last == '{' && str[i] == '}') || (last == '1' && str[i] == '2') || (last == '3' && str[i] == '4') || (last == '5' && str[i] == '6')) {
                    stack.pop(); //если скобки одинакового типа, то убираем последнюю открыв. из стэка
                }
            } else return false; //если стек пустой
        }

        if ((str[i] == '|' && use === false) || (str[i] == '7' && use === false) || (str[i] == '8' && use === false)) {
            stack.push(str[i]);
            use = true;
        } else if ((str[i] === '|' && use === true && stack[stack.length - 1] === '|') || (str[i] === '7' && use === true && stack[stack.length - 1] === '7') || (str[i] === '8' && use === true && stack[stack.length - 1] === '8')) {
            stack.pop();
            use = false;
        }



    }


    return (!stack.length); //если на выходе стэк пустой, то последовательность правильная 



}
