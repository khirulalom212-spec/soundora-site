import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, district, upazila, address, product } = req.body;

    try {
      await sql`
        INSERT INTO orders (customer_name, phone_number, district, upazila, full_address, product_details)
        VALUES (${name}, ${phone}, ${district}, ${upazila}, ${address}, ${product});
      `;
      return res.status(200).json({ message: 'অর্ডার সফল হয়েছে!' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
