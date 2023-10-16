//animated document title
let BELIEVEMEBELIEVEMENOT = [
  " BELIEVE ME BELIEVE ME NOT ",
  " BELIEVE ME BELIEVE ME ",
  " BELIEVE ME BELIEVE ME NOT ",
  " BELIEVE ME BELIEVE ME ",
  " BELIEVE ME BELIEVE ME NOT ",
  " BELIEVE ME BELIEVE ME ",
  " BELIEVE ME BELIEVE ME NOT ",
  " BELIEVE ME BELIEVE ME ",
];
				
let len = BELIEVEMEBELIEVEMENOT.length;
let n = 0;
setInterval(function(){				
		if(n == len - 1) n = 0;
		document.title = BELIEVEMEBELIEVEMENOT[n];
		n++;		
	}, 
500);