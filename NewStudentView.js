var NewStudentView = Backbone.View.extend({
	
    initialize: function () { 
	  
        this.template = $("#person_input_tmp").html(),	
		
        this.render();
    },

    render: function () {	    
	    $("#main").html(this.template); 
		
        $("#save").on("click", this.addStudent);
		$("#back").on("click", this.goBack);
	},
    
	addStudent: function () {
	    this.model = new Person(),
		    values = {},	    
            $inputs = $("#person_input").find("input"),
			key = [];
			
	    _.each($inputs, function(input, i) {
		    key[i] = input.id;
			values[key[i]] = input.value;
		});	
        
		
	    this.model.set(values);
		console.log(this.model);
	    $("#person_input").remove();
		mediator.pub("NewStudentView:add", this.model);
		
	    mediator.pub("NewStudentView:back", this.model);
	},

    goBack: function () {
	    $("#person_input").remove();	
		mediator.pub("NewStudentView:back", {el:$("#main")});	 
	}

}); 