var posts=["posts/c3f78667/","posts/68728ca3/","posts/0/","posts/83e63798/","posts/7b740b99/","posts/dd0654c3/","posts/4a17b156/","posts/1fd5e519/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };