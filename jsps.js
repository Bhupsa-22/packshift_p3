console.log('hello');
let x = document.querySelectorAll('.yearexp h1');
let y = document.querySelector('.yearexp');
console.log(x);
let ifCalled = false; 
let i = 0
let i2 = 8400
let i3 = 750
let i4 = 435
let i5 = 1850
let i6 = 50

window.addEventListener('scroll',()=>{
	if (ifCalled) {
		return;
	}
	let ys = y.offsetTop;
	let scrollcount = pageYOffset;
	let wHeight = window.innerHeight;
	if (scrollcount > ys - wHeight) {
		console.log('hello01');
		function counterfirst(){ 
	x[0].innerHTML = i
	i++
	if (i>8) {
		clearInterval(stop);

	}
}
function countersecond(){
	x[1].innerHTML = i2
	i2++
	if (i2>8554) {
		clearInterval(stop2);

	}
}
function counterthird(){
	x[2].innerHTML = i3
	i3++
	if (i3>821) {
		clearInterval(stop3);

	}
}
function counterfourth(){
	x[3].innerHTML = i4
	i4++
	if (i4>535) {
		clearInterval(stop4);

	}
}
function counterfifth(){
	x[4].innerHTML = i5
	i5++
	if (i5>1982) {
		clearInterval(stop5);

	}
}
function countersixth(){
	x[5].innerHTML = i6
	i6++
	if (i6>199) {
		clearInterval(stop6);

	}
}
        let stop =setInterval(counterfirst,100);
		let stop2 =setInterval(countersecond,0.5);
		let stop3 =setInterval(counterthird,10);
		let stop4 =setInterval(counterfourth,10);
		let stop5 =setInterval(counterfifth,10);
		let stop6=setInterval(countersixth,8);

		// let stop =setInterval(counterfirst,70);
		// let stop2 =setInterval(countersecond,70);
		// let stop3 =setInterval(counterthird,70);
		// let stop4 =setInterval(counterfourth,70);
		// let stop5 =setInterval(counterfifth,70);
		// let stop6=setInterval(countersixth,70);
		// 
		ifCalled = true;


	}


})