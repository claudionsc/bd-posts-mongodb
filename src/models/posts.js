import Mongoose from 'mongoose'

const schema = new Mongoose.schema({
    title: {
        type: String,
        required: [true, 'Adicione um título']
    },
    content:{ 
        type: String,
        required: [true, 'Adicione o conteúdo']
    },
    autor: {
        type: String,
        required: [true, 'Adicione o autor']
    }
}, {
    publishDate: { createdAt: true, updatedAt: true  },
    toJSON: {
        virtuals: true,
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
        }
    },
    versionKey: false,
})

const PostsModel = Mongoose.model('Posts', schema)

export default PostsModel