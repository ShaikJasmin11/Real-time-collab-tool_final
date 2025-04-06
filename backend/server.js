const express = require("express");
const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/documents", require("./routes/documents"));


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log(`⚡ User connected: ${socket.id}`);

    socket.on("join_document", (documentId) => {
        socket.join(documentId);
        console.log(`User ${socket.id} joined document ${documentId}`);
    });

    socket.on("send_changes", ({ documentId, content }) => {
        socket.to(documentId).emit("receive_changes", content);
    });

    socket.on("disconnect", () => {
        console.log(`❌ User disconnected: ${socket.id}`);
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
