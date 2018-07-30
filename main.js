		var btn = document.getElementById('btn1');
		
		btn.addEventListener('click',function(){
			var todoinput = document.getElementById('txtItem').value;
			var result = document.getElementById('result');
			console.log(todoinput);
			if(todoinput!== ''){
				//var todo = document.createElement('LI');
				//todo.innerHTML = todoinput + '<button>X</button>';
				//result.appendChild(todo);
				result.innerHTML += '<LI class="listitem">' + todoinput + '<button>X</button>' + '</LI>';
				document.getElementById('txtItem').value='';
			}else {
				alert('請輸入值');
			}
		});
		result.addEventListener('click', function(e){
			result.removeChild(e.target.parentNode);
		});