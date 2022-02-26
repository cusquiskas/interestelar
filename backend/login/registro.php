<?php

    session_start();
    error_reporting(E_ALL & ~E_NOTICE);

    if (!isset($_SESSION['data'])) {
        $_SESSION['data'] = [];
    }
    if (!isset($_SESSION['data']['user'])) {
        $_SESSION['data']['user'] = [];
    }

    require_once '../../conex/conf.php';  //información crítica del sistema
    require_once '../../conex/dao.php';   //control de comunicación con la base de datos MySQL
    require_once '../../tabla/controller.php';

    header('Content-Type: application/json; charset=utf-8');

    if ($_POST['JGD_PASSWORD'] !== $_POST['JGD_PASSWORD2']) {
        die(json_encode(['success' => false, 'root' => [['tipo' => 'Sesion', 'Detalle' => 'Las contraseñas no coinciden']]]));
    }

    $_POST['JGD_PASSWORD'] = md5($_POST['JGD_PASSWORD']);

    $_POST['JGD_FDESDE'] = $_POST['JGD_FACCESO'] = date('Y-m-d G:i:s');

    $_POST['JGD_TOKEN'] = bin2hex(random_bytes(32));

    $manJugador = ControladorDinamicoTabla::set('JUGADOR');

    if ($manJugador->save($_POST) == 0) {
        $reg = $manJugador->getArray();
        $_SESSION['data']['user']['id'] = $reg[0]['JGD_JUGADOR'];
        $_SESSION['data']['user']['nombre'] = $reg[0]['JGD_NOMBRE'];
        
        /*$to      = 'cusquiskas@gmail.com';
        $subject = 'Verificación de cuenta de correo';
        $message = 'Pulsa este enlace para activar el centro de mando';
        $headers = 'From: cusquiskas@gmail.com'       . "\r\n" .
                   'Reply-To: cusquiskas@gmail.com' . "\r\n" .
                   'X-Mailer: PHP/' . phpversion();

        mail($to, $subject, $message, $headers);
        */
        echo json_encode(['success' => true, 'root' => ['tipo' => 'Respuesta', 'Detalle' => 'Registro realizado correctamente', 'id' => $reg['JGD_JUGADOR']]]);
        
    } else {
        $reg = $manJugador->getListaErrores();
        echo json_encode(['success' => false, 'root' => ['tipo' => 'Respuesta', 'Detalle' => $reg]]);
    }

    unset($manJugador);
    unset($reg);
