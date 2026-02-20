import { Router } from 'express';
import { generateVCard } from '../controllers/vcardController';

const router = Router();

router.post('/generate', generateVCard);

export default router;
