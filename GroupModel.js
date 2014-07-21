var Group = Backbone.Collection.extend({

    model: Person,

    initialize: function () {
				
       this.add({
		    "name": "Александр",
            "surname": "Раджабов",
            "gender": "male",  			
			"date": "2.03.1989",
			"skype": "cosmopeon",
			"group": "Dp-056-UI"
			
		});
		
	    this.add({
		    "name": "Антон", 
			"surname": "Плешаков",
			"gender": "male", 
			"date": "5.02.1989",
			"skype": "plewakofff",
			"group": "Dp-056-UI"
		});
		
	    this.add({
		    "name": "Илья", 
			"surname": "Литвинов",
			"gender": "male",
            "date":	"12.07.1991",		
			"skype": "ilyaillich",
			"group": "Dp-056-UI"
		});
		
	    this.add({
		    "name": "Ирина", 
			"surname": "Соколенко",
			"gender": "female",
			"date":	"4.02.1987",	
			"skype": "aphrodite_i",
			"group": "Dp-056-UI"
		});
		
	    this.add({
		    "name": "Наталья", 
			"surname": "Иванова",
			"gender": "female", 
			"date": "1.01.1991",
			"skype": "lisentia_dp",
			"group": "Dp-056-UI"
		});	

    }
	
	
});	    
