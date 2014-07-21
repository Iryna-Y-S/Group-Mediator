var GroupController = Backbone.View.extend({
	
	collection: new Group(),
	
    initialize: function () {
		this.render();	
		mediator.sub("StudentEditView:back", this.render, this);
		mediator.sub("StudentEditView:save", this.render, this);
		mediator.sub("NewStudentView:add", this.addToGroup, this.model);
	    mediator.sub("NewStudentView:back", this.render, this);
	},
	
	render: function () {
	    this.$el.html("<p>Group Dp-056-UI</p>");
	    this.$el.append("<ul></ul>");
		this.collection.each(this.renderOne, this);
		this.$el.append("<button>Add New Student</button>");
		$("button").on("click", this.addStudent);
	},
	
	renderOne: function (person) {
	    var  student_view = new PersonController({model: person});
		$("ul").append(student_view.render());
	},
	
	addStudent: function () {
	    var new_student_view = new NewStudentView();
	},
	
	addToGroup: function () {
	    this.collection.add(this.model);
	    console.log(this.collection);
	}
	
});
