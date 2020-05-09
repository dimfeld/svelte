export default {
	props: {
		items: []
	},

	html: ``,

	test({ assert, component, target }) {
		assert.htmlEqual(target.innerHTML, `foo`);
	}
};
