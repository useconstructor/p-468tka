import { getDb } from '@/lib/db'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const db = getDb()

  await db.execute({
    sql: `CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      price TEXT,
      description TEXT
    )`,
    args: [],
  })

  const count = await db.execute({
    sql: 'SELECT COUNT(*) as count FROM products',
    args: [],
  })

  if (count.rows[0].count === 0) {
    await db.execute({
      sql: 'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
      args: ['Mesa de Roble', '$350', 'mesa de comedor en roble macizo para 6 personas'],
    })
    await db.execute({
      sql: 'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
      args: ['Silla Nórdica', '$120', 'silla de diseño escandinavo en madera de haya'],
    })
    await db.execute({
      sql: 'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
      args: ['Estante Flotante', '$85', 'estante de pared en madera de pino con acabado natural, capacidad 15kg'],
    })
    await db.execute({
      sql: 'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
      args: ['Lámpara de Mesa', '$65', 'base de madera torneada con pantalla de lino natural, incluye bombilla LED'],
    })
  }

  const result = await db.execute({
    sql: 'SELECT * FROM products',
    args: [],
  })

  return NextResponse.json(result.rows)
}
