var registro = class {
    constructor (mod, obj) {
        console.log('registro.js -> constructor');
        let modulo = mod;
        let object = obj;
        this.addEventos(modulo);
    };

    addEventos () {

    };

    registro (s,d,e) {
        debugger;
        if (s) {
            validaErroresCBK(d.root.Detalle);
            cerrarModal();
            sessionStorage.setItem('id', d.root.id);
            Moduls.getBody().load({ url: 'content/game/panelprincipal.html', script: true });
        } else validaErroresCBK(d.root||d);
    }
}