<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger datos del formulario
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $carnet = $_POST['carnet'];
    $department = $_POST['department'];
    $edad = $_POST['edad'];
    $gender = $_POST['gender'];
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $telefono = $_POST['telefono'];
    $carrera = $_POST['carrera'];
    $pretension_salarial = $_POST['pretension_salarial'];

    // Configuración del correo
    $to = "erickbernal10d2021@gmail.com"; // Dirección a la que enviarás el correo
    $subject = "Nueva aplicación de trabajo";

    // Crear el mensaje
    $message = "
    <html>
    <head>
    <title>Nueva aplicación de trabajo</title>
    </head>
    <body>
    <h1>Detalles del solicitante</h1>
    <p><strong>Nombre:</strong> $nombre $apellidos</p>
    <p><strong>Carnet:</strong> $carnet</p>
    <p><strong>Departamento:</strong> $department</p>
    <p><strong>Edad:</strong> $edad</p>
    <p><strong>Género:</strong> $gender</p>
    <p><strong>Fecha de Nacimiento:</strong> $fecha_nacimiento</p>
    <p><strong>Teléfono:</strong> $telefono</p>
    <p><strong>Carrera:</strong> $carrera</p>
    <p><strong>Pretensión Salarial:</strong> $pretension_salarial</p>
    </body>
    </html>
    ";

    // Encabezados para el correo en formato HTML
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Encabezado adicional
    $headers .= 'From: <webmaster@tu_dominio.com>' . "\r\n";

    // Enviar el correo
    if (mail($to, $subject, $message, $headers)) {
        echo "Tu aplicación ha sido enviada exitosamente.";
    } else {
        echo "Error al enviar la aplicación. Intenta de nuevo.";
    }
} else {
    echo "Método de envío no permitido.";
}
?>
