$(window).load(function(){
	/*var audio = document.getElementById('bgAudio');
	audio.play();*/
	$('#egg').addClass('show');
	$("#ztt").show(function(){
		moveRight($(this),'10%',1);
		moveRight($(this),'20%',2);
		moveRight($(this),'30%',3);
		moveRight($(this),'40%',4);
		moveRight($(this),'50%',5);
		moveRight($(this),'60%',6);
		moveRight($(this),'80%',7);
		moveRight($(this),'90%',8);
		moveRight($(this),'100%',9);
		$(this).animate({left:'80%','margin-left':'-40px'},2000);
		$('#process-crt').animate({width:'100%'},2000,function(){
			$('#ztt img').attr("src","/public/images/smile-2.png");
			$('#cloud').animate({"margin-top":"-120px","opacity":'0'},1000,function(){
				$('#lightning').slideUp();
				$('#sun').animate({"opacity":"1","margin-top":"-300px"},1000,function(){
					$('#sun').addClass('spin');	
					$('.years-count').html("18");
					$('.years-count').removeClass('danger');
					$('.main-content').fadeOut(4000);
					$('.blessing').addClass('show');
				})
			})
		});

	});
	var moveRight = function(o,dis,i){
		o.animate({left:dis,'margin-left':'-40px'},4000);
		$("#process-crt").animate({width:dis},4000,function(){
			/*$('#blessing h2').html(i);*/
			$('#process-year-'+i).show(500);
			$('#process-point-'+i).show(500);
			if(i == 1){
				$('#coach').addClass('show');
				$('.years-count').html("1");
			}
			else if(i == 2){
				$('#bird').addClass('show');
				$('.years-count').html("2");
			}
			else if(i == 3){
				$('#tower').addClass('show');
				$('.years-count').html("3");
			}
			else if(i == 4){
				$('#bird_2').addClass('show');	
				$('.years-count').html("5");
			}
			else if(i == 5){
				$('.years-count').html("6");
				$('#bird_3').addClass('show');
			}
			else if(i == 6){
				$('#ztt img').attr("src","/public/images/plane_2.png");
				$('#ztt img').css("width","40px");
				$('.years-count').html("7");
			}
			else if(i == 7){
				$('#ztt img').css("width","80px");
				$('#ztt img').attr("src","/public/images/smile-1.png");
				$('#foot1').addClass('show');
				$('#foot2').addClass('show');
				$('#foot3').addClass('show');
				$('.years-count').html("18");
				$('#bird_4').addClass('show');
			}
			else if(i == 8){
				$('#cloud').fadeIn(1000);
				$('#ztt img').attr("src","/public/images/face-1.png");
				$('.years-count').html("19");
				$('.years-count').addClass('danger');
			}
			else if(i == 9){
				$('#streetlamp').addClass('show');
				$('#ztt img').attr("src","/public/images/face-2.png");
				$('.years-count').html("20");
				$('#lightning').slideDown();
			}
		});
	}
});