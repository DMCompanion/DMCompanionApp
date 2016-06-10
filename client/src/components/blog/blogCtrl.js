angular.module('companion')
  .controller('blogCtrl', ($scope, $http, $ionicModal, blogSvc, adminSvc, $ionicPopup, $timeout, $stateParams) => {

    $ionicModal.fromTemplateUrl('templates/blogModal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $ionicModal.fromTemplateUrl('templates/editBlogModal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.editModal = modal;
    });

    $scope.edit = (blog) => {
      console.log('blog', blog);
      $scope.copyOfBlog = blog;
    }

    $scope.showConfirm = (id) => {
      let confirmPopup = $ionicPopup.confirm({
        title: 'DELETE',
        template: 'Are you sure you want to delete this?'
      });

      confirmPopup.then((res) => {
        if(res) {
          blogSvc.deleteDeal(id)
          .then((response) => {
            $state.transitionTo($state.current, $state.$current.params, { reload: true, inherit: true, notify: true });
            console.log(response);
          });
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };

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
          $state.transitionTo($state.current, $state.$current.params, { reload: true, inherit: true, notify: true });
          console.log(response);
        });
    };
    $scope.updateBlog = (id, upBlog) => {
      blogSvc.editBlog(id, upBlog)
        .then((response) => {
          $state.transitionTo($state.current, $state.$current.params, { reload: true, inherit: true, notify: true });
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
