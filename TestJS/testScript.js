function person(first, last, age, eye){
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
}



function funTest(){
	var myFather = new person("John", "Doe", 50, "blue");
	console.log("Father name is " + myFather.firstName);
}