var intro = class {
    constructor (mod, obj) {
        console.log('intro.js -> constructor');
        if (sessionStorage.getItem('id') !== "") {
            Moduls.getBody().load({ url: 'content/game/panelprincipal.html', script: true });
        } else {
            let modulo = mod;
            let object = obj;
            this.addEventos(modulo);
        }
    };

    addEventos () {
        $("button[name=entrada]").click(function(event){
            console.log('intro.js -> ha pulsado ' + this.value);
            switch (this.value) {
                case 'si':
                    Moduls.getBody().load({ url: 'content/game/registro.html', script: true });
                    break;
                case 'login':
                    break;
                case 'no':
                    window.location.href = 'https://duckduckgo.com/?q=granja+de+gallinas&iar=images&iax=images&ia=images';
            }
          }
        );
    }
}
