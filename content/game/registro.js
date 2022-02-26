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
        validaErroresCBK(d.root.Detalle||d);
        if (s) {
            sessionStorage.setItem('id', d.root.id);
            Moduls.getBody().load({ url: 'content/game/panelprincipal.html', script: true });
        }
    }
}