module.exports = {
	test_db_dbUrl: 'Student_Profile:<Student_Profile>@student.nwta3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    publicPath: '../client/build',
	port: process.env.NODE_PORT || 3000,
    tokenSecret: 'Insert Your Secret Token',
    api: process.env.NODE_API != null ? process.env.NODE_API : '/api'
}