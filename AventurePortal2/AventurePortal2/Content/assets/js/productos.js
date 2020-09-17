window.addEventListener('load', function(){
	new Glider(document.querySelector('#productocarrusel1'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '#indicadoresproducto1',
		arrows: {
			prev: '#ant-producto1',
			next: '#sig-producto1'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});



window.addEventListener('load', function(){
	new Glider(document.querySelector('#productocarrusel2'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '#indicadoresproducto2',
		arrows: {
			prev: '#ant-producto2',
			next: '#sig-producto2'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});