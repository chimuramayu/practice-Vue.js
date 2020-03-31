// 望ましくないコード
// new Vue({
// 	el: '#app',
// 	data: {
// 		email: 'Y-Suzuki@example.com'
// 	}
// });

new Vue({
	el: '#app',
	data: {
		email: 'Y-Suzuki@example.com'
	},
	//　算出プロパティ
	computed: {
		localEmail: function() {
			return this.email.split('@')[0].toLowerCase();
		}
	}
});
