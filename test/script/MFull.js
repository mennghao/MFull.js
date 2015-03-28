(function(){
	"use strict";
	var tagElements = function(parent, ele){
    	return parent.getElementsByTagName(ele);
	};
	var idElement = function(id){
    	return document.getElementById(id);
	};
	var MFull = (function(){
		var opts;
		return {
			init : function(){
				opts = this.setting();
				this.tar = tagElements(document,"body")[0];
				this.box = idElement(opts.box);
				this.event();
			},
			config : {
				xy :{
					x : 0,
					y : 0
				},
				zz : {
					x : 0,
					y : 0
				}
			},
			/**
			 * [default setting]
			 */
			setting : function(opt){
				var defaults = {
					tar : "body",
					box : "activity",
					type : "v", //c-横 || v -垂直
					len : 5
				};
				for (var i in opt) {
					defaults[i] = opt[i]
				};
				return defaults;
			},
			_getPageIndex : function(){
				return this.box.getAttribute("data-id");
			},
			handle : function(index, type){
				var _i = 1,
					_className = "show-";
				index -= 0;
				type === "up" ? index += _i : index -= _i;

				index < 0 && (index = 0);
				index > opts.len && (index = opts.len);


				this.box.className = "";
				this.box.className = _className + index;
				this.box.setAttribute("data-id", index);
			},
			/**
			 * [控制页面切换]
			 */
			page : function(){
				var _index = this._getPageIndex(),
					_type,
					_distance = 100; //划过距离

				opts.type === "v" ? _type = this.config.zz.y : _type = this.config.xy.x;

				(_type < -_distance && this.handle(_index, "up")) || (_type > _distance && this.handle(_index, "down"));
			},
			/**
			 * [bind event]
			 */
			event : function(){
				var That = this;
				this.tar.addEventListener("touchstart", function (e){
					start(e.touches[0].clientX, e.touches[0].clientY);
				});
				this.tar.addEventListener("touchmove", function (e){
					move(e.touches[0].clientX, e.touches[0].clientY);
				});
				this.tar.addEventListener("touchend", function (e){
					That.page();
				});

				var start = function(x, y){
					That.config.zz.y = 0;
					That.config.xy.x = x;
					That.config.xy.y = y;
				};
				var move = function(x, y){
					That.config.zz.x = x - That.config.xy.x;
					That.config.zz.y = y - That.config.xy.y;
				}
			}
		}
	}());
	window.MFull = MFull;
}());