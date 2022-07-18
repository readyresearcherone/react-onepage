
    const root = document.querySelector(':root');
   const color = ('--color-primary', 'red' );
   const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));
   const green = {
    '--color-bg': '#23381f',
    '--color-bg-variant': '#316c2c',
    '--color-primary': '#13cc27',
    '--color-primary-variant': 'rgba(50, 235, 23, 0.6)',
    '--color-white': '#fff',
    '--color-light': 'rgba(255, 255, 255, 0.6)',
    
  };
  const red = {
    '--color-bg': '#381f1f',
    '--color-bg-variant': '#6c2c2c',
    '--color-primary': '#ff4d4d',
    '--color-primary-variant': 'rgba(235, 23, 23, 0.6)',
    '--color-white': '#fff',
    '--color-light': 'rgba(255, 255, 255, 0.6)',
  };

  const blue = {
    '--color-bg': '#1f1f38',
    '--color-bg-variant': '#2c2c6c',
    '--color-primary': '#4db5ff',
    '--color-primary-variant': 'rgba(23, 235, 235, 0.6)',
    '--color-white': '#fff',
    '--color-light': 'rgba(255, 255, 255, 0.6)',
  };

 function theme1 (){
  
  document.getElementById('blue').addEventListener("click", function() {
    setVariables(blue);
  });


  document.getElementById('green').addEventListener("click", function() {
    setVariables(green);
  });

  document.getElementById('red').addEventListener("click", function() {
    setVariables(red);
  });


 }

 setTimeout(() => {
  theme1();
 }, 100);

export default theme1


