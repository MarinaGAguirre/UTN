-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 10-08-2023 a las 00:30:45
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cerveceria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `detalles` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `img_id` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `nombre`, `direccion`, `detalles`, `img_id`) VALUES
(3, 'La Jarrita del Sabor SRL (Santa Fé)', 'Regis Martínez 1869, S3002 Santa Fe de la Vera Cruz, Santa Fe.', '', 'pcuyet7bvwlym6vm5kqz'),
(9, '3G Bebidas (Córdoba)', 'Teléfono: 0358 422-1360', '', 'ukds0gaasxaquyd1qxkf'),
(5, 'Vinoteca \"La Flecha\" (Tucumán)', 'Laprida 701. Esquina Marcos Paz.\r\nT4000 San Miguel de Tucumán (Tucumán).\r\nTeléfono: 0381 422-8846.', '', 'snusccyxcjcfdg6g5lre'),
(7, 'Go Bar (Mendoza)', 'Cnel Rodríguez 604, M5500 Mendoza.', '', 'gnl3ufhlzzxazzkj9wmw'),
(8, 'Punto Bebidas (Corrientes)', 'Bolívar 1098, W3400 Corrientes.\r\nTeléfono: 0379 431-2401.', '', 'okelgbrpbwxexgs8kquq');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
