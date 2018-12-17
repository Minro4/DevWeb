-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 17 déc. 2018 à 19:53
-- Version du serveur :  5.7.23
-- Version de PHP :  7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `site`
--

-- --------------------------------------------------------

--
-- Structure de la table `activity`
--

DROP TABLE IF EXISTS `activity`;
CREATE TABLE IF NOT EXISTS `activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activityname` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `activity`
--

INSERT INTO `activity` (`id`, `activityname`, `description`) VALUES
(1, 'Natation', 'Natation dans une piscine'),
(6, 'Echecs', 'Echecs avec des pieces'),
(2, 'Badminton', 'Badminton avec des raquettes'),
(3, 'Randonnée', 'Randonnée dans le bois'),
(5, 'Velo', 'Vélo avec des pédalles'),
(4, 'Kayak', 'Kayak dans l\'eau');

-- --------------------------------------------------------

--
-- Structure de la table `dictionary`
--

DROP TABLE IF EXISTS `dictionary`;
CREATE TABLE IF NOT EXISTS `dictionary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `word_key` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `fr` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `dictionary`
--

INSERT INTO `dictionary` (`id`, `word_key`, `en`, `fr`) VALUES
(1, 'MenuAccueil', 'Home', 'Accueil'),
(2, 'MenuInscrire', 'Register', 'S\'inscrire'),
(3, 'MenuLocal', 'Locate an activity', 'Localiser une activité'),
(4, 'TitreBut', 'Our goal:', 'Notre but:'),
(5, 'TitreListeActi', 'List of available activities:', 'Liste des activités disponibles :'),
(6, 'TitreInscrire', 'Register yourself', 'Inscrivez vous'),
(7, 'TitreOuTrouver', 'Where to find us :', 'Où nous trouver :'),
(8, 'fNom', 'Last name', 'Nom'),
(9, 'fpnom', 'Name', 'Prénom'),
(10, 'fDate', 'Date of birth', 'Date de naissance'),
(11, 'fSexe', 'Sex', 'Sexe'),
(12, 'fActivite', 'Activity', 'Activité'),
(13, 'fMotivation', 'Motivation', 'Motivation'),
(14, 'fSoumettre', 'Submit', 'Soumettre'),
(15, 'fReinitialiser', 'Reset', 'Réinitialiser'),
(16, 'tActivite', 'Activity', 'Activité'),
(17, 'tResponsable', 'Manager', 'Responsable'),
(18, 'tNbrInscrits', 'Number of subscriber', 'Nombre d\'inscrits'),
(19, 'titre', 'Homework', 'Devoir'),
(22, 'Entête', 'Leisure for students!', 'Loisirs pour les étudiants!'),
(23, 'fM', 'Man', 'Homme'),
(24, 'fF', 'Woman', 'Femme');

-- --------------------------------------------------------

--
-- Structure de la table `member`
--

DROP TABLE IF EXISTS `member`;
CREATE TABLE IF NOT EXISTS `member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dob` date NOT NULL,
  `sex` int(11) NOT NULL,
  `activityid` int(11) NOT NULL,
  `motivation` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `member`
--

INSERT INTO `member` (`id`, `fullname`, `dob`, `sex`, `activityid`, `motivation`) VALUES
(1, 'test', '2018-12-25', 0, 1, 'sad'),
(2, 'SDF', '2018-12-04', 0, 1, ''),
(3, 'DFG', '2018-12-26', 0, 2, ''),
(4, 'testcaca', '2015-01-01', 0, 0, ''),
(5, 't c', '2015-01-01', 0, 0, '');

-- --------------------------------------------------------

--
-- Structure de la table `supervisor`
--

DROP TABLE IF EXISTS `supervisor`;
CREATE TABLE IF NOT EXISTS `supervisor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activityid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `supervisor`
--

INSERT INTO `supervisor` (`id`, `fullname`, `activityid`) VALUES
(1, 'Michel Provencher', 1),
(2, 'Daniel Lefevbre', 2),
(3, 'Catherine Pelletier', 3),
(4, 'Josée Coté', 4),
(5, 'Jean-Yves Surroy', 5),
(6, 'Emilie Simard', 6);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
