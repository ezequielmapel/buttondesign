
	var title = $('#titlec');
		title.click(()=>{
			title.css({border: '1px solid red'});

			var html = `<div contenteditable id="inptitle">Novo Cod</div>`;
			title.html(html);

			title.prop("onclick", null).off("click");
		});

		var valueVal = $('#valueVal');
		valueVal.click(()=>{
			valueVal.css({border: '1px solid red'});

			var html = `<span contenteditable id="valueVal">00</span>`;
			valueVal.html(html);

			valueVal.prop("onclick", null).off("click");
		});

		var fixedbar = $('#fixedbar');
		var btnloading = $('#btnloading');
		var loader = $('#loader');

		var circlefixed = $('.circlefixed');
		var circleprogress = $('.circleprogress');
		var bar = $('#bar');

		btnloading.click(()=>{
			btnloading.css({'animation': 'btnAnimation  3s'});
			loader.css({'animation': 'bgloader 3s ', 'display':'block'});
			fixedbar.css({'animation': 'fixedbar 3s ', 'display':'block'});

			circleprogress.css({'display':'block'});
			circlefixed.fadeIn(3000, ()=>{
			});

			
			
			
			
			setTimeout(()=>{
				
				bar.css({'animation':'progressbar 6s linear', 'display':'block'});
				
				setTimeout(()=>{bar.css({width:'188px'})}, 5900);
			
			}, 1500);
			
			setTimeout(()=>{
				btnloading.css({width: '40px','font-size': '0', 'border-radius': '50%'});
			}, 2900);
			setTimeout(()=>{
				loader.css({width: '220px'});
			}, 2900);
			setTimeout(()=>{
				fixedbar.css({width: '190px'});
			}, 2900);


			setTimeout(()=>{
				$('#btnall').css({'animation': 'fader 500ms linear'});
				setTimeout(()=>{
				btnloading.css({width: '100px','font-size': '20px', 'border-radius': '15px', 'animation':'none'});
				loader.css({width: '40px', display:'none'});
				fixedbar.css({width: '40px', display:'none'});
				bar.css({width: '40px', display:'none'});
				circlefixed.css({display:'none'});
				$('#btnall').css({'animation': 'none'});
				},400);
			}, 8000);

	});