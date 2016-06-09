angular.module('companion')
  .controller('blogCtrl', ($scope, $http, $ionicModal, blogSvc, adminSvc) => {

    $ionicModal.fromTemplateUrl('templates/blogModal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // CRUD BLOG
    $scope.showBlog = () => {
      blogSvc.getBlogs()
        .then((response) => {
          console.log(response);
        });
    };

    $scope.addBlog = (blog) => {
      blogSvc.createBlog(blog)
        .then((response) => {
          console.log(response);

        });
    };

    $scope.updateBlog = (id, upBlog) => {
      blogSvc.editBlog(id, upBlog)
        .then((response) => {
          console.log(response);

        });
    };

    $scope.destroyBlog = (id) => {
      blogSvc.deleteBlog(id)
        .then((response) => {
          console.log(response);

        });
    };

  });
