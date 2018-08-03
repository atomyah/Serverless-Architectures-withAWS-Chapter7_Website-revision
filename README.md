*第７章のvideo-controller.jsスクリプトはうごかーん*😭


わかりやすくするために教科書通りのmain.jsを使ってないので、まずクラシックな書き方にvideo-controller.jsを改造。
config.jsも使わず。

さらに、`var baseUrl = data.domain;`の部分、 
 これだとbaseUrl変数はhttps://s3.amazonaws.comとなり、
 The bucket you are attempting to access must be addressed using the specified endpoint.のエラー😭

エンドポイントを指し示す`var baseUrl = 'https://s3-ap-northeast-1.amazonaws.com';`にハードコード。


main.jsはauth.jsとファイル名変更。


***


Hey, video-controller.js script of Chapter7 doesn't work😭


I modified it to be a classic style, as I don't want to use main.js(`$.(document).ready(function()...`) in the textbook to understand simplily.
config.js also is gotten rid of.

Furthermore, by `var baseUrl = data.domain;` the variable baseUrl is "https://s3.amazonaws.com" which spits a error "the bucket you are attempting to access must be addressed using the specified endpoint."

Therefore hard coded it to `var baseUrl = 'https://s3-ap-northeast-1.amazonaws.com';`


Lastly, just renamed main.js to auth.js.




