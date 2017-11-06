function blockUI(){
	$('body').append('<div class="blockUI-overlay" style="position: fixed;width: 100%;height: 100vh;top: 0;background: rgba(0, 0, 0, 0.34);cursor: progress;"></div>');
}
function removeblockUI(){
	$('.blockUI-overlay').remove();
}

//Call anywhere in your file with ajax request

$(document).on('click','.yourClassname',function(){
  blockUI();
  $.ajax({
		url:'www.example.com/filenamehere',
		type:'get/post',
		success:function(data){
      console.log(data);
			removeblockUI();
		},
		error:function(){
			removeblockUI();
			console.log("Something Wrong.");
		},
	});
});
