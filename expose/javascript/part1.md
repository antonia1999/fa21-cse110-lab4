Part 1. A Quick Introduction...

var declaration:
    1.What is printed by line 9? If the code returns an error, explain why. ^^^^^
    -> values added: 20 

    2.What is printed by line 13? If the code returns an error, explain why. 
    -> final result: 20
    
-->"regardless of the block where var is defined in, can be accessed anywhere inside the function"

let declaration:
    1. What is printed by line 9? If the code returns an error, explain why. ^^^^^
    -> values added: 20 

    1. What is printed by line 13? If the code returns an error, explain why.
    -> error: Uncaught ReferenceError: result is not defined 

-->"let can only be accessed within the block it is defined in, unlike the var keyword".
    let is defined in the if block and therefore it can not be accessed in the else block ->error

const declaration:
    5. What is printed by line 9? If the code returns an error, explain why. ^^^^^
    -> error: Uncaught TypeError: Assignment to constant variable.
    6. What is printed by line 13? If the code returns an error, explain why. 
    -> error: Uncaught TypeError: Assignment to constant variable.

-->when declaring a variable with const: prevents variable from being reassigned after it is assigned for the first time" -> error because variable is not a scope,  cannot reasign a const variable

Part 2. A little More of a Challenge...

    1.^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
    ->The function prints out i, in this case it is 3 (number of prices given).
     i is declared with var therefore it lives beyond its original scope.

    2.^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
    ->The functions prints out 150, which is the discountedPrice 
     discountedPrice is also declared with var and therefore lives beyond its original scope

    3.^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
    -> will return 150 (the final price)

    4.^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^  list of three elements 
    -> will return the list [50,100,150]. each given value is multiplied with 0.5 and afterwards multiplied by 100 and divided by 100. Discounted prices are printed

    5.^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
    -> error: Uncaught Reference Error: i is not defined (not in scope)

    6.^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
    ->error: Uncaught Reference Error: discountedPrice is not defined(not in scope)

    7.^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
    ->will return 150 to console because let is defined and can be accessed

    8.^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
    ->list of discounted prices 
    -> will return a list of the discounted prices because the let variable is defined and can be accessed

    9.^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^
    -> error: Uncaught ReferenceError: i is not defined (out of scope)

    10.^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
    -> function returns 3, because we get the length of the prices and we have 3 prices

    11.^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^ 
    -> will return array. Orginally it was assined as an const array and as we learned it "can't be changed."
