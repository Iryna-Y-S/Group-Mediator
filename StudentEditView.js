var StudentEditView = Backbone.View.extend({
	
    initialize: function () { 
        this.template = $("#person_input_tmp").html(),	
        this.render();
    },

    render: function () {	    
	    $("#main").html(this.template); 
		
        $("#save").on("click", this.saveStudent);
		$("#back").on("click", this.goBack);
	},
    
	saveStudent: function () {
	
	    $("#person_input").remove();
		mediator.pub("StudentEditView:save", this.model);
	    mediator.pub("StudentEditView:back", this.model);
	},

    goBack: function () {
	    $("#person_input").remove();	
		mediator.pub("StudentEditView:back", {el:$("#main")});	 
	}
	
});