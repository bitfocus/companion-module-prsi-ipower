exports.getPresets = function (instanceLabel) {
    return [
        {
            category: 'Socket On',
            label: 'Switch Output 1',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '1',
                size: '44',
                color: 16777215

            },
            actions: [{
                action: 'switchOn',
                options: {
                	socketOn: '1',
                }
            }]
        },
        {
            category: 'Socket On',
            label: 'Switch Output 2',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '2',
                size: '44',
                color: 16777215

            },
            actions: [{
                action: 'switchOn',
                options: {
                	socketOn: '2',
                }
            }]
        },        
        {
            category: 'Socket On',
            label: 'Switch Output 3',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '3',
                size: '44',
                color: 16777215

            },
            actions: [{
                action: 'switchOn',
                options: {
                	socketOn: '3',
                }
            }]
        },        
        {
            category: 'Socket On',
            label: 'Switch Output 4',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '4',
                size: '44',
                color: 16777215

            },
            actions: [{
                action: 'switchOn',
                options: {
                	socketOn: '4',
                }
            }]
        },        
        {
            category: 'Socket On',
            label: 'Switch Output 5',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '5',
                size: '44',
                color: 16777215

            },
            actions: [{
                action: 'switchOn',
                options: {
                	socketOn: '5',
                }
            }]
        },        
        {
            category: 'Socket On',
            label: 'Switch Output 6',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '6',
                size: '44',
                color: 16777215

            },
            actions: [{
                action: 'switchOn',
                options: {
                	socketOn: '6',
                }
            }]
        },        
        {
            category: 'Socket On',
            label: 'Switch Output 7',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '7',
                size: '44',
                color: 16777215

            },
            actions: [{
                action: 'switchOn',
                options: {
                	socketOn: '7',
                }
            }]
        },        
        {
            category: 'Socket On',
            label: 'Switch Output 8',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '8',
                size: '44',
                color: 16777215

            },
            actions: [{
                action: 'switchOn',
                options: {
                	socketOn: '8',
                }
            }]
        },
        {
            category: 'Socket Off',
            label: 'Switch Output 1',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '1',
                size: '44',
                color: 16777215

            },
            actions: [{
                action: 'switchOff',
                options: {
                	socketOff: '1',
                }
            }]
        },
        {
            category: 'Socket Off',
            label: 'Switch Output 2',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '2',
                size: '44',
                color: 16777215

            },
            actions: [{
                action: 'switchOff',
                options: {
                	socketOff: '2',
                }
            }]
        },        
        {
            category: 'Socket Off',
            label: 'Switch Output 3',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '3',
                size: '44',
                color: 16777215

            },
            actions: [{
                action: 'switchOff',
                options: {
                	socketOff: '3',
                }
            }]
        },        
        {
            category: 'Socket Off',
            label: 'Switch Output 4',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '4',
                size: '44',
                color: 16777215

            },
            actions: [{
                action: 'switchOff',
                options: {
                	socketOff: '4',
                }
            }]
        },        
        {
            category: 'Socket Off',
            label: 'Switch Output 5',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '5',
                size: '44',
                color: 16777215

            },
            actions: [{
                action: 'switchOff',
                options: {
                	socketOff: '5',
                }
            }]
        },        
        {
            category: 'Socket Off',
            label: 'Switch Output 6',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '6',
                size: '44',
                color: 16777215

            },
            actions: [{
                action: 'switchOff',
                options: {
                	socketOff: '6',
                }
            }]
        },        
        {
            category: 'Socket Off',
            label: 'Switch Output 7',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '7',
                size: '44',
                color: 16777215

            },
            actions: [{
                action: 'switchOff',
                options: {
                	socketOff: '7',
                }
            }]
        },        
        {
            category: 'Socket Off',
            label: 'Switch Output 8',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '8',
                size: '44',
                color: 16777215

            },
            actions: [{
                action: 'switchOff',
                options: {
                	socketOff: '8',
                }
            }]
        },
        {
            category: 'Socket Latch On & Off',
            label: 'Toggle Output 1',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '1',
                size: '44',
                color: 16777215,
				latch: true
            },
            actions: [{
                action: 'switchOn',
                options: {
                	socketOn: '1',
                }
            }],
            release_actions: [{
                action: 'switchOff',
                options: {
                	socketOff: '1',
                }
            }]
        },
        {
            category: 'Socket Latch On & Off',
            label: 'Toggle Output 2',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '2',
                size: '44',
                color: 16777215,
				latch: true
            },
            actions: [{
                action: 'switchOn',
                options: {
                	socketOn: '2',
                }
            }],
            release_actions: [{
                action: 'switchOff',
                options: {
                	socketOff: '2',
                }
            }]
        },
        {
            category: 'Socket Latch On & Off',
            label: 'Toggle Output 3',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '3',
                size: '44',
                color: 16777215,
				latch: true
            },
            actions: [{
                action: 'switchOn',
                options: {
                	socketOn: '3',
                }
            }],
            release_actions: [{
                action: 'switchOff',
                options: {
                	socketOff: '3',
                }
            }]
        },
        {
            category: 'Socket Latch On & Off',
            label: 'Toggle Output 4',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '4',
                size: '44',
                color: 16777215,
				latch: true
            },
            actions: [{
                action: 'switchOn',
                options: {
                	socketOn: '4',
                }
            }],
            release_actions: [{
                action: 'switchOff',
                options: {
                	socketOff: '4',
                }
            }]
        },
        {
            category: 'Socket Latch On & Off',
            label: 'Toggle Output 5',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '5',
                size: '44',
                color: 16777215,
				latch: true
            },
            actions: [{
                action: 'switchOn',
                options: {
                	socketOn: '5',
                }
            }],
            release_actions: [{
                action: 'switchOff',
                options: {
                	socketOff: '5',
                }
            }]
        },
        {
            category: 'Socket Latch On & Off',
            label: 'Toggle Output 6',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '6',
                size: '44',
                color: 16777215,
				latch: true
            },
            actions: [{
                action: 'switchOn',
                options: {
                	socketOn: '6',
                }
            }],
            release_actions: [{
                action: 'switchOff',
                options: {
                	socketOff: '6',
                }
            }]
        },
        {
            category: 'Socket Latch On & Off',
            label: 'Toggle Output 7',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '7',
                size: '44',
                color: 16777215,
				latch: true
            },
            actions: [{
                action: 'switchOn',
                options: {
                	socketOn: '7',
                }
            }],
            release_actions: [{
                action: 'switchOff',
                options: {
                	socketOff: '7',
                }
            }]
        },
        {
            category: 'Socket Latch On & Off',
            label: 'Toggle Output 8',
            bank: {
                bgcolor: 0,
                style: 'text',
                text: '8',
                size: '44',
                color: 16777215,
				latch: true
            },
            actions: [{
                action: 'switchOn',
                options: {
                	socketOn: '8',
                }
            }],
            release_actions: [{
                action: 'switchOff',
                options: {
                	socketOff: '8',
                }
            }]
        }
    ]
}
    