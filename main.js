const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

  //First, implement something that works, but has the promise version of the "callback hell" problem we saw in our discussion of using callbacks.

  async function allAliceGo(aliceNum) {
    aliceNum.animate(aliceTumbling, aliceTiming)
  }

  setTimeout(() => {
    allAliceGo(alice1);
    setTimeout(() => {
        allAliceGo(alice2)
        setTimeout(() => {
            allAliceGo(alice3)
        }, 2000)
    }, 2000)
  })
  
  
  
  /*
  NOTE: THIS IS THE CODE THE ORIGINAL CREATORS CAME UP WITH 
  alice1.animate(aliceTumbling, aliceTiming).finished
    .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
    .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
    .catch(error => console.error(`Error animating Alices: ${error}`));

    NOTE: THIS IS THE CODE I TRIED TO CREATE INTO A FUNCTION
  allAliceGo(alice1)
    .then(() => allAliceGo(alice2))
    .then(() => allAliceGo(alice3))
    .catch(error => console.error(`Error animating Alices: ${error}`));


  
*/