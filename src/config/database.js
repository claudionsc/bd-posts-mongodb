import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const config = {
    uri: 'mongodb://localhost:27017/node-mongoose',
    options: {
        useNewUrlParser: true,
        useFindAndModify: false,
    }
}

mongoose.connection.on('open', () => {
    console.log('Conectado com sucesso!!')
})

mongoose.connect.on('error', () => {
    throw new Error('Falha!')
})

export default {
    connect: () => mongoose.connect(config.uri, config.options)
}