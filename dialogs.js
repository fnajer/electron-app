const { dialog, app, nativeImage } = require('electron');

module.exports = {
	showMessage,
};

function showMessage(browserWindow) {
	dialog.showMessageBox(browserWindow, {
		type: 'info',
		icon: nativeImage.createFromPath('./kitten.jpg'),
		message: 'Hello',
		detail: 'Just a friendly meow.',
		buttons: ['Meow', 'Close'],
		defaultId: 0,
	}, (clickedIndex) => {
		console.log(clickedIndex);
	});
}