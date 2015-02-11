Songs = new Mongo.Collection('songs');
Songs.initEasySearch(['title', 'artist'], {
	'limit' : 20,
	'use' : 'mongo-db'
});

if (Meteor.isServer) {
	Meteor.startup(function () {
		if (Songs.find().count() === 0) {
			Songs.insert({ title: 'I Believe in a Thing Called Love', artist: 'The Darkness', lastYearPlayed: 2015 });
		}
	});
}