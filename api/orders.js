import { sql } from '@vercel/postgres';

async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS orders (
      id TEXT PRIMARY KEY,
      tracking_id TEXT NOT NULL,
      status TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL,
      user_email TEXT,
      customer_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      division TEXT NOT NULL,
      district TEXT NOT NULL,
      upazila TEXT NOT NULL,
      address TEXT NOT NULL,
      product_id TEXT NOT NULL,
      product_name TEXT NOT NULL,
      unit_price INTEGER NOT NULL,
      quantity INTEGER NOT NULL,
      total_price INTEGER NOT NULL
    );
  `;
}

function normalizeOrder(body = {}) {
  return {
    id: String(body.id || ''),
    trackingId: String(body.trackingId || ''),
    status: String(body.status || 'Pending'),
    createdAt: String(body.createdAt || new Date().toISOString()),
    userEmail: body.userEmail ? String(body.userEmail) : null,
    customerName: String(body.customerName || ''),
    phone: String(body.phone || ''),
    division: String(body.division || ''),
    district: String(body.district || ''),
    upazila: String(body.upazila || ''),
    address: String(body.address || ''),
    productId: String(body.productId || ''),
    productName: String(body.productName || ''),
    unitPrice: Number.parseInt(body.unitPrice, 10) || 0,
    quantity: Number.parseInt(body.quantity, 10) || 1,
    totalPrice: Number.parseInt(body.totalPrice, 10) || 0
  };
}

function toResponseOrder(row) {
  return {
    id: row.id,
    trackingId: row.tracking_id,
    status: row.status,
    createdAt: row.created_at,
    userEmail: row.user_email,
    customerName: row.customer_name,
    phone: row.phone,
    division: row.division,
    district: row.district,
    upazila: row.upazila,
    address: row.address,
    productId: row.product_id,
    productName: row.product_name,
    unitPrice: row.unit_price,
    quantity: row.quantity,
    totalPrice: row.total_price
  };
}

export default async function handler(req, res) {
  await ensureTable();

  if (req.method === 'GET') {
    const userEmail = req.query.userEmail ? String(req.query.userEmail).trim().toLowerCase() : '';
    const result = userEmail
      ? await sql`SELECT * FROM orders WHERE lower(user_email) = ${userEmail} ORDER BY created_at DESC;`
      : await sql`SELECT * FROM orders ORDER BY created_at DESC;`;

    return res.status(200).json({ orders: result.rows.map(toResponseOrder) });
  }

  if (req.method === 'POST') {
    const order = normalizeOrder(req.body);

    if (!order.id || !order.customerName || !order.phone || !order.productName) {
      return res.status(400).json({ error: 'Missing required order fields' });
    }

    await sql`
      INSERT INTO orders (
        id, tracking_id, status, created_at, user_email, customer_name, phone, division,
        district, upazila, address, product_id, product_name, unit_price, quantity, total_price
      ) VALUES (
        ${order.id}, ${order.trackingId}, ${order.status}, ${order.createdAt}, ${order.userEmail}, ${order.customerName},
        ${order.phone}, ${order.division}, ${order.district}, ${order.upazila}, ${order.address},
        ${order.productId}, ${order.productName}, ${order.unitPrice}, ${order.quantity}, ${order.totalPrice}
      );
    `;

    return res.status(201).json({ order });
  }

  if (req.method === 'PATCH') {
    const id = req.query.id ? String(req.query.id) : '';
    const status = req.body?.status ? String(req.body.status) : '';

    if (!id || !status) {
      return res.status(400).json({ error: 'id and status are required' });
    }

    await sql`UPDATE orders SET status = ${status} WHERE id = ${id};`;
    return res.status(200).json({ ok: true });
  }

  if (req.method === 'DELETE') {
    const id = req.query.id ? String(req.query.id) : '';

    if (!id) {
      await sql`DELETE FROM orders;`;
      return res.status(200).json({ ok: true, cleared: true });
    }

    await sql`DELETE FROM orders WHERE id = ${id};`;
    return res.status(200).json({ ok: true, deleted: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
