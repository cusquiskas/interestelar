<?php

class ConfiguracionSistema
{
    private $host = 'localhost';
    private $user = 'teniente';
    private $pass = 'morcilla';
    private $apli = 'interestelar';

    private $home = '/opt/lampp/htdocs/interestelar/';

    public function getHost()
    {
        return $this->host;
    }

    public function getUser()
    {
        return $this->user;
    }

    public function getPass()
    {
        return $this->pass;
    }

    public function getApli()
    {
        return $this->apli;
    }

    public function getHome()
    {
        return $this->home;
    }
}
