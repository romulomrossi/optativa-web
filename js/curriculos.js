$(function () {
	var source   = $("#planos-template").html();
	var template = Handlebars.compile(source);
	var context = {"plano":[
					{
						"name": "Ouro", 
						"imgName": "ouro.png",
						"num_vagas": "10",
						"num_entrevistas": "5",
						"valor": "R$ 59,90"
				    },
				    {	"name": "Prata", 
						"imgName": "prata.png",
						"num_vagas": "10",
						"num_entrevistas": "5",
						"valor": "R$ 59,90"
				    },
				    {	"name": "Bronze", 
						"imgName": "bronze.png",
						"num_vagas": "10",
						"num_entrevistas": "5",
						"valor": "R$ 59,90"
				    }]
				};
	var html = template(context);
	$("#template").html(html);	
});

$('.modal').modal({
  dismissible: false, // Modal can be dismissed by clicking outside of the modal
  opacity: 0.5, // Opacity of modal background
  inDuration: 300, // Transition in duration
  outDuration: 200, // Transition out duration
  startingTop: '4%', // Starting top style attribute
  endingTop: '10%', // Ending top style attribute
  ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
    console.log(modal, trigger);
  },
  complete: function() { alert('Parabéns, já recebemos seu cadastro, você receberá as próximas orientações em seu Email'); } // Callback for Modal close
});