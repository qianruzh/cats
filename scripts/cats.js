const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('https://qianruzh.github.io/cats/sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here
  const catInfo = JSON.parse(catString);

  for (let i = 0; i < catInfo.length; i++) {
  	if(i< catInfo.length - 1){
  		motherInfo = motherInfo + catInfo[i].name + ',';
  	}
  	else{
  		motherInfo = motherInfo - ',' + 'and' + catInfo[i] + '.';
  	}

  	for (let j = 0; j < catInfo[i].kittens.length; j++) {
      total ++;
      if(catInfo[i].kittens[j].gender == m){
      	male ++;
      }
    }

    kittenInfo = 'There are totally ' + total + 'kittens. ' + (total - male) + ' of them are female, and ' + male + ' of them are male.'

  }	





// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);