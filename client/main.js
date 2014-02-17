Template.main.events = {
	'click #contribute':
	function(){
		$('.subscribe').focus();
	},
	'click .nav-home': function(evt){
		processNavbar(evt);
	},
	'click .nav-how': function(evt){
		processNavbar(evt);
	},
	'click .nav-why': function(evt){
		processNavbar(evt);
	},
	'click .nav-what': function(evt){
		processNavbar(evt);
	},
	'click .nav-join': function(evt){
		processNavbar(evt);
	},
	'click .to-sign-up': function(){
		$('.subscribe').focus();
	},
	'click #submit': function(){
		var email = $('.subscribe').val();
		Meteor.call("store_email", email);
	}
}

Meteor.settings = {
  "public" : {
    "ga": {
      "account":"UA-XXXXXXX-Y"
    }
  }
}

Template.main.rendered = function(){
    GAnalytics.pageview();
}

Template.main.created = function(){
	Session.set('navbar-setting', 'home');
}

processNavbar = function(evt){
	$(evt.target).parent().parent().find('li').each(function(itr, val){$(val).removeClass('active');})
	$(evt.target).parent().addClass('active');
	console.log($(evt.target).parent());
}

