angular.module("companion")
  .service("secretService", function() {
    this.getSecretKey = () => {
      return "AIzaSyDo3368zYLiBFFqX1ksEsY8Ag0K-gtInqc";
    }
  });
