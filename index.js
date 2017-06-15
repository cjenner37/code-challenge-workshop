
// 1. function "stringy" returns alternating 1 and 0 for each number in size
// I'm thinking of ruby... size.times return "10"
// I'll probably have to do a loop
// ... 

// I just want to print "10" * size/2, but Javascpript treats 10 as a number...

function stringy(size) {
	string = "1";
	for (var i = size.length - 2; i >= 0; i--) {
		if (string.endsWith(1)){
			string.push(0);
		} else {
			string.push(1);
		}
	}
	return string;
}



// I put it in a variable and now I can do things! 
function toReverseArray(number) {
	var theArray = [];
	var ourNumber = number.toString();
	for (var i = ourNumber.length - 1; i >= 0; i--) {
		theArray.push(ourNumber[i]);
	}
	return theArray;
}



function fibonacci(length_of_sequence) {
	var x = 1;
	var y = 1;
	var z;
	for (var i = length_of_sequence - 1; i >= 0; i--) {
		z = (x + y); 
		x = y;
		y = z;
	}
	return x;
}


// Coupon checker
// function receives a date
// get current date
// make sure the year is less or equal to current year
// make sure the day is less or equal to current day
// make sure the month is less or equal to current month
// if so, return that it's valid

// I would google how to check dates

// checking the date:
// June 15, 2014

// The only thing I know how to do without google is to
// assing a number value to each month...



function couponChecker(date) {
	var today = Date();
	if ( today <= date ) {
		return "valid";
	}	else {
		return "invalid"
	}
}




// split the email into each character
// check whether each character is a letter, number, or underscore
// I could make an alphabet variable and a numbers variable 
// and check those against each character from the email
// 


function emailChecker(email) {
	var x = email.toLowerCase;
	var y = x.split("");
	var alphabet = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
	if ( y[0]  ) {}
}