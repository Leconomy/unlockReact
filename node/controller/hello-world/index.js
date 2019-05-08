module.exports = async (ctx) => {
	await ctx.render('app', {
		title: 'hello-world',
		page: 'hello-world'
	});
}