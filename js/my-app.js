// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Flower app',
	dialog: {
		title: 'Flower app',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/about/',
    	url: 'about.html',
    	name: 'about',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/bonche/',
    	url: 'bonche.html',
    	name: 'bonche',
  		},
		{
		path: '/about2/',
    	url: 'about2.html',
    	name: 'about',
  		},
	]
});

// Export selectors engine
var $$ = Dom7;


$$('#btnAlerta').on('click',function(){
	app.dialog.alert('Hola Diseño Web 2 ♠');	
});























 

