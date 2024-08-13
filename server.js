import express from 'express';
import path from 'path';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Configuración de la base de datos
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbFile = path.join(__dirname, 'data/db.json');
const adapter = new JSONFile(dbFile);
const db = new Low(adapter);

// Leer la base de datos y establecer datos iniciales si está vacía
async function initializeDatabase() {
    await db.read();
    if (!db.data) {
        db.data = { products: [] };
        await db.write();
    }
}

// Inicializar la base de datos
await initializeDatabase();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Ruta para obtener todos los productos
app.get('/api/products', async (req, res) => {
    await db.read();
    res.json(db.data.products);
});

// Ruta para añadir un nuevo producto
app.post('/api/products', async (req, res) => {
    const newProduct = req.body;
    await db.read();
    db.data.products.push(newProduct);
    await db.write();
    res.status(201).json(newProduct);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});




