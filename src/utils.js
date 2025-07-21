export const GetTokenFunc = () => {
    var cookies = document.cookie.split("; ");
  
    var bearerToken;
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      if (cookie.startsWith("Bearer=")) {
        bearerToken = cookie.substring("Bearer=".length);
        break;
      }
    }
    return bearerToken;
  };
  
//   await login(data, {
//     onSuccess: (res) => {
//       navigate("/chat");
//       cookie.set("Bearer", res.data.token);
//       toast.success("Login Successfully !");
//     },