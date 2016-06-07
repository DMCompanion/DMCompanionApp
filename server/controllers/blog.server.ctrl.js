import Blog from '../models/blogModel';

module.exports = {

    postBlog: (req, res) => {
        Blog.create(req.body, (err, blog) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(blog);
            }
        });
    },
    getBlogs: (req, res) => {
        Blog.find(req.query).populate({
            path: 'postedBy',
            select: 'name profilePic'
        }).exec((err, blog) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(blog);
            }
        });
    },
    editBlog: (req, res) => {
        Blog.findByIdAndUpdate(req.params.id, req.body, (err, blog) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(blog);
            }
        });
    },
    deleteBlog: (req, res) => {
        Blog.findByIdAndRemove(req.params.id, (err, blog) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(blog);
            }
        });
    }

};
