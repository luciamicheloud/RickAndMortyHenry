export default function validation(input) {
    const error = {};
    const regexEmail = /\S+@\S+\.\S+/;
    const regexPassword = new RegExp("[0-9]");
    

    if(!regexEmail.test(input.email)) {
        error.email = "El email ingresado no es valido"
    }
    if(!input.email) {
        error.email = "Ingrese su email"
    }
	if (input.email > 35) {
		error.email = "Debe ser menor a 35 caracteres!";
	}
    if (!regexPassword.test(input.password)) {
		error.password = "Al menos un número!";
	}
	// La contraseña tiene que tener una longitud entre 6 y 10 caracteres
	if (input.password < 6 || input.password > 10) {
			error.password = "Contraseña entre 6 y 10 caracteres!";
	}
	return error;
}