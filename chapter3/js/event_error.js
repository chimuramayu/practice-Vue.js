new Vue({
	el: '#app',
	data: {
		path: './images/wings.jpg'
		// 正しい画像
		// path: './images/_wings.jpg'
	},
	methods: {
		onerror: function() {
			this.path = './images/noimage.jpg';
		}
	}
});