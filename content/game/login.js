var login = class {
    constructor (mod, obj) {
        console.log('login.js -> constructor');
        let modulo = mod;
        let object = obj;
        this.addEventos(modulo);
    };

    addEventos () {

    };

    login (s,d,e) {
        if (s) {
            validaErroresCBK(d.root, 1000);
            cerrarModal();
            sessionStorage.setItem('id', d.root.id);
            Moduls.getBody().load({ url: 'content/game/panelprincipal.html', script: true });
        } else validaErroresCBK(d.root||d);
    }
}