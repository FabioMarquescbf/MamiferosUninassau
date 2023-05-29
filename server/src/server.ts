import fastify from "fastify";

const server = fastify();

// Rota de Teste (Respondendo com Texto regular)
server.get('/', (request, reply) => { //request pedido, reply retorno
    return "Servidor Exemplo On Line..."
})

server.listen({ port: 3000}, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }   else {
        console.log('Servidor rodando em ${address}');
    }
});