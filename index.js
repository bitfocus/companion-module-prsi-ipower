var instance_skel = require('../../instance_skel')
var snmp = require('net-snmp')

// var feedback      = require('./feedback');
var presets = require('./presets')
var debug
var log

function instance(system, id, config) {
	var self = this

	// super-constructor
	instance_skel.apply(this, arguments)

	return self
}

instance.prototype.updateConfig = function (config) {
	var self = this
	self.config = config

	self.actions()
}

instance.prototype.init = function () {
	var self = this

	debug = self.debug
	log = self.log

	self.status(self.STATE_OK)
	self.presets()

	self.actions() // export actions
}

// Return config fields for web config
instance.prototype.config_fields = function () {
	var self = this
	return [
		{
			type: 'text',
			id: 'info',
			width: 12,
			label: 'Information',
			value: 'This module is for the iPower PDU products with SNMP control',
		},
		{
			type: 'textinput',
			id: 'communityRead',
			label: 'Community read string',
			width: 6,
			default: 'public',
		},
		{
			type: 'textinput',
			id: 'communityWrite',
			label: 'Community write string',
			width: 6,
			default: 'private',
		},
		{
			type: 'textinput',
			id: 'host',
			label: 'Device IP',
			width: 6,
			regex: self.REGEX_IP,
		},
		{
			type: 'textinput',
			id: 'port',
			label: 'SNMP port',
			width: 6,
			default: '161',
			regex: self.REGEX_PORT,
		},
	]
}

// When module gets deleted
instance.prototype.destroy = function () {
	var self = this

	debug('destroy', self.id)
}

instance.prototype.presets = function () {
	var self = this
	self.setPresetDefinitions(presets.getPresets(self.label))
}

instance.prototype.actions = function (system) {
	var self = this

	self.setActions({
		switchOn: {
			label: 'Set Output Socket On',
			options: [
				{
					type: 'textinput',
					label: 'Socket',
					id: 'socketOn',
					regex: self.REGEX_NUMBER,
					default: '1',
				},
			],
		},
		switchOff: {
			label: 'Set Output Socket Off',
			options: [
				{
					type: 'textinput',
					label: 'Socket',
					id: 'socketOff',
					regex: self.REGEX_NUMBER,
					default: '1',
				},
			],
		},
	})
}

instance.prototype.action = function (action) {
	var self = this
	const opt = action.options
	var cmdValue = 0

	// SNMP Options
	var snmp_options = {
		port: self.config.port,
		version: snmp.Version2c,
		backwardsGetNexts: true,
		idBitsSize: 32,
	}

	switch (action.action) {
		case 'switchOn': {
			outputValue = opt.socketOn
			cmdValue = 1
			break
		}
		case 'switchOff': {
			outputValue = opt.socketOff
			cmdValue = 0
			break
		}
		default:
			break
	}

	// Build oid and value for output socket
	var varbinds = [
		{
			oid: '1.3.6.1.4.1.38218.1.7.1.1.4.' + (outputValue - 1),
			type: snmp.ObjectType.Integer,
			value: cmdValue,
		},
	]

	// Create new session and send set command
	var snmp_session = snmp.createSession(self.config.host, self.config.communityWrite, snmp_options)
	snmp_session.set(varbinds, function (error, varbinds) {
		if (error) {
			// self.log('warn',error.toString ());
		} else {
			for (var i = 0; i < varbinds.length; i++) {
				// for version 1 we can assume all OIDs were successful
				self.log('info', varbinds[i].oid + '|' + varbinds[i].value)

				// for version 2c we must check each OID for an error condition
				if (snmp.isVarbindError(varbinds[i])) self.log('error', snmp.varbindError(varbinds[i]))
				else self.log('info', varbinds[i].oid + '|' + varbinds[i].value)
			}
		}
		snmp_session.close()
	})
}

instance_skel.extendedBy(instance)
exports = module.exports = instance
