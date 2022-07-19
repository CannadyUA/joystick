  // Объявление переменных
var degree,
	color,
	colorS = 50,
	colorL = 50;
// Цвет при загрузке	
$(document).ready(function() {
	degree = 1,
	colorS = 50,
	colorL = 50;
	color = "hsl("+degree+", "+colorS+"%, "+colorL+"%)";
	$('#rotate').css({'fill' : color});
	$('#joy').css({'fill' : color});
})



// Управление джойстиком
var svgElement = document.querySelector('#mix-color');
var rotateColor = document.querySelector('#rotate');
var svgPoint;
// Перевод координат курсора в координаты SVG
function getCursorPosition(event, svgElement) {
  var svgPoint = svgElement.createSVGPoint();

	svgPoint.x = event.clientX;
	svgPoint.y = event.clientY;

	return svgPoint.matrixTransform(svgElement.getScreenCTM().inverse());
}




	

$('#joy').mousedown(function(e) {
	$('#joy').mousemove(function(e) {
		var cursor = getCursorPosition(e, svgElement),
			colorS = cursor.x *1.79 - 20 ,
			colorL = (70 - cursor.y)*1.79;
			color = "hsl("+degree+", "+colorS+"%, "+colorL+"%)";

		$('#joy').css({
			'cx' : cursor.x,
			'cy' : cursor.y,
			'fill' : color,
			'stroke-width' : 0,
			'transition' : '0s'
		})

		// console.log(colorS+"/"+ colorL);
	})
})

$('#joy').mouseup(function() {
	$('#joy').off('mousemove');
	$('#joy').css({'cx' : '50%'});
	$('#joy').css({'cy' : '50%'});
	$('#joy').css({'stroke-width' : '0.5%'});
	$('#joy').css({'transition' : '0.2s'});
	$('#rotate').css({'fill' : color});
});


// Изменение цвета диска при повороте
$('#rotate').mousedown(function(event){
	$('#rotate').mousemove(function(event){
		var disk = document.querySelector('#rotate'),
			diskCoor = disk.getBoundingClientRect(),

			// Определение центра диска
			center_x = (diskCoor.left + diskCoor.right) / 2,
			center_y = (diskCoor.top + diskCoor.bottom) / 2,

			// Определение координат мыши
			mouse_x = event.pageX,
			mouse_y = event.pageY,

			// Определение угла поворота диска
			radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
			// Цвет диска	
			color = "hsl("+degree+", 50%, 50%)";
			degree = Math.round((radians * (180 / Math.PI) ) + 250);
			// Изменение цвета
			$('#rotate').css({'fill' : color});
			$('#joy').css({'transition' : '0s'});
			$('#joy').css({'stroke-width' : '0'});
			var srotate = 'rotate(-' + degree + 'deg)';
			$('#rotateGrad').css({
				'transform' : srotate,
				'transform-origin' : '50% 50%'
				})
			});
		
		});

// Функция для выбора цвета вращением
// Действие при отпущеной кнопке мыши
$('#rotate').mouseup(function() {
	var srotateMinus = "rotate(1deg)",
	color = "hsl("+degree+", 50%, 50%)";
	$('#rotate').off('mousemove');
	$('#rotateGrad').css({
		"transform" : srotateMinus,
		"transform-origin" : "50% 50%"
	});
	$('#joy').css({'stroke-width' : '0.5%'});
	$('#joy').css({'fill' : color});
});



	// svgElement.addEventListener('mousedown', function(e) {
	// 	svgElement.addEventListener('mousemove', function(e) {
	// 		var cursor = getCursorPosition(e, svgElement);
	// 		console.log(cursor);
	// 	}, false);
	// }, false);


	






// $( "#joy" )
//   .mouseup(function() {
//   	$('#joy').off('mousemove');
//     $("#joy").css({ cx:'svgPoint.x'});
//     $("#joy").css({ cy:'svgPoint.y'});
//     console.log( "Mouse up" );
//   })
//   .mousedown(function(event) {
  
//   $( "#joy" ).mousemove(function( event ) {
//  // var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
//  //  var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
//   $("#joy").css({ cx:'svgPoint.x'});
//   $("#joy").css({ cy:'svgPoint.y'});
   
// //  console.log( "( event.pageX, event.pageY ) : " + pageCoords );
// // console.log( "( event.clientX, event.clientY ) : " + clientCoords );
// });
//      // console.log( "Mouse down" );
//   });
      			