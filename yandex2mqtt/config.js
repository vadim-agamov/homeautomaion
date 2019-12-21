module.exports = {

	mqtt: {
		host: 'localhost',
		port: 1883,
		user: '',
		password: ''
	},

	https: {
		privateKey: '/home/vadim/code/yandex2mqtt/node-key.pem',
		certificate: '/home/vadim/code/yandex2mqtt/certificate.pem',
		port: 443
	},

	clients: [{
		id: '1',
		name: 'Yandex',
		clientId: 'yandex-smarthome-coconuts255',
		clientSecret: '9FwCbbqHVz',
		isTrusted: false
	}, ],

	users: [{
		id: '1',
		username: 'admin',
		password: 'admin',
		name: 'Administrator'
	}, {
		id: '2',
		username: 'root',
		password: 'root',
		name: 'Administrator2'
	}, {
		id: '3',
		username: 'vadim',
		password: 'vadim',
		name: 'Administrator3'
	}],

	devices: [{
			name: 'Свет',
			room: 'Гостиная',
			type: 'devices.types.light',
			mqtt: [{
				type: 'on',
				set: '/devices/yandex/controls/light0/on', // топик управления
				stat: '/devices/yandex/controls/light0' // топик статуса
			}, ],
			capabilities: [{
				type: 'devices.capabilities.on_off',
				retrievable: true,
				state: {
					instance: 'on',
					value: true
				}
			}, ]
		},

		{
			name: 'Лампа',
			room: 'Кухня',
			type: 'devices.types.light',
			mqtt: [{
				type: 'on',
				set: '/devices/yandex/controls/light1/on', // топик управления
				stat: '/devices/yandex/controls/light1' // топик статуса
			}, ],
			capabilities: [{
				type: 'devices.capabilities.on_off',
				retrievable: true,
				state: {
					instance: 'on',
					value: true
				}
			}, ]
		},

		{
			name: 'Свет',
			room: 'Прихожая',
			type: 'devices.types.light',
			mqtt: [{
				type: 'on',
				set: '/devices/yandex/controls/light2/on', // топик управления
				stat: '/devices/yandex/controls/light2' // топик статуса
			}, ],
			capabilities: [{
				type: 'devices.capabilities.on_off',
				retrievable: true,
				state: {
					instance: 'on',
					value: true
				}
			}, ]
		},

		{
			name: 'Свет',
			room: 'Ванная',
			type: 'devices.types.light',
			mqtt: [{
				type: 'on',
				set: '/devices/yandex/controls/light3/on', // топик управления
				stat: '/devices/yandex/controls/light3' // топик статуса
			}, ],
			capabilities: [{
				type: 'devices.capabilities.on_off',
				retrievable: true,
				state: {
					instance: 'on',
					value: true
				}
			}, ]
		},

		{
			name: 'Свет',
			room: 'Спальня',
			type: 'devices.types.light',
			mqtt: [{
				type: 'on',
				set: '/devices/yandex/controls/light5/on', // топик управления
				stat: '/devices/yandex/controls/light5' // топик статуса
			}, ],
			capabilities: [{
				type: 'devices.capabilities.on_off',
				retrievable: true,
				state: {
					instance: 'on',
					value: true
				}
			}, ]
		},

		{
			name: 'Свет',
			room: 'Холл',
			type: 'devices.types.light',
			mqtt: [{
				type: 'on',
				set: '/devices/yandex/controls/light7/on', // топик управления
				stat: '/devices/yandex/controls/light7' // топик статуса
			}, ],
			capabilities: [{
				type: 'devices.capabilities.on_off',
				retrievable: true,
				state: {
					instance: 'on',
					value: true
				}
			}, ]
		},

		{
			name: 'Свет',
			room: 'Кухня',
			type: 'devices.types.light',
			mqtt: [{
				type: 'on',
				set: '/devices/yandex/controls/light9/on', // топик управления
				stat: '/devices/yandex/controls/light9' // топик статуса
			}, ],
			capabilities: [{
				type: 'devices.capabilities.on_off',
				retrievable: true,
				state: {
					instance: 'on',
					value: true
				}
			}, ]
		},

		{
			name: 'Свет',
			room: 'Лестница',
			type: 'devices.types.light',
			mqtt: [{
				type: 'on',
				set: '/devices/yandex/controls/light10/on', // топик управления
				stat: '/devices/yandex/controls/light10' // топик статуса
			}, ],
			capabilities: [{
				type: 'devices.capabilities.on_off',
				retrievable: true,
				state: {
					instance: 'on',
					value: true
				}
			}, ]
		},

		{
			name: 'Свет',
			room: 'Детская',
			type: 'devices.types.light',
			mqtt: [{
				type: 'on',
				set: '/devices/yandex/controls/light11/on', // топик управления
				stat: '/devices/yandex/controls/light11' // топик статуса
			}, ],
			capabilities: [{
				type: 'devices.capabilities.on_off',
				retrievable: true,
				state: {
					instance: 'on',
					value: true
				}
			}, ]
		},

		{
			name: 'Радиатор',
			room: 'Ванная',
			type: 'devices.types.thermostat',
			mqtt: [{
				type: 'on',
				set: '/devices/yandex/controls/bath_thermostat/temp', // топик управления
				stat: '/devices/yandex/controls/bath_thermostat' // топик статуса
			}, ],
			capabilities: [{
				"type": "devices.capabilities.range",
				"retrievable": true,
				"parameters": {
					"instance": "temperature",
					"random_access": true,
					"range": {
						"max": 25,
						"min": 18,
						"precision": 1
					},
					"unit": "unit.temperature.celsius"
				}
			}]
		}
	]
}
