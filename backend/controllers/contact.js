'use strict'

var Contact = require('../models/contact');

var controller = {
	
	saveMessage: (req , res) => {
		var contact = new Contact();
		var params = req.body;

		contact.name = params.name;
		contact.companyName = params.companyName
		contact.email = params.email;
		contact.celphone = params.celphone;
		contact.category = params.category;
		contact.message = params.message;

		contact.save((err, contactSaved) =>{
			if(err) return res.status(500).send({
				message: 'error al guardar'
			})

			if(!contactSaved) return res.status(404).send({
				message: 'No se ha podido guardar el proyecto'
			})

			return res.status(200).send({
				contact: contactSaved
			})
		});
	},

    getMessages: (req,res)=>{
        Contact.find({}).exec((err, contacts) => {
			if(err) return res.status(500).send({
				message: 'Error al devolver los datos'
			});

			if (!contacts) return res.status(404).send({
				message: 'No hay mensajes que mostrar'
			});

			return res.status(200).send({contacts});
		});
    },

	getMessage: (req,res) => {
		var contactID = req.params.id;

		if(contactID == null){
			return res.status(404).send({
				message: 'El mensaje no existe'
			})
		}
		
		Contact.findById(contactID, (err, contact) => {
			if(err) return res.status(500).send({
				message: 'Error al devolver los datos'
			})

			if(!contact) return res.status(404).send({
				message: 'El mensaje no existe'
			})

			return res.status(200).send({
				contact
			})
		})
	}
}

module.exports = controller;