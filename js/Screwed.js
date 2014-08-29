var Screwed;

Screwed = (function {
	
	var Screwed = function(client) {
		this.client = client;
		this.getItems();
	}

	Screwed.prototype.getItems = function() {
		this.client.getTable('item')
			.read()
			.done(function(data) {
				this.data = data;
			}.bind(this));
	}

	Object.setProperty(Screwed.prototype, "authenticated", {
		get: function() {
			return this.client.currentUser !== null;
		}
		set: function(){}
	})

	return Screwed;
})();