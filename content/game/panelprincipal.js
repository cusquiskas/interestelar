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
        validaErroresCBK(d.root.Detalle||d);
    }

}
