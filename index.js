function genMath(options){
    let sign ='+'
    if(options.sign === '*')
        sign = '*'
        else if(options.sign ===  '/')
            sign = '/'
            else if(options.sign === '-')
            sign = '-'

    if(!options.a || !options.b)
    return 0;

    return eval(options.a + sign + options.b)
}

module.exports.genMath = genMath