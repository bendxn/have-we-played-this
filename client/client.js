Template.list.helpers({
	songs: function() { return Songs.find({}, { sort: [['lastYearPlayed', 'desc'], ['artist'], ['title']] }); }
});