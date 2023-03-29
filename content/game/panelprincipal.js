var panelprincipal = class {
    constructor (mod, obj) {
        console.log('panelprincipal.js -> constructor');
        let modulo = mod;
        let object = obj;
        this.addEventos(modulo);
        let form = modulo.Forms['sesion'];
        form.set({'JGD_JUGADOR':sessionStorage.getItem('id')});
        form.executeForm();
    };

    addEventos () {

    };

    sesion (s,d,e) {
        if (!s) {
            validaErroresCBK(d.root||d);
            sessionStorage.setItem('id','');
            Moduls.getBody().load({ url: 'content/game/intro.html', script: true });
            $("span[name='nombre']").empty();
        } else {
            sessionStorage.setItem('id',d.root.Detalle.JGD_JUGADOR);
            sessionStorage.setItem('nombre',d.root.Detalle.JGD_NOMBRE);
            let headerClass = Moduls.getHeader().getScript();
            headerClass.setUser(d.root.Detalle.JGD_NOMBRE);
            headerClass.darkAndLigth();
        }
    }

}
