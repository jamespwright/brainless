var MainView = Backbone.View.extend({

    events: {
        "click a.button": "button_clicked"
    },

    id: "MainView",

    initialize: function() {
        this.template = _.template($("#MainViewTemplate").html());
        console.log(this.template());
    },

    render: function() {
        $(this.el).html(this.template());
        console.log($(this.el));
        return this;
    },

    button_clicked: function(e) {
        e.preventDefault(); // This stops the normal link click from happening

        console.log(e.currentTarget.hash);
        if ( e.currentTarget.hash === "#login" ) {
            navigator.pushView(LoginView);
        } else if ( e.currentTarget.hash === "#record" ) {
            chrome.tabs.executeScript(null, { code: "record();" });
            window.close();
        }
    }
});

var LoginView = Backbone.View.extend({

    id: "LoginView",

    initialize: function() {
        this.template = _.template($("#LoginViewTemplate").html());
    },

    render: function() {
        $(this.el).html(this.template());
        return this;
    }

});