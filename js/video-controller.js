  var config = {
      apiBaseUrl: 'https://k29gl6w9kl.execute-api.ap-northeast-1.amazonaws.com/dev' // API GatewayのURL
  };

  getVideoList();


	function getVideoList() {
		var url = config.apiBaseUrl + '/videos?encoding=' + encodeURIComponent('720p');

    console.log(url);

    $.get(url, function(data, status){
        console.log("Data Loaded: " + data + " ,and Status Loaded: " + status);

        updateVideoFrontpage(data);
    })


  }

	function updateVideoFrontpage(data) {
    console.log('属性で渡されたdata: ' + data);
//		var baseUrl = data.domain; // これだとbaseUrlはhttps://s3.amazonaws.comとなり、
//    The bucket you are attempting to access must be addressed using the specified endpoint.のエラーだす。
    var baseUrl = 'https://s3-ap-northeast-1.amazonaws.com';
		var bucket = data.bucket;

    console.log(baseUrl); // https://s3-ap-northeast-1.amazonaws.com
    console.log(bucket); // p332-serverless-video-transcoded


		for (var i = 0; i < data.files.length; i++) {
				var video = data.files[i];

				var clone = $('#video-template').clone().attr('id', 'video-' + i);

				clone.find('source')
						 .attr('src', '' + baseUrl + '/' + bucket + '/' + video.filename);

				$('#video-list').prepend(clone);
		}

	}
