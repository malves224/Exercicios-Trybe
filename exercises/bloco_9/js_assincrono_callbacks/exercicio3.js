const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = (mensagen) => { 
	setTimeout(()=> {
		console.log(`Mars temperatu is: ${mensagen()} degree Celsius`);
	}, messageDelay());
}

sendMarsTemperature(getMarsTemperature); // imprime "Mars temperature is: 20 degree Celsius", por exemplo