import fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";

dotenv.config();
const server = fastify();



server.register(cors, {
    
});


// Rota de Teste (Respondendo com Texto regular)
server.get('/', (request, reply) => { //request pedido, reply retorno
    return "Servidor Exemplo On Line..."
});

const port: any = process.env.PORT;

server.listen({ port: 3000}, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }   else {
        console.log('Servidor rodando em ${address}');
    }
});