console.log('Record 1');

setTimeout(() => {
  console.log('Record 2');
  Promise.resolve().then(() => {
    setTimeout(() => {
    Promise.resolve().then(() => {
        console.log('Record 3');
        console.log('Record 4');
      });       
    });
  });       
});

console.log('Record 5');

Promise.resolve().then(() => Promise.resolve().then(() => console.log('Record 6')));