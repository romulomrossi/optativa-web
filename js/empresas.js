$(function () {
	var source   = $("#empresas-template").html();
	var template = Handlebars.compile(source);
	var context = {"empresa":[
					{
						"name": "Hub2b", 
						"imgName": "hub2b.png",
						"ramo": "This is my first post!",
						"cidade": "Chapecó (SC)",
						"descricao": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ",
						"url": "www.hub2b.com.br"
				    },
				    {	"name": "Asus", 
						"imgName": "asus.png",
						"ramo": "This is my first post!",
						"cidade": "Chapecó (SC)",
						"descricao": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
						"url": "www.asus.com.br"
				    },
				    {	"name": "Fictícia", 
						"imgName": "a.png",
						"ramo": "This is my first post!",
						"cidade": "Chapecó (SC)",
						"descricao": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ",
						"url": "www.ficticia.com.br"
				    },
				    {	"name": "Eccosys", 
						"imgName": "eccosys.png",
						"ramo": "This is my first post!",
						"cidade": "Chapecó (SC)",
						"descricao": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ",
						"url": "www.Eccosys.com.br"
				    },
				    {
						"name": "Carrefour", 
						"imgName": "carrefour.png",
						"ramo": "This is my first post!",
						"cidade": "Chapecó (SC)",
						"descricao": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ",
						"url": "www.carrefour.com.br"
				    },
				    {
						"name": "DentalOffice", 
						"imgName": "dental.png",
						"ramo": "This is my first post!",
						"cidade": "Chapecó (SC)",
						"descricao": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ",
						"url": "www.dentaloffice.com.br"
				    },
				    {
						"name": "Fácil Software", 
						"imgName": "facil.png",
						"ramo": "This is my first post!",
						"cidade": "Chapecó (SC)",
						"descricao": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ",
						"url": "www.facil-soft.com.br"
				    },
				    {
						"name": "DawnFarm", 
						"imgName": "dawn.png",
						"ramo": "This is my first post!",
						"cidade": "Chapecó (SC)",
						"descricao": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ",
						"url": "www.Dawnfarm.com.br"
				    }]
				};
	var html = template(context);
	$("#template").html(html);	
})
