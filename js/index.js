(function(){
	"use strict";
	//Index
	angular.module("app")
	.controller('test',test);
	//funcion principal del index
	function test(){
		var vm=this;

		//Colores
		this.color=[{
				label:"Rojo",
				value:"red"
			},
			{
				label:"Azul",
				value:"Blue"
			},
			{
				label:"Rosa",
				value:"Pink"
			}];
		//BOTON CAMABIAR FONDO
		vm.changeColor=changeColor;

		function changeColor(colors){
			//alert(colors)
			vm.estilos={
				backgroundColor:colors
			}
		}
	}
})();

