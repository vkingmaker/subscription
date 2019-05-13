import express from 'express';
import NewsletterController from '../controller/newsletter.controller';

const route = express.Router();

route.post('/', NewsletterController.saveUserEmail);
route.get('/', NewsletterController.getEmailForm);

exports.newsletter = route;
