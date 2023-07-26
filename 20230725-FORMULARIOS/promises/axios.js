window.axios = {
  get: function (url) {
    return new Promise(function (resolve, reject) {
      const request = new XMLHttpRequest();
      request.open("GET", url);
      request.onload = function () {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.send();
    });
  },
};
