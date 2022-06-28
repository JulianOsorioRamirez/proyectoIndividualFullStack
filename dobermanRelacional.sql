#DROP DATABASE proyectoIndividual;
CREATE DATABASE proyectoIndividual;
USE proyectoIndividual;
CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(300) NOT NULL,
    apellidos VARCHAR(300) NOT NULL,
    dni CHAR(9) UNIQUE NOT NULL,
    email VARCHAR(300),
    telefono VARCHAR(15),
    contrasena VARCHAR(300) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE CarritosDeCompra(
    id INT AUTO_INCREMENT,
    nPedido VARCHAR(300),
    fk_id_usuario INT, 
    total FLOAT,
    PRIMARY KEY(id),
    FOREIGN KEY(fk_id_usuario) REFERENCES Usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Carritos_Productos(
    id INT AUTO_INCREMENT,
    fk_id_carrito INT, 
    fk_id_producto_mongo VARCHAR(50) NOT NULL,
    cantidad INT,
    PRIMARY KEY(id),
    FOREIGN KEY(fk_id_carrito) REFERENCES CarritosDeCompra(id) ON UPDATE CASCADE ON DELETE CASCADE
);

