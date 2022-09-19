import PostsModel from "../models/posts";

const userRoute = (app) => {

    app.route('/posts/:id?')
        .get(async (req, res) => {
            const { id } = req.params
            const query = {};

            if (id) {
                query._id = id
            }

            try {

                const posts = await PostsModel.find(query)
                res.send({ posts })
            } catch (error) {
                res.status(400).send({ error: 'Falha ao encontrar post'})
            }
        })
}

module.exports = userRoute