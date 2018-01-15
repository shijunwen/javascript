	//计算滚动条
		function getScrollOffset(){
			if(window.pageXOffset){
				return{
					x:window.pageXoffset,
					y:window.pageYoffset
				}
			}else{
				return{
					x:document.body.scrollLeft+document.documentElement.scorllLeft,
					y:document.body.scrollTop+document.documentElement.scrollTop
				}
			}
		}
		
		//计算可视窗口屏幕
		function getViewportOffset(){
			if(window.innerWidth){
				return{
					w:window.innerWidth,
					h:window.innerHeight

				}	
				}else{
					return{
						w:document.documentElement.clientWidth,
						h:document.documentElement.clientHeight
					}
			}
		}