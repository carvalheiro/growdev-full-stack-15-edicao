document.querySelector("button").addEventListener("click", function () {
  const promise1 = axios.get(
    "https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.mi.js"
  );
  promise1.then(function (response) {
    console.log(response);
    console.log(response.data);
    console.log(response.status);
    console.log(response.headers);
  });
  promise1.catch(function (error) {
    console.log(error);
  });

  // axios using callback instead of promises
});
