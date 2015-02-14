Meteor.startup(function () {
	if (Songs.find().count() === 0) {
		Songs.insert({ title: 'Africa', artist: 'Toto', lastYearPlayed: 2014 });
	}
});

