(function(){
	"use strict";
	//Index
	angular.module("app",['firebase'])
	.controller('test',test);
	//funcion principal del index
	function test($firebase){
		var vm=this;
		var template= new Firebase('https://test-1ab46.firebaseio.com/Template')
		var fb=$firebase(template)
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

