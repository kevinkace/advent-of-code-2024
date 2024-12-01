module.exports = {
    extends       : "arenanet",
    parserOptions : {
        ecmaVersion : "latest",
        sourceType  : "module"
    },
    overrides : {
        files         : [ ".eslintrc.js" ],
        parserOptions : {
            sourceType : "commonjs"
        }
    }

};
