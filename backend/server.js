import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 1213
connectDB()
connectCloudinary()

// CORS FIX FOR VERCEL 
app.use(cors({
    origin: "https://ecommerce-frontend-gamma-five.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

// Middlewares
app.use(express.json());
app.use(cors())
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// API Endpoints
app.use('/api/user', userRouter)
app.use('/api/product',productRouter)

app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => console.log('Server Started on PORT :' + port))