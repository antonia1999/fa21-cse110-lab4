/* loop that will iterate throgh it and print out the value of the property 
if its starts with letter r, or if the value of that property is an odd number:*/

for (value in statistics){
    if (value.charAt(0) === 'r' || statistics[value] % 2 != 0) {
		console.log(statistics[value]);
	}
}