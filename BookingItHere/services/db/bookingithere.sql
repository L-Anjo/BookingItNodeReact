-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: mysql-db
-- Tempo de geração: 13-Jun-2023 às 23:43
-- Versão do servidor: 8.0.32
-- versão do PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bookingithere`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `announcements`
--

CREATE TABLE `announcements` (
  `id` bigint NOT NULL,
  `price_click` float DEFAULT NULL,
  `numb_clicks` int DEFAULT NULL,
  `state` tinyint DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `house_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `announcements`
--

INSERT INTO `announcements` (`id`, `price_click`, `numb_clicks`, `state`, `end_date`, `created_at`, `updated_at`, `house_id`) VALUES
(1, 4, 354, 0, '2024-03-01 00:03:06', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 74),
(2, 2, 683, 0, '2023-11-08 23:30:44', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 37),
(3, 2, 771, 0, '2023-12-20 07:40:13', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 43),
(4, 5, 920, 1, '2024-02-02 22:54:42', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 57),
(5, 4, 42, 0, '2024-04-14 05:29:54', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 42),
(6, 0, 939, 0, '2024-01-24 03:18:49', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 50),
(7, 0, 986, 0, '2023-07-15 14:45:32', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 17),
(8, 1, 578, 1, '2024-01-18 02:52:12', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 89),
(9, 5, 948, 1, '2023-12-14 00:09:42', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 60),
(10, 5, 494, 0, '2024-02-18 00:10:47', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 34),
(11, 1, 816, 1, '2023-12-27 04:09:17', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 40),
(12, 5, 921, 1, '2023-10-08 17:00:34', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 90),
(13, 4, 940, 1, '2024-05-05 21:30:06', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 31),
(14, 2, 790, 1, '2023-06-26 18:36:08', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 47),
(15, 0, 244, 0, '2023-08-12 11:02:26', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 78),
(16, 3, 963, 1, '2023-06-18 14:19:41', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 99),
(17, 2, 109, 0, '2023-08-06 00:45:46', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 93),
(18, 2, 667, 1, '2024-05-20 13:49:28', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 95),
(19, 4, 618, 0, '2023-08-25 22:05:27', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 36),
(20, 5, 5, 0, '2024-05-03 16:56:33', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 45),
(21, 2, 222, 1, '2024-04-11 02:23:28', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 14),
(22, 4, 173, 1, '2023-07-09 00:30:45', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 61),
(23, 1, 618, 1, '2023-11-01 22:32:28', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 39),
(24, 0, 944, 1, '2024-01-31 14:13:24', '2023-06-13 23:36:40', '2023-06-13 23:36:40', 41),
(25, 0, 419, 1, '2024-03-17 14:39:39', '2023-06-13 23:36:40', '2023-06-13 23:39:35', 49),
(26, 0, 928, 0, '2023-11-29 23:16:20', '2023-06-13 23:36:41', '2023-06-13 23:36:41', 2),
(27, 4, 843, 1, '2024-05-08 23:50:27', '2023-06-13 23:36:41', '2023-06-13 23:36:41', 76),
(28, 3, 328, 1, '2023-09-07 11:04:30', '2023-06-13 23:36:41', '2023-06-13 23:36:41', 69),
(29, 1, 922, 1, '2023-09-26 03:13:33', '2023-06-13 23:36:41', '2023-06-13 23:36:41', 85),
(30, 1, 95, 0, '2023-12-14 13:05:43', '2023-06-13 23:36:41', '2023-06-13 23:36:41', 8),
(31, 2, 561, 1, '2023-10-11 06:55:04', '2023-06-13 23:36:41', '2023-06-13 23:36:41', 62),
(32, 4, 449, 1, '2024-02-17 16:01:39', '2023-06-13 23:36:41', '2023-06-13 23:36:41', 21),
(33, 4, 33, 1, '2024-02-16 09:28:46', '2023-06-13 23:36:41', '2023-06-13 23:36:41', 56),
(34, 4, 749, 0, '2024-03-23 15:58:59', '2023-06-13 23:36:41', '2023-06-13 23:36:41', 11),
(35, 2, 165, 1, '2024-04-17 08:44:42', '2023-06-13 23:36:41', '2023-06-13 23:36:41', 52),
(36, 0, 24, 0, '2024-03-27 03:47:08', '2023-06-13 23:36:41', '2023-06-13 23:36:41', 51),
(37, 5, 33, 1, '2024-05-06 12:51:08', '2023-06-13 23:36:41', '2023-06-13 23:36:41', 98),
(38, 0, 779, 0, '2024-04-21 22:20:13', '2023-06-13 23:36:41', '2023-06-13 23:36:41', 46);

-- --------------------------------------------------------

--
-- Estrutura da tabela `announcement_payments`
--

CREATE TABLE `announcement_payments` (
  `id` bigint NOT NULL,
  `announcement` bigint DEFAULT NULL,
  `status` int DEFAULT NULL,
  `creation_date` datetime DEFAULT NULL,
  `payment_date` datetime DEFAULT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `payment_value` float DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `announcement_payments`
--

INSERT INTO `announcement_payments` (`id`, `announcement`, `status`, `creation_date`, `payment_date`, `payment_method`, `payment_value`, `created_at`, `updated_at`) VALUES
(1, 1, 2, '2023-04-05 04:37:41', '2023-07-28 17:50:02', 'MBway', 120, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(2, 2, 1, '2022-09-30 08:18:34', '2024-06-04 05:49:22', 'MBway', 108, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(3, 3, 2, '2022-12-13 13:15:31', '2024-05-31 19:20:59', 'MBway', 150, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(4, 4, 2, '2022-12-26 22:23:48', '2024-01-14 19:04:20', 'MBway', 84, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(5, 5, 1, '2022-12-09 01:53:02', '2023-11-15 18:14:19', 'MBway', 76, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(6, 6, 2, '2022-08-15 07:20:08', '2024-02-18 23:40:51', 'MBway', 189, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(7, 7, 2, '2023-02-28 23:19:19', '2024-05-24 14:56:26', 'MBway', 71, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(8, 8, 2, '2022-11-12 19:21:11', '2024-03-16 11:01:45', 'MBway', 173, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(9, 9, 2, '2022-09-11 06:38:25', '2024-06-12 17:22:09', 'MBway', 35, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(10, 10, 2, '2022-10-27 23:05:35', '2023-12-09 16:28:59', 'MBway', 85, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(11, 11, 2, '2022-07-19 16:14:04', '2023-10-20 00:22:59', 'MBway', 197, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(12, 12, 1, '2022-11-04 09:28:39', '2024-01-17 06:01:32', 'MBway', 52, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(13, 13, 1, '2022-09-17 04:28:31', '2024-02-03 13:18:43', 'MBway', 95, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(14, 14, 1, '2023-01-05 10:19:07', '2024-03-24 02:05:31', 'MBway', 115, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(15, 15, 2, '2022-06-17 08:49:35', '2023-09-21 21:33:44', 'MBway', 199, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(16, 16, 1, '2023-04-20 04:07:31', '2024-06-07 20:35:44', 'MBway', 106, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(17, 17, 2, '2023-06-02 14:25:00', '2023-12-04 18:19:05', 'MBway', 118, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(18, 18, 2, '2022-07-24 04:00:06', '2024-03-19 21:13:42', 'MBway', 47, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(19, 19, 2, '2022-12-18 04:59:15', '2024-03-12 21:28:17', 'MBway', 92, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(20, 20, 1, '2022-08-10 06:32:04', '2023-10-21 07:10:24', 'MBway', 105, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(21, 21, 2, '2023-02-22 20:00:48', '2023-08-01 09:28:18', 'MBway', 58, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(22, 22, 2, '2022-08-04 23:05:50', '2023-12-01 00:45:08', 'MBway', 133, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(23, 23, 1, '2023-01-05 12:52:10', '2023-07-29 19:49:53', 'MBway', 148, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(24, 24, 1, '2022-06-18 09:47:57', '2024-01-02 18:55:17', 'MBway', 85, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(25, 25, 1, '2023-01-29 04:58:00', '2023-10-22 01:00:30', 'MBway', 100, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(26, 26, 1, '2022-08-09 13:15:28', '2024-05-27 18:41:22', 'MBway', 188, '2023-06-13 23:36:41', '2023-06-13 23:36:41'),
(27, 27, 1, '2023-01-18 13:13:23', '2023-07-05 08:56:30', 'MBway', 151, '2023-06-13 23:36:41', '2023-06-13 23:36:41'),
(28, 28, 2, '2022-09-23 04:15:22', '2023-07-26 22:24:31', 'MBway', 162, '2023-06-13 23:36:41', '2023-06-13 23:36:41'),
(29, 29, 2, '2022-06-27 03:40:52', '2024-06-01 04:57:29', 'MBway', 176, '2023-06-13 23:36:41', '2023-06-13 23:36:41'),
(30, 30, 2, '2023-02-23 14:46:39', '2023-07-14 17:19:12', 'MBway', 66, '2023-06-13 23:36:41', '2023-06-13 23:36:41'),
(31, 31, 2, '2023-03-16 01:42:28', '2024-06-10 10:31:43', 'MBway', 64, '2023-06-13 23:36:41', '2023-06-13 23:36:41'),
(32, 32, 2, '2022-11-21 04:04:07', '2024-05-30 11:46:32', 'MBway', 180, '2023-06-13 23:36:41', '2023-06-13 23:36:41'),
(33, 33, 2, '2023-01-12 17:25:33', '2023-06-24 17:04:43', 'MBway', 91, '2023-06-13 23:36:41', '2023-06-13 23:36:41'),
(34, 34, 2, '2022-08-15 12:27:55', '2023-11-17 02:27:24', 'MBway', 76, '2023-06-13 23:36:41', '2023-06-13 23:36:41'),
(35, 35, 1, '2022-08-19 11:01:04', '2023-12-01 18:21:26', 'MBway', 107, '2023-06-13 23:36:41', '2023-06-13 23:36:41'),
(36, 36, 1, '2022-08-26 15:36:21', '2024-02-08 07:56:00', 'MBway', 67, '2023-06-13 23:36:41', '2023-06-13 23:36:41'),
(37, 37, 1, '2022-06-30 21:09:50', '2024-04-04 18:37:54', 'MBway', 140, '2023-06-13 23:36:41', '2023-06-13 23:36:41'),
(38, 38, 2, '2022-09-29 05:18:47', '2024-05-25 06:00:17', 'MBway', 153, '2023-06-13 23:36:41', '2023-06-13 23:36:41');

-- --------------------------------------------------------

--
-- Estrutura da tabela `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` int NOT NULL,
  `reservation` int DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `classification` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `feedbacks`
--

INSERT INTO `feedbacks` (`id`, `reservation`, `comment`, `classification`, `created_at`, `updated_at`) VALUES
(1, 20, 'Omnis itaque corporis quis consequatur et.', 3, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(2, 17, 'Hic quia minima repellendus.', 5, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(3, 17, 'Pariatur hic veritatis voluptas fugiat.', 5, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(4, 7, 'Sit culpa quasi perspiciatis libero voluptatem.', 1, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(5, 17, 'Sapiente quod aspernatur optio a commodi quae.', 4, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(6, 33, 'Ad corrupti quasi officia non sit accusantium.', 5, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(7, 27, 'Omnis dicta laborum soluta eligendi repudiandae eum ut nostrum.', 5, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(8, 14, 'Debitis mollitia nisi natus dicta non nihil cum sunt blanditiis.', 5, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(9, 6, 'Adipisci ab temporibus eaque facere.', 3, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(10, 18, 'Veniam quo autem.', 5, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(11, 2, 'Placeat eius soluta sint explicabo vel voluptatibus qui quia.', 5, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(12, 12, 'Commodi cum rerum.', 4, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(13, 15, 'Quia deleniti maxime laboriosam distinctio vel labore tempore tenetur nisi.', 2, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(14, 29, 'Animi nemo ex impedit porro aliquam eligendi odio.', 4, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(15, 9, 'Quas commodi pariatur alias quis laudantium ipsum iure.', 3, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(16, 5, 'Ipsum non fugiat minus molestiae quasi incidunt non ut.', 2, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(17, 13, 'Eius eaque et consectetur explicabo ex quibusdam dolorem a earum.', 1, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(18, 25, 'Modi saepe voluptatum nesciunt magnam provident accusantium quaerat earum.', 3, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(19, 19, 'Vitae placeat corrupti facilis dolorum optio quae mollitia ullam repellendus.', 5, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(20, 4, 'Possimus iste aliquid.', 4, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(21, 23, 'Aliquam repellat harum.', 1, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(22, 3, 'Consectetur et dolore omnis rem fuga veniam hic a porro.', 1, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(23, 13, 'Atque minus quam.', 3, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(24, 19, 'Voluptatibus repellat beatae veritatis itaque iste impedit quae dolores inventore.', 1, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(25, 31, 'Maiores quam odio in iusto.', 3, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(26, 19, 'Placeat commodi itaque assumenda ullam vel reprehenderit itaque.', 5, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(27, 15, 'Vero in ipsum voluptatum nemo consequuntur porro.', 3, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(28, 17, 'Magnam optio eum accusamus vel enim id modi tempore.', 4, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(29, 21, 'Molestias vero architecto.', 2, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(30, 25, 'Sed earum perspiciatis numquam ab occaecati eius nemo.', 2, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(31, 27, 'Nobis quaerat molestiae dolores nulla rerum repellendus.', 2, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(32, 8, 'Aut harum veniam modi cumque soluta iusto commodi tenetur.', 3, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(33, 12, 'Accusantium consequatur non alias velit natus delectus nisi.', 5, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(34, 7, 'Ea impedit ab nesciunt at odit sequi.', 2, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(35, 26, 'Dolore iusto tempora ratione libero libero numquam dicta suscipit iste.', 1, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(36, 33, 'Voluptate commodi officiis amet.', 2, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(37, 30, 'Molestias perspiciatis quibusdam.', 3, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(38, 34, 'Corrupti temporibus id atque recusandae magni repellendus maxime molestiae.', 4, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(39, 8, 'Nobis eius quibusdam dolorum rerum.', 3, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(40, 33, 'Deleniti repellat corrupti sit aperiam repudiandae excepturi illum ad.', 4, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(41, 7, 'Unde consequuntur aperiam voluptates quibusdam tenetur itaque.', 1, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(42, 1, 'Dolorum nemo occaecati unde voluptatum ipsum rerum enim facere culpa.', 2, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(43, 35, 'Sit repellat doloribus labore.', 2, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(44, 24, 'Quam consequuntur reiciendis porro sapiente voluptatum necessitatibus.', 5, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(45, 11, 'Saepe optio maiores modi soluta a.', 2, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(46, 2, 'Debitis tenetur qui facilis dolorum reiciendis alias.', 3, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(47, 4, 'A incidunt fugiat consequuntur culpa ut dolorem laboriosam.', 3, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(48, 34, 'Corporis inventore officia at sed quae repudiandae recusandae omnis.', 4, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(49, 13, 'Distinctio tempore perferendis vero laborum suscipit fuga repellendus quam perspiciatis.', 2, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(50, 4, 'Cumque rerum esse nulla doloremque.', 1, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(51, 30, 'Doloribus ullam dignissimos blanditiis enim error facere aspernatur.', 5, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(52, 21, 'Odit voluptates rem autem exercitationem nihil fugiat tempore atque.', 2, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(53, 22, 'Et tempore commodi beatae.', 2, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(54, 5, 'Praesentium dolorem laborum distinctio fuga dolorem tempora.', 3, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(55, 29, 'Unde nemo mollitia fuga in exercitationem aspernatur doloribus possimus.', 3, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(56, 10, 'Id omnis inventore maxime culpa praesentium ducimus ducimus.', 5, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(57, 30, 'Natus molestias excepturi sint nulla quae repellat repellendus.', 4, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(58, 23, 'Id numquam consequatur saepe.', 1, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(59, 2, 'Nostrum eligendi recusandae labore est ratione.', 2, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(60, 12, 'Iusto corrupti perspiciatis laborum perferendis nostrum esse molestias dignissimos vero.', 2, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(61, 21, 'Eaque ipsa voluptatem tempore quam optio esse.', 2, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(62, 7, 'Magni dignissimos sunt reiciendis eaque.', 4, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(63, 19, 'Hic praesentium veniam aliquam nemo molestias.', 3, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(64, 17, 'Dolore odio repellat fugit cum facilis veniam eos dignissimos natus.', 1, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(65, 30, 'Libero cum vero nam illum.', 3, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(66, 4, 'Praesentium tenetur placeat inventore pariatur cum sint culpa neque.', 1, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(67, 33, 'Ullam tempora fuga est optio modi.', 5, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(68, 8, 'Accusantium atque deserunt recusandae sunt cumque odio impedit consectetur eum.', 3, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(69, 20, 'Repudiandae explicabo nemo nihil ipsam nostrum eius ratione.', 2, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(70, 32, 'Illo at cupiditate vitae voluptas dolore unde.', 3, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(71, 2, 'A sint tempora cum facilis atque modi tempore quae.', 3, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(72, 23, 'Ullam sunt quos reprehenderit aut voluptatum nobis.', 5, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(73, 27, 'Minus perspiciatis libero aut officiis impedit.', 2, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(74, 1, 'Ratione voluptas deserunt excepturi itaque praesentium fugiat consectetur dolorem doloribus.', 5, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(75, 8, 'Incidunt quasi officia eos molestias repudiandae voluptate voluptas.', 4, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(76, 9, 'Reprehenderit consequuntur rerum debitis fugiat rem sit qui minus.', 5, '2023-06-13 23:36:39', '2023-06-13 23:36:39'),
(77, 4, 'Ullam pariatur fuga at.', 4, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(78, 26, 'Dolorum assumenda numquam perspiciatis iusto reiciendis ex tempora tempora nisi.', 1, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(79, 6, 'Minima nobis amet animi cum nam aliquid soluta quidem eius.', 5, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(80, 25, 'Modi in quia quo ullam.', 1, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(81, 7, 'Iusto quas ea adipisci.', 3, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(82, 28, 'Magnam similique adipisci odio iure culpa sint.', 1, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(83, 11, 'Laborum blanditiis expedita quae eaque accusantium pariatur numquam.', 2, '2023-06-13 23:36:40', '2023-06-13 23:36:40'),
(84, 17, 'Magnam corrupti et libero.', 4, '2023-06-13 23:36:40', '2023-06-13 23:36:40');

-- --------------------------------------------------------

--
-- Estrutura da tabela `houses`
--

CREATE TABLE `houses` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `door_number` int DEFAULT NULL,
  `floor_number` int DEFAULT NULL,
  `price` float DEFAULT NULL,
  `guests_number` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  `postal_code` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `road` varchar(255) DEFAULT NULL,
  `property_assessment` varchar(255) DEFAULT NULL,
  `image_urls` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `houses`
--

INSERT INTO `houses` (`id`, `name`, `door_number`, `floor_number`, `price`, `guests_number`, `status`, `postal_code`, `user_id`, `road`, `property_assessment`, `image_urls`, `created_at`, `updated_at`) VALUES
(1, 'Joanne', 148, 12, 917.54, 2, 2, 3870, 22, 'Cronin Cove', '666826', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(2, 'Leonard', 878, 13, 685.03, 2, 3, 1400, 56, 'Bailey Crossing', '322563', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(3, 'Lindsey', 845, 12, 102.75, 12, 3, 7400, 25, 'Hyatt Grove', '300967', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(4, 'Lizzie', 845, 11, 404.85, 9, 1, 2424, 5, 'Hyatt Turnpike', '58568', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(5, 'Aurelia', 757, 2, 967.3, 3, 2, 2135, 32, 'Clement Well', '112256', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(6, 'Julien', 701, 3, 350.63, 5, 2, 4575, 59, 'Ayden Curve', '730089', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(7, 'Allen', 895, 4, 99.77, 9, 1, 4550, 56, 'Laverne Knolls', '496446', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(8, 'Enoch', 828, 3, 487.9, 6, 3, 2419, 57, 'Weissnat Pass', '442255', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(9, 'Merlin', 726, 7, 69.99, 4, 1, 4595, 25, 'McKenzie Views', '569481', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(10, 'Reyes', 368, 1, 167.26, 8, 1, 2634, 47, 'Bogisich Lake', '51404', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(11, 'Vergie', 661, 4, 708.72, 10, 2, 5370, 12, 'Kieran Passage', '483973', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(12, 'Theo', 827, 13, 945.85, 14, 1, 5100, 13, 'Glover Plain', '383404', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(13, 'Estefania', 296, 3, 419.8, 7, 1, 8550, 71, 'Morar Keys', '838889', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(14, 'Sven', 981, 9, 427.37, 2, 3, 4470, 86, 'Rosenbaum Hill', '532139', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(15, 'Dexter', 253, 5, 146.58, 10, 3, 7301, 87, 'Leuschke Mountain', '623890', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(16, 'Liliana', 318, 12, 426.57, 8, 2, 1098, 65, 'Goldner Forge', '211683', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(17, 'Adele', 412, 6, 287.22, 2, 3, 2424, 57, 'Benny Roads', '896579', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(18, 'Lempi', 647, 13, 193.41, 10, 3, 1169, 58, 'Bart Junctions', '364719', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(19, 'Lucas', 158, 6, 775.46, 14, 2, 4585, 47, 'Nitzsche Neck', '715965', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(20, 'Lucile', 835, 11, 751.07, 8, 2, 7040, 68, 'Rath Lights', '446566', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(21, 'Cullen', 706, 3, 832.12, 14, 3, 8000, 92, 'Gislason Orchard', '787284', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(22, 'Reid', 198, 1, 317.97, 12, 1, 2615, 34, 'Gusikowski Pass', '673209', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(23, 'Arjun', 141, 1, 907.63, 11, 1, 4825, 59, 'Kihn Ridge', '174075', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(24, 'Dimitri', 175, 6, 640.56, 7, 1, 2830, 12, 'Torrance View', '318924', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(25, 'Esta', 792, 12, 656.74, 4, 1, 4486, 70, 'Kilback Haven', '453593', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(26, 'Alana', 238, 14, 177.27, 14, 1, 8501, 12, 'Jones Court', '219331', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(27, 'Wendy', 55, 5, 830.21, 8, 1, 2689, 13, 'Pouros Manors', '700680', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(28, 'Amara', 315, 10, 165.56, 13, 1, 1250, 8, 'Frederic Court', '654510', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(29, 'Chasity', 538, 5, 148.24, 11, 1, 1209, 92, 'Virginia Union', '173540', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(30, 'Robyn', 62, 6, 683.53, 1, 1, 3320, 33, 'Carlos Mills', '932335', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(31, 'Lula', 72, 13, 993.63, 8, 3, 2760, 59, 'Nicklaus Row', '765642', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(32, 'Jade', 441, 13, 147.96, 6, 2, 4810, 6, 'Wuckert Passage', '826867', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(33, 'Aurelio', 4, 10, 879.1, 5, 3, 6360, 96, 'Treutel Forks', '685192', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(34, 'Ezequiel', 108, 4, 113.19, 14, 3, 2130, 49, 'Kunde Centers', '756478', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(35, 'Jocelyn', 387, 12, 93.08, 10, 1, 3804, 43, 'Cedrick Lock', '764366', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(36, 'Carlee', 308, 7, 542.6, 10, 3, 4540, 46, 'Hyatt Manor', '682167', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(37, 'Letitia', 491, 13, 644.11, 10, 3, 6370, 21, 'Toney Forest', '366339', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(38, 'Maximilian', 912, 2, 552.38, 7, 1, 4349, 98, 'Hammes Lake', '518373', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(39, 'Floyd', 786, 7, 817.56, 7, 2, 1099, 36, 'Jaime Shore', '580310', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(40, 'Brianne', 707, 1, 870.55, 7, 3, 3500, 4, 'Bobby Unions', '274025', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(41, 'Dee', 575, 6, 486.09, 6, 2, 4600, 70, 'Effertz Ridges', '333526', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(42, 'Charlotte', 368, 5, 475.77, 7, 2, 4404, 17, 'Lonzo Passage', '87188', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(43, 'Dedrick', 508, 1, 4, 1, 3, 3880, 79, 'Armstrong Walks', '767372', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(44, 'Clair', 334, 2, 542.06, 6, 1, 4750, 21, 'Adell Highway', '117356', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(45, 'Serena', 532, 4, 58.58, 8, 2, 1400, 65, 'Nicolas Turnpike', '417722', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(46, 'Colten', 929, 11, 636, 6, 3, 5114, 64, 'Pollich Radial', '337259', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(47, 'Mara', 773, 3, 535.22, 1, 2, 4960, 43, 'Emil Branch', '718164', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(48, 'Rogelio', 734, 7, 233.71, 13, 1, 2820, 74, 'Nella Highway', '271731', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(49, 'Eleazar', 314, 4, 542.89, 1, 2, 4149, 49, 'Flatley Route', '721551', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(50, 'Thora', 81, 10, 360.24, 1, 3, 8700, 98, 'Rosenbaum Spurs', '383172', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(51, 'Lizzie', 520, 8, 894.47, 3, 3, 1350, 12, 'Keshawn Hill', '509696', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(52, 'Emanuel', 411, 6, 341.03, 10, 2, 6201, 4, 'Schoen Heights', '364276', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(53, 'Ernest', 844, 11, 948.23, 3, 1, 1070, 45, 'Abshire Stream', '659984', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(54, 'Georgette', 283, 11, 844.4, 3, 2, 4760, 77, 'Schaefer Station', '87027', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(55, 'Lee', 400, 3, 903.13, 4, 1, 2820, 25, 'Deshaun Park', '667901', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(56, 'Hettie', 497, 4, 309.06, 12, 2, 1886, 59, 'Andres Ports', '108955', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(57, 'Barrett', 69, 11, 555.08, 2, 2, 4905, 85, 'Labadie Curve', '524455', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(58, 'Pascale', 275, 13, 750.73, 14, 1, 1649, 68, 'Greenholt Oval', '674417', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(59, 'Michale', 93, 7, 46.21, 9, 2, 2675, 21, 'Roslyn Junctions', '78297', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(60, 'Delpha', 655, 11, 82.55, 8, 3, 2490, 85, 'Cole Circle', '348475', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(61, 'Nathen', 273, 13, 929.63, 12, 3, 2260, 79, 'Marlin Alley', '812538', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(62, 'Keanu', 121, 7, 280.92, 7, 2, 4900, 54, 'Mitchell Gardens', '127367', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(63, 'Jayde', 233, 9, 789.61, 8, 1, 4745, 13, 'Terry Groves', '863899', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(64, 'Thaddeus', 111, 7, 164.4, 5, 1, 1495, 68, 'Tyreek Corner', '919326', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(65, 'Cornelius', 188, 7, 580.39, 10, 1, 8100, 89, 'Jacobson Lock', '119900', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(66, 'Deanna', 787, 7, 62.57, 6, 2, 8550, 54, 'Gutmann Rue', '969691', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(67, 'Ellen', 720, 7, 389.41, 8, 2, 3230, 6, 'Miracle Ramp', '254059', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(68, 'Joelle', 718, 12, 482.74, 5, 3, 7350, 5, 'Gladyce Crossroad', '473314', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(69, 'Destany', 206, 3, 636.38, 12, 2, 8500, 47, 'Leila Fork', '859250', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(70, 'Hulda', 697, 6, 181.6, 5, 1, 7860, 43, 'Rutherford Overpass', '846141', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(71, 'Audrey', 553, 3, 897.54, 6, 3, 7200, 33, 'Jennifer Shores', '987492', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(72, 'Leonie', 885, 9, 784.69, 10, 1, 4709, 43, 'Bailee River', '944665', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(73, 'Dannie', 324, 1, 911.91, 12, 1, 8365, 71, 'Jacobs Unions', '326517', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(74, 'Kimberly', 63, 9, 103.02, 11, 3, 6300, 12, 'Mante Fields', '377156', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(75, 'Shanelle', 881, 4, 933.18, 14, 1, 2819, 96, 'Ryan Branch', '971692', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(76, 'Einar', 105, 13, 415.4, 9, 3, 2435, 65, 'Schmidt Freeway', '367418', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(77, 'Rigoberto', 24, 14, 910.53, 12, 1, 3744, 17, 'Felicita Common', '50989', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(78, 'Tyrese', 839, 14, 710.28, 8, 3, 4800, 100, 'Kunde Shores', '455404', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(79, 'Luis', 713, 7, 501.92, 8, 1, 7800, 85, 'Adrianna Flat', '69345', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(80, 'Katelin', 29, 5, 725.39, 14, 1, 8600, 68, 'Wiza Mill', '579406', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(81, 'Santos', 831, 11, 883.08, 14, 2, 2959, 22, 'Albertha Field', '777631', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(82, 'Roselyn', 815, 2, 473.63, 11, 3, 4610, 96, 'Lebsack Wells', '897961', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(83, 'Destin', 936, 4, 315.05, 5, 2, 3754, 79, 'Marvin Prairie', '731506', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(84, 'Fern', 390, 3, 261.04, 4, 3, 4500, 52, 'Mertie Glens', '776778', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(85, 'Newton', 863, 2, 977.4, 5, 3, 7220, 96, 'Eloise Center', '953757', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(86, 'Rafaela', 735, 2, 66.94, 5, 3, 2870, 17, 'Wilderman Crest', '398861', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(87, 'Chandler', 846, 14, 507.65, 6, 1, 4560, 77, 'Bella Estates', '341420', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(88, 'Alexanne', 184, 2, 96.67, 2, 1, 8500, 45, 'Reilly Field', '805885', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(89, 'Haven', 973, 7, 166.08, 4, 3, 2200, 43, 'Heathcote Extensions', '117496', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(90, 'Norbert', 494, 7, 491.66, 5, 2, 5225, 8, 'Lawrence Haven', '846510', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(91, 'Jake', 551, 13, 100.08, 13, 3, 4000, 8, 'Kessler Plaza', '313044', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(92, 'Elroy', 100, 1, 491.42, 6, 2, 2300, 58, 'Smith Springs', '535563', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(93, 'Titus', 214, 1, 277.6, 13, 2, 3880, 34, 'Manuela Highway', '274879', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(94, 'Dallin', 436, 10, 434.46, 9, 1, 5335, 87, 'O\'Kon Mount', '710616', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(95, 'Kieran', 598, 10, 411.42, 6, 3, 2925, 59, 'Kip Plains', '157623', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(96, 'Saul', 648, 6, 921.57, 2, 2, 2450, 52, 'Keagan Forks', '698240', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(97, 'Helen', 944, 14, 877.23, 14, 1, 2695, 97, 'Romaguera Lake', '817339', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(98, 'Bryce', 102, 9, 446.38, 10, 3, 4935, 17, 'Trace Flats', '784195', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(99, 'Anibal', 688, 3, 905.06, 4, 2, 2300, 9, 'Janessa Estate', '142506', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(100, 'Jacky', 251, 3, 306.16, 12, 2, 3624, 93, 'Rowena Lodge', '324509', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(101, 'Joany', 796, 6, 914.11, 5, 1, 2769, 17, 'Koepp Valleys', '833393', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(102, 'Kaitlin', 960, 3, 348.2, 12, 2, 3045, 47, 'Chyna Springs', '77888', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(103, 'Derick', 603, 4, 199.33, 11, 2, 2450, 68, 'Osinski Wall', '580406', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(104, 'Marina', 278, 4, 386.53, 2, 1, 2810, 54, 'Edward Ramp', '730509', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(105, 'Sarah', 539, 14, 390.29, 1, 1, 2404, 32, 'Ortiz Shore', '551533', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(106, 'Lionel', 669, 4, 768.97, 12, 1, 7875, 99, 'Jones Circles', '292609', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(107, 'Jerod', 865, 10, 597.14, 10, 3, 2430, 56, 'Imelda Avenue', '909327', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(108, 'Rubye', 408, 12, 989.23, 2, 3, 7630, 58, 'Daniel Locks', '911290', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(109, 'Garrick', 789, 12, 244.18, 11, 2, 4785, 59, 'Grant Views', '893573', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(110, 'Noemy', 542, 8, 720.08, 4, 1, 1098, 32, 'Bode Trail', '694103', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(111, 'Stephon', 130, 10, 311.13, 3, 2, 4814, 60, 'Kendall Trace', '171787', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(112, 'Devyn', 239, 5, 420.61, 4, 2, 4510, 85, 'West Crescent', '57164', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(113, 'Sophia', 900, 11, 664.48, 13, 3, 7200, 47, 'Aurelio Forks', '912434', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(114, 'Henderson', 404, 1, 972.34, 14, 2, 1069, 97, 'Walker Walk', '189551', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(115, 'Ansel', 817, 4, 133.51, 12, 1, 3054, 8, 'Abigayle Meadows', '322467', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(116, 'Antonetta', 681, 12, 573.12, 4, 2, 4450, 86, 'Feil Pike', '705874', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(117, 'Sally', 56, 4, 786.5, 3, 3, 4825, 50, 'Rasheed Harbor', '844079', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(118, 'Mathilde', 430, 6, 746.71, 4, 1, 2810, 60, 'Chad Way', '511321', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(119, 'Makenzie', 46, 2, 328.28, 3, 1, 4974, 21, 'Caleb Springs', '705795', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(120, 'Torrey', 582, 3, 542.03, 13, 2, 3864, 46, 'Jast Camp', '289559', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(121, 'Wilmer', 955, 4, 917.46, 7, 3, 8005, 93, 'Anne Knolls', '270559', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(122, 'Osvaldo', 610, 5, 224.45, 2, 1, 3280, 25, 'Kling Park', '134003', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(123, 'Alberto', 308, 2, 234.3, 6, 2, 3864, 74, 'Ford Park', '755016', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(124, 'Leonie', 100, 3, 162.3, 10, 2, 6060, 99, 'Zita Roads', '64406', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(125, 'Lexie', 821, 6, 529.07, 6, 2, 5300, 34, 'Ullrich Cliff', '65012', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(126, 'Harley', 695, 5, 379.04, 5, 3, 1208, 21, 'May Extension', '307092', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(127, 'Enid', 279, 4, 741.57, 13, 2, 2040, 21, 'Lucius Mews', '726200', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(128, 'Willy', 674, 1, 810.71, 13, 3, 2205, 87, 'Romaguera Trail', '456032', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(129, 'Dudley', 823, 11, 264.29, 3, 2, 3045, 21, 'Torey Rue', '524039', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(130, 'Nayeli', 540, 2, 61.29, 3, 1, 4540, 52, 'Ora Rapid', '483412', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(131, 'Jakob', 548, 1, 73, 11, 3, 1499, 60, 'Klein Shoal', '752106', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(132, 'Devon', 166, 4, 152.29, 8, 2, 7370, 5, 'Shaina Ramp', '781612', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(133, 'Ryan', 166, 7, 924.27, 4, 3, 2904, 92, 'Grant Shores', '530945', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(134, 'Gerda', 438, 2, 193.47, 11, 3, 2610, 97, 'Eleonore Wall', '415787', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(135, 'Cheyanne', 59, 9, 708.67, 8, 1, 5070, 46, 'Jamarcus Place', '983331', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(136, 'Collin', 381, 12, 182.08, 2, 1, 2630, 33, 'Harold Drive', '737330', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(137, 'Dell', 117, 13, 319.8, 2, 2, 2681, 25, 'Carroll Parkway', '819901', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(138, 'Shane', 204, 8, 23.23, 13, 3, 1685, 57, 'Kennedy Heights', '290571', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(139, 'Margarita', 649, 14, 865.02, 5, 2, 4880, 58, 'Alf Estate', '622963', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(140, 'Giovanna', 77, 13, 83.57, 14, 3, 4250, 71, 'Nader Motorway', '629986', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(141, 'Monte', 538, 14, 309.05, 1, 1, 2485, 12, 'Rosemary Branch', '166813', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(142, 'Jennyfer', 745, 2, 987.6, 12, 1, 2839, 85, 'Derrick Bypass', '521007', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(143, 'Jaleel', 225, 2, 381.32, 4, 3, 2625, 13, 'Joey Expressway', '369493', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(144, 'Anissa', 769, 7, 201.48, 8, 2, 4485, 71, 'Cassin Ramp', '679688', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(145, 'Amya', 727, 10, 516.49, 7, 2, 6004, 79, 'Myra Oval', '365704', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(146, 'Delphia', 891, 12, 865.49, 5, 3, 4745, 34, 'Willms Forest', '125370', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(147, 'Devon', 685, 6, 438.6, 5, 1, 4475, 70, 'Alexane Ranch', '131218', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(148, 'Brandt', 476, 7, 944.8, 8, 2, 4486, 45, 'Kohler Crossing', '497006', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(149, 'Marjolaine', 924, 8, 417.24, 11, 3, 4405, 36, 'Volkman Parks', '724845', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(150, 'Shanelle', 157, 6, 991.89, 10, 3, 4470, 49, 'Erin Camp', '398804', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(151, 'Roma', 404, 12, 818.07, 11, 3, 4525, 36, 'Garett Station', '196789', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(152, 'Otilia', 404, 7, 525.93, 9, 3, 2635, 34, 'Klein Lane', '492827', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(153, 'Sarai', 825, 11, 40.27, 5, 2, 2040, 32, 'Kennedy Valley', '434495', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(154, 'Valerie', 627, 8, 800.5, 13, 1, 3105, 77, 'Eleanora Corners', '677908', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(155, 'Cecile', 642, 9, 787.32, 11, 1, 4000, 47, 'Bart Inlet', '304743', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(156, 'Ricardo', 401, 7, 508.35, 12, 2, 2000, 22, 'Schaefer Gateway', '898818', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(157, 'Eldora', 540, 5, 748.18, 3, 3, 4350, 58, 'Shyann Oval', '125663', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(158, 'Haley', 515, 14, 666.42, 5, 3, 4640, 74, 'Devon Meadows', '921359', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(159, 'Maxine', 992, 10, 282.69, 3, 2, 4100, 43, 'Swaniawski Manors', '884959', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(160, 'Alford', 840, 10, 698.31, 5, 3, 3750, 79, 'Jada Underpass', '249057', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(161, 'Carlee', 321, 13, 586.49, 13, 3, 3885, 50, 'Becker Canyon', '336398', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(162, 'Jayson', 321, 14, 496.97, 14, 3, 7801, 96, 'Rutherford Port', '764040', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(163, 'Leopoldo', 842, 8, 837.38, 3, 3, 4049, 92, 'Ryan Fork', '566587', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(164, 'Julianne', 978, 12, 335.49, 9, 1, 8136, 65, 'Claudie Rue', '519985', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(165, 'Cullen', 377, 14, 852.13, 4, 3, 2740, 87, 'Julio Underpass', '373160', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(166, 'Xander', 140, 3, 885.83, 5, 1, 7580, 89, 'Stark Vista', '820220', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(167, 'Vivianne', 354, 4, 314.02, 13, 1, 2951, 46, 'Theo Lake', '201466', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(168, 'Eulalia', 505, 11, 220.9, 14, 2, 5120, 6, 'Wiza Lane', '457245', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(169, 'Gerson', 16, 7, 285.53, 13, 3, 2600, 25, 'Hodkiewicz Prairie', '468407', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(170, 'Margaret', 596, 12, 866.85, 4, 1, 4434, 9, 'Amanda Causeway', '160304', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(171, 'Carli', 354, 2, 903.4, 10, 1, 1750, 49, 'Jordan Throughway', '239873', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(172, 'Eldon', 201, 9, 778.98, 12, 2, 3570, 74, 'Wuckert Mews', '693325', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(173, 'Eleanore', 888, 10, 206.12, 11, 1, 2834, 98, 'Pacocha Cove', '752511', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(174, 'Fleta', 823, 11, 763.62, 9, 3, 4480, 96, 'Leuschke Path', '983870', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(175, 'Leonard', 324, 6, 773.07, 7, 3, 4479, 36, 'Considine Mews', '94500', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(176, 'Devon', 701, 7, 986.76, 3, 2, 2405, 57, 'Orland Club', '888842', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(177, 'Paxton', 448, 12, 946.76, 3, 2, 2825, 33, 'Bernice Highway', '73187', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(178, 'Deanna', 440, 13, 560.63, 8, 1, 2485, 56, 'Kuhlman Flat', '234529', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(179, 'Emile', 346, 2, 689.92, 13, 1, 3045, 8, 'Jordi Unions', '986621', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(180, 'Maximillian', 705, 7, 346.83, 9, 3, 7885, 58, 'Gerlach Pass', '663893', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(181, 'Dayton', 652, 6, 158.73, 3, 1, 4990, 89, 'Rogahn Well', '317332', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(182, 'Mohamed', 286, 12, 501.52, 11, 2, 1098, 87, 'Loyce Plains', '985118', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(183, 'Giles', 60, 14, 305.96, 4, 2, 3684, 22, 'Little Plains', '154860', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(184, 'Lonnie', 217, 5, 284.35, 8, 1, 2410, 32, 'Jordane Estates', '269296', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(185, 'Clay', 701, 5, 949.39, 5, 2, 3305, 34, 'Orland Greens', '881829', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(186, 'Alejandra', 562, 12, 138.49, 4, 3, 4710, 50, 'Howe Shoal', '635116', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(187, 'Kellen', 221, 6, 530.41, 4, 3, 2500, 57, 'Crooks Land', '479635', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(188, 'Clint', 5, 10, 585.7, 9, 1, 2789, 93, 'Stanton Summit', '411737', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(189, 'Jasen', 232, 8, 370.25, 6, 1, 7400, 85, 'Bins Garden', '868659', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(190, 'Colby', 28, 6, 384.68, 9, 2, 7645, 70, 'Swift Springs', '246087', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(191, 'Santos', 873, 12, 206.65, 2, 2, 2914, 13, 'Terrell Ways', '906548', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(192, 'Amir', 652, 9, 676.67, 5, 1, 5090, 52, 'Shaniya Viaduct', '750286', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(193, 'Sterling', 394, 4, 684.95, 11, 2, 2640, 49, 'Koepp Tunnel', '895873', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(194, 'Torey', 578, 7, 866.45, 14, 3, 7875, 99, 'Aufderhar Extension', '482208', 'http://api.localhost/images/testtt.jpg', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(195, 'Alfonso', 670, 10, 831.42, 9, 2, 2900, 71, 'Idella Springs', '228421', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(196, 'Daphne', 727, 12, 818.5, 9, 2, 2500, 22, 'Harvey Villages', '385498', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(197, 'Nasir', 260, 6, 949.04, 1, 3, 2970, 71, 'Veum Streets', '484200', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(198, 'Maria', 171, 3, 617.39, 13, 2, 4765, 87, 'Crist Squares', '153618', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(199, 'Sonny', 908, 6, 650.04, 3, 2, 4755, 13, 'Kilback Prairie', '728022', 'http://api.localhost/images/testt.jpg', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(200, 'Green', 192, 7, 6.34, 1, 1, 4049, 98, 'Mertie Causeway', '678816', 'http://api.localhost/images/test.jpg', '2023-06-13 23:36:36', '2023-06-13 23:36:36');

-- --------------------------------------------------------

--
-- Estrutura da tabela `house_services`
--

CREATE TABLE `house_services` (
  `id` bigint NOT NULL,
  `house_id` int DEFAULT NULL,
  `service_id` int DEFAULT NULL,
  `price` float DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `house_services`
--

INSERT INTO `house_services` (`id`, `house_id`, `service_id`, `price`, `created_at`, `updated_at`) VALUES
(1, 1, 3, 33, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(2, 2, 1, 21, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(3, 3, 1, 32, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(4, 4, 3, 20, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(5, 5, 3, 47, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(6, 6, 1, 31, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(7, 7, 3, 13, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(8, 8, 3, 29, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(9, 9, 2, 28, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(10, 10, 1, 42, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(11, 11, 1, 20, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(12, 12, 2, 27, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(13, 13, 3, 48, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(14, 14, 3, 49, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(15, 15, 2, 18, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(16, 16, 3, 22, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(17, 17, 3, 29, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(18, 18, 1, 26, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(19, 19, 3, 34, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(20, 20, 2, 11, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(21, 21, 1, 38, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(22, 22, 1, 27, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(23, 23, 3, 18, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(24, 24, 1, 38, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(25, 25, 1, 39, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(26, 26, 1, 10, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(27, 27, 1, 47, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(28, 28, 3, 42, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(29, 29, 3, 33, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(30, 30, 1, 25, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(31, 31, 2, 49, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(32, 32, 2, 33, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(33, 33, 3, 17, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(34, 34, 3, 39, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(35, 35, 3, 42, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(36, 36, 1, 41, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(37, 37, 1, 33, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(38, 38, 1, 33, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(39, 39, 1, 50, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(40, 40, 3, 26, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(41, 41, 1, 41, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(42, 42, 3, 49, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(43, 43, 3, 16, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(44, 44, 3, 44, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(45, 45, 3, 29, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(46, 46, 1, 34, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(47, 47, 1, 45, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(48, 48, 2, 19, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(49, 49, 3, 35, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(50, 50, 2, 26, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(51, 51, 3, 30, '2023-06-13 23:36:30', '2023-06-13 23:36:30'),
(52, 52, 1, 24, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(53, 53, 3, 35, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(54, 54, 3, 37, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(55, 55, 2, 32, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(56, 56, 1, 29, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(57, 57, 1, 43, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(58, 58, 2, 48, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(59, 59, 1, 19, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(60, 60, 3, 44, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(61, 61, 1, 36, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(62, 62, 3, 23, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(63, 63, 1, 43, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(64, 64, 3, 47, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(65, 65, 2, 38, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(66, 66, 3, 14, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(67, 67, 2, 49, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(68, 68, 3, 44, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(69, 69, 1, 38, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(70, 70, 1, 20, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(71, 71, 3, 45, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(72, 72, 2, 45, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(73, 73, 1, 32, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(74, 74, 1, 40, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(75, 75, 1, 16, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(76, 76, 2, 50, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(77, 77, 1, 21, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(78, 78, 1, 11, '2023-06-13 23:36:31', '2023-06-13 23:36:31'),
(79, 79, 3, 28, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(80, 80, 2, 22, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(81, 81, 2, 50, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(82, 82, 1, 35, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(83, 83, 3, 14, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(84, 84, 2, 44, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(85, 85, 2, 29, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(86, 86, 3, 41, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(87, 87, 1, 32, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(88, 88, 1, 40, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(89, 89, 3, 17, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(90, 90, 1, 43, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(91, 91, 3, 40, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(92, 92, 2, 45, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(93, 93, 1, 45, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(94, 94, 2, 16, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(95, 95, 2, 40, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(96, 96, 3, 28, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(97, 97, 3, 20, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(98, 98, 1, 39, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(99, 99, 2, 20, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(100, 100, 1, 28, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(101, 101, 1, 24, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(102, 102, 2, 12, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(103, 103, 2, 29, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(104, 104, 2, 40, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(105, 105, 2, 50, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(106, 106, 3, 28, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(107, 107, 3, 36, '2023-06-13 23:36:32', '2023-06-13 23:36:32'),
(108, 108, 1, 19, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(109, 109, 2, 39, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(110, 110, 3, 24, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(111, 111, 3, 20, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(112, 112, 2, 21, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(113, 113, 3, 32, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(114, 114, 2, 50, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(115, 115, 2, 48, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(116, 116, 2, 35, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(117, 117, 1, 48, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(118, 118, 2, 23, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(119, 119, 1, 18, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(120, 120, 1, 36, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(121, 121, 2, 19, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(122, 122, 2, 17, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(123, 123, 2, 17, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(124, 124, 1, 21, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(125, 125, 1, 44, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(126, 126, 3, 18, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(127, 127, 2, 20, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(128, 128, 1, 13, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(129, 129, 1, 31, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(130, 130, 2, 46, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(131, 131, 3, 11, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(132, 132, 1, 25, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(133, 133, 2, 31, '2023-06-13 23:36:33', '2023-06-13 23:36:33'),
(134, 134, 3, 26, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(135, 135, 2, 25, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(136, 136, 3, 27, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(137, 137, 2, 44, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(138, 138, 2, 50, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(139, 139, 2, 43, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(140, 140, 1, 45, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(141, 141, 2, 50, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(142, 142, 3, 13, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(143, 143, 3, 19, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(144, 144, 1, 40, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(145, 145, 3, 29, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(146, 146, 3, 50, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(147, 147, 2, 16, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(148, 148, 1, 50, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(149, 149, 2, 40, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(150, 150, 2, 28, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(151, 151, 3, 40, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(152, 152, 1, 40, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(153, 153, 2, 32, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(154, 154, 1, 46, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(155, 155, 1, 48, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(156, 156, 3, 45, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(157, 157, 1, 24, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(158, 158, 3, 18, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(159, 159, 3, 10, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(160, 160, 1, 31, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(161, 161, 3, 18, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(162, 162, 3, 33, '2023-06-13 23:36:34', '2023-06-13 23:36:34'),
(163, 163, 2, 32, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(164, 164, 2, 20, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(165, 165, 2, 42, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(166, 166, 1, 40, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(167, 167, 1, 28, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(168, 168, 1, 20, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(169, 169, 3, 42, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(170, 170, 3, 23, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(171, 171, 1, 24, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(172, 172, 2, 24, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(173, 173, 1, 16, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(174, 174, 2, 19, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(175, 175, 1, 35, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(176, 176, 1, 17, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(177, 177, 2, 13, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(178, 178, 2, 24, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(179, 179, 3, 31, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(180, 180, 2, 19, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(181, 181, 1, 15, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(182, 182, 1, 20, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(183, 183, 3, 27, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(184, 184, 1, 18, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(185, 185, 3, 18, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(186, 186, 3, 10, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(187, 187, 2, 16, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(188, 188, 2, 36, '2023-06-13 23:36:35', '2023-06-13 23:36:35'),
(189, 189, 1, 29, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(190, 190, 2, 20, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(191, 191, 3, 41, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(192, 192, 2, 49, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(193, 193, 1, 19, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(194, 194, 2, 36, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(195, 195, 1, 27, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(196, 196, 3, 10, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(197, 197, 1, 34, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(198, 198, 2, 28, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(199, 199, 1, 29, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(200, 200, 2, 40, '2023-06-13 23:36:36', '2023-06-13 23:36:36');

-- --------------------------------------------------------

--
-- Estrutura da tabela `notifications`
--

CREATE TABLE `notifications` (
  `id` int NOT NULL,
  `msg` varchar(255) DEFAULT NULL,
  `send` tinyint DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `payments`
--

CREATE TABLE `payments` (
  `id` int NOT NULL,
  `reservation_id` int DEFAULT NULL,
  `state_id` int DEFAULT NULL,
  `creation_date` datetime DEFAULT NULL,
  `payment_date` datetime DEFAULT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `payment_value` float DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `payments`
--

INSERT INTO `payments` (`id`, `reservation_id`, `state_id`, `creation_date`, `payment_date`, `payment_method`, `payment_value`, `created_at`, `updated_at`) VALUES
(1, 1, 2, '2022-12-02 17:01:55', '2024-03-04 04:18:02', 'MBway', 121294, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(2, 2, 2, '2023-05-14 08:14:24', '2023-07-05 14:31:50', 'MBway', 370067, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(3, 3, 1, '2022-07-28 18:23:10', '2023-11-03 09:32:27', 'MBway', 33535.2, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(4, 4, 2, '2023-04-13 23:23:01', '2023-09-07 03:02:54', 'MBway', 171195, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(5, 5, 2, '2023-02-27 00:39:15', '2024-01-24 13:21:22', 'MBway', 247499, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(6, 6, 2, '2023-05-31 17:27:17', '2023-07-08 23:37:45', 'MBway', 153481, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(7, 7, 2, '2023-01-18 02:34:57', '2024-04-17 03:28:56', 'MBway', 238727, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(8, 8, 2, '2023-06-03 08:44:23', '2023-11-19 19:38:09', 'MBway', 29423.8, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(9, 9, 2, '2022-07-21 18:28:37', '2023-06-28 06:35:51', 'MBway', 36172.9, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(10, 10, 2, '2022-11-23 15:24:29', '2023-08-02 13:35:55', 'MBway', 237262, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(11, 11, 2, '2022-09-25 16:11:54', '2023-06-15 13:14:16', 'MBway', 71489.5, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(12, 12, 1, '2022-12-29 07:33:51', '2023-11-13 12:37:18', 'MBway', 336985, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(13, 13, 1, '2022-12-11 08:21:28', '2023-11-17 09:19:05', 'MBway', 69455.7, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(14, 14, 1, '2023-06-06 05:58:38', '2024-01-14 15:30:47', 'MBway', 27913.1, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(15, 15, 1, '2022-06-17 22:15:27', '2023-07-18 00:20:48', 'MBway', 143109, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(16, 16, 2, '2023-05-25 18:17:25', '2023-08-24 11:40:12', 'MBway', 44106.2, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(17, 17, 2, '2022-06-22 02:08:23', '2023-11-01 09:39:22', 'MBway', 11553.7, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(18, 18, 2, '2023-03-02 05:04:16', '2024-05-22 21:32:26', 'MBway', 108023, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(19, 19, 1, '2023-03-01 22:04:19', '2023-09-10 06:17:50', 'MBway', 304042, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(20, 20, 2, '2023-01-17 12:22:27', '2023-12-03 19:14:00', 'MBway', 179362, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(21, 21, 2, '2023-02-16 10:07:58', '2023-11-04 23:01:43', 'MBway', 21068.8, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(22, 22, 2, '2023-02-01 03:26:03', '2024-05-23 11:36:01', 'MBway', 173830, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(23, 23, 1, '2023-02-19 01:17:18', '2024-04-17 03:25:23', 'MBway', 161328, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(24, 24, 1, '2023-03-21 21:08:26', '2024-01-03 18:40:17', 'MBway', 135564, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(25, 25, 1, '2023-03-01 11:39:59', '2024-03-07 18:38:00', 'MBway', 148088, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(26, 26, 2, '2023-03-22 08:36:34', '2024-02-17 13:01:27', 'MBway', 174181, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(27, 27, 2, '2022-12-12 20:40:34', '2023-12-25 20:54:38', 'MBway', 337323, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(28, 28, 1, '2023-06-02 07:43:20', '2023-06-28 05:47:57', 'MBway', 77200, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(29, 29, 2, '2022-10-25 18:32:13', '2023-11-13 07:11:40', 'MBway', 176244, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(30, 30, 2, '2023-06-12 03:12:38', '2023-08-19 15:36:02', 'MBway', 292013, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(31, 31, 2, '2023-05-16 17:13:03', '2023-12-26 06:15:57', 'MBway', 181956, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(32, 32, 2, '2023-01-19 18:15:44', '2023-09-09 08:26:24', 'MBway', 490902, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(33, 33, 2, '2023-05-13 21:00:24', '2024-01-23 19:06:02', 'MBway', 47802.8, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(34, 34, 2, '2022-12-15 16:34:58', '2023-08-01 00:27:11', 'MBway', 86967.8, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(35, 35, 2, '2023-03-21 15:46:52', '2024-04-08 00:50:43', 'MBway', 41090.3, '2023-06-13 23:36:38', '2023-06-13 23:36:38');

-- --------------------------------------------------------

--
-- Estrutura da tabela `payment_states`
--

CREATE TABLE `payment_states` (
  `id` int NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `payment_states`
--

INSERT INTO `payment_states` (`id`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Pendente', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(2, 'Completo', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(3, 'Reembolsado', '2023-06-13 23:36:36', '2023-06-13 23:36:36');

-- --------------------------------------------------------

--
-- Estrutura da tabela `postal_codes`
--

CREATE TABLE `postal_codes` (
  `postal_code` int NOT NULL,
  `concelho` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `postal_codes`
--

INSERT INTO `postal_codes` (`postal_code`, `concelho`, `district`, `created_at`, `updated_at`) VALUES
(0, 'Abrantes', 'Bragança', '2023-06-13 23:36:20', '2023-06-13 23:36:20'),
(1000, 'Lisboa', 'Lisboa', '2023-06-13 23:35:06', '2023-06-13 23:35:06'),
(1049, 'Lisboa', 'Lisboa', '2023-06-13 23:35:07', '2023-06-13 23:35:07'),
(1050, 'Lisboa', 'Lisboa', '2023-06-13 23:35:07', '2023-06-13 23:35:07'),
(1066, 'Lisboa', 'Lisboa', '2023-06-13 23:35:07', '2023-06-13 23:35:07'),
(1067, 'Lisboa', 'Lisboa', '2023-06-13 23:35:07', '2023-06-13 23:35:07'),
(1068, 'Lisboa', 'Lisboa', '2023-06-13 23:35:07', '2023-06-13 23:35:07'),
(1069, 'Lisboa', 'Lisboa', '2023-06-13 23:35:07', '2023-06-13 23:35:07'),
(1070, 'Lisboa', 'Lisboa', '2023-06-13 23:35:07', '2023-06-13 23:35:07'),
(1092, 'Lisboa', 'Lisboa', '2023-06-13 23:35:07', '2023-06-13 23:35:07'),
(1098, 'Lisboa', 'Lisboa', '2023-06-13 23:35:07', '2023-06-13 23:35:07'),
(1099, 'Lisboa', 'Lisboa', '2023-06-13 23:35:07', '2023-06-13 23:35:07'),
(1100, 'Lisboa', 'Lisboa', '2023-06-13 23:35:07', '2023-06-13 23:35:07'),
(1149, 'Lisboa', 'Lisboa', '2023-06-13 23:35:08', '2023-06-13 23:35:08'),
(1150, 'Lisboa', 'Lisboa', '2023-06-13 23:35:08', '2023-06-13 23:35:08'),
(1166, 'Lisboa', 'Lisboa', '2023-06-13 23:35:08', '2023-06-13 23:35:08'),
(1167, 'Lisboa', 'Lisboa', '2023-06-13 23:35:08', '2023-06-13 23:35:08'),
(1169, 'Lisboa', 'Lisboa', '2023-06-13 23:35:08', '2023-06-13 23:35:08'),
(1170, 'Lisboa', 'Lisboa', '2023-06-13 23:35:08', '2023-06-13 23:35:08'),
(1199, 'Lisboa', 'Lisboa', '2023-06-13 23:35:08', '2023-06-13 23:35:08'),
(1200, 'Lisboa', 'Lisboa', '2023-06-13 23:35:08', '2023-06-13 23:35:08'),
(1208, 'Lisboa', 'Lisboa', '2023-06-13 23:35:08', '2023-06-13 23:35:08'),
(1209, 'Lisboa', 'Lisboa', '2023-06-13 23:35:08', '2023-06-13 23:35:08'),
(1249, 'Lisboa', 'Lisboa', '2023-06-13 23:35:09', '2023-06-13 23:35:09'),
(1250, 'Lisboa', 'Lisboa', '2023-06-13 23:35:09', '2023-06-13 23:35:09'),
(1269, 'Lisboa', 'Lisboa', '2023-06-13 23:35:09', '2023-06-13 23:35:09'),
(1300, 'Lisboa', 'Lisboa', '2023-06-13 23:35:09', '2023-06-13 23:35:09'),
(1349, 'Lisboa', 'Lisboa', '2023-06-13 23:35:09', '2023-06-13 23:35:09'),
(1350, 'Lisboa', 'Lisboa', '2023-06-13 23:35:09', '2023-06-13 23:35:09'),
(1399, 'Lisboa', 'Lisboa', '2023-06-13 23:35:09', '2023-06-13 23:35:09'),
(1400, 'Lisboa', 'Lisboa', '2023-06-13 23:35:09', '2023-06-13 23:35:09'),
(1449, 'Lisboa', 'Lisboa', '2023-06-13 23:35:09', '2023-06-13 23:35:09'),
(1495, 'Oeiras', 'Lisboa', '2023-06-13 23:35:09', '2023-06-13 23:35:09'),
(1499, 'Oeiras', 'Lisboa', '2023-06-13 23:35:10', '2023-06-13 23:35:10'),
(1500, 'Lisboa', 'Lisboa', '2023-06-13 23:35:10', '2023-06-13 23:35:10'),
(1549, 'Lisboa', 'Lisboa', '2023-06-13 23:35:10', '2023-06-13 23:35:10'),
(1600, 'Lisboa', 'Lisboa', '2023-06-13 23:35:10', '2023-06-13 23:35:10'),
(1649, 'Lisboa', 'Lisboa', '2023-06-13 23:35:10', '2023-06-13 23:35:10'),
(1675, 'Odivelas', 'Lisboa', '2023-06-13 23:35:10', '2023-06-13 23:35:10'),
(1679, 'Odivelas', 'Lisboa', '2023-06-13 23:35:10', '2023-06-13 23:35:10'),
(1685, 'Odivelas', 'Lisboa', '2023-06-13 23:35:10', '2023-06-13 23:35:10'),
(1689, 'Odivelas', 'Lisboa', '2023-06-13 23:35:11', '2023-06-13 23:35:11'),
(1700, 'Lisboa', 'Lisboa', '2023-06-13 23:35:11', '2023-06-13 23:35:11'),
(1748, 'Lisboa', 'Lisboa', '2023-06-13 23:35:11', '2023-06-13 23:35:11'),
(1749, 'Lisboa', 'Lisboa', '2023-06-13 23:35:11', '2023-06-13 23:35:11'),
(1750, 'Lisboa', 'Lisboa', '2023-06-13 23:35:11', '2023-06-13 23:35:11'),
(1769, 'Lisboa', 'Lisboa', '2023-06-13 23:35:11', '2023-06-13 23:35:11'),
(1800, 'Lisboa', 'Lisboa', '2023-06-13 23:35:11', '2023-06-13 23:35:11'),
(1849, 'Lisboa', 'Lisboa', '2023-06-13 23:35:11', '2023-06-13 23:35:11'),
(1885, 'Loures', 'Lisboa', '2023-06-13 23:35:11', '2023-06-13 23:35:11'),
(1886, 'Loures', 'Lisboa', '2023-06-13 23:35:12', '2023-06-13 23:35:12'),
(1900, 'Lisboa', 'Lisboa', '2023-06-13 23:35:12', '2023-06-13 23:35:12'),
(1949, 'Lisboa', 'Lisboa', '2023-06-13 23:35:12', '2023-06-13 23:35:12'),
(1950, 'Lisboa', 'Lisboa', '2023-06-13 23:35:12', '2023-06-13 23:35:12'),
(1959, 'Lisboa', 'Lisboa', '2023-06-13 23:35:12', '2023-06-13 23:35:12'),
(1990, 'Lisboa', 'Lisboa', '2023-06-13 23:35:12', '2023-06-13 23:35:12'),
(1998, 'Lisboa', 'Lisboa', '2023-06-13 23:35:12', '2023-06-13 23:35:12'),
(2000, 'Santarém', 'Santarém', '2023-06-13 23:35:12', '2023-06-13 23:35:12'),
(2004, 'Santarém', 'Santarém', '2023-06-13 23:35:13', '2023-06-13 23:35:13'),
(2005, 'Santarém', 'Santarém', '2023-06-13 23:35:13', '2023-06-13 23:35:13'),
(2009, 'Santarém', 'Santarém', '2023-06-13 23:35:13', '2023-06-13 23:35:13'),
(2025, 'Santarém', 'Santarém', '2023-06-13 23:35:13', '2023-06-13 23:35:13'),
(2040, 'Rio Maior', 'Santarém', '2023-06-13 23:35:13', '2023-06-13 23:35:13'),
(2050, 'Azambuja', 'Lisboa', '2023-06-13 23:35:13', '2023-06-13 23:35:13'),
(2054, 'Azambuja', 'Lisboa', '2023-06-13 23:35:13', '2023-06-13 23:35:13'),
(2065, 'Azambuja', 'Lisboa', '2023-06-13 23:35:13', '2023-06-13 23:35:13'),
(2070, 'Cartaxo', 'Santarém', '2023-06-13 23:35:13', '2023-06-13 23:35:13'),
(2080, 'Almeirim', 'Santarém', '2023-06-13 23:35:13', '2023-06-13 23:35:13'),
(2090, 'Alpiarça', 'Santarém', '2023-06-13 23:35:14', '2023-06-13 23:35:14'),
(2100, 'Montijo', 'Setúbal', '2023-06-13 23:35:14', '2023-06-13 23:35:14'),
(2120, 'Salvaterra de Magos', 'Santarém', '2023-06-13 23:35:14', '2023-06-13 23:35:14'),
(2125, 'Salvaterra de Magos', 'Santarém', '2023-06-13 23:35:14', '2023-06-13 23:35:14'),
(2130, 'Benavente', 'Santarém', '2023-06-13 23:35:14', '2023-06-13 23:35:14'),
(2135, 'Benavente', 'Santarém', '2023-06-13 23:35:14', '2023-06-13 23:35:14'),
(2139, 'Benavente', 'Santarém', '2023-06-13 23:35:15', '2023-06-13 23:35:15'),
(2140, 'Chamusca', 'Santarém', '2023-06-13 23:35:15', '2023-06-13 23:35:15'),
(2150, 'Golegã', 'Santarém', '2023-06-13 23:35:15', '2023-06-13 23:35:15'),
(2200, 'Abrantes', 'Santarém', '2023-06-13 23:35:15', '2023-06-13 23:35:15'),
(2205, 'Abrantes', 'Santarém', '2023-06-13 23:35:15', '2023-06-13 23:35:15'),
(2230, 'Sardoal', 'Santarém', '2023-06-13 23:35:15', '2023-06-13 23:35:15'),
(2240, 'Ferreira do Zêzere', 'Santarém', '2023-06-13 23:35:15', '2023-06-13 23:35:15'),
(2250, 'Constância', 'Santarém', '2023-06-13 23:35:15', '2023-06-13 23:35:15'),
(2260, 'Vila Nova da Barquinha', 'Santarém', '2023-06-13 23:35:15', '2023-06-13 23:35:15'),
(2300, 'Tomar', 'Santarém', '2023-06-13 23:35:15', '2023-06-13 23:35:15'),
(2305, 'Tomar', 'Santarém', '2023-06-13 23:35:16', '2023-06-13 23:35:16'),
(2330, 'Entroncamento', 'Santarém', '2023-06-13 23:35:16', '2023-06-13 23:35:16'),
(2350, 'Torres Novas', 'Santarém', '2023-06-13 23:35:16', '2023-06-13 23:35:16'),
(2354, 'Torres Novas', 'Santarém', '2023-06-13 23:35:16', '2023-06-13 23:35:16'),
(2380, 'Alcanena', 'Santarém', '2023-06-13 23:35:16', '2023-06-13 23:35:16'),
(2384, 'Alcanena', 'Santarém', '2023-06-13 23:35:16', '2023-06-13 23:35:16'),
(2395, 'Alcanena', 'Santarém', '2023-06-13 23:35:16', '2023-06-13 23:35:16'),
(2400, 'Leiria', 'Leiria', '2023-06-13 23:35:16', '2023-06-13 23:35:16'),
(2404, 'Leiria', 'Leiria', '2023-06-13 23:35:16', '2023-06-13 23:35:16'),
(2405, 'Leiria', 'Leiria', '2023-06-13 23:35:16', '2023-06-13 23:35:16'),
(2410, 'Leiria', 'Leiria', '2023-06-13 23:35:16', '2023-06-13 23:35:16'),
(2414, 'Leiria', 'Leiria', '2023-06-13 23:35:17', '2023-06-13 23:35:17'),
(2415, 'Leiria', 'Leiria', '2023-06-13 23:35:17', '2023-06-13 23:35:17'),
(2419, 'Leiria', 'Leiria', '2023-06-13 23:35:17', '2023-06-13 23:35:17'),
(2420, 'Leiria', 'Leiria', '2023-06-13 23:35:17', '2023-06-13 23:35:17'),
(2424, 'Leiria', 'Leiria', '2023-06-13 23:35:17', '2023-06-13 23:35:17'),
(2425, 'Leiria', 'Leiria', '2023-06-13 23:35:17', '2023-06-13 23:35:17'),
(2430, 'Marinha Grande', 'Leiria', '2023-06-13 23:35:17', '2023-06-13 23:35:17'),
(2435, 'Ourém', 'Santarém', '2023-06-13 23:35:17', '2023-06-13 23:35:17'),
(2440, 'Batalha', 'Leiria', '2023-06-13 23:35:18', '2023-06-13 23:35:18'),
(2445, 'Alcobaça', 'Leiria', '2023-06-13 23:35:18', '2023-06-13 23:35:18'),
(2450, 'Nazaré', 'Leiria', '2023-06-13 23:35:18', '2023-06-13 23:35:18'),
(2460, 'Alcobaça', 'Leiria', '2023-06-13 23:35:18', '2023-06-13 23:35:18'),
(2461, 'Alcobaça', 'Leiria', '2023-06-13 23:35:18', '2023-06-13 23:35:18'),
(2475, 'Alcobaça', 'Leiria', '2023-06-13 23:35:18', '2023-06-13 23:35:18'),
(2480, 'Porto de Mós', 'Leiria', '2023-06-13 23:35:18', '2023-06-13 23:35:18'),
(2485, 'Porto de Mós', 'Leiria', '2023-06-13 23:35:18', '2023-06-13 23:35:18'),
(2490, 'Ourém', 'Santarém', '2023-06-13 23:35:18', '2023-06-13 23:35:18'),
(2495, 'Batalha', 'Leiria', '2023-06-13 23:35:19', '2023-06-13 23:35:19'),
(2500, 'Caldas da Rainha', 'Leiria', '2023-06-13 23:35:19', '2023-06-13 23:35:19'),
(2504, 'Caldas da Rainha', 'Leiria', '2023-06-13 23:35:19', '2023-06-13 23:35:19'),
(2510, 'Óbidos', 'Leiria', '2023-06-13 23:35:19', '2023-06-13 23:35:19'),
(2520, 'Peniche', 'Leiria', '2023-06-13 23:35:19', '2023-06-13 23:35:19'),
(2525, 'Peniche', 'Leiria', '2023-06-13 23:35:19', '2023-06-13 23:35:19'),
(2530, 'Lourinhã', 'Lisboa', '2023-06-13 23:35:19', '2023-06-13 23:35:19'),
(2540, 'Bombarral', 'Leiria', '2023-06-13 23:35:20', '2023-06-13 23:35:20'),
(2550, 'Cadaval', 'Lisboa', '2023-06-13 23:35:20', '2023-06-13 23:35:20'),
(2560, 'Torres Vedras', 'Lisboa', '2023-06-13 23:35:20', '2023-06-13 23:35:20'),
(2565, 'Torres Vedras', 'Lisboa', '2023-06-13 23:35:20', '2023-06-13 23:35:20'),
(2580, 'Alenquer', 'Lisboa', '2023-06-13 23:35:20', '2023-06-13 23:35:20'),
(2581, 'Alenquer', 'Lisboa', '2023-06-13 23:35:21', '2023-06-13 23:35:21'),
(2590, 'Sobral de Monte Agraço', 'Lisboa', '2023-06-13 23:35:21', '2023-06-13 23:35:21'),
(2594, 'Sobral de Monte Agraço', 'Lisboa', '2023-06-13 23:35:21', '2023-06-13 23:35:21'),
(2600, 'Vila Franca de Xira', 'Lisboa', '2023-06-13 23:35:21', '2023-06-13 23:35:21'),
(2601, 'Vila Franca de Xira', 'Lisboa', '2023-06-13 23:35:21', '2023-06-13 23:35:21'),
(2605, 'Sintra', 'Lisboa', '2023-06-13 23:35:21', '2023-06-13 23:35:21'),
(2609, 'Sintra', 'Lisboa', '2023-06-13 23:35:21', '2023-06-13 23:35:21'),
(2610, 'Amadora', 'Lisboa', '2023-06-13 23:35:21', '2023-06-13 23:35:21'),
(2614, 'Amadora', 'Lisboa', '2023-06-13 23:35:21', '2023-06-13 23:35:21'),
(2615, 'Vila Franca de Xira', 'Lisboa', '2023-06-13 23:35:21', '2023-06-13 23:35:21'),
(2616, 'Vila Franca de Xira', 'Lisboa', '2023-06-13 23:35:21', '2023-06-13 23:35:21'),
(2619, 'Vila Franca de Xira', 'Lisboa', '2023-06-13 23:35:21', '2023-06-13 23:35:21'),
(2620, 'Odivelas', 'Lisboa', '2023-06-13 23:35:21', '2023-06-13 23:35:21'),
(2621, 'Odivelas', 'Lisboa', '2023-06-13 23:35:21', '2023-06-13 23:35:21'),
(2625, 'Vila Franca de Xira', 'Lisboa', '2023-06-13 23:35:21', '2023-06-13 23:35:21'),
(2626, 'Vila Franca de Xira', 'Lisboa', '2023-06-13 23:35:22', '2023-06-13 23:35:22'),
(2630, 'Arruda dos Vinhos', 'Lisboa', '2023-06-13 23:35:22', '2023-06-13 23:35:22'),
(2634, 'Arruda dos Vinhos', 'Lisboa', '2023-06-13 23:35:22', '2023-06-13 23:35:22'),
(2635, 'Sintra', 'Lisboa', '2023-06-13 23:35:22', '2023-06-13 23:35:22'),
(2639, 'Sintra', 'Lisboa', '2023-06-13 23:35:22', '2023-06-13 23:35:22'),
(2640, 'Mafra', 'Lisboa', '2023-06-13 23:35:22', '2023-06-13 23:35:22'),
(2644, 'Mafra', 'Lisboa', '2023-06-13 23:35:22', '2023-06-13 23:35:22'),
(2645, 'Cascais', 'Lisboa', '2023-06-13 23:35:22', '2023-06-13 23:35:22'),
(2649, 'Cascais', 'Lisboa', '2023-06-13 23:35:22', '2023-06-13 23:35:22'),
(2650, 'Amadora', 'Lisboa', '2023-06-13 23:35:22', '2023-06-13 23:35:22'),
(2654, 'Amadora', 'Lisboa', '2023-06-13 23:35:23', '2023-06-13 23:35:23'),
(2655, 'Mafra', 'Lisboa', '2023-06-13 23:35:23', '2023-06-13 23:35:23'),
(2659, 'Mafra', 'Lisboa', '2023-06-13 23:35:23', '2023-06-13 23:35:23'),
(2660, 'Loures', 'Lisboa', '2023-06-13 23:35:23', '2023-06-13 23:35:23'),
(2664, 'Loures', 'Lisboa', '2023-06-13 23:35:23', '2023-06-13 23:35:23'),
(2665, 'Mafra', 'Lisboa', '2023-06-13 23:35:23', '2023-06-13 23:35:23'),
(2669, 'Mafra', 'Lisboa', '2023-06-13 23:35:23', '2023-06-13 23:35:23'),
(2670, 'Loures', 'Lisboa', '2023-06-13 23:35:23', '2023-06-13 23:35:23'),
(2674, 'Loures', 'Lisboa', '2023-06-13 23:35:23', '2023-06-13 23:35:23'),
(2675, 'Odivelas', 'Lisboa', '2023-06-13 23:35:23', '2023-06-13 23:35:23'),
(2680, 'Loures', 'Lisboa', '2023-06-13 23:35:24', '2023-06-13 23:35:24'),
(2681, 'Loures', 'Lisboa', '2023-06-13 23:35:24', '2023-06-13 23:35:24'),
(2685, 'Loures', 'Lisboa', '2023-06-13 23:35:24', '2023-06-13 23:35:24'),
(2689, 'Loures', 'Lisboa', '2023-06-13 23:35:24', '2023-06-13 23:35:24'),
(2690, 'Loures', 'Lisboa', '2023-06-13 23:35:24', '2023-06-13 23:35:24'),
(2691, 'Loures', 'Lisboa', '2023-06-13 23:35:24', '2023-06-13 23:35:24'),
(2694, 'Loures', 'Lisboa', '2023-06-13 23:35:24', '2023-06-13 23:35:24'),
(2695, 'Loures', 'Lisboa', '2023-06-13 23:35:24', '2023-06-13 23:35:24'),
(2699, 'Loures', 'Lisboa', '2023-06-13 23:35:24', '2023-06-13 23:35:24'),
(2700, 'Amadora', 'Lisboa', '2023-06-13 23:35:24', '2023-06-13 23:35:24'),
(2704, 'Amadora', 'Lisboa', '2023-06-13 23:35:25', '2023-06-13 23:35:25'),
(2705, 'Sintra', 'Lisboa', '2023-06-13 23:35:25', '2023-06-13 23:35:25'),
(2706, 'Sintra', 'Lisboa', '2023-06-13 23:35:25', '2023-06-13 23:35:25'),
(2709, 'Sintra', 'Lisboa', '2023-06-13 23:35:25', '2023-06-13 23:35:25'),
(2710, 'Sintra', 'Lisboa', '2023-06-13 23:35:25', '2023-06-13 23:35:25'),
(2714, 'Sintra', 'Lisboa', '2023-06-13 23:35:25', '2023-06-13 23:35:25'),
(2715, 'Sintra', 'Lisboa', '2023-06-13 23:35:25', '2023-06-13 23:35:25'),
(2719, 'Sintra', 'Lisboa', '2023-06-13 23:35:25', '2023-06-13 23:35:25'),
(2720, 'Amadora', 'Lisboa', '2023-06-13 23:35:25', '2023-06-13 23:35:25'),
(2724, 'Amadora', 'Lisboa', '2023-06-13 23:35:25', '2023-06-13 23:35:25'),
(2725, 'Sintra', 'Lisboa', '2023-06-13 23:35:26', '2023-06-13 23:35:26'),
(2729, 'Sintra', 'Lisboa', '2023-06-13 23:35:26', '2023-06-13 23:35:26'),
(2730, 'Oeiras', 'Lisboa', '2023-06-13 23:35:26', '2023-06-13 23:35:26'),
(2734, 'Oeiras', 'Lisboa', '2023-06-13 23:35:26', '2023-06-13 23:35:26'),
(2735, 'Sintra', 'Lisboa', '2023-06-13 23:35:26', '2023-06-13 23:35:26'),
(2739, 'Sintra', 'Lisboa', '2023-06-13 23:35:26', '2023-06-13 23:35:26'),
(2740, 'Oeiras', 'Lisboa', '2023-06-13 23:35:26', '2023-06-13 23:35:26'),
(2744, 'Oeiras', 'Lisboa', '2023-06-13 23:35:26', '2023-06-13 23:35:26'),
(2745, 'Sintra', 'Lisboa', '2023-06-13 23:35:26', '2023-06-13 23:35:26'),
(2749, 'Sintra', 'Lisboa', '2023-06-13 23:35:27', '2023-06-13 23:35:27'),
(2750, 'Cascais', 'Lisboa', '2023-06-13 23:35:27', '2023-06-13 23:35:27'),
(2754, 'Cascais', 'Lisboa', '2023-06-13 23:35:27', '2023-06-13 23:35:27'),
(2755, 'Cascais', 'Lisboa', '2023-06-13 23:35:27', '2023-06-13 23:35:27'),
(2756, 'Cascais', 'Lisboa', '2023-06-13 23:35:27', '2023-06-13 23:35:27'),
(2760, 'Oeiras', 'Lisboa', '2023-06-13 23:35:27', '2023-06-13 23:35:27'),
(2761, 'Oeiras', 'Lisboa', '2023-06-13 23:35:27', '2023-06-13 23:35:27'),
(2765, 'Cascais', 'Lisboa', '2023-06-13 23:35:27', '2023-06-13 23:35:27'),
(2769, 'Cascais', 'Lisboa', '2023-06-13 23:35:28', '2023-06-13 23:35:28'),
(2770, 'Oeiras', 'Lisboa', '2023-06-13 23:35:28', '2023-06-13 23:35:28'),
(2774, 'Oeiras', 'Lisboa', '2023-06-13 23:35:28', '2023-06-13 23:35:28'),
(2775, 'Cascais', 'Lisboa', '2023-06-13 23:35:28', '2023-06-13 23:35:28'),
(2779, 'Cascais', 'Lisboa', '2023-06-13 23:35:28', '2023-06-13 23:35:28'),
(2780, 'Oeiras', 'Lisboa', '2023-06-13 23:35:28', '2023-06-13 23:35:28'),
(2784, 'Oeiras', 'Lisboa', '2023-06-13 23:35:28', '2023-06-13 23:35:28'),
(2785, 'Cascais', 'Lisboa', '2023-06-13 23:35:28', '2023-06-13 23:35:28'),
(2789, 'Cascais', 'Lisboa', '2023-06-13 23:35:29', '2023-06-13 23:35:29'),
(2790, 'Oeiras', 'Lisboa', '2023-06-13 23:35:29', '2023-06-13 23:35:29'),
(2794, 'Oeiras', 'Lisboa', '2023-06-13 23:35:29', '2023-06-13 23:35:29'),
(2795, 'Oeiras', 'Lisboa', '2023-06-13 23:35:29', '2023-06-13 23:35:29'),
(2799, 'Oeiras', 'Lisboa', '2023-06-13 23:35:29', '2023-06-13 23:35:29'),
(2800, 'Almada', 'Setúbal', '2023-06-13 23:35:29', '2023-06-13 23:35:29'),
(2804, 'Almada', 'Setúbal', '2023-06-13 23:35:30', '2023-06-13 23:35:30'),
(2805, 'Almada', 'Setúbal', '2023-06-13 23:35:30', '2023-06-13 23:35:30'),
(2809, 'Almada', 'Setúbal', '2023-06-13 23:35:30', '2023-06-13 23:35:30'),
(2810, 'Almada', 'Setúbal', '2023-06-13 23:35:30', '2023-06-13 23:35:30'),
(2814, 'Almada', 'Setúbal', '2023-06-13 23:35:30', '2023-06-13 23:35:30'),
(2815, 'Almada', 'Setúbal', '2023-06-13 23:35:30', '2023-06-13 23:35:30'),
(2819, 'Almada', 'Setúbal', '2023-06-13 23:35:30', '2023-06-13 23:35:30'),
(2820, 'Almada', 'Setúbal', '2023-06-13 23:35:30', '2023-06-13 23:35:30'),
(2821, 'Almada', 'Setúbal', '2023-06-13 23:35:30', '2023-06-13 23:35:30'),
(2825, 'Almada', 'Setúbal', '2023-06-13 23:35:30', '2023-06-13 23:35:30'),
(2829, 'Almada', 'Setúbal', '2023-06-13 23:35:30', '2023-06-13 23:35:30'),
(2830, 'Barreiro', 'Setúbal', '2023-06-13 23:35:30', '2023-06-13 23:35:30'),
(2834, 'Barreiro', 'Setúbal', '2023-06-13 23:35:31', '2023-06-13 23:35:31'),
(2835, 'Moita', 'Setúbal', '2023-06-13 23:35:31', '2023-06-13 23:35:31'),
(2839, 'Barreiro', 'Setúbal', '2023-06-13 23:35:31', '2023-06-13 23:35:31'),
(2840, 'Seixal', 'Setúbal', '2023-06-13 23:35:31', '2023-06-13 23:35:31'),
(2844, 'Seixal', 'Setúbal', '2023-06-13 23:35:31', '2023-06-13 23:35:31'),
(2845, 'Seixal', 'Setúbal', '2023-06-13 23:35:31', '2023-06-13 23:35:31'),
(2855, 'Seixal', 'Setúbal', '2023-06-13 23:35:31', '2023-06-13 23:35:31'),
(2860, 'Moita', 'Setúbal', '2023-06-13 23:35:31', '2023-06-13 23:35:31'),
(2864, 'Moita', 'Setúbal', '2023-06-13 23:35:32', '2023-06-13 23:35:32'),
(2865, 'Seixal', 'Setúbal', '2023-06-13 23:35:32', '2023-06-13 23:35:32'),
(2870, 'Montijo', 'Setúbal', '2023-06-13 23:35:32', '2023-06-13 23:35:32'),
(2890, 'Alcochete', 'Setúbal', '2023-06-13 23:35:32', '2023-06-13 23:35:32'),
(2894, 'Alcochete', 'Setúbal', '2023-06-13 23:35:32', '2023-06-13 23:35:32'),
(2900, 'Setúbal', 'Setúbal', '2023-06-13 23:35:32', '2023-06-13 23:35:32'),
(2904, 'Setúbal', 'Setúbal', '2023-06-13 23:35:33', '2023-06-13 23:35:33'),
(2910, 'Setúbal', 'Setúbal', '2023-06-13 23:35:33', '2023-06-13 23:35:33'),
(2914, 'Setúbal', 'Setúbal', '2023-06-13 23:35:33', '2023-06-13 23:35:33'),
(2925, 'Setúbal', 'Setúbal', '2023-06-13 23:35:33', '2023-06-13 23:35:33'),
(2929, 'Setúbal', 'Setúbal', '2023-06-13 23:35:33', '2023-06-13 23:35:33'),
(2950, 'Palmela', 'Setúbal', '2023-06-13 23:35:33', '2023-06-13 23:35:33'),
(2951, 'Palmela', 'Setúbal', '2023-06-13 23:35:33', '2023-06-13 23:35:33'),
(2954, 'Palmela', 'Setúbal', '2023-06-13 23:35:33', '2023-06-13 23:35:33'),
(2955, 'Palmela', 'Setúbal', '2023-06-13 23:35:33', '2023-06-13 23:35:33'),
(2959, 'Palmela', 'Setúbal', '2023-06-13 23:35:34', '2023-06-13 23:35:34'),
(2965, 'Palmela', 'Setúbal', '2023-06-13 23:35:34', '2023-06-13 23:35:34'),
(2970, 'Sesimbra', 'Setúbal', '2023-06-13 23:35:34', '2023-06-13 23:35:34'),
(2975, 'Sesimbra', 'Setúbal', '2023-06-13 23:35:34', '2023-06-13 23:35:34'),
(2985, 'Montijo', 'Setúbal', '2023-06-13 23:35:34', '2023-06-13 23:35:34'),
(3000, 'Coimbra', 'Coimbra', '2023-06-13 23:35:34', '2023-06-13 23:35:34'),
(3004, 'Coimbra', 'Coimbra', '2023-06-13 23:35:34', '2023-06-13 23:35:34'),
(3020, 'Coimbra', 'Coimbra', '2023-06-13 23:35:34', '2023-06-13 23:35:34'),
(3025, 'Coimbra', 'Coimbra', '2023-06-13 23:35:34', '2023-06-13 23:35:34'),
(3030, 'Coimbra', 'Coimbra', '2023-06-13 23:35:35', '2023-06-13 23:35:35'),
(3034, 'Coimbra', 'Coimbra', '2023-06-13 23:35:35', '2023-06-13 23:35:35'),
(3040, 'Coimbra', 'Coimbra', '2023-06-13 23:35:35', '2023-06-13 23:35:35'),
(3044, 'Coimbra', 'Coimbra', '2023-06-13 23:35:35', '2023-06-13 23:35:35'),
(3045, 'Coimbra', 'Coimbra', '2023-06-13 23:35:35', '2023-06-13 23:35:35'),
(3049, 'Coimbra', 'Coimbra', '2023-06-13 23:35:35', '2023-06-13 23:35:35'),
(3050, 'Mealhada', 'Aveiro', '2023-06-13 23:35:35', '2023-06-13 23:35:35'),
(3054, 'Mealhada', 'Aveiro', '2023-06-13 23:35:35', '2023-06-13 23:35:35'),
(3060, 'Cantanhede', 'Coimbra', '2023-06-13 23:35:35', '2023-06-13 23:35:35'),
(3070, 'Mira', 'Coimbra', '2023-06-13 23:35:35', '2023-06-13 23:35:35'),
(3080, 'Figueira da Foz', 'Coimbra', '2023-06-13 23:35:36', '2023-06-13 23:35:36'),
(3084, 'Figueira da Foz', 'Coimbra', '2023-06-13 23:35:36', '2023-06-13 23:35:36'),
(3090, 'Figueira da Foz', 'Coimbra', '2023-06-13 23:35:36', '2023-06-13 23:35:36'),
(3094, 'Figueira da Foz', 'Coimbra', '2023-06-13 23:35:36', '2023-06-13 23:35:36'),
(3100, 'Pombal', 'Leiria', '2023-06-13 23:35:36', '2023-06-13 23:35:36'),
(3105, 'Pombal', 'Leiria', '2023-06-13 23:35:36', '2023-06-13 23:35:36'),
(3130, 'Soure', 'Coimbra', '2023-06-13 23:35:36', '2023-06-13 23:35:36'),
(3140, 'Montemor-o-Velho', 'Coimbra', '2023-06-13 23:35:36', '2023-06-13 23:35:36'),
(3150, 'Condeixa-a-Nova', 'Coimbra', '2023-06-13 23:35:36', '2023-06-13 23:35:36'),
(3200, 'Lousã', 'Coimbra', '2023-06-13 23:35:37', '2023-06-13 23:35:37'),
(3220, 'Miranda do Corvo', 'Coimbra', '2023-06-13 23:35:37', '2023-06-13 23:35:37'),
(3230, 'Penela', 'Coimbra', '2023-06-13 23:35:37', '2023-06-13 23:35:37'),
(3240, 'Ansião', 'Leiria', '2023-06-13 23:35:37', '2023-06-13 23:35:37'),
(3250, 'Alvaiázere', 'Leiria', '2023-06-13 23:35:37', '2023-06-13 23:35:37'),
(3260, 'Figueiró dos Vinhos', 'Leiria', '2023-06-13 23:35:37', '2023-06-13 23:35:37'),
(3270, 'Pedrógão Grande', 'Leiria', '2023-06-13 23:35:37', '2023-06-13 23:35:37'),
(3280, 'Castanheira de Pêra', 'Leiria', '2023-06-13 23:35:37', '2023-06-13 23:35:37'),
(3300, 'Arganil', 'Coimbra', '2023-06-13 23:35:37', '2023-06-13 23:35:37'),
(3305, 'Arganil', 'Coimbra', '2023-06-13 23:35:37', '2023-06-13 23:35:37'),
(3320, 'Pampilhosa da Serra', 'Coimbra', '2023-06-13 23:35:37', '2023-06-13 23:35:37'),
(3330, 'Góis', 'Coimbra', '2023-06-13 23:35:37', '2023-06-13 23:35:37'),
(3350, 'Vila Nova de Poiares', 'Coimbra', '2023-06-13 23:35:38', '2023-06-13 23:35:38'),
(3360, 'Penacova', 'Coimbra', '2023-06-13 23:35:38', '2023-06-13 23:35:38'),
(3400, 'Oliveira do Hospital', 'Coimbra', '2023-06-13 23:35:38', '2023-06-13 23:35:38'),
(3405, 'Oliveira do Hospital', 'Coimbra', '2023-06-13 23:35:38', '2023-06-13 23:35:38'),
(3420, 'Tábua', 'Coimbra', '2023-06-13 23:35:38', '2023-06-13 23:35:38'),
(3430, 'Carregal do Sal', 'Viseu', '2023-06-13 23:35:38', '2023-06-13 23:35:38'),
(3440, 'Santa Comba Dão', 'Viseu', '2023-06-13 23:35:38', '2023-06-13 23:35:38'),
(3450, 'Mortágua', 'Viseu', '2023-06-13 23:35:38', '2023-06-13 23:35:38'),
(3460, 'Tondela', 'Viseu', '2023-06-13 23:35:38', '2023-06-13 23:35:38'),
(3464, 'Tondela', 'Viseu', '2023-06-13 23:35:39', '2023-06-13 23:35:39'),
(3465, 'Tondela', 'Viseu', '2023-06-13 23:35:39', '2023-06-13 23:35:39'),
(3475, 'Oliveira de Frades', 'Viseu', '2023-06-13 23:35:39', '2023-06-13 23:35:39'),
(3500, 'Viseu', 'Viseu', '2023-06-13 23:35:39', '2023-06-13 23:35:39'),
(3504, 'Viseu', 'Viseu', '2023-06-13 23:35:39', '2023-06-13 23:35:39'),
(3505, 'Viseu', 'Viseu', '2023-06-13 23:35:39', '2023-06-13 23:35:39'),
(3510, 'Viseu', 'Viseu', '2023-06-13 23:35:39', '2023-06-13 23:35:39'),
(3514, 'Viseu', 'Viseu', '2023-06-13 23:35:39', '2023-06-13 23:35:39'),
(3515, 'Viseu', 'Viseu', '2023-06-13 23:35:39', '2023-06-13 23:35:39'),
(3519, 'Viseu', 'Viseu', '2023-06-13 23:35:40', '2023-06-13 23:35:40'),
(3520, 'Nelas', 'Viseu', '2023-06-13 23:35:40', '2023-06-13 23:35:40'),
(3525, 'Nelas', 'Viseu', '2023-06-13 23:35:40', '2023-06-13 23:35:40'),
(3530, 'Mangualde', 'Viseu', '2023-06-13 23:35:40', '2023-06-13 23:35:40'),
(3534, 'Mangualde', 'Viseu', '2023-06-13 23:35:40', '2023-06-13 23:35:40'),
(3550, 'Penalva do Castelo', 'Viseu', '2023-06-13 23:35:40', '2023-06-13 23:35:40'),
(3560, 'Sátão', 'Viseu', '2023-06-13 23:35:40', '2023-06-13 23:35:40'),
(3570, 'Aguiar da Beira', 'Guarda', '2023-06-13 23:35:40', '2023-06-13 23:35:40'),
(3600, 'Castro Daire', 'Viseu', '2023-06-13 23:35:40', '2023-06-13 23:35:40'),
(3610, 'Tarouca', 'Viseu', '2023-06-13 23:35:40', '2023-06-13 23:35:40'),
(3620, 'Moimenta da Beira', 'Viseu', '2023-06-13 23:35:40', '2023-06-13 23:35:40'),
(3624, 'Moimenta da Beira', 'Viseu', '2023-06-13 23:35:40', '2023-06-13 23:35:40'),
(3630, 'Penedono', 'Viseu', '2023-06-13 23:35:40', '2023-06-13 23:35:40'),
(3640, 'Sernancelhe', 'Viseu', '2023-06-13 23:35:41', '2023-06-13 23:35:41'),
(3650, 'Vila Nova de Paiva', 'Viseu', '2023-06-13 23:35:41', '2023-06-13 23:35:41'),
(3660, 'São Pedro do Sul', 'Viseu', '2023-06-13 23:35:41', '2023-06-13 23:35:41'),
(3670, 'Vouzela', 'Viseu', '2023-06-13 23:35:41', '2023-06-13 23:35:41'),
(3680, 'Oliveira de Frades', 'Viseu', '2023-06-13 23:35:41', '2023-06-13 23:35:41'),
(3684, 'Oliveira de Frades', 'Viseu', '2023-06-13 23:35:41', '2023-06-13 23:35:41'),
(3700, 'São João da Madeira', 'Aveiro', '2023-06-13 23:35:41', '2023-06-13 23:35:41'),
(3701, 'São João da Madeira', 'Aveiro', '2023-06-13 23:35:42', '2023-06-13 23:35:42'),
(3720, 'Oliveira de Azeméis', 'Aveiro', '2023-06-13 23:35:42', '2023-06-13 23:35:42'),
(3730, 'Vale de Cambra', 'Aveiro', '2023-06-13 23:35:42', '2023-06-13 23:35:42'),
(3740, 'Sever do Vouga', 'Aveiro', '2023-06-13 23:35:42', '2023-06-13 23:35:42'),
(3744, 'Sever do Vouga', 'Aveiro', '2023-06-13 23:35:42', '2023-06-13 23:35:42'),
(3750, 'Águeda', 'Aveiro', '2023-06-13 23:35:42', '2023-06-13 23:35:42'),
(3754, 'Águeda', 'Aveiro', '2023-06-13 23:35:43', '2023-06-13 23:35:43'),
(3770, 'Oliveira do Bairro', 'Aveiro', '2023-06-13 23:35:43', '2023-06-13 23:35:43'),
(3780, 'Anadia', 'Aveiro', '2023-06-13 23:35:43', '2023-06-13 23:35:43'),
(3800, 'Aveiro', 'Aveiro', '2023-06-13 23:35:43', '2023-06-13 23:35:43'),
(3804, 'Aveiro', 'Aveiro', '2023-06-13 23:35:43', '2023-06-13 23:35:43'),
(3810, 'Aveiro', 'Aveiro', '2023-06-13 23:35:43', '2023-06-13 23:35:43'),
(3814, 'Aveiro', 'Aveiro', '2023-06-13 23:35:44', '2023-06-13 23:35:44'),
(3830, 'Ílhavo', 'Aveiro', '2023-06-13 23:35:44', '2023-06-13 23:35:44'),
(3840, 'Vagos', 'Aveiro', '2023-06-13 23:35:44', '2023-06-13 23:35:44'),
(3850, 'Albergaria-a-Velha', 'Aveiro', '2023-06-13 23:35:45', '2023-06-13 23:35:45'),
(3860, 'Estarreja', 'Aveiro', '2023-06-13 23:35:45', '2023-06-13 23:35:45'),
(3864, 'Estarreja', 'Aveiro', '2023-06-13 23:35:45', '2023-06-13 23:35:45'),
(3865, 'Estarreja', 'Aveiro', '2023-06-13 23:35:45', '2023-06-13 23:35:45'),
(3870, 'Murtosa', 'Aveiro', '2023-06-13 23:35:45', '2023-06-13 23:35:45'),
(3880, 'Ovar', 'Aveiro', '2023-06-13 23:35:45', '2023-06-13 23:35:45'),
(3885, 'Ovar', 'Aveiro', '2023-06-13 23:35:46', '2023-06-13 23:35:46'),
(4000, 'Porto', 'Porto', '2023-06-13 23:35:46', '2023-06-13 23:35:46'),
(4049, 'Porto', 'Porto', '2023-06-13 23:35:46', '2023-06-13 23:35:46'),
(4050, 'Porto', 'Porto', '2023-06-13 23:35:46', '2023-06-13 23:35:46'),
(4099, 'Porto', 'Porto', '2023-06-13 23:35:46', '2023-06-13 23:35:46'),
(4100, 'Porto', 'Porto', '2023-06-13 23:35:46', '2023-06-13 23:35:46'),
(4149, 'Porto', 'Porto', '2023-06-13 23:35:46', '2023-06-13 23:35:46'),
(4150, 'Porto', 'Porto', '2023-06-13 23:35:46', '2023-06-13 23:35:46'),
(4169, 'Porto', 'Porto', '2023-06-13 23:35:47', '2023-06-13 23:35:47'),
(4199, 'Porto', 'Porto', '2023-06-13 23:35:47', '2023-06-13 23:35:47'),
(4200, 'Porto', 'Porto', '2023-06-13 23:35:47', '2023-06-13 23:35:47'),
(4249, 'Porto', 'Porto', '2023-06-13 23:35:47', '2023-06-13 23:35:47'),
(4250, 'Porto', 'Porto', '2023-06-13 23:35:47', '2023-06-13 23:35:47'),
(4269, 'Porto', 'Porto', '2023-06-13 23:35:47', '2023-06-13 23:35:47'),
(4300, 'Porto', 'Porto', '2023-06-13 23:35:47', '2023-06-13 23:35:47'),
(4349, 'Porto', 'Porto', '2023-06-13 23:35:48', '2023-06-13 23:35:48'),
(4350, 'Porto', 'Porto', '2023-06-13 23:35:48', '2023-06-13 23:35:48'),
(4369, 'Porto', 'Porto', '2023-06-13 23:35:48', '2023-06-13 23:35:48'),
(4400, 'Vila Nova de Gaia', 'Porto', '2023-06-13 23:35:48', '2023-06-13 23:35:48'),
(4404, 'Vila Nova de Gaia', 'Porto', '2023-06-13 23:35:48', '2023-06-13 23:35:48'),
(4405, 'Vila Nova de Gaia', 'Porto', '2023-06-13 23:35:48', '2023-06-13 23:35:48'),
(4409, 'Vila Nova de Gaia', 'Porto', '2023-06-13 23:35:48', '2023-06-13 23:35:48'),
(4410, 'Vila Nova de Gaia', 'Porto', '2023-06-13 23:35:48', '2023-06-13 23:35:48'),
(4414, 'Vila Nova de Gaia', 'Porto', '2023-06-13 23:35:49', '2023-06-13 23:35:49'),
(4415, 'Vila Nova de Gaia', 'Porto', '2023-06-13 23:35:49', '2023-06-13 23:35:49'),
(4420, 'Gondomar', 'Porto', '2023-06-13 23:35:49', '2023-06-13 23:35:49'),
(4425, 'Maia', 'Porto', '2023-06-13 23:35:49', '2023-06-13 23:35:49'),
(4430, 'Vila Nova de Gaia', 'Porto', '2023-06-13 23:35:49', '2023-06-13 23:35:49'),
(4434, 'Vila Nova de Gaia', 'Porto', '2023-06-13 23:35:49', '2023-06-13 23:35:49'),
(4435, 'Gondomar', 'Porto', '2023-06-13 23:35:49', '2023-06-13 23:35:49'),
(4440, 'Valongo', 'Porto', '2023-06-13 23:35:50', '2023-06-13 23:35:50'),
(4445, 'Valongo', 'Porto', '2023-06-13 23:35:50', '2023-06-13 23:35:50'),
(4450, 'Matosinhos', 'Porto', '2023-06-13 23:35:50', '2023-06-13 23:35:50'),
(4454, 'Matosinhos', 'Porto', '2023-06-13 23:35:50', '2023-06-13 23:35:50'),
(4455, 'Matosinhos', 'Porto', '2023-06-13 23:35:50', '2023-06-13 23:35:50'),
(4460, 'Matosinhos', 'Porto', '2023-06-13 23:35:50', '2023-06-13 23:35:50'),
(4464, 'Matosinhos', 'Porto', '2023-06-13 23:35:51', '2023-06-13 23:35:51'),
(4465, 'Matosinhos', 'Porto', '2023-06-13 23:35:51', '2023-06-13 23:35:51'),
(4470, 'Maia', 'Porto', '2023-06-13 23:35:51', '2023-06-13 23:35:51'),
(4474, 'Maia', 'Porto', '2023-06-13 23:35:51', '2023-06-13 23:35:51'),
(4475, 'Maia', 'Porto', '2023-06-13 23:35:51', '2023-06-13 23:35:51'),
(4479, 'Maia', 'Porto', '2023-06-13 23:35:51', '2023-06-13 23:35:51'),
(4480, 'Vila do Conde', 'Porto', '2023-06-13 23:35:51', '2023-06-13 23:35:51'),
(4484, 'Vila do Conde', 'Porto', '2023-06-13 23:35:51', '2023-06-13 23:35:51'),
(4485, 'Vila do Conde', 'Porto', '2023-06-13 23:35:51', '2023-06-13 23:35:51'),
(4486, 'Vila do Conde', 'Porto', '2023-06-13 23:35:52', '2023-06-13 23:35:52'),
(4490, 'Póvoa de Varzim', 'Porto', '2023-06-13 23:35:52', '2023-06-13 23:35:52'),
(4495, 'Póvoa de Varzim', 'Porto', '2023-06-13 23:35:52', '2023-06-13 23:35:52'),
(4500, 'Espinho', 'Aveiro', '2023-06-13 23:35:52', '2023-06-13 23:35:52'),
(4504, 'Espinho', 'Aveiro', '2023-06-13 23:35:52', '2023-06-13 23:35:52'),
(4505, 'Santa Maria da Feira', 'Aveiro', '2023-06-13 23:35:52', '2023-06-13 23:35:52'),
(4510, 'Gondomar', 'Porto', '2023-06-13 23:35:52', '2023-06-13 23:35:52'),
(4515, 'Gondomar', 'Porto', '2023-06-13 23:35:53', '2023-06-13 23:35:53'),
(4520, 'Santa Maria da Feira', 'Aveiro', '2023-06-13 23:35:53', '2023-06-13 23:35:53'),
(4525, 'Santa Maria da Feira', 'Aveiro', '2023-06-13 23:35:53', '2023-06-13 23:35:53'),
(4535, 'Santa Maria da Feira', 'Aveiro', '2023-06-13 23:35:53', '2023-06-13 23:35:53'),
(4540, 'Arouca', 'Aveiro', '2023-06-13 23:35:53', '2023-06-13 23:35:53'),
(4550, 'Castelo de Paiva', 'Aveiro', '2023-06-13 23:35:53', '2023-06-13 23:35:53'),
(4560, 'Penafiel', 'Porto', '2023-06-13 23:35:54', '2023-06-13 23:35:54'),
(4564, 'Penafiel', 'Porto', '2023-06-13 23:35:54', '2023-06-13 23:35:54'),
(4570, 'Póvoa de Varzim', 'Porto', '2023-06-13 23:35:54', '2023-06-13 23:35:54'),
(4575, 'Marco de Canaveses', 'Porto', '2023-06-13 23:35:54', '2023-06-13 23:35:54'),
(4580, 'Paredes', 'Porto', '2023-06-13 23:35:54', '2023-06-13 23:35:54'),
(4585, 'Paredes', 'Porto', '2023-06-13 23:35:54', '2023-06-13 23:35:54'),
(4590, 'Paços de Ferreira', 'Porto', '2023-06-13 23:35:55', '2023-06-13 23:35:55'),
(4595, 'Paços de Ferreira', 'Porto', '2023-06-13 23:35:55', '2023-06-13 23:35:55'),
(4599, 'Paços de Ferreira', 'Porto', '2023-06-13 23:35:55', '2023-06-13 23:35:55'),
(4600, 'Amarante', 'Porto', '2023-06-13 23:35:55', '2023-06-13 23:35:55'),
(4605, 'Amarante', 'Porto', '2023-06-13 23:35:55', '2023-06-13 23:35:55'),
(4610, 'Felgueiras', 'Porto', '2023-06-13 23:35:55', '2023-06-13 23:35:55'),
(4615, 'Amarante', 'Porto', '2023-06-13 23:35:55', '2023-06-13 23:35:55'),
(4620, 'Lousada', 'Porto', '2023-06-13 23:35:55', '2023-06-13 23:35:55'),
(4625, 'Marco de Canaveses', 'Porto', '2023-06-13 23:35:56', '2023-06-13 23:35:56'),
(4630, 'Marco de Canaveses', 'Porto', '2023-06-13 23:35:56', '2023-06-13 23:35:56'),
(4635, 'Marco de Canaveses', 'Porto', '2023-06-13 23:35:56', '2023-06-13 23:35:56'),
(4640, 'Baião', 'Porto', '2023-06-13 23:35:56', '2023-06-13 23:35:56'),
(4650, 'Felgueiras', 'Porto', '2023-06-13 23:35:56', '2023-06-13 23:35:56'),
(4660, 'Resende', 'Viseu', '2023-06-13 23:35:56', '2023-06-13 23:35:56'),
(4690, 'Cinfães', 'Viseu', '2023-06-13 23:35:56', '2023-06-13 23:35:56'),
(4700, 'Braga', 'Braga', '2023-06-13 23:35:57', '2023-06-13 23:35:57'),
(4704, 'Braga', 'Braga', '2023-06-13 23:35:57', '2023-06-13 23:35:57'),
(4705, 'Braga', 'Braga', '2023-06-13 23:35:57', '2023-06-13 23:35:57'),
(4709, 'Braga', 'Braga', '2023-06-13 23:35:57', '2023-06-13 23:35:57'),
(4710, 'Braga', 'Braga', '2023-06-13 23:35:57', '2023-06-13 23:35:57'),
(4714, 'Braga', 'Braga', '2023-06-13 23:35:57', '2023-06-13 23:35:57'),
(4715, 'Braga', 'Braga', '2023-06-13 23:35:57', '2023-06-13 23:35:57'),
(4719, 'Braga', 'Braga', '2023-06-13 23:35:57', '2023-06-13 23:35:57'),
(4720, 'Amares', 'Braga', '2023-06-13 23:35:57', '2023-06-13 23:35:57'),
(4730, 'Vila Verde', 'Braga', '2023-06-13 23:35:58', '2023-06-13 23:35:58'),
(4740, 'Esposende', 'Braga', '2023-06-13 23:35:58', '2023-06-13 23:35:58'),
(4745, 'Trofa', 'Porto', '2023-06-13 23:35:58', '2023-06-13 23:35:58'),
(4750, 'Barcelos', 'Braga', '2023-06-13 23:35:58', '2023-06-13 23:35:58'),
(4755, 'Barcelos', 'Braga', '2023-06-13 23:35:58', '2023-06-13 23:35:58'),
(4760, 'Vila Nova de Famalicão', 'Braga', '2023-06-13 23:35:58', '2023-06-13 23:35:58'),
(4764, 'Vila Nova de Famalicão', 'Braga', '2023-06-13 23:35:59', '2023-06-13 23:35:59'),
(4765, 'Vila Nova de Famalicão', 'Braga', '2023-06-13 23:35:59', '2023-06-13 23:35:59'),
(4770, 'Vila Nova de Famalicão', 'Braga', '2023-06-13 23:35:59', '2023-06-13 23:35:59'),
(4775, 'Barcelos', 'Braga', '2023-06-13 23:35:59', '2023-06-13 23:35:59'),
(4780, 'Santo Tirso', 'Porto', '2023-06-13 23:35:59', '2023-06-13 23:35:59'),
(4785, 'Trofa', 'Porto', '2023-06-13 23:35:59', '2023-06-13 23:35:59'),
(4795, 'Santo Tirso', 'Porto', '2023-06-13 23:36:00', '2023-06-13 23:36:00'),
(4800, 'Guimarães', 'Braga', '2023-06-13 23:36:00', '2023-06-13 23:36:00'),
(4804, 'Guimarães', 'Braga', '2023-06-13 23:36:00', '2023-06-13 23:36:00'),
(4805, 'Guimarães', 'Braga', '2023-06-13 23:36:00', '2023-06-13 23:36:00'),
(4809, 'Guimarães', 'Braga', '2023-06-13 23:36:00', '2023-06-13 23:36:00'),
(4810, 'Guimarães', 'Braga', '2023-06-13 23:36:00', '2023-06-13 23:36:00'),
(4814, 'Guimarães', 'Braga', '2023-06-13 23:36:00', '2023-06-13 23:36:00'),
(4815, 'Guimarães', 'Braga', '2023-06-13 23:36:00', '2023-06-13 23:36:00'),
(4820, 'Fafe', 'Braga', '2023-06-13 23:36:01', '2023-06-13 23:36:01'),
(4824, 'Fafe', 'Braga', '2023-06-13 23:36:01', '2023-06-13 23:36:01'),
(4825, 'Santo Tirso', 'Porto', '2023-06-13 23:36:01', '2023-06-13 23:36:01'),
(4830, 'Póvoa de Lanhoso', 'Braga', '2023-06-13 23:36:01', '2023-06-13 23:36:01'),
(4835, 'Guimarães', 'Braga', '2023-06-13 23:36:01', '2023-06-13 23:36:01'),
(4839, 'Guimarães', 'Braga', '2023-06-13 23:36:01', '2023-06-13 23:36:01'),
(4840, 'Terras de Bouro', 'Braga', '2023-06-13 23:36:01', '2023-06-13 23:36:01'),
(4845, 'Terras de Bouro', 'Braga', '2023-06-13 23:36:01', '2023-06-13 23:36:01'),
(4850, 'Vieira do Minho', 'Braga', '2023-06-13 23:36:02', '2023-06-13 23:36:02'),
(4860, 'Cabeceiras de Basto', 'Braga', '2023-06-13 23:36:02', '2023-06-13 23:36:02'),
(4870, 'Ribeira de Pena', 'Vila Real', '2023-06-13 23:36:02', '2023-06-13 23:36:02'),
(4880, 'Mondim de Basto', 'Vila Real', '2023-06-13 23:36:02', '2023-06-13 23:36:02'),
(4890, 'Celorico de Basto', 'Braga', '2023-06-13 23:36:02', '2023-06-13 23:36:02'),
(4900, 'Viana do Castelo', 'Viana do Castelo', '2023-06-13 23:36:02', '2023-06-13 23:36:02'),
(4904, 'Viana do Castelo', 'Viana do Castelo', '2023-06-13 23:36:02', '2023-06-13 23:36:02'),
(4905, 'Barcelos', 'Braga', '2023-06-13 23:36:02', '2023-06-13 23:36:02'),
(4910, 'Caminha', 'Viana do Castelo', '2023-06-13 23:36:02', '2023-06-13 23:36:02'),
(4920, 'Vila Nova de Cerveira', 'Viana do Castelo', '2023-06-13 23:36:03', '2023-06-13 23:36:03'),
(4925, 'Viana do Castelo', 'Viana do Castelo', '2023-06-13 23:36:03', '2023-06-13 23:36:03'),
(4930, 'Valença', 'Viana do Castelo', '2023-06-13 23:36:03', '2023-06-13 23:36:03'),
(4935, 'Viana do Castelo', 'Viana do Castelo', '2023-06-13 23:36:03', '2023-06-13 23:36:03'),
(4939, 'Viana do Castelo', 'Viana do Castelo', '2023-06-13 23:36:03', '2023-06-13 23:36:03'),
(4940, 'Paredes de Coura', 'Viana do Castelo', '2023-06-13 23:36:03', '2023-06-13 23:36:03'),
(4950, 'Monção', 'Viana do Castelo', '2023-06-13 23:36:03', '2023-06-13 23:36:03'),
(4960, 'Melgaço', 'Viana do Castelo', '2023-06-13 23:36:03', '2023-06-13 23:36:03'),
(4970, 'Arcos de Valdevez', 'Viana do Castelo', '2023-06-13 23:36:04', '2023-06-13 23:36:04'),
(4974, 'Arcos de Valdevez', 'Viana do Castelo', '2023-06-13 23:36:04', '2023-06-13 23:36:04'),
(4980, 'Ponte da Barca', 'Viana do Castelo', '2023-06-13 23:36:04', '2023-06-13 23:36:04'),
(4990, 'Ponte de Lima', 'Viana do Castelo', '2023-06-13 23:36:04', '2023-06-13 23:36:04'),
(5000, 'Vila Real', 'Vila Real', '2023-06-13 23:36:04', '2023-06-13 23:36:04'),
(5004, 'Vila Real', 'Vila Real', '2023-06-13 23:36:04', '2023-06-13 23:36:04'),
(5030, 'Santa Marta de Penaguião', 'Vila Real', '2023-06-13 23:36:04', '2023-06-13 23:36:04'),
(5040, 'Mesão Frio', 'Vila Real', '2023-06-13 23:36:04', '2023-06-13 23:36:04'),
(5050, 'Peso da Régua', 'Vila Real', '2023-06-13 23:36:04', '2023-06-13 23:36:04'),
(5054, 'Peso da Régua', 'Vila Real', '2023-06-13 23:36:05', '2023-06-13 23:36:05'),
(5060, 'Sabrosa', 'Vila Real', '2023-06-13 23:36:05', '2023-06-13 23:36:05'),
(5070, 'Alijó', 'Vila Real', '2023-06-13 23:36:05', '2023-06-13 23:36:05'),
(5085, 'Alijó', 'Vila Real', '2023-06-13 23:36:05', '2023-06-13 23:36:05'),
(5090, 'Murça', 'Vila Real', '2023-06-13 23:36:05', '2023-06-13 23:36:05'),
(5100, 'Lamego', 'Viseu', '2023-06-13 23:36:05', '2023-06-13 23:36:05'),
(5110, 'Armamar', 'Viseu', '2023-06-13 23:36:05', '2023-06-13 23:36:05'),
(5114, 'Armamar', 'Viseu', '2023-06-13 23:36:05', '2023-06-13 23:36:05'),
(5120, 'Tabuaço', 'Viseu', '2023-06-13 23:36:05', '2023-06-13 23:36:05'),
(5130, 'São João da Pesqueira', 'Viseu', '2023-06-13 23:36:05', '2023-06-13 23:36:05'),
(5140, 'Carrazeda de Ansiães', 'Bragança', '2023-06-13 23:36:06', '2023-06-13 23:36:06'),
(5150, 'Vila Nova de Foz Côa', 'Guarda', '2023-06-13 23:36:06', '2023-06-13 23:36:06'),
(5155, 'Vila Nova de Foz Côa', 'Guarda', '2023-06-13 23:36:06', '2023-06-13 23:36:06'),
(5160, 'Torre de Moncorvo', 'Bragança', '2023-06-13 23:36:06', '2023-06-13 23:36:06'),
(5180, 'Freixo de Espada à Cinta', 'Bragança', '2023-06-13 23:36:06', '2023-06-13 23:36:06'),
(5200, 'Mogadouro', 'Bragança', '2023-06-13 23:36:06', '2023-06-13 23:36:06'),
(5210, 'Miranda do Douro', 'Bragança', '2023-06-13 23:36:06', '2023-06-13 23:36:06'),
(5225, 'Miranda do Douro', 'Bragança', '2023-06-13 23:36:06', '2023-06-13 23:36:06'),
(5230, 'Vimioso', 'Bragança', '2023-06-13 23:36:06', '2023-06-13 23:36:06'),
(5300, 'Bragança', 'Bragança', '2023-06-13 23:36:06', '2023-06-13 23:36:06'),
(5301, 'Bragança', 'Bragança', '2023-06-13 23:36:07', '2023-06-13 23:36:07'),
(5320, 'Vinhais', 'Bragança', '2023-06-13 23:36:07', '2023-06-13 23:36:07'),
(5335, 'Vinhais', 'Bragança', '2023-06-13 23:36:07', '2023-06-13 23:36:07'),
(5340, 'Macedo de Cavaleiros', 'Bragança', '2023-06-13 23:36:07', '2023-06-13 23:36:07'),
(5350, 'Alfândega da Fé', 'Bragança', '2023-06-13 23:36:07', '2023-06-13 23:36:07'),
(5360, 'Vila Flor', 'Bragança', '2023-06-13 23:36:07', '2023-06-13 23:36:07'),
(5370, 'Mirandela', 'Bragança', '2023-06-13 23:36:07', '2023-06-13 23:36:07'),
(5385, 'Mirandela', 'Bragança', '2023-06-13 23:36:07', '2023-06-13 23:36:07'),
(5400, 'Chaves', 'Vila Real', '2023-06-13 23:36:07', '2023-06-13 23:36:07'),
(5425, 'Chaves', 'Vila Real', '2023-06-13 23:36:07', '2023-06-13 23:36:07'),
(5430, 'Valpaços', 'Vila Real', '2023-06-13 23:36:08', '2023-06-13 23:36:08'),
(5445, 'Valpaços', 'Vila Real', '2023-06-13 23:36:08', '2023-06-13 23:36:08'),
(5450, 'Vila Pouca de Aguiar', 'Vila Real', '2023-06-13 23:36:08', '2023-06-13 23:36:08'),
(5460, 'Boticas', 'Vila Real', '2023-06-13 23:36:08', '2023-06-13 23:36:08'),
(5470, 'Montalegre', 'Vila Real', '2023-06-13 23:36:08', '2023-06-13 23:36:08'),
(6000, 'Castelo Branco', 'Castelo Branco', '2023-06-13 23:36:08', '2023-06-13 23:36:08'),
(6004, 'Castelo Branco', 'Castelo Branco', '2023-06-13 23:36:08', '2023-06-13 23:36:08'),
(6005, 'Castelo Branco', 'Castelo Branco', '2023-06-13 23:36:08', '2023-06-13 23:36:08'),
(6030, 'Vila Velha de Ródão', 'Castelo Branco', '2023-06-13 23:36:08', '2023-06-13 23:36:08'),
(6040, 'Gavião', 'Portalegre', '2023-06-13 23:36:08', '2023-06-13 23:36:08'),
(6050, 'Nisa', 'Portalegre', '2023-06-13 23:36:08', '2023-06-13 23:36:08'),
(6060, 'Idanha-a-Nova', 'Castelo Branco', '2023-06-13 23:36:08', '2023-06-13 23:36:08'),
(6090, 'Penamacor', 'Castelo Branco', '2023-06-13 23:36:08', '2023-06-13 23:36:08'),
(6100, 'Sertã', 'Castelo Branco', '2023-06-13 23:36:09', '2023-06-13 23:36:09'),
(6110, 'Vila de Rei', 'Castelo Branco', '2023-06-13 23:36:09', '2023-06-13 23:36:09'),
(6120, 'Mação', 'Santarém', '2023-06-13 23:36:09', '2023-06-13 23:36:09'),
(6150, 'Proença-a-Nova', 'Castelo Branco', '2023-06-13 23:36:09', '2023-06-13 23:36:09'),
(6160, 'Oleiros', 'Castelo Branco', '2023-06-13 23:36:09', '2023-06-13 23:36:09'),
(6185, 'Fundão', 'Castelo Branco', '2023-06-13 23:36:09', '2023-06-13 23:36:09'),
(6200, 'Covilhã', 'Castelo Branco', '2023-06-13 23:36:09', '2023-06-13 23:36:09'),
(6201, 'Covilhã', 'Castelo Branco', '2023-06-13 23:36:09', '2023-06-13 23:36:09'),
(6215, 'Covilhã', 'Castelo Branco', '2023-06-13 23:36:09', '2023-06-13 23:36:09'),
(6225, 'Covilhã', 'Castelo Branco', '2023-06-13 23:36:10', '2023-06-13 23:36:10'),
(6230, 'Fundão', 'Castelo Branco', '2023-06-13 23:36:10', '2023-06-13 23:36:10'),
(6250, 'Belmonte', 'Castelo Branco', '2023-06-13 23:36:10', '2023-06-13 23:36:10'),
(6260, 'Manteigas', 'Guarda', '2023-06-13 23:36:10', '2023-06-13 23:36:10'),
(6270, 'Seia', 'Guarda', '2023-06-13 23:36:10', '2023-06-13 23:36:10'),
(6285, 'Arganil', 'Coimbra', '2023-06-13 23:36:10', '2023-06-13 23:36:10'),
(6290, 'Gouveia', 'Guarda', '2023-06-13 23:36:10', '2023-06-13 23:36:10'),
(6300, 'Guarda', 'Guarda', '2023-06-13 23:36:10', '2023-06-13 23:36:10'),
(6301, 'Guarda', 'Guarda', '2023-06-13 23:36:11', '2023-06-13 23:36:11'),
(6320, 'Sabugal', 'Guarda', '2023-06-13 23:36:11', '2023-06-13 23:36:11'),
(6324, 'Sabugal', 'Guarda', '2023-06-13 23:36:11', '2023-06-13 23:36:11'),
(6350, 'Almeida', 'Guarda', '2023-06-13 23:36:11', '2023-06-13 23:36:11'),
(6355, 'Almeida', 'Guarda', '2023-06-13 23:36:11', '2023-06-13 23:36:11'),
(6360, 'Celorico da Beira', 'Guarda', '2023-06-13 23:36:11', '2023-06-13 23:36:11'),
(6370, 'Fornos de Algodres', 'Guarda', '2023-06-13 23:36:11', '2023-06-13 23:36:11'),
(6400, 'Pinhel', 'Guarda', '2023-06-13 23:36:11', '2023-06-13 23:36:11'),
(6420, 'Trancoso', 'Guarda', '2023-06-13 23:36:11', '2023-06-13 23:36:11'),
(6430, 'Mêda', 'Guarda', '2023-06-13 23:36:11', '2023-06-13 23:36:11'),
(6440, 'Figueira de Castelo Rodrigo', 'Guarda', '2023-06-13 23:36:11', '2023-06-13 23:36:11'),
(7000, 'Évora', 'Évora', '2023-06-13 23:36:11', '2023-06-13 23:36:11'),
(7004, 'Évora', 'Évora', '2023-06-13 23:36:11', '2023-06-13 23:36:11'),
(7005, 'Évora', 'Évora', '2023-06-13 23:36:11', '2023-06-13 23:36:11'),
(7009, 'Évora', 'Évora', '2023-06-13 23:36:11', '2023-06-13 23:36:11'),
(7040, 'Arraiolos', 'Évora', '2023-06-13 23:36:12', '2023-06-13 23:36:12'),
(7050, 'Montemor-o-Novo', 'Évora', '2023-06-13 23:36:12', '2023-06-13 23:36:12'),
(7080, 'Vendas Novas', 'Évora', '2023-06-13 23:36:12', '2023-06-13 23:36:12'),
(7090, 'Viana do Alentejo', 'Évora', '2023-06-13 23:36:12', '2023-06-13 23:36:12'),
(7100, 'Estremoz', 'Évora', '2023-06-13 23:36:12', '2023-06-13 23:36:12'),
(7150, 'Borba', 'Évora', '2023-06-13 23:36:12', '2023-06-13 23:36:12'),
(7160, 'Vila Viçosa', 'Évora', '2023-06-13 23:36:12', '2023-06-13 23:36:12'),
(7170, 'Redondo', 'Évora', '2023-06-13 23:36:12', '2023-06-13 23:36:12'),
(7200, 'Alandroal', 'Évora', '2023-06-13 23:36:12', '2023-06-13 23:36:12'),
(7220, 'Portel', 'Évora', '2023-06-13 23:36:12', '2023-06-13 23:36:12'),
(7230, 'Barrancos', 'Beja', '2023-06-13 23:36:13', '2023-06-13 23:36:13'),
(7240, 'Mourão', 'Évora', '2023-06-13 23:36:13', '2023-06-13 23:36:13'),
(7250, 'Alandroal', 'Évora', '2023-06-13 23:36:13', '2023-06-13 23:36:13'),
(7300, 'Portalegre', 'Portalegre', '2023-06-13 23:36:13', '2023-06-13 23:36:13'),
(7301, 'Portalegre', 'Portalegre', '2023-06-13 23:36:13', '2023-06-13 23:36:13'),
(7320, 'Castelo de Vide', 'Portalegre', '2023-06-13 23:36:13', '2023-06-13 23:36:13'),
(7330, 'Marvão', 'Portalegre', '2023-06-13 23:36:13', '2023-06-13 23:36:13'),
(7340, 'Arronches', 'Portalegre', '2023-06-13 23:36:13', '2023-06-13 23:36:13'),
(7350, 'Elvas', 'Portalegre', '2023-06-13 23:36:13', '2023-06-13 23:36:13'),
(7354, 'Elvas', 'Portalegre', '2023-06-13 23:36:13', '2023-06-13 23:36:13'),
(7370, 'Campo Maior', 'Portalegre', '2023-06-13 23:36:13', '2023-06-13 23:36:13'),
(7374, 'Campo Maior', 'Portalegre', '2023-06-13 23:36:13', '2023-06-13 23:36:13'),
(7400, 'Ponte de Sor', 'Portalegre', '2023-06-13 23:36:13', '2023-06-13 23:36:13'),
(7425, 'Ponte de Sor', 'Portalegre', '2023-06-13 23:36:13', '2023-06-13 23:36:13'),
(7430, 'Crato', 'Portalegre', '2023-06-13 23:36:13', '2023-06-13 23:36:13'),
(7440, 'Alter do Chão', 'Portalegre', '2023-06-13 23:36:13', '2023-06-13 23:36:13'),
(7450, 'Monforte', 'Portalegre', '2023-06-13 23:36:14', '2023-06-13 23:36:14'),
(7460, 'Fronteira', 'Portalegre', '2023-06-13 23:36:14', '2023-06-13 23:36:14'),
(7470, 'Sousel', 'Portalegre', '2023-06-13 23:36:14', '2023-06-13 23:36:14'),
(7480, 'Avis', 'Portalegre', '2023-06-13 23:36:14', '2023-06-13 23:36:14'),
(7490, 'Mora', 'Évora', '2023-06-13 23:36:14', '2023-06-13 23:36:14'),
(7500, 'Santiago do Cacém', 'Setúbal', '2023-06-13 23:36:14', '2023-06-13 23:36:14'),
(7520, 'Sines', 'Setúbal', '2023-06-13 23:36:14', '2023-06-13 23:36:14'),
(7540, 'Santiago do Cacém', 'Setúbal', '2023-06-13 23:36:14', '2023-06-13 23:36:14'),
(7555, 'Santiago do Cacém', 'Setúbal', '2023-06-13 23:36:14', '2023-06-13 23:36:14'),
(7565, 'Santiago do Cacém', 'Setúbal', '2023-06-13 23:36:15', '2023-06-13 23:36:15'),
(7570, 'Grândola', 'Setúbal', '2023-06-13 23:36:15', '2023-06-13 23:36:15'),
(7580, 'Alcácer do Sal', 'Setúbal', '2023-06-13 23:36:15', '2023-06-13 23:36:15'),
(7595, 'Alcácer do Sal', 'Setúbal', '2023-06-13 23:36:15', '2023-06-13 23:36:15'),
(7600, 'Aljustrel', 'Beja', '2023-06-13 23:36:15', '2023-06-13 23:36:15'),
(7630, 'Odemira', 'Beja', '2023-06-13 23:36:15', '2023-06-13 23:36:15'),
(7645, 'Odemira', 'Beja', '2023-06-13 23:36:16', '2023-06-13 23:36:16'),
(7665, 'Odemira', 'Beja', '2023-06-13 23:36:16', '2023-06-13 23:36:16'),
(7670, 'Ourique', 'Beja', '2023-06-13 23:36:16', '2023-06-13 23:36:16'),
(7700, 'Almodôvar', 'Beja', '2023-06-13 23:36:16', '2023-06-13 23:36:16'),
(7750, 'Mértola', 'Beja', '2023-06-13 23:36:16', '2023-06-13 23:36:16'),
(7780, 'Castro Verde', 'Beja', '2023-06-13 23:36:16', '2023-06-13 23:36:16'),
(7800, 'Beja', 'Beja', '2023-06-13 23:36:16', '2023-06-13 23:36:16'),
(7801, 'Beja', 'Beja', '2023-06-13 23:36:16', '2023-06-13 23:36:16'),
(7830, 'Serpa', 'Beja', '2023-06-13 23:36:16', '2023-06-13 23:36:16'),
(7860, 'Moura', 'Beja', '2023-06-13 23:36:16', '2023-06-13 23:36:16'),
(7875, 'Moura', 'Beja', '2023-06-13 23:36:16', '2023-06-13 23:36:16'),
(7885, 'Moura', 'Beja', '2023-06-13 23:36:16', '2023-06-13 23:36:16'),
(7900, 'Ferreira do Alentejo', 'Beja', '2023-06-13 23:36:16', '2023-06-13 23:36:16'),
(7920, 'Alvito', 'Beja', '2023-06-13 23:36:17', '2023-06-13 23:36:17'),
(7940, 'Cuba', 'Beja', '2023-06-13 23:36:17', '2023-06-13 23:36:17'),
(7960, 'Vidigueira', 'Beja', '2023-06-13 23:36:17', '2023-06-13 23:36:17'),
(8000, 'Faro', 'Faro', '2023-06-13 23:36:17', '2023-06-13 23:36:17'),
(8004, 'Faro', 'Faro', '2023-06-13 23:36:17', '2023-06-13 23:36:17'),
(8005, 'Faro', 'Faro', '2023-06-13 23:36:17', '2023-06-13 23:36:17'),
(8009, 'Faro', 'Faro', '2023-06-13 23:36:17', '2023-06-13 23:36:17'),
(8100, 'Loulé', 'Faro', '2023-06-13 23:36:17', '2023-06-13 23:36:17'),
(8125, 'Loulé', 'Faro', '2023-06-13 23:36:17', '2023-06-13 23:36:17'),
(8135, 'Loulé', 'Faro', '2023-06-13 23:36:17', '2023-06-13 23:36:17'),
(8136, 'Loulé', 'Faro', '2023-06-13 23:36:17', '2023-06-13 23:36:17'),
(8150, 'São Brás de Alportel', 'Faro', '2023-06-13 23:36:17', '2023-06-13 23:36:17'),
(8200, 'Albufeira', 'Faro', '2023-06-13 23:36:18', '2023-06-13 23:36:18'),
(8201, 'Albufeira', 'Faro', '2023-06-13 23:36:18', '2023-06-13 23:36:18'),
(8300, 'Silves', 'Faro', '2023-06-13 23:36:18', '2023-06-13 23:36:18'),
(8365, 'Silves', 'Faro', '2023-06-13 23:36:18', '2023-06-13 23:36:18'),
(8375, 'Silves', 'Faro', '2023-06-13 23:36:18', '2023-06-13 23:36:18'),
(8400, 'Lagoa (Açores)', 'Faro', '2023-06-13 23:36:18', '2023-06-13 23:36:18'),
(8401, 'Lagoa (Açores)', 'Faro', '2023-06-13 23:36:18', '2023-06-13 23:36:18'),
(8500, 'Portimão', 'Faro', '2023-06-13 23:36:18', '2023-06-13 23:36:18'),
(8501, 'Portimão', 'Faro', '2023-06-13 23:36:18', '2023-06-13 23:36:18'),
(8550, 'Monchique', 'Faro', '2023-06-13 23:36:18', '2023-06-13 23:36:18'),
(8600, 'Lagos', 'Faro', '2023-06-13 23:36:18', '2023-06-13 23:36:18'),
(8601, 'Lagos', 'Faro', '2023-06-13 23:36:19', '2023-06-13 23:36:19'),
(8650, 'Vila do Bispo', 'Faro', '2023-06-13 23:36:19', '2023-06-13 23:36:19'),
(8670, 'Aljezur', 'Faro', '2023-06-13 23:36:19', '2023-06-13 23:36:19'),
(8700, 'Olhão', 'Faro', '2023-06-13 23:36:19', '2023-06-13 23:36:19'),
(8800, 'Tavira', 'Faro', '2023-06-13 23:36:19', '2023-06-13 23:36:19'),
(8801, 'Tavira', 'Faro', '2023-06-13 23:36:19', '2023-06-13 23:36:19'),
(8900, 'Vila Real de Santo António', 'Faro', '2023-06-13 23:36:19', '2023-06-13 23:36:19'),
(8950, 'Castro Marim', 'Faro', '2023-06-13 23:36:19', '2023-06-13 23:36:19'),
(8970, 'Alcoutim', 'Faro', '2023-06-13 23:36:19', '2023-06-13 23:36:19');

-- --------------------------------------------------------

--
-- Estrutura da tabela `reservations`
--

CREATE TABLE `reservations` (
  `id` int NOT NULL,
  `init_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `guests_number` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `house_id` int DEFAULT NULL,
  `state_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `reservations`
--

INSERT INTO `reservations` (`id`, `init_date`, `end_date`, `guests_number`, `user_id`, `house_id`, `state_id`, `created_at`, `updated_at`) VALUES
(1, '2022-09-16 10:26:43', '2024-06-05 01:06:27', 5, 21, 18, 1, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(2, '2022-09-03 14:40:06', '2024-02-07 07:41:12', 1, 7, 78, 2, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(3, '2022-11-10 03:15:40', '2023-06-24 04:19:38', 3, 20, 29, 1, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(4, '2022-07-08 20:09:00', '2023-08-25 12:59:12', 4, 13, 76, 2, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(5, '2022-07-28 03:31:25', '2023-10-19 23:14:27', 6, 28, 38, 1, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(6, '2023-01-24 16:33:07', '2023-06-30 20:54:53', 3, 47, 85, 3, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(7, '2023-02-01 14:22:26', '2024-04-07 03:31:34', 9, 30, 57, 2, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(8, '2023-03-22 02:21:22', '2024-05-15 07:15:17', 5, 9, 9, 2, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(9, '2022-09-18 07:38:47', '2024-05-28 03:56:27', 8, 39, 45, 2, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(10, '2023-04-24 09:32:48', '2024-05-02 00:26:27', 8, 8, 46, 2, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(11, '2023-04-16 23:11:08', '2023-09-12 20:47:59', 10, 25, 68, 3, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(12, '2022-06-26 02:19:27', '2024-02-27 02:14:09', 10, 44, 38, 1, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(13, '2023-01-18 21:25:18', '2023-08-05 10:26:20', 3, 37, 6, 2, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(14, '2023-02-09 19:03:40', '2024-05-31 11:28:44', 1, 21, 45, 2, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(15, '2023-03-22 09:56:40', '2023-09-01 07:51:48', 6, 1, 81, 2, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(16, '2022-11-13 08:56:58', '2023-08-08 17:35:00', 3, 6, 64, 2, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(17, '2023-05-22 15:17:28', '2023-06-24 02:26:48', 6, 16, 50, 2, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(18, '2022-12-24 09:57:18', '2023-08-10 01:05:37', 8, 6, 82, 3, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(19, '2022-11-10 00:12:02', '2024-03-02 08:12:28', 6, 21, 46, 2, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(20, '2022-08-13 19:23:58', '2024-02-29 15:52:44', 5, 28, 22, 1, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(21, '2023-05-04 23:51:51', '2023-07-04 23:19:25', 4, 34, 6, 1, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(22, '2022-07-11 05:56:54', '2023-07-06 14:06:07', 10, 27, 68, 3, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(23, '2022-11-28 19:45:07', '2023-09-17 00:53:45', 10, 43, 38, 2, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(24, '2022-12-01 00:56:19', '2023-11-14 17:05:37', 3, 40, 67, 2, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(25, '2023-01-21 01:16:53', '2024-05-05 10:05:48', 9, 3, 83, 3, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(26, '2023-04-27 11:11:38', '2024-04-28 10:32:49', 3, 50, 42, 3, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(27, '2023-01-16 16:12:58', '2024-01-17 21:47:36', 4, 4, 96, 3, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(28, '2023-01-04 08:53:23', '2024-03-04 14:08:29', 3, 38, 70, 3, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(29, '2022-07-10 05:03:37', '2023-07-10 10:49:34', 7, 3, 68, 1, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(30, '2023-01-23 19:28:32', '2024-03-11 03:53:43', 1, 5, 11, 2, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(31, '2022-11-16 02:01:12', '2023-08-20 04:29:30', 8, 34, 25, 3, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(32, '2022-09-07 19:43:15', '2024-01-15 04:18:55', 3, 47, 31, 2, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(33, '2022-08-29 10:09:44', '2023-12-22 06:03:00', 3, 1, 7, 3, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(34, '2022-12-10 00:03:26', '2023-09-12 11:57:02', 9, 22, 83, 1, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(35, '2023-02-06 15:18:56', '2024-04-23 11:26:22', 5, 17, 35, 3, '2023-06-13 23:36:38', '2023-06-13 23:36:38');

-- --------------------------------------------------------

--
-- Estrutura da tabela `reservation_services`
--

CREATE TABLE `reservation_services` (
  `id` int NOT NULL,
  `reservation_id` int DEFAULT NULL,
  `service_id` int DEFAULT NULL,
  `price` float DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `reservation_services`
--

INSERT INTO `reservation_services` (`id`, `reservation_id`, `service_id`, `price`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 26, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(2, 2, 1, 11, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(3, 3, 3, 33, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(4, 4, 2, 50, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(5, 5, 1, 33, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(6, 6, 2, 29, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(7, 7, 1, 43, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(8, 8, 2, 28, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(9, 9, 3, 29, '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(10, 10, 1, 34, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(11, 11, 3, 44, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(12, 12, 1, 33, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(13, 13, 1, 31, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(14, 14, 3, 29, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(15, 15, 2, 50, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(16, 16, 3, 47, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(17, 17, 2, 26, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(18, 18, 1, 35, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(19, 19, 1, 34, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(20, 20, 1, 27, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(21, 21, 1, 31, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(22, 22, 3, 44, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(23, 23, 1, 33, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(24, 24, 2, 49, '2023-06-13 23:36:37', '2023-06-13 23:36:37'),
(25, 25, 3, 14, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(26, 26, 3, 49, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(27, 27, 3, 28, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(28, 28, 1, 20, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(29, 29, 3, 44, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(30, 30, 1, 20, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(31, 31, 1, 39, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(32, 32, 2, 49, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(33, 33, 3, 13, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(34, 34, 3, 14, '2023-06-13 23:36:38', '2023-06-13 23:36:38'),
(35, 35, 3, 42, '2023-06-13 23:36:38', '2023-06-13 23:36:38');

-- --------------------------------------------------------

--
-- Estrutura da tabela `reservation_states`
--

CREATE TABLE `reservation_states` (
  `id` int NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `reservation_states`
--

INSERT INTO `reservation_states` (`id`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Pendente', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(2, 'Em uso', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(3, 'Completa', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(4, 'Avaliada', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(5, 'Cancelada', '2023-06-13 23:36:36', '2023-06-13 23:36:36'),
(6, 'Aprovada', '2023-06-13 23:36:36', '2023-06-13 23:36:36');

-- --------------------------------------------------------

--
-- Estrutura da tabela `services`
--

CREATE TABLE `services` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `state` tinyint DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `services`
--

INSERT INTO `services` (`id`, `name`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Limpeza', 1, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(2, 'Wifi', 1, '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(3, 'Parque', 1, '2023-06-13 23:36:29', '2023-06-13 23:36:29');

-- --------------------------------------------------------

--
-- Estrutura da tabela `status_houses`
--

CREATE TABLE `status_houses` (
  `id` int NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `status_houses`
--

INSERT INTO `status_houses` (`id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Suspenso', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(2, 'Disponivel', '2023-06-13 23:36:29', '2023-06-13 23:36:29'),
(3, 'Em Utilização', '2023-06-13 23:36:29', '2023-06-13 23:36:29');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_type_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `token`, `status`, `created_at`, `updated_at`, `user_type_id`) VALUES
(1, 'Jalon Rempel', 'Jalon_Rempel0@bookingithere.com', '$2b$10$vMgUgJiWE/vc9aQxUb3oR.foNki0rpC7.0QOYq6LjTsp30P7XJxqm', '919621434', NULL, 1, '2023-06-13 23:36:21', '2023-06-13 23:36:21', 1),
(2, 'Diego King', 'Diego_King1@bookingithere.com', '$2b$10$.y6eKI0iShVxSdPDvU8BTO0Ds2XGAHlOT4t4elFyMoaTPWuDLJjLC', '963024487', NULL, 1, '2023-06-13 23:36:21', '2023-06-13 23:36:21', 1),
(3, 'Blair Smitham', 'Blair.Smitham234@bookingithere.com', '$2b$10$BvbTAbIH2.eRl1UvD2rqCu1Oy/q53il2r62EeRmLTBAzZO0DyV16i', '932538784', NULL, 1, '2023-06-13 23:36:21', '2023-06-13 23:36:21', 1),
(4, 'Karley Renner', 'Karley64@bookingithere.com', '$2b$10$uV1VmbEel1bVU1Aq/AAt2OVuT0zlAMQilfTvuFQQzCDKtdbMXnvn.', '946895329', NULL, 1, '2023-06-13 23:36:21', '2023-06-13 23:36:21', 2),
(5, 'Dallas Koss', 'Dallas_Koss419@bookingithere.com', '$2b$10$eWJZZyAAkNN1wGj2ySCzu.iOJ/tEtRaNEWWsVZVWnHSa14WTs4mNO', '927830398', NULL, 1, '2023-06-13 23:36:21', '2023-06-13 23:36:21', 2),
(6, 'Yessenia Mante', 'Yessenia.Mante598@bookingithere.com', '$2b$10$xczZkDs3FkhLPti5QeNFLuFTj4NUVKBNuRAKalJnM9g6AuDj7lbJa', '975557009', NULL, 1, '2023-06-13 23:36:21', '2023-06-13 23:36:21', 2),
(7, 'Laurel Dicki', 'Laurel45@bookingithere.com', '$2b$10$oshUV2eRISeiGMKppteS/uSrdFgdsj7qmFrmFUIxKYrBwdcYEl5tK', '905509492', NULL, 1, '2023-06-13 23:36:21', '2023-06-13 23:36:21', 1),
(8, 'Bernard Auer', 'Bernard_Auer73@bookingithere.com', '$2b$10$pZm2glcbv3hPIYjRjsqgXuEZlHc7sEJAC2jVcS4XwKEvTgcAb7QNe', '930928853', NULL, 1, '2023-06-13 23:36:21', '2023-06-13 23:36:21', 2),
(9, 'Elda Rempel', 'Elda_Rempel8@bookingithere.com', '$2b$10$jfypTbZuhwxPViQz.oaGJ.3yjhfNfl7k4AItMOEV1Lq08jIS46R32', '929415805', NULL, 1, '2023-06-13 23:36:21', '2023-06-13 23:36:21', 2),
(10, 'Hailee Carter', 'Hailee.Carter952@bookingithere.com', '$2b$10$f655zP0pHPdbsJSQF.b4z.3vupmJqLn1hkIvERwmh5iNkUwskYWjO', '990299713', NULL, 1, '2023-06-13 23:36:21', '2023-06-13 23:36:21', 1),
(11, 'Brooklyn Barton', 'Brooklyn98@bookingithere.com', '$2b$10$uEmGI4zFlzeqS0wXbgefhevo6vOwQgpWUa3mMA0dYaulCfpPABVzG', '937531609', NULL, 1, '2023-06-13 23:36:21', '2023-06-13 23:36:21', 1),
(12, 'Ben O\'Hara', 'Ben52@bookingithere.com', '$2b$10$q9UB.2j/VwoPi8rqEO360eNe4ntCYwONLioOPmt8wx6/X6LRyYmne', '999322927', NULL, 1, '2023-06-13 23:36:21', '2023-06-13 23:36:21', 2),
(13, 'Paolo Deckow', 'Paolo.Deckow1241@bookingithere.com', '$2b$10$pDSg2Cs6jpmflsBk/2HreuuRM9N3nTn/AoxCXLX8FIkjG98hCL5tS', '956120227', NULL, 1, '2023-06-13 23:36:22', '2023-06-13 23:36:22', 2),
(14, 'Riley Stoltenberg', 'Riley.Stoltenberg1379@bookingithere.com', '$2b$10$hZqfGCnQMHnegozrYjL1V.5Lx.aJ.9TSIAuExDBLfm49RmjHGoMo6', '951629860', NULL, 1, '2023-06-13 23:36:22', '2023-06-13 23:36:22', 1),
(15, 'Orville Ondricka', 'Orville.Ondricka14@bookingithere.com', '$2b$10$QgQtNUeDxp7v47bUe1UUSugW020nPKtwmVCjHB5u.UNvC0X8i7JRi', '986818279', NULL, 1, '2023-06-13 23:36:22', '2023-06-13 23:36:22', 1),
(16, 'Theodore Predovic', 'Theodore81@bookingithere.com', '$2b$10$J52CzOrWjihNA1DNp9ptN.KyA.kv/yJabf8xZiaWNzAmZg9sdUdam', '966196973', NULL, 1, '2023-06-13 23:36:22', '2023-06-13 23:36:22', 1),
(17, 'Maureen Little', 'Maureen_Little1652@bookingithere.com', '$2b$10$LpHicWjxzjeSR9LFGmd.W.c2Lkd.w0LmkXFZ.BZ0fS8U4B7IvPcNa', '977314712', NULL, 1, '2023-06-13 23:36:22', '2023-06-13 23:36:22', 2),
(18, 'Rebeka Ferry', 'Rebeka_Ferry17@bookingithere.com', '$2b$10$6sr3S5CwbXhHIQjsWWWO.uPTQtupZyQXgv2vu.gKszMFnGbdWeSn.', '934018085', NULL, 1, '2023-06-13 23:36:22', '2023-06-13 23:36:22', 1),
(19, 'Anais O\'Hara', 'Anais_OHara1888@bookingithere.com', '$2b$10$CdkKDkZDvM4GF/es8.huAujUwsrFJHrXoYNBuhJ6AFhGuh4nq5TLq', '997312921', NULL, 1, '2023-06-13 23:36:22', '2023-06-13 23:36:22', 1),
(20, 'Jerel Abbott', 'Jerel1@bookingithere.com', '$2b$10$m7I6wfEO3Lxsf0Wd1p/xDeO7KBQDct9fFogN4xj88j9OoUdoZrUv.', '937854648', NULL, 1, '2023-06-13 23:36:22', '2023-06-13 23:36:22', 1),
(21, 'Aaron Watsica', 'Aaron18@bookingithere.com', '$2b$10$r3Ur.VgaAEhWNZaMh.BFp.K9pZXqSmpJ0D7ccIMSjfZ6rxa6TreoS', '984101426', NULL, 1, '2023-06-13 23:36:22', '2023-06-13 23:36:22', 2),
(22, 'Irma Olson', 'Irma_Olson2192@bookingithere.com', '$2b$10$9iffXCvfGX.Q/NEsDRn4oOB5D3rd1M./bv9TRn823jd7l8v4hkziC', '955032173', NULL, 1, '2023-06-13 23:36:22', '2023-06-13 23:36:22', 2),
(23, 'Fritz McClure', 'Fritz_McClure22@bookingithere.com', '$2b$10$0P.goS0aV2rTA.L1PlPSZe3nO88F.13j5ndjK9u3c.yZMzP3NSkDu', '937447661', NULL, 1, '2023-06-13 23:36:22', '2023-06-13 23:36:22', 1),
(24, 'Reva Kertzmann', 'Reva7@bookingithere.com', '$2b$10$od3VmT5d5B4JlrL6DNoO3OuSuqNeL.m8ZY9hM4OZpPC2U5JjusHl.', '933145689', NULL, 1, '2023-06-13 23:36:22', '2023-06-13 23:36:22', 1),
(25, 'Christian Berge', 'Christian_Berge2469@bookingithere.com', '$2b$10$x.zLRQx745Vlt6.JBwqujex99Cb.X3u/DRpQrW55ArbaxEf0yt1tS', '915940273', NULL, 1, '2023-06-13 23:36:22', '2023-06-13 23:36:22', 2),
(26, 'Doyle Luettgen', 'Doyle40@bookingithere.com', '$2b$10$dUFLektTjH/pqGFYllhe3uL7c0Fbn8glWoPpzek7srrVddcHR/l.C', '942979762', NULL, 1, '2023-06-13 23:36:23', '2023-06-13 23:36:23', 1),
(27, 'Michael Douglas', 'Michael.Douglas26@bookingithere.com', '$2b$10$jbrwoZCwztf5F3KAb295nOUAG7GgMUn62C1oIeBNPcRwBLkHvz4C2', '917736784', NULL, 1, '2023-06-13 23:36:23', '2023-06-13 23:36:23', 1),
(28, 'Lacy Jacobson', 'Lacy_Jacobson27@bookingithere.com', '$2b$10$qW2kn5qkHD4MiZ8urQACsuv/BD1XPJgAIyb1z2X2aJ15ghfrO0G3W', '954539028', NULL, 1, '2023-06-13 23:36:23', '2023-06-13 23:36:23', 1),
(29, 'Leonie Swift', 'Leonie_Swift2897@bookingithere.com', '$2b$10$c.gGXwD50I75LO6yQrSXGO7Zg6cnS4j7oKTKsOFH7gMI6eSHdmuUm', '988430451', NULL, 1, '2023-06-13 23:36:23', '2023-06-13 23:36:23', 1),
(30, 'Alexzander Lebsack', 'Alexzander_Lebsack29@bookingithere.com', '$2b$10$ZIhjTWzmHdwhk1S3nbGUGuvRLk0PtXH/iLLMa2fDQrE5lScDqZB12', '933259075', NULL, 1, '2023-06-13 23:36:23', '2023-06-13 23:36:23', 1),
(31, 'Raquel Gutkowski', 'Raquel14@bookingithere.com', '$2b$10$.yIHhO1qNlR1LiC/2eLqt.DAMP1x5dly7wvBgsWA0rAFL6fAIGrUe', '927103991', NULL, 1, '2023-06-13 23:36:23', '2023-06-13 23:36:23', 1),
(32, 'Dimitri Grady', 'Dimitri.Grady31@bookingithere.com', '$2b$10$QPn40KVE/u9HJCZjPXMsIuuIA4V3mUqm9U7eGlcYNGoTkD/lNUUTS', '965398537', NULL, 1, '2023-06-13 23:36:23', '2023-06-13 23:36:23', 2),
(33, 'Althea Rodriguez', 'Althea62@bookingithere.com', '$2b$10$mmeZFirG9f.94vSYveErKuSwg0XCHuDszzkbsw8nJ6V.gFXmSgtgO', '907888584', NULL, 1, '2023-06-13 23:36:23', '2023-06-13 23:36:23', 2),
(34, 'Alvena Huels', 'Alvena.Huels33@bookingithere.com', '$2b$10$8F3Be/plnQCHmgmYS8gp4O54ddBMFuOd5IEwwz3Dxvr74DgeA3kgu', '986726736', NULL, 1, '2023-06-13 23:36:23', '2023-06-13 23:36:23', 2),
(35, 'Jacklyn Koepp', 'Jacklyn3@bookingithere.com', '$2b$10$f6jgIZnMAkX1Z42H43/TfuMuPnel662wjeggSfnk7S2sKUMq6n8Aq', '964694967', NULL, 1, '2023-06-13 23:36:23', '2023-06-13 23:36:23', 1),
(36, 'Felicia Christiansen', 'Felicia_Christiansen35@bookingithere.com', '$2b$10$KvT61SPVGcS1ZAIezGa2F.oNQGQ4lupexMixmQiS9cA9s.c226a0e', '904546368', NULL, 1, '2023-06-13 23:36:23', '2023-06-13 23:36:23', 2),
(37, 'Maia Auer', 'Maia.Auer3693@bookingithere.com', '$2b$10$UCiW9qs/Rizx/nIfPNmgwubv5H9BeDqN08heYB85LPc.zNFHjxPoC', '978445905', NULL, 1, '2023-06-13 23:36:23', '2023-06-13 23:36:23', 1),
(38, 'Ned McKenzie', 'Ned17@bookingithere.com', '$2b$10$iA7SYIviM2UcM15VCoVIxu8K9cEPwx4cbkWCcXtxS5JJnSLZuLvdu', '908710380', NULL, 1, '2023-06-13 23:36:23', '2023-06-13 23:36:23', 1),
(39, 'Armando Jakubowski', 'Armando0@bookingithere.com', '$2b$10$eNOJ5vPMy4Sb4sQkVtG4b.e.kXJlO5awnzyiTintuLYZ50jygsXim', '972721704', NULL, 1, '2023-06-13 23:36:24', '2023-06-13 23:36:24', 1),
(40, 'Cristal Gislason', 'Cristal83@bookingithere.com', '$2b$10$0CpT9z4bU9A617c0k7Nt7ezBRhE2l8sPeErM4CV754VFNfcZz0dPm', '982693726', NULL, 1, '2023-06-13 23:36:24', '2023-06-13 23:36:24', 1),
(41, 'Lilla Kerluke', 'Lilla67@bookingithere.com', '$2b$10$avM9tS2gK/I5Xhl2kQKeBeXE/FI87u8GLYAVxpOTs3FvUjrzXOciq', '964275769', NULL, 1, '2023-06-13 23:36:24', '2023-06-13 23:36:24', 1),
(42, 'Emmalee Von', 'Emmalee40@bookingithere.com', '$2b$10$DyXjPpYS/IZ1IULPJgR3feRWEkqe0TsPBK6DBT8wM0holISVCG3JW', '927319129', NULL, 1, '2023-06-13 23:36:24', '2023-06-13 23:36:24', 1),
(43, 'Rickey Rath', 'Rickey.Rath42@bookingithere.com', '$2b$10$xGsLOrihBKCeS7GOU4w8ju4XPxhHrm95kFUSjxrjhcG7RnXQ648e.', '999334861', NULL, 1, '2023-06-13 23:36:24', '2023-06-13 23:36:24', 2),
(44, 'Renee Larkin', 'Renee.Larkin4381@bookingithere.com', '$2b$10$bsmLmuE9tqnVsN2Q4Uls2uYvnXxTLoxnM4pDP884q9B1.SPIBefyS', '968967799', NULL, 1, '2023-06-13 23:36:24', '2023-06-13 23:36:24', 1),
(45, 'Bobbie Rohan', 'Bobbie.Rohan4433@bookingithere.com', '$2b$10$twNOA1ubKGPU71m1RlN/lORdcrOkSVbLdXwDyDs8V7uzOG.3wgaxm', '995414990', NULL, 1, '2023-06-13 23:36:24', '2023-06-13 23:36:24', 2),
(46, 'Kaitlyn Rau', 'Kaitlyn_Rau4592@bookingithere.com', '$2b$10$.DqnCvMq6wg9CZF/G56Sje0rST0S/hwWrqv5gEQMlp8pIwn3b3epu', '936790094', NULL, 1, '2023-06-13 23:36:24', '2023-06-13 23:36:24', 2),
(47, 'Jacinthe Mills', 'Jacinthe.Mills46@bookingithere.com', '$2b$10$aog0yZXVhOe8e2Ja26uPhOxY6hhx4Ut5h6ImCYu/6sAGvKQwipV42', '924217522', NULL, 1, '2023-06-13 23:36:24', '2023-06-13 23:36:24', 2),
(48, 'Terrill Keeling', 'Terrill.Keeling4741@bookingithere.com', '$2b$10$oJhLPkq7G5MMQmxcUaZZ9uHuCvwOqC3Ho5gXQLO2XT2IUlwzwuI5.', '962475027', NULL, 1, '2023-06-13 23:36:24', '2023-06-13 23:36:24', 1),
(49, 'Avis Shanahan', 'Avis_Shanahan4839@bookingithere.com', '$2b$10$H0g69T5cXUZlJiDqm34ciOrNDQYonDdgG9m7lazaYug8UgiPqkh4q', '939386711', NULL, 1, '2023-06-13 23:36:24', '2023-06-13 23:36:24', 2),
(50, 'Jared Cronin', 'Jared86@bookingithere.com', '$2b$10$wr64JpT7FmftOq8dquEJ1OYrM8b8aBmcCwg359VcGiW58QT4x9rl2', '947948599', NULL, 1, '2023-06-13 23:36:24', '2023-06-13 23:36:24', 2),
(51, 'Leola Haag', 'Leola21@bookingithere.com', '$2b$10$RaUTjt9T4kB68Sjyc.wE3uw1QAAl8BvUa4ONL3UjCjmWiMaExZQnu', '937748891', NULL, 1, '2023-06-13 23:36:25', '2023-06-13 23:36:25', 1),
(52, 'Brandt Harber', 'Brandt.Harber51@bookingithere.com', '$2b$10$ZVvILF9X/5V7f1mAy8Yy3uq6CWOFgeP2JwQuSNj1QsiEj60/YRiR.', '994147857', NULL, 1, '2023-06-13 23:36:25', '2023-06-13 23:36:25', 2),
(53, 'Maia Veum', 'Maia.Veum5287@bookingithere.com', '$2b$10$Ctmhcm9DgvBBYEF77x3EeuEMLILS37slarZ772IjBW/hghGn.hwkS', '911216457', NULL, 1, '2023-06-13 23:36:25', '2023-06-13 23:36:25', 1),
(54, 'Jordon Muller', 'Jordon73@bookingithere.com', '$2b$10$d.yTicXmxfloWkGyIXmD2ecZrT.suywRujHhIMWMHm.m3ba2j/QSe', '967470331', NULL, 1, '2023-06-13 23:36:25', '2023-06-13 23:36:25', 2),
(55, 'Lafayette Feil', 'Lafayette95@bookingithere.com', '$2b$10$IkZmyUB4GJDE1bj4oHJvxOxtbayTPH0lZcFFP0PEj6Ipz3KCOZSGu', '954295051', NULL, 1, '2023-06-13 23:36:25', '2023-06-13 23:36:25', 1),
(56, 'Leann Thiel', 'Leann.Thiel55@bookingithere.com', '$2b$10$SpkGZ0Y7kfRQAAt9LolXqOJ1KiIbF6k9SRf9LaeKCC9RlkzrbKsca', '906153005', NULL, 1, '2023-06-13 23:36:25', '2023-06-13 23:36:25', 2),
(57, 'Nathan Howell', 'Nathan.Howell56@bookingithere.com', '$2b$10$lRDT.8jGMDt9IpJ2.Q.r9O7qQWeIMSqn/GJ2PXoZhilaZB0jHb.9.', '989612061', NULL, 1, '2023-06-13 23:36:25', '2023-06-13 23:36:25', 2),
(58, 'Maxine Treutel', 'Maxine_Treutel5741@bookingithere.com', '$2b$10$Njm0fzBMDfUORwZZCJ0MH.Gctfi/ESqBBxdKmtFmf23BnKB6iLQ8q', '947163373', NULL, 1, '2023-06-13 23:36:25', '2023-06-13 23:36:25', 2),
(59, 'Lenore Moore', 'Lenore_Moore58@bookingithere.com', '$2b$10$/5cKhH/Nq5dIRwxY1ulurObADJs4orPr7KqfgqNXr6.4SdXXxbel6', '941876452', NULL, 1, '2023-06-13 23:36:25', '2023-06-13 23:36:25', 2),
(60, 'Hiram Williamson', 'Hiram_Williamson59@bookingithere.com', '$2b$10$3CR6d5xp2NAN8xSqyKbimuJTraVyz/sTjfJ21jynx4WyX1O.M4yG2', '986044512', NULL, 1, '2023-06-13 23:36:25', '2023-06-13 23:36:25', 2),
(61, 'Veronica Ledner', 'Veronica80@bookingithere.com', '$2b$10$ZA7boK1gYDD2JT7tdI5ukupHzWfpOtkWGc6jqb0o/mm28xH3VHmi.', '937491640', NULL, 1, '2023-06-13 23:36:25', '2023-06-13 23:36:25', 1),
(62, 'Myriam Kiehn', 'Myriam_Kiehn61@bookingithere.com', '$2b$10$8yTwJxMMNVaAJjv3Iw/qP.erkOxC3yYVpUelRAAx1HUD7cZhSIpZi', '904159797', NULL, 1, '2023-06-13 23:36:26', '2023-06-13 23:36:26', 1),
(63, 'Aletha Gleason', 'Aletha_Gleason6245@bookingithere.com', '$2b$10$Io6wi//F8OV5zTC6GioyD.JNG4gyRjXA.MDExPSu9RRhf/Howqh7K', '955511158', NULL, 1, '2023-06-13 23:36:26', '2023-06-13 23:36:26', 1),
(64, 'Clara Farrell', 'Clara.Farrell633@bookingithere.com', '$2b$10$yi5aLtCckXvwMITxgJZoA.gsZMPHRlwTEI9TbjDQaGr6kTn6vriGu', '938281344', NULL, 1, '2023-06-13 23:36:26', '2023-06-13 23:36:26', 2),
(65, 'Jaquelin Labadie', 'Jaquelin.Labadie64@bookingithere.com', '$2b$10$y96WxJZdXwDwQic8HQ4ir.SOLBm95zkmH3uDshtdnIbckoPi2PYky', '947192879', NULL, 1, '2023-06-13 23:36:26', '2023-06-13 23:36:26', 2),
(66, 'Rubie Predovic', 'Rubie_Predovic65@bookingithere.com', '$2b$10$Edgfi89vurz0Vl3EzoD7w.heauN1MP/TyV1H8A0xW5DMhsqkeIKMa', '933672115', NULL, 1, '2023-06-13 23:36:26', '2023-06-13 23:36:26', 1),
(67, 'Mckenzie Lemke', 'Mckenzie.Lemke6666@bookingithere.com', '$2b$10$8wJmxDBRa89Td2WV0BNn1.b7lYsXfaWmvVn4dx.u8Ce3aysAat8xO', '928179113', NULL, 1, '2023-06-13 23:36:26', '2023-06-13 23:36:26', 1),
(68, 'Kurt Schowalter', 'Kurt_Schowalter6797@bookingithere.com', '$2b$10$XjepJ1p65Ea.jzHyUcgaGO0WbqzhkynYDvqIIrrLSAz1r3L0CR5NC', '900071315', NULL, 1, '2023-06-13 23:36:26', '2023-06-13 23:36:26', 2),
(69, 'Elenor Gerhold', 'Elenor.Gerhold68@bookingithere.com', '$2b$10$DyULxtC./NOceWeHOXyDYOTlMy4FqeeNCjntONFKkkR3XVYMaAubO', '920644440', NULL, 1, '2023-06-13 23:36:26', '2023-06-13 23:36:26', 1),
(70, 'Demetris Windler', 'Demetris86@bookingithere.com', '$2b$10$MOBbnS6VTF76oPl5i9UtjuLTkKus06GH5gdK63B8OkotIFPf2EZBi', '998761439', NULL, 1, '2023-06-13 23:36:26', '2023-06-13 23:36:26', 2),
(71, 'Lizzie DuBuque', 'Lizzie_DuBuque7090@bookingithere.com', '$2b$10$ZbOBlnOnSuSvXH7q2CDH8OxnNFLc5Ydm6jiTi3GJmQYwmW7nm1KAu', '964417784', NULL, 1, '2023-06-13 23:36:26', '2023-06-13 23:36:26', 2),
(72, 'Ivy Kessler', 'Ivy_Kessler71@bookingithere.com', '$2b$10$ltziOLfcZmFn8cNetxsnFe8ZU9pd32b.z8OQUq6.iYLFfGifWiLCi', '933933638', NULL, 1, '2023-06-13 23:36:26', '2023-06-13 23:36:26', 1),
(73, 'Marshall Collins', 'Marshall46@bookingithere.com', '$2b$10$DY/LvPBaycL2tmUaRORqBeXt6nHiSj3cn6dh6lLoa6u1naiVBLkke', '969737828', NULL, 1, '2023-06-13 23:36:26', '2023-06-13 23:36:26', 1),
(74, 'Eudora Simonis', 'Eudora0@bookingithere.com', '$2b$10$aKbSOJPw.ol6AAtonTS.UOJ1686sS1lIgFLQkF77XR3CdX565BHLy', '947621257', NULL, 1, '2023-06-13 23:36:27', '2023-06-13 23:36:27', 2),
(75, 'Sydnee Murray', 'Sydnee_Murray74@bookingithere.com', '$2b$10$EZ0rg5fK8NZS58tW.jiB6e7VYHwOSagBI8G/5d0EospMb0M6ziIHO', '962371406', NULL, 1, '2023-06-13 23:36:27', '2023-06-13 23:36:27', 1),
(76, 'Olaf Schuster', 'Olaf_Schuster75@bookingithere.com', '$2b$10$VEPOIdzHlAAXA0vXMEpE0ewONl3YykmyjaExwRTvEO9Hq5iGInzo2', '908666808', NULL, 1, '2023-06-13 23:36:27', '2023-06-13 23:36:27', 1),
(77, 'Krista Jast', 'Krista43@bookingithere.com', '$2b$10$oeWEedRwXCWNpjjDoS0xeuyRDqDAfmocjSxxc3/CL1hAtlvqenrv.', '992504917', NULL, 1, '2023-06-13 23:36:27', '2023-06-13 23:36:27', 2),
(78, 'Shanelle Pfannerstill', 'Shanelle_Pfannerstill77@bookingithere.com', '$2b$10$cR97dmnl6pCGnQPsl82NB..wji0b2s1d7fzyslk4OjQB6OTMdDJCa', '969088354', NULL, 1, '2023-06-13 23:36:27', '2023-06-13 23:36:27', 1),
(79, 'Vilma Zulauf', 'Vilma_Zulauf78@bookingithere.com', '$2b$10$ukFyYOJOitK2cAJpB0Q05.2yxhr3RBTkPqB2.g32z6ZnRxjhcWvr6', '905904657', NULL, 1, '2023-06-13 23:36:27', '2023-06-13 23:36:27', 2),
(80, 'Felton Lynch', 'Felton86@bookingithere.com', '$2b$10$bFEddZYnyoSLtf46dmMH2.Ule/3edsj.gKMGxCsaia9O2jXT.5ZGC', '959996442', NULL, 1, '2023-06-13 23:36:27', '2023-06-13 23:36:27', 1),
(81, 'Branson Langosh', 'Branson70@bookingithere.com', '$2b$10$WxnapmKYCCg8D/gLtZS9c.WUFCcgLGho1dzT7hTQPtoEZ3gN6CJnO', '971231881', NULL, 1, '2023-06-13 23:36:27', '2023-06-13 23:36:27', 1),
(82, 'Gregorio Corkery', 'Gregorio.Corkery81@bookingithere.com', '$2b$10$/AlgE1fVY5fCEj2Saypokeq79XuqLsQO0etyW.kY9iPxKEhj5P5zG', '948978891', NULL, 1, '2023-06-13 23:36:27', '2023-06-13 23:36:27', 1),
(83, 'Camron Brakus', 'Camron.Brakus8259@bookingithere.com', '$2b$10$pWo3XYc3Ju3iy.SXlP0fHOEaTnxyJTWmtA5owt.IODJPh6N.06AT.', '927852822', NULL, 1, '2023-06-13 23:36:27', '2023-06-13 23:36:27', 1),
(84, 'Keshawn Price', 'Keshawn.Price8389@bookingithere.com', '$2b$10$3mfsAAZVChD8XrcuCs0U8ew5z31QNtA3uG0bZ0d5tGmKBYgY8JExi', '957018029', NULL, 1, '2023-06-13 23:36:27', '2023-06-13 23:36:27', 1),
(85, 'Gerry Cummings', 'Gerry.Cummings84@bookingithere.com', '$2b$10$zoGLsarHEyeFcOO4BJRYge.Awhtj73gheVrzaH9w54qxpCeAoB7tC', '906179242', NULL, 1, '2023-06-13 23:36:27', '2023-06-13 23:36:27', 2),
(86, 'Madilyn Bruen', 'Madilyn.Bruen85@bookingithere.com', '$2b$10$FzvspZOjkL9yl6KoEHiJkOzAeWFJZ9Fxw8Q/s.jcTyolJ6yqI9jwq', '931844884', NULL, 1, '2023-06-13 23:36:27', '2023-06-13 23:36:27', 2),
(87, 'Lonie Spinka', 'Lonie.Spinka86@bookingithere.com', '$2b$10$4rM8.fjNnRygnG/stfPghObsYakuE1IIYufUIjznVEgkPtB8aPDCu', '988755824', NULL, 1, '2023-06-13 23:36:28', '2023-06-13 23:36:28', 2),
(88, 'Kelley Bode', 'Kelley.Bode8720@bookingithere.com', '$2b$10$K6k5Vlve63LW1rt98BDWF.UC.a1erd0RsvA/sKw6YYxqXNQBG07FW', '913667315', NULL, 1, '2023-06-13 23:36:28', '2023-06-13 23:36:28', 1),
(89, 'Aubrey Fisher', 'Aubrey15@bookingithere.com', '$2b$10$NgWGtiX0DbsQaR2vUaqFPu95pSAVuj1cHZbhauhPgnYjSZMddFYJu', '921762295', NULL, 1, '2023-06-13 23:36:28', '2023-06-13 23:36:28', 2),
(90, 'Providenci Bosco', 'Providenci72@bookingithere.com', '$2b$10$wfzIw7nEMBWm5n/u6SjE2u1qGuS569WxqM8aPaMNpeTGol0w.6EHO', '975395776', NULL, 1, '2023-06-13 23:36:28', '2023-06-13 23:36:28', 1),
(91, 'Mariam Zieme', 'Mariam85@bookingithere.com', '$2b$10$NqVOBs2cdZIDeAqbN32KJumro2A9PQY5p3hwsvie4Zv/Dl16d8UUm', '933860101', NULL, 1, '2023-06-13 23:36:28', '2023-06-13 23:36:28', 1),
(92, 'Frank Collier', 'Frank69@bookingithere.com', '$2b$10$WrJs.ai5CWIrNdBOn29pJuKbim5k8UQY1usx3P1Pga3wPbEsTIV.G', '990832948', NULL, 1, '2023-06-13 23:36:28', '2023-06-13 23:36:28', 2),
(93, 'Trevion Roob', 'Trevion77@bookingithere.com', '$2b$10$uFwNoEC6sF988UhGRPFXxe2QVUktMJo7P2mQ3AZLIdtfIwWmVHFC2', '980149529', NULL, 1, '2023-06-13 23:36:28', '2023-06-13 23:36:28', 2),
(94, 'Tyrel Rempel', 'Tyrel_Rempel93@bookingithere.com', '$2b$10$2r7M.0tk/hYVG6EeJpCnN./zM9ftvcAcbBRsgzjY2skElDjrc25Dy', '930732753', NULL, 1, '2023-06-13 23:36:28', '2023-06-13 23:36:28', 1),
(95, 'Gayle McGlynn', 'Gayle_McGlynn9496@bookingithere.com', '$2b$10$2nN42PURd0NHU9DqlcFLV.TFR6XMXqeIlXTcAxIQhf.wV3JRSK8Lm', '989518716', NULL, 1, '2023-06-13 23:36:28', '2023-06-13 23:36:28', 1),
(96, 'Hettie Ryan', 'Hettie32@bookingithere.com', '$2b$10$Gb0Pl3xfxkTob9W2slXdne8yZMaYFcu7DxKettzowSPJip0fCtpmi', '989956567', NULL, 1, '2023-06-13 23:36:28', '2023-06-13 23:36:28', 2),
(97, 'Jalen Lakin', 'Jalen51@bookingithere.com', '$2b$10$qMMfw7rsiBdJUGw4RZVGPOrel.8uN4h6cIpe1IQi2v1.yCIwjeGXK', '998243768', NULL, 1, '2023-06-13 23:36:28', '2023-06-13 23:36:28', 2),
(98, 'Christine McCullough', 'Christine.McCullough97@bookingithere.com', '$2b$10$Q7YYIlF3q6xEo6kVZ1WooeaUT6C25pyRuFfn/441ixLanUUUQ/7Ry', '921793895', NULL, 1, '2023-06-13 23:36:28', '2023-06-13 23:36:28', 2),
(99, 'Camden Anderson', 'Camden.Anderson98@bookingithere.com', '$2b$10$xNnWQmBSKteYUVghyYDZEuMwnqM1iUbGZeQubSQBHuUMHEDkSLz42', '903032214', NULL, 1, '2023-06-13 23:36:29', '2023-06-13 23:36:29', 2),
(100, 'Margarita Raynor', 'Margarita0@bookingithere.com', '$2b$10$DZEU2LmJ06Yr8MNDcry5JOXzjT5FiXFp4tKTw8G9K5rVCTwGkDYda', '917021719', NULL, 1, '2023-06-13 23:36:29', '2023-06-13 23:36:29', 2),
(101, 'Administrador', 'admin@bookingithere.com', '$2b$10$qQt6knUpkWEDfK8lZIMG5O7lRrBo8ZFtsNV3Fcm8bv4K7e4dcm5FC', NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAxLCJwZXJtcyI6MSwiY2hlY2siOiI5ODEwNDc0NWNmNzg4MmMyMzgyOTM3ZmFiNjJhNjcwOSIsImlhdCI6MTY4NjY5OTc1NCwiZXhwIjoxNjg2NzIxMzU0fQ.Uc6fXqVIhprVChGsJho-2vsvAPq1ktPv8j7BvwyGf-M', NULL, '2023-06-13 23:42:14', '2023-06-13 23:42:34', 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `user_types`
--

CREATE TABLE `user_types` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `user_types`
--

INSERT INTO `user_types` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Utilizador', '2023-06-13 23:36:20', '2023-06-13 23:36:20'),
(2, 'Anunciante', '2023-06-13 23:36:20', '2023-06-13 23:36:20'),
(3, 'Admin', '2023-06-13 23:36:20', '2023-06-13 23:36:20');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `house_id` (`house_id`);

--
-- Índices para tabela `announcement_payments`
--
ALTER TABLE `announcement_payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `announcement` (`announcement`);

--
-- Índices para tabela `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reservation` (`reservation`);

--
-- Índices para tabela `houses`
--
ALTER TABLE `houses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status` (`status`),
  ADD KEY `postal_code` (`postal_code`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices para tabela `house_services`
--
ALTER TABLE `house_services`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `house_services_ServiceId_HouseId_unique` (`house_id`,`service_id`),
  ADD KEY `service_id` (`service_id`);

--
-- Índices para tabela `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices para tabela `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reservation_id` (`reservation_id`),
  ADD KEY `state_id` (`state_id`);

--
-- Índices para tabela `payment_states`
--
ALTER TABLE `payment_states`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Índices para tabela `postal_codes`
--
ALTER TABLE `postal_codes`
  ADD PRIMARY KEY (`postal_code`),
  ADD UNIQUE KEY `postal_code` (`postal_code`);

--
-- Índices para tabela `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `house_id` (`house_id`),
  ADD KEY `state_id` (`state_id`);

--
-- Índices para tabela `reservation_services`
--
ALTER TABLE `reservation_services`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `reservation_services_ReservationId_ServiceId_unique` (`service_id`,`reservation_id`),
  ADD KEY `reservation_id` (`reservation_id`);

--
-- Índices para tabela `reservation_states`
--
ALTER TABLE `reservation_states`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Índices para tabela `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Índices para tabela `status_houses`
--
ALTER TABLE `status_houses`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `user_type_id` (`user_type_id`);

--
-- Índices para tabela `user_types`
--
ALTER TABLE `user_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `announcements`
--
ALTER TABLE `announcements`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de tabela `announcement_payments`
--
ALTER TABLE `announcement_payments`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de tabela `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT de tabela `houses`
--
ALTER TABLE `houses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- AUTO_INCREMENT de tabela `house_services`
--
ALTER TABLE `house_services`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- AUTO_INCREMENT de tabela `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de tabela `payment_states`
--
ALTER TABLE `payment_states`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de tabela `reservation_services`
--
ALTER TABLE `reservation_services`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de tabela `reservation_states`
--
ALTER TABLE `reservation_states`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `services`
--
ALTER TABLE `services`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `status_houses`
--
ALTER TABLE `status_houses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT de tabela `user_types`
--
ALTER TABLE `user_types`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `announcements`
--
ALTER TABLE `announcements`
  ADD CONSTRAINT `announcements_ibfk_1` FOREIGN KEY (`house_id`) REFERENCES `houses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Limitadores para a tabela `announcement_payments`
--
ALTER TABLE `announcement_payments`
  ADD CONSTRAINT `announcement_payments_ibfk_1` FOREIGN KEY (`announcement`) REFERENCES `announcements` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Limitadores para a tabela `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD CONSTRAINT `feedbacks_ibfk_1` FOREIGN KEY (`reservation`) REFERENCES `reservations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `houses`
--
ALTER TABLE `houses`
  ADD CONSTRAINT `houses_ibfk_1` FOREIGN KEY (`status`) REFERENCES `status_houses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `houses_ibfk_2` FOREIGN KEY (`postal_code`) REFERENCES `postal_codes` (`postal_code`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `houses_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Limitadores para a tabela `house_services`
--
ALTER TABLE `house_services`
  ADD CONSTRAINT `house_services_ibfk_1` FOREIGN KEY (`house_id`) REFERENCES `houses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `house_services_ibfk_2` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`reservation_id`) REFERENCES `reservations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`state_id`) REFERENCES `payment_states` (`id`) ON UPDATE CASCADE;

--
-- Limitadores para a tabela `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`house_id`) REFERENCES `houses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reservations_ibfk_3` FOREIGN KEY (`state_id`) REFERENCES `reservation_states` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Limitadores para a tabela `reservation_services`
--
ALTER TABLE `reservation_services`
  ADD CONSTRAINT `reservation_services_ibfk_1` FOREIGN KEY (`reservation_id`) REFERENCES `reservations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reservation_services_ibfk_2` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`user_type_id`) REFERENCES `user_types` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
