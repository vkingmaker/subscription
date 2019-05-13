/* eslint-disable consistent-return */
// import faker from 'faker';
import pool from '../util/db';

export default class NewsletterController {
  static saveUserEmail(req, res) {
    const { email } = req.body;
    pool.getConnection((err, connection) => {
      if (err) {
        return res.status(400).json({ err });
      }

      connection.query('INSERT INTO user_email(email) VALUES (?)', [email], (error) => {
        connection.release();
        if (error) {
          return res.status(500).json({ err });
        }
        res.status(201).redirect('/');
      });
    });
  }

  static getEmailForm(req, res) {
    pool.getConnection((err, connection) => {
      connection.query('SELECT COUNT(*) AS count FROM user_email', (er, count) => {
        connection.release();
        if (er) {
          return res.status(500).json({
            data: [{
              er,
              status: res.statusCode,
            }],
          });
        }
        return res.status(200).render('subscriptionForm', {
          count: count[0].count,
        });
      });
    });
  }
}
