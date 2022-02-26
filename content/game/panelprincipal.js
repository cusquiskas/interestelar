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
            top.location.reload();
        } else {
            sessionStorage.setItem('id',d.root.Detalle.JGD_JUGADOR);
        }
    }

}
