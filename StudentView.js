var PersonController = Backbone.View.extend({

	tagName: "li",
	
	template: _.template("<%= name %> <%= surname %> "),

    render: function () {
	    return this.$el.html(this.template(this.model.toJSON()));	
	},
	
	events: {
        "click": "editStudent"
    },
	
	editStudent: function () {
	    var editView = new StudentEditView({model: this.model});
		mediator.sub("StudentEditView:save", this.saveStudent, this);
	},
	
	saveStudent: function () {
	    var values = {},	    
            $inputs = $("#person_input").find("input"),
			key = [];
			
	    _.each($inputs, function(input, i) {
		    key[i] = input.id;
			values[key[i]] = input.value;
		});	
        console.log(this.model);
		
	    this.model.set(values);
		
		console.log(this.model.toJSON());
	}
});
