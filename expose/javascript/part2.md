Data Types

12.
    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]

13. Arithmetic
    A. '3' + 2 = '32'   //integer (2) converts into string and concatenates both strings
    B. '3' - 2 = 1    // converts into number and substracts: 3-2=1
    C. 3 + null = 3   // null equals a zero here so it is 3+0=3
    D. '3' + null = '3null'  // null converts into a string and concatenates with 3
    E. true + 3 = 4     //since true maps to 1 (1+3=4)
    F. false + null =  0  // both equal zero and are added (0+0=0)
    G. '3' + undefined = '3undefined' // undefined converts into a string and gets concatenated with 3
    H. '3' - undefined = NaN //undefined is not defined so it is not a number and therefore can not be solved -NaN

14. Comparison
    A. '2' > 1 = true  // 2 converts into a number and is greater than 1, so its true
    B. '2' <'12' = false // false because compares first character of the string and 2 is greater than 1 (unicode/ascii)
    C. 2 == '2' = true // because 2 converts into number and 2=2
    D. 2 === '2' = false // because of different types === returns false
    E. true == 2 = false // true converts into 1 and isn't equal to 2
    F. true === Boolean(2) = true // Boolean(2) is true and true == true

15. Explain the difference between the == and === operators 
    == : first it converts the variables to same type before comparing it to each other
    === : no conversions here. It only returns true if the type and value of the variables is identically

16. look @ part2-question16.js

17. The result will be [6,8,10]. The given array is [1,2,3] so we take each number, add 2 and then multiply it with 2. For example: (1+2)=3, 3*2=6. and so on..
So basically the modifyArray function calls the callback function (doSomething). We pass in a function as a parameter.

18.  look @ part2-question18.js

19. 1
    4
    3
    2  