module.exports={
    mode:'development',
    context:__dirname+'/app',
    entry:{
        app: './app.js'
    },
    output:{
        path:__dirname+'/dist',
        filename:'[name].bundle.js'
    }
}