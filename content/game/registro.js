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
        validaErroresCBK(d.root||d);
    }
}