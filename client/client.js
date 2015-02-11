if (Meteor.isClient) {
	Template.search.created = function() {
		this.autorun(function() {
			var instance = EasySearch.getComponentInstance({ index: 'songs'});
			instance.on('autosuggestSelected', function(values) {

			});
		});
	};
}