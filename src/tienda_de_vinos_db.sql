DROP DATABASE IF EXISTS tienda_de_vinos_db;
CREATE DATABASE tienda_de_vinos_db;
USE tienda_de_vinos_db;



DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `firts_name` varchar(20) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `user` varchar(95) DEFAULT NULL,
  `email` varchar(24) DEFAULT NULL,
  `password` varchar(95) DEFAULT NULL,
  `admin` TINYINT (1) NOT NULL DEFAULT 0,
  `img` varchar(95) DEFAULT NULL,
  `dni` smallint(10) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `condiciones` bool DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

DROP TABLE IF EXISTS `wineries`;
CREATE TABLE `wineries`(
	`id` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  	`name` varchar(50) NOT NULL	
);

DROP TABLE IF EXISTS `style_wines`;
CREATE TABLE `style_wines`(
	`id` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  	`name` varchar(50) NOT NULL
);

DROP TABLE IF EXISTS `grapes`;
CREATE TABLE `grapes`(
	`id` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  	`name` varchar(50) NOT NULL
);


DROP TABLE IF EXISTS `products`;
create table `products` (
  `id` INT UNSIGNED NOT NULL auto_increment,
  `name` varchar(255) not null,
  `bottles` INT not null,
  `description` varchar(255) null DEFAULT NULL,
  `img` varchar(255) null DEFAULT NULL,
  `price` INT null DEFAULT NULL,
  `stock` INT null DEFAULT NULL,
  `inSale` bool not null,
  `wineries_id` INT UNSIGNED not null,
  `style_wines_id` INT UNSIGNED not null,
  `grapes_id` INT UNSIGNED not null,
  `created_at` TIMESTAMP default CURRENT_TIMESTAMP,
  `update_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`wineries_id`) REFERENCES `wineries` (`id`),
  FOREIGN KEY (`style_wines_id`) REFERENCES `style_wines` (`id`),
  FOREIGN KEY (`grapes_id`) REFERENCES `grapes` (`id`)
);


DROP TABLE IF EXISTS `shopping_cart`;
CREATE TABLE `shopping_cart` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  	`users_id` 		INT	NOT NULL,
  	`products_id`	INT UNSIGNED NOT NULL,
  	`created_at`	TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  	`updated_at`	TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	`date_shopp`	DATE NOT NULL,
  	`actual_price`	FLOAT(8,2) NOT NULL,
  	`active`		bool NOT NULL,
  	`quantity`	SMALLINT NOT NULL,
  	PRIMARY KEY (`id`),
  	FOREIGN KEY (`users_id`) REFERENCES	`users` (`id`),
  	FOREIGN KEY (`products_id`) REFERENCES `products`(`id`)
);


INSERT INTO `users` 
VALUES (11, 'Delfina', 'Molter', 'DELMOL', 'delfi@gamil.com', 'pepito', 1, null, 35972449, 25-04-1991, null, null,1),
(2, 'Emanuel', 'Mendiolaza', 'Emamendi', 'ema@gamil.com', 'hola123', 1, null, 33123123, 12-09-1993, null, null,1),
(3, 'Gonzalo', 'Lorenzo', 'Golore', 'gonzalore@gamil.com', 'gonza123', 1, null, 32123321, 14-04-1991, null, null,1),
(4, 'Javier', 'Perez', 'JavoPe', 'javiperez@gamil.com', 'Javi321', 0, null, 33345345, 25-12-1988, '2021-04-12 18:09:00', null,1),
(5, 'Carlos', 'Rivera', 'Carlo123', 'crivera@gamil.com', 'rivera12', 0, null, 25123456, 28-11-1986, '2021-04-11 18:09:00', null,1),
(6, 'Roxana', 'Conte', 'rconte', 'roxconte@gamil.com', 'conterox', 0, null, 24122322, 02-03-1991, '2021-04-12 18:09:00', null,1),
(7, 'Micaela', 'Rodriguez', 'micar', 'micaelarodriguez@gamil.com', 'micar123', 0, null, 29333234, 24-04-1985, '2021-06-23 18:09:00', null,1),
(8, 'Nicolas', 'Gonzalez', 'nicogon', 'nico.gonzalez@gamil.com', 'gonzalez123', 0, null, 38972448, 25-06-1994, '2021-07-06 18:09:00', null,1),
(9, 'Patricio', 'Toranzo', 'patora', 'patricio.toranzo@gamil.com', 'PatricioTora', 0, null, 27688345, 27-10-1987, '2021-07-13 18:09:00', null,1),
(10, 'Andrea', 'Perez', 'AndyPe', 'aperez@gamil.com', 'perezandy123', 0, null, 19494159, 04-12-1976, '2021-08-11 18:09:00', null,1);

INSERT INTO `wineries`
VALUES (401, 'Trapiche'),
(402, 'Navarro Correas'),
(403, 'Finca las Moras'),
(404, 'El Esteco'),
(405, 'Costa & Pampa');


INSERT INTO `style_wines`
VALUES (501, 'Vino Blanco'),
(502, 'Vino Tinto'),
(503, 'Espumantes');

INSERT INTO `grapes`
VALUES (601, 'Sauvignon Blanc'),
(602, 'Malbec'),
(603, 'Malbec - Cabernet Sauvignon'),
(604, 'Chardonnay'),
(605, 'Cabernet Sauvignon'),
(606, 'Brut Nature'),
(607, 'Extra Brut');

INSERT INTO `products` 
VALUES (201, 'Fond de Cave Reserva', 1, 'Vino del Valle de Uco. De color amarillo pálido con reflejos verdosos, este vino entrega aromas intensos de ruda, hierbas frescas, frutas tropicales y notas de pomelo rosado.','', 620, 50, 1, 401, 501, 601, '2021-08-11 18:09:00', '2021-08-12 13:09:00'),
(202, 'Seleccion del Enologo', 1, 'Vino del Valle de Uco. Rojo violaceo intenso, gran variedad de aromas y sabores intensos a frutas y flores como cerezas rojas, frambuesas y rosas. Notas especiadas a canela, nuez moscada, regaliz, grafito, cedro y caja de cigarros. De mucho cuerpo y taninos sedosos con un final prolongado fresco y especiado.18 meses de crianza.','', 1483.00, 20,1, 402, 502, 602, '2021-08-11 12:09:00', '2021-08-11 14:09:00'),
(203, 'Dada Incrediblends', 1, 'Elegante blend de buen cuerpo, con taninos maduros y redondos. Se perciben sabores a mermelada de frutas negras y rojas maduras. Se destacan en nariz las notas a pimentón dulce y pimienta negra.','', 481, 50, 1, 403, 502, 603, '2021-08-11 11:09:30', '2021-08-12 18:09:00'),
(204, 'Medalla 1500ml', 1, 'Vino del valle de Maipu. De un intenso color púrpura con tonalidades violáceas, este Malbec expresa aromas concentrados de frutos rojos, ciruelas, cerezas y pasas de uvas. Se destacan notas de vainilla, coco y pan tostado gracias a su crianza en roble. En boca se lo encuentra carnoso, de buen volumen y percibiéndose untuoso. Se destacan sus sabores a frutas maduras, con notas especiadas, con un agradable y persistente final. 18 meses de crianza.','', 2084, 10, 1, 401, 502, 602, '2021-08-11 08:07:37', '2021-08-12 18:09:00'),
(205, 'Fond de Cave', 1, 'Este sabroso y perfumado vino tiene un gran balance entre profundidad y potencia. Entrega aromas a cedro, chocolate y vainilla. En boca es elegante, con sabor a casis y pimiento rojo. 6 meses de crianza.','', 424, 80, 1, 401, 502, 605, '2021-08-11 11:14:00', '2021-08-12 12:19:00'),
(206, 'Puro', 1, 'Vino de la region de Maipu. De un color rojo profundo con tintes violáceos, este vino entrega intensos aromas a frutos rojos como cerezas y ciruelas. En boca es redondo con un leve carácter mineral, demostrando una gran concentración frutal con un elegante final. 10 mese de crianza.','', 558, 50, 1, 401, 502, 602, '2021-08-11 08:09:00', '2021-08-11 18:09:00'),
(207, 'Don David', 1, 'Vino de la region de Salta. Vista: Suave dorado, muy brillante con marcados tonos verdosos. Marcadas lágrimas en la copa. Aroma: Delicado aroma varietal, con notas a manzanas, ananá, frutos tropicales, miel y notas sutiles de vainilla. Sabor: Equilibrada acidez, paladar suave entregado por la fermentación maloláctica. Frutado, pera, ananá, nueces y leves percepciones lácticas.','', 424, 30, 1, 404, 501, 604, '2021-08-11 06:35:00', '2021-08-11 18:09:00'),
(208, 'Fon de Cave', 1, '80% Pinot Noir - 20% Chardonnay. Este espumante expresa un color amarillo con algunas tonalidades verdes y rojizas. De espuma abundante, posee burbujas finas y persistentes. Los aromas de pan tostado y levadura se entremezclan con la frutalidad del Chardonnay y del Pinot Noir, en una sublime armonía. En boca es untuoso, cremoso, refrescante y muy delicado.','', 753, 10, 1, 401, 503, 603, '2021-08-11 18:09:00', '2021-08-11 18:09:00'),
(209, 'Sparkling', 1, 'Vino de la región de Mendoza. De color amarillo pálido verdoso. Frutado y floral, sabores a durazno y damasco, persistentes burbujas y final fresco.','', 545, 20, 1, 402, 503, 607, '2021-08-11 18:09:00', '2021-08-12 17:09:00'),
(210, 'Costa y Pampa', 1, 'Vino de la región de Chapadmalal. De un fino color amarillo con dejos verdosos, posee notas a hierbas frescas, intenso aroma a ruda y suaves notas cítricas. Presenta textura caudalosa en boca, fresco y con marcada presencia mineral.','', 1146, 30, 1, 405, 501, 601, '2021-08-11 18:09:00', '2021-08-12 12:09:00');


INSERT INTO `shopping_cart`
VALUES (701, 3, 205, '2021-08-11 18:09:00', '2021-08-12 13:12:34', '2021-08-11', 1534.00, 1, 6),
(702, 2, 204, '2021-08-11 11:10:00', '2021-08-12 13:12:34', '2021-08-11', 1114.00, 1, 6),
(703, 6, 202, '2021-08-11 11:10:00', '2021-08-12 13:12:34', '2021-08-11', 1234.00, 1, 6);
