import pool from '../model/db.js';

// GET all family members
export const getAllFamilyMembers = (req, res) => {
  pool.query('SELECT * FROM family_members ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

// GET a single family member by ID
export const getFamilyMemberById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('SELECT * FROM family_members WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

// POST - Add a new family member
export const addFamilyMember = (req, res) => {
  const { name, job } = req.body;

  pool.query('INSERT INTO family_members (name, job) VALUES ($1, $2) RETURNING *', [name, job], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(201).json(results.rows);
  });
};

// DELETE - Remove a family member by ID
export const deleteFamilyMember = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('DELETE FROM family_members WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`Family member with ID ${id} deleted.`);
  });
};

// PUT - Update job of a family member
export const updateFamilyMemberJob = (req, res) => {
  const id = parseInt(req.params.id);
  const { job } = req.body;

  pool.query('UPDATE family_members SET job = $1 WHERE id = $2', [job, id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`Job updated for family member with ID ${id}.`);
  });
};
