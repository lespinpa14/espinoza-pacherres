### CASOS DE PRUEBA

TÉCNICA PARTICIÓN EQUIVALENTE: Caso de la partición de datos "Campos vacíos" como entrada no válida, lo cual debería activar un error en el sistema.
1. CASO DE PRUEBA : VALIDACIÓN DE CAMPOS OBLIGATORIOS
	ID: CP01
	Descripción: Verificar que todos los campos obligatorios del formulario de creación de un nuevo personal están siendo validados correctamente.
	Precondiciones: El usuario debe estar logueado con permisos para agregar nuevo personal.
	Pasos:
		Ingresar a la página de creación de personal.
		Dejar los campos obligatorios en blanco
		Hacer clic en el botón "Guardar".
	Resultado esperado: El sistema debe mostrar mensajes de error indicando que los campos obligatorios no pueden estar vacíos.

	
TÉCNICA PARTICIÓN EQUIVALENTE: Caso de la partición de "Datos válidos", que debería resultar en una creación exitosa del personal.
2. CASO DE PRUEBA: CREACIÓN EXITOSA DE UN NUEVO EMPLEADO
	ID: CP02
	Descripción: Verificar que se puede crear un nuevo empleado con todos los datos correctos.
	Precondiciones: El usuario debe estar logueado con permisos para agregar nuevo personal.
	Pasos:
		Ingresar a la página de creación de personal.
		Completar todos los campos obligatorios con datos válidos.
		Hacer clic en "Guardar".
	Resultado esperado: El nuevo personal se crea correctamente y aparece en la lista de empleados. El sistema muestra un mensaje de confirmación.
	
	
TÉCNICA ANÁLISIS DE VALORES LÍMITES: Ya que la entrada "correo electrónico con formato incorrecto" es un valor límite fuera de lo que se considera válido.
3. CASO DE PRUEBA: VALIDACIÓN DE FORMATO EMAIL
	ID: CP03
	Descripción: Verificar que el campo de correo electrónico tenga un formato válido.
	Precondiciones: El usuario debe estar logueado con permisos para agregar nuevo personal.
	Pasos:
		Ingresar a la página de creación de personal.
		Ingresar una dirección de correo electrónico inválida (por ejemplo, "user@com").
		Completar los otros campos obligatorios.
		Hacer clic en "Guardar".
	Resultado esperado: El sistema debe mostrar un mensaje de error indicando que el formato de correo electrónico no es válido.
	
	
TÉCNICA ANÁLISIS DE VALORES LÍMITES: Ya que se encuentra fuera de un valor límite para la fecha de nacimiento	
4. CASO DE PRUEBA: VALIDACIÓN DE CAMPO FECHA DE NACIMIENTO
	ID: CP04
	Descripción: Verificar que la fecha de nacimiento sea válida.
	Precondiciones: El usuario debe estar logueado con permisos para agregar nuevo personal.
	Pasos:
		Ingresar a la página de creación de personal.
		Completar todos los campos obligatorios.
		Ingresar una fecha de nacimiento futura.
		Hacer clic en "Guardar".
	Resultado esperado: El sistema debe mostrar un mensaje de error indicando que la fecha de nacimiento no puede ser en el futuro.
	

5. CASO DE PRUEBA: VERIFICACIÓN DE LA OPCIÓN TIPO DE CONTRATO
	ID: CP05
	Descripción: Verificar que se puede seleccionar correctamente el tipo de contrato para el nuevo personal.
	Precondiciones: El usuario debe estar logueado con permisos para agregar nuevo personal.
	Pasos:
		Ingresar a la página de creación de personal.
		Completar todos los campos obligatorios.
		Seleccionar un tipo de contrato del menú desplegable.
		Hacer clic en "Guardar".
	Resultado esperado: El sistema debe guardar correctamente la selección del tipo de contrato y asociarlo con el nuevo personal.


TÉCNICA ANÁLISIS DE VALORES LÍMITES: Los límites son los formatos aceptados para archivos de imagen
6. CASO DE PRUEBA: VERIFICACIÓN DE LA CREACIÓN DE UN NUEVO PERSONAL ADJUNTANDO FOTO
	ID: CP06
	Descripción: Verificar que se puede cargar y mostrar una foto de perfil al crear un nuevo empleado.
	Precondiciones:  El usuario debe estar logueado con permisos para agregar nuevo personal.
	Pasos:
		Ingresar a la página de creación de personal.
		Completar todos los campos obligatorios.
		Subir una imagen de perfil válida.
		Hacer clic en "Guardar".
	Resultado esperado: El sistema debe guardar la foto correctamente y mostrarla en el perfil del empleado.
	
	
TÉCNICA PARTICIÓN EQUIVALENTE: Toma el caso de ártición "Salario no numérico" lo que debe mostrar un mensaje de error
7. CASO DE PRUEBA: VALIDACIÓN DEL CAMPO SALARIO
	ID: CP07
	Descripción: Verificar que el campo de salario acepte solo valores numéricos válidos.
	Precondiciones: El usuario debe estar logueado con permisos para agregar nuevo personal.
	Pasos:
		Ingresar a la página de creación de personal.
		Completar todos los campos obligatorios, incluyendo un valor no numérico en el campo de salario.
		Hacer clic en "Guardar".
	Resultado esperado: El sistema debe mostrar un mensaje de error indicando que el salario debe ser un valor numérico.


TÉCNICA PARTICIÓN EQUIVALENTE: Valida la partición de datos "número de identificación duplicado"
8: CASO DE PRUEBA: CREACIÓN DE PERSONAL CON DATOS DUPLICADOS
	ID: CP08
	Descripción: Verificar que el sistema no permite la creación de un nuevo empleado con datos duplicados.
	Precondiciones: El usuario debe estar logueado con permisos para agregar nuevo personal.
	Pasos:
		Ingresar a la página de creación de personal.
		Completar todos los campos obligatorios.
		Ingresar un número de identificación que ya esté registrado en el sistema.
		Hacer clic en "Guardar".
	Resultado esperado: El sistema debe mostrar un mensaje de error indicando que el número de identificación ya existe en el sistema.
	
TÉCNICA PARTICIÓN EQUIVALENTE: 	Cubre la partición "cancelación exitosa del proceso"
9. CASO DE PRUEBA: CANCELACIÓN DEL PROCESO DE CREACIÓN DE PERSONAL
	ID: CP09
	Descripción: Verificar que el usuario puede cancelar el proceso de creación de un nuevo personal sin guardar datos.
	Precondiciones: El usuario debe estar logueado con permisos para agregar nuevo personal.
	Pasos:
		Ingresar a la página de creación de personal.
		Completar algunos campos, pero no hacer clic en "Guardar".
		Hacer clic en "Cancelar".
	Resultado esperado: El sistema debe redirigir al usuario a la página principal de empleados sin guardar los datos ingresados.	


### GUIA DE INSTALACIÓN 
1. Clonar o descargar el proyecto
2. Extraerlo y abrirlo en VS-Code
3. En el terminal colocar `npm i` para instalar las dependencias
4. `npx playwright install` para instalar los navegadores
5. `npm run test` para ejecutar 

