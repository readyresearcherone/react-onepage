
    const root = document.querySelector(':root');
   const color = ('--color-primary', 'red' );
   const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));
   const white = {
    '--color-primary': '#eff6ff',
  };
  const red = {
    '--color-primary': 'red',
  };

 function theme1 (){
  
  document.getElementById('test').addEventListener("click", function() {
    setVariables(white);
  });
  document.getElementById('test2').addEventListener("click", function() {
    setVariables(red);
  });


 }

 setTimeout(() => {
  theme1();
 }, 1000);

export default theme1


