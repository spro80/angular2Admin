System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Categoria;
    return {
        setters:[],
        execute: function() {
            Categoria = (function () {
                function Categoria(id_categoria, des_categoria, vigencia_categoria) {
                    this.id_categoria = id_categoria;
                    this.des_categoria = des_categoria;
                    this.vigencia_categoria = vigencia_categoria;
                }
                return Categoria;
            }());
            exports_1("Categoria", Categoria);
        }
    }
});
//# sourceMappingURL=categoria.js.map