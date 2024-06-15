import express from 'express';
import { getAllFamilyMembers, getFamilyMemberById, addFamilyMember, deleteFamilyMember, updateFamilyMemberJob } from '../controllers/familyController.js';

const router = express.Router();

// CRUD operations
router.get('/', getAllFamilyMembers);
router.get('/:id', getFamilyMemberById);
router.post('/', addFamilyMember);
router.delete('/:id', deleteFamilyMember);
router.put('/:id', updateFamilyMemberJob);

export default router;