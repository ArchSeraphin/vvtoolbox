import { Request, Response } from 'express';
import vCardsJS from 'vcards-js';
import path from 'path';
import fs from 'fs';

export const generateVCard = (req: Request, res: Response) => {
  try {
    const { firstName, lastName, organization, title, email, phone, url, note } = req.body;

    const vCard = vCardsJS();
    vCard.firstName = firstName || 'New';
    vCard.lastName = lastName || 'Contact';
    vCard.organization = organization || '';
    vCard.title = title || '';
    vCard.email = email || '';
    vCard.workPhone = phone || '';
    vCard.url = url || '';
    vCard.note = note || '';

    const fileName = `vcard_${Date.now()}.vcf`;
    const filePath = path.join(__dirname, '../../uploads', fileName);

    // Ensure uploads directory exists
    const uploadsDir = path.join(__dirname, '../../uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    vCard.saveToFile(filePath);

    const downloadUrl = `/uploads/${fileName}`;
    res.json({ success: true, downloadUrl, fileName });
  } catch (error) {
    console.error('VCard generation error:', error);
    res.status(500).json({ success: false, message: 'Failed to generate VCard' });
  }
};
