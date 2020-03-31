new Vue({
	el: '#app',
	data: {
		email: 'Y-Suzuki@example.com'
	},
	// メソッド
	methods: {
		localEmail: function() {
			return this.email.split('@')[0].toLowerCase();
		}
	}
});