angular.module('companion')
.service('blogSvc', function ($http) {

  // CRUD BLOGS
  this.getBlogs = () => {
    return $http({
      method: 'GET',
      url: 'http://192.168.0.214:8006/api/v1/blogs'
    }).then((response) => {
      return response;
    });
  };

  this.createBlog = (blog) => {
    return $http({
      method: 'POST',
      url: 'http://192.168.0.214:8006/api/v1/blog',
      data: blog
    });
  };

  this.editBlog = (id, upBlog) => {
    return $http({
      method: 'PUT',
      url: 'http://192.168.0.214:8006/api/v1/blog/' + id,
      data: upBlog
    }).then((response) => {
        return response;
    });
  };

  this.deleteBlog = (id) => {
    return $http({
      method: 'DELETE',
      url: 'http://192.168.0.214:8006/api/v1/blog/' + id
    }).then((response) => {
      return response;
    });
  };

});
