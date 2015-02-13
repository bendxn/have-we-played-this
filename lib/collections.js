Songs = new Meteor.Collection('songs');
Songs.initEasySearch(['title', 'artist'], {
	'limit' : 20
});

if (Meteor.isClient) {
	Meteor.subscribe('songs');
}