$(function(){
	var $comment = $('comment');
	$('.bigger').click(function(){
		if(!$comment.is(":animated")){
			if($comment.height()<500){
				$comment.animate({height:"+=50"},400)
			}
		}
		
	});
	$('.smaller').click(function(){
		if($comment.height()>50){
			$comment.height($comment.height()-50)
		}
	});
})

$("#CheckedRev").click(function(){
	$('[name=items]:checkbox').each(function(){
		this.checked = !this.checked;
	})
})

$('#add_all').click(function(){
	var $options = $('#select1 option');
	
	$options.appendTo('#select 2');
})

$('#select1').dblclick(function(){
	var $options = $('option:selected',this);
	$options.appendTo('#select 2');
})

$("form :input.required").each(function(){
	var $required = $("<strong class='high'>*</strong>");
	$(this).parent().append($required);
})

$('form :input').blur(function(){
	var $parent = $(this).parent();
	$parent.find(".formtips").remove();
	//验证用户名
	if($(this).is('#username')){
		if(this.value=="" || this.value.length<6){
			var  oMsg = "不正确";
			$parent.append('<span class="formtips onError">'+oMsg+'</span>')
		}else{
			var oMsg = "正确";
			$parent.append('<span class="formtips onSuccedd">'+oMsg + '</span>');
		}
	}
	if($(this).is('#email')){
		if(this.value=="" || (this.value!=""&&!(/.+@.+\.[a-zA-Z]{2,4}$/).test(this.value))){
			var  oMsg = "不正确";
			$parent.append('<span class="formtips onError">'+oMsg+'</span>')
		}else{
			var oMsg = "正确";
			$parent.append('<span class="formtips onSuccedd">'+oMsg + '</span>');
		}	
	}
}).keyup(function(){
	$(this).triggerHandler("blur");
}).focus(function(){
	$(this).triggerHandler("blur");
})

$("#send").click(function(){
	$('form :input').trigger("blur");
	var numErr = $('form .onError').length;
	if(numErr){
		return false;
	}else{
		alert("chenggong")
	}
})



 