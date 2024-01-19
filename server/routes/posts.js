import express from "express";

const router = express.Router();

// GET request to the root endpoint
router.get('/', (req, res) => {
  res.send('This Works');
});

// GET request to retrieve a specific resource
router.get('/:id', (req, res) => {
  const resourceId = req.params.id;
  res.send(`Retrieving resource with ID: ${resourceId}`);
});

// GET request to retrieve all resources
router.get('/all', (req, res) => {
  res.send('Retrieving all resources');
});

export default router;
