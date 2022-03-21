import express, { Router } from 'express';
const router: Router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Welcome to the API',
  });
});

export default router;
