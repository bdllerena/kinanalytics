-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-06-2020 a las 04:54:03
-- Versión del servidor: 10.1.32-MariaDB
-- Versión de PHP: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `kinanalytics`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `team_roster`
--

CREATE TABLE `team_roster` (
  `playerfirstname` varchar(250) NOT NULL,
  `playerlastname` varchar(250) NOT NULL,
  `year` int(11) NOT NULL,
  `prevcollege1` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `team_roster`
--

INSERT INTO `team_roster` (`playerfirstname`, `playerlastname`, `year`, `prevcollege1`) VALUES
('DREW', 'WIEGMAN', 2020, ''),
('ANDREW', 'BENEFIELD', 2020, ''),
('ADAM', 'ELLIOTT', 2020, ''),
('LEVI', 'USHER', 2020, 'KIRWOOD COMMUNITY COLLEGE'),
('BEN', 'BIANCO', 2020, ''),
('LUCAS', 'DUNN', 2020, ''),
('LUKE', 'BROWN', 2020, 'JOHN A LOGAN COLLEGE'),
('DANNY', 'ORIENTE', 2020, ''),
('TIM', 'BORDEN', 2020, ''),
('CHRIS', 'SENG', 2020, ''),
('ALEX', 'BINELAS', 2020, ''),
('TREY', 'LEONARD', 2020, ''),
('BOBBY', 'MILLER', 2020, ''),
('JUSTIN', 'LAVEY', 2020, ''),
('SHANE', 'HARRIS', 2020, ''),
('DREW', 'CAMPBELL', 2019, 'OLNEY CENTRAL COLLEGE'),
('TYLER', 'FITZGERALD', 2019, ''),
('ADAM', 'ELLIOTT', 2019, ''),
('SHAY', 'SMIDDY', 2019, ''),
('BEN', 'BIANCO', 2019, ''),
('LUCAS', 'DUNN', 2019, ''),
('NICK', 'BENNETT', 2019, ''),
('DANNY', 'ORIENTE', 2019, ''),
('TIM', 'BORDEN', 2019, ''),
('ZEKE', 'PINKHAM', 2019, ''),
('ALEX', 'BINELAS', 2019, ''),
('TREY', 'LEONARD', 2019, ''),
('BOBBY', 'MILLER', 2019, ''),
('JUSTIN', 'LAVEY', 2019, ''),
('ETHAN', 'STRINGER', 2019, '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
