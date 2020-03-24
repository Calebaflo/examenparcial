// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'App', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		
		{
		path: '/tienda/',
    	url: 'tienda.html',
    	name: 'tienda',
  		},
		
		{
		path: '/cheesecake/',
    	url: 'cheesecake.html',
    	name: 'cheesecake',
  		},
		
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
        
	]
});

// Export selectors engine
var $$ = Dom7;





 

