CREATE DATABASE  IF NOT EXISTS `gamezone` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gamezone`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: gamezone
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrator`
--

DROP TABLE IF EXISTS `administrator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrator` (
  `emailid` varchar(45) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `picture` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`emailid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrator`
--

LOCK TABLES `administrator` WRITE;
/*!40000 ALTER TABLE `administrator` DISABLE KEYS */;
INSERT INTO `administrator` VALUES ('satishkumar998475@gmail.com','satish','sk','satish.jpg');
/*!40000 ALTER TABLE `administrator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `categoryid` int NOT NULL AUTO_INCREMENT,
  `categoryname` varchar(70) DEFAULT NULL,
  `description` text,
  `icon` text,
  `ad` text,
  PRIMARY KEY (`categoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (5,'Android','Tuch mobile','45953-jxoouj.jpg','Available-now-Realme-8-5G-CLP-Banner-28-04-2021.jpg'),(6,'Tab','Android tablet','Config-KV-TabS6-CloudBlue-082119-1200x1200.jpg','Tablet-Banners-1365-x-260.jpg'),(10,'Shoose','it contain two type formal and informal','banner1.jpg','banner1.jpg');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact` (
  `idcontact` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `message` text,
  PRIMARY KEY (`idcontact`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (1,'sk gupta','satishkumar998475@gmail.com','hi'),(2,'sk gupta','satishkumar998475@gmail.com','hi');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `generateorderno`
--

DROP TABLE IF EXISTS `generateorderno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generateorderno` (
  `orderno` int NOT NULL AUTO_INCREMENT,
  `orderdate` date DEFAULT NULL,
  `ordertime` time DEFAULT NULL,
  `totalamount` decimal(10,0) DEFAULT NULL,
  `emailid` varchar(45) DEFAULT NULL,
  `mobileno` varchar(13) DEFAULT NULL,
  `paymentmode` varchar(45) DEFAULT NULL,
  `transactionid` text,
  PRIMARY KEY (`orderno`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generateorderno`
--

LOCK TABLES `generateorderno` WRITE;
/*!40000 ALTER TABLE `generateorderno` DISABLE KEYS */;
INSERT INTO `generateorderno` VALUES (14,'2021-06-05','13:14:00',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(15,'2021-06-05','13:21:09',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(16,'2021-06-05','13:22:29',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(17,'2021-06-05','13:39:26',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(18,'2021-06-05','13:44:58',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(19,'2021-06-05','13:57:27',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(20,'2021-06-05','13:59:50',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(21,'2021-06-05','14:24:18',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(22,'2021-06-05','14:29:42',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(23,'2021-06-05','14:38:49',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(24,'2021-06-05','14:44:34',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(25,'2021-06-05','15:07:00',27000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(26,'2021-06-05','15:14:37',23999,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(27,'2021-06-05','15:15:55',23999,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(28,'2021-06-07','20:08:09',9000,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(29,'2021-06-12','13:06:35',24999,'satishgupta9792070@gmail.com','7355069702','Cash On Delivery','none'),(30,'2021-06-12','13:06:45',24999,'satishgupta9792070@gmail.com','7355069702','Cash On Delivery','none'),(31,'2021-06-24','12:55:07',43998,'sahuanil01@gmail.com','8319156602','Cash On Delivery','none'),(32,'2021-07-24','23:49:17',23999,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(33,'2021-08-05','18:23:33',23999,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none'),(34,'2021-12-11','22:47:55',10499,'satishgupta9792070@gmail.com','7982165765','Cash On Delivery','none');
/*!40000 ALTER TABLE `generateorderno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory` (
  `categoryid` int DEFAULT NULL,
  `subcategoryid` int DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `mobilename` varchar(45) DEFAULT NULL,
  `description` text,
  `price` int DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `icon` text,
  `stock` int DEFAULT NULL,
  `offer` int DEFAULT NULL,
  `mobileid` int DEFAULT NULL,
  `creatdate` datetime DEFAULT NULL,
  `updatdate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory`
--

LOCK TABLES `inventory` WRITE;
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;
INSERT INTO `inventory` VALUES (5,6,4,'oppp a1','oppo 15',100000,'red',NULL,3,200,34,NULL,'2021-12-28 15:56:39'),(5,5,5,'readmi 8','4gb ram 32mg camera',10000,'blue',NULL,2,1000,5,NULL,'2021-12-28 16:05:01'),(5,5,6,'readmi 8','4gb ram 32mg camera',10000,'blue',NULL,15,1000,5,NULL,'2021-12-28 16:06:19'),(5,5,7,'readmi 8','4gb ram 32mg camera',10000,'blue',NULL,4,1000,5,NULL,'2021-12-28 16:07:29'),(6,13,8,'Apple iPad Air ','Apple iPad Air 2019 26.67 cm (10.5 inch) Wi-Fi Tablet, 256 GB',58900,'cream',NULL,5,2000,8,NULL,'2021-12-28 16:16:53'),(6,12,9,'Samsung Galaxy Tab S3','Samsung Galaxy Tab S3 24.58 cm (9.7 inch) Tablet 4 GB RAM, 32 GB, Black SM-T825NZKAINS',51500,'black',NULL,4,12500,9,NULL,'2021-12-28 18:00:31'),(5,6,10,'oppo a16','oppo ',123000,'black','61YKlul9jsL._SY741_.jpg',2,2000,NULL,'2021-12-28 20:18:34',NULL),(5,6,12,'opp1','cdjm',12000,'red','51B7JRW7xqL._SX3000_.jpg',12,3333,NULL,'2021-12-28 21:44:10',NULL);
/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mobile`
--

DROP TABLE IF EXISTS `mobile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mobile` (
  `categoryid` int DEFAULT NULL,
  `subcategoryid` int DEFAULT NULL,
  `mobileid` int NOT NULL AUTO_INCREMENT,
  `mobilename` varchar(70) DEFAULT NULL,
  `description` text,
  `price` int DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `icon` text,
  `stock` int DEFAULT NULL,
  `offer` int DEFAULT NULL,
  `creatdate` datetime DEFAULT NULL,
  `updatdate` datetime DEFAULT NULL,
  `no_item` int DEFAULT NULL,
  PRIMARY KEY (`mobileid`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mobile`
--

LOCK TABLES `mobile` WRITE;
/*!40000 ALTER TABLE `mobile` DISABLE KEYS */;
INSERT INTO `mobile` VALUES (6,7,4,'huawei','huawei',19000,'black','Huawei.jpg',1,1000,NULL,'2021-12-28 16:04:27',NULL),(5,5,5,'readmi 8','4gb ram 32mg camera',10000,'blue','download (2).jpg',4,1000,NULL,'2021-12-28 16:07:29',NULL),(6,13,8,'Apple iPad Air ','Apple iPad Air 2019 26.67 cm (10.5 inch) Wi-Fi Tablet, 256 GB',58900,'cream','Apple-MUUT2HN-A-Tablet-491551016-i-3-1200Wx1200H.jpg',5,2000,NULL,'2021-12-28 16:16:53',NULL),(6,12,9,'Samsung Galaxy Tab S3','Samsung Galaxy Tab S3 24.58 cm (9.7 inch) Tablet 4 GB RAM, 32 GB, Black SM-T825NZKAINS',51500,'black','Samsung-SM-T825NZKAINS-Tablets-eReaders-491297573-i-1-1200Wx1200H.jpg',4,12500,NULL,'2021-12-28 18:00:31',NULL),(5,9,11,'Samsung Galaxy M51 Celestial',' 64MP (F1.8) main camera + 12MP (F2.2) ultra wide camera + 5MP (F2.4) depth camera + 5MP (F2.4) macro camera and 32MP (F2.2) fnt camera Android v10.0 os with 2',27999,'blue','samsung jpg.jpg',10,3000,NULL,NULL,NULL),(5,6,12,' OPPO A31 ','Fantasy White, 4GB RAM, 64GB Storage',12999,'Blue','Oppo A31.jpg',10,2500,NULL,NULL,NULL),(5,16,13,'realme 8 (Cyber Black, 128 GB)  (8 GB RAM','realme 8 (Cyber Black, 128 GB)  (8 GB RAM',20000,'black','8-rmx3085-realme-original-imagfgpfdkyc29zc.jpeg',10,4000,NULL,NULL,NULL),(5,21,14,'motorola G51','5g phone',15000,NULL,'-original-imag9g67s5phtw9t.jpeg',2,200,NULL,NULL,NULL),(5,20,15,'Apple iPhone 13 Mini','13 cm (5.4-inch) Super Retina XDR display Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',80000,NULL,'61nPiOOv9BL._SX679_.jpg',10,6000,NULL,NULL,NULL),(5,20,16,'Apple iPhone 11','6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display Water and dust resistant (2 meters for up to 30 minutes, IP68) Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps 12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo Face ID for secure authentication',80000,NULL,'71hh7cpWadL._SX679_.jpg',4,6000,NULL,NULL,NULL),(5,20,17,'Apple iPhone 13 Pro ','17 cm (6.7-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',129900,NULL,'61IJBsHm97L._SX679_.jpg',2,8000,NULL,NULL,NULL),(5,20,18,'New Apple iPhone 12','6.1-inch (15.5 cm diagonal) Super Retina XDR display Ceramic Shield, tougher than any smartphone glass A14 Bionic chip, the fastest chip ever in a smartphone Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording',120000,NULL,'71ZOtNdaZCL._SX679_.jpg',3,8000,NULL,NULL,NULL),(5,20,19,'apple iphone 11','6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display Water and dust resistant (2 meters for up to 30 minutes, IP68) Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps',80000,NULL,'71i2XhHU3pL._SX679_.jpg',4,3000,NULL,NULL,NULL),(5,21,20,'MOTOROLA G60 ','6 GB RAM | 128 GB ROM 17.22 cm (6.78 inch) Full HD+ Display 108MP + 8MP + 2MP | 32MP Front Camera 6000 mAh Battery Qualcomm Snapdragon 732G Processor 120Hz Refresh Rate',18100,NULL,'51zvzmuXHZL._SY741_.jpg',4,2000,NULL,NULL,NULL),(5,15,21,'OnePlus 9R 5G','Qualcomm Snapdragon 870 5G with upgraded Qualcomm Kryo 585 CPU that performs intense mobile computing at up to 3.2 GHz and also comes with an ultra-fast Qualcomm Adreno 650 GPU for superb on-device experiences Loaded with Quad rear camera module that features a 48 MP Main camera, 16 MP Ultra Wide angle Camera, 5 MP Macro camera and a 2 MP Monochrome camera. The device also comes with a 16 MP front Camera 6.55 Inches Fluid AMOLED display with 120 Hz of Refresh rate',39999,NULL,'61IwksZ-DGL._SX679_.jpg',5,2000,NULL,NULL,NULL),(5,4,22,'Xiaomi 11 Lite NE 5G ','Processor: 5G enabled Qualcomm Snapdragon 778G with Kryo 670 Octa-core; 6nm process; Up to 2.4GHz clock speed; Liquidcool technology, Support for 12 5G bands Camera: 64 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera Display: 90Hz high refresh rate, 10-bit FHD+ OLED Dot display; 16.6 centimeters (6.55 inch); Dolby Vision support',31999,NULL,'71eI+xXCNoL._SX679_.jpg',10,5000,NULL,NULL,NULL),(5,21,23,'MOTOROLA G40 Fusion','64MP (f/1.7, 1.4 µm) | Quad Pixel technology 8MP (f/2.2, 1.12 µm) Ultra-wide angle | 118° Macro Vision | minimum 2.5cm focus distance 2MP (f/2.4, 1.75 µm) | depth | Front Camera 16 MP (f/2.2, 1 µm) | Quad Pixel technology.6.8\" HDR10 120 Hz2 IPS display FHD+ (1080 × 2460) | 396 ppi Active Area-Touch Panel (AA-TP): 85% Moto G40 Fusion Comes with Qualcomm Snapdragon 732G 64GB Storage 4GB Ram Operating System Android 11',17490,NULL,'318O7qhJG3L.jpg',3,500,NULL,NULL,NULL),(5,6,30,'oppo','oppo ',12000,NULL,'61XEKgIjTzL._SY741_.jpg',2,2000,'2021-12-27 00:00:00',NULL,NULL),(5,6,34,'oppp a1','oppo 15',100000,'red','31IfeQdptRL.jpg',11,222,'2021-12-27 00:00:00','2021-12-28 15:31:38',NULL),(5,6,38,'oppo a16','oppo ',123000,'black','61YKlul9jsL._SY741_.jpg',2,2000,'2021-12-28 20:11:47',NULL,NULL),(5,6,41,'opp1','cdjm',12000,'red','51B7JRW7xqL._SX3000_.jpg',1,3333,'2021-12-28 21:44:10','2021-12-30 12:53:14',NULL);
/*!40000 ALTER TABLE `mobile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mobilepicture`
--

DROP TABLE IF EXISTS `mobilepicture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mobilepicture` (
  `imageid` int NOT NULL AUTO_INCREMENT,
  `categoryid` int DEFAULT NULL,
  `subcategoryid` int DEFAULT NULL,
  `mobileid` int DEFAULT NULL,
  `image` text,
  PRIMARY KEY (`imageid`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mobilepicture`
--

LOCK TABLES `mobilepicture` WRITE;
/*!40000 ALTER TABLE `mobilepicture` DISABLE KEYS */;
INSERT INTO `mobilepicture` VALUES (3,5,5,5,'Xiaomi-MZB07R8IN-Smart-Phones-491894229-i-5-1200Wx1200H.jpg'),(4,5,5,5,'Xiaomi-MZB07R8IN-Smart-Phones-491894229-i-3-1200Wx1200H.jpg'),(5,5,5,5,'Xiaomi-MZB07R8IN-Smart-Phones-491894229-i-2-1200Wx1200H.jpg'),(6,5,5,5,'Xiaomi-MZB07R8IN-Smart-Phones-491894229-i-1-1200Wx1200H.jpg'),(7,5,6,12,'61KC1HMXkyL._SL1500_.jpg'),(8,5,6,12,'61sFZ75PkhL._SL1500_.jpg'),(9,5,6,12,'61XmHsIKYbL._SL1500_.jpg'),(10,5,6,12,'61zz4gX6fiL._SL1500_.jpg'),(11,5,6,12,'71HIcIenorL._SL1500_.jpg'),(12,5,6,12,'Oppo A31.jpg'),(13,5,4,2,'Mi 10.jpg'),(14,5,4,2,'mi10.jpg'),(15,5,4,2,'Mi-10i-Smart-Phones-491946818-i-1-1200Wx1200H.jpg'),(16,5,4,2,'Mi-10i-Smart-Phones-491946818-i-4-1200Wx1200H.jpg'),(17,5,4,2,'Mi-10i-Smart-Phones-491946818-i-8-1200Wx1200H.jpg'),(18,5,4,2,'Mi-10i-Smart-Phones-491946818-i-10-1200Wx1200H.jpg'),(19,5,4,2,'Mi-10i-Smart-Phones-491946818-i-14-1200Wx1200H-96Wx96H.jpg'),(20,5,4,1,'51JdnUMTBDL._SL1500_.jpg'),(21,5,4,1,'51yWv7OkJyL._SL1500_.jpg'),(22,5,4,1,'61nugRFIYgL._SL1500_.jpg'),(23,5,4,1,'71dULqyVpwL._SL1071_.jpg'),(24,5,4,1,'71jaCF04eAL._SL1500_.jpg'),(25,5,4,1,'81E-F3rKnWL._SL1500_.jpg'),(26,5,4,1,'91k6WOeSlJL._SL1500_.jpg'),(27,6,14,10,'71A+QCdbKnL._AC_SL1500_.jpg'),(28,6,14,10,'812QrKtqajL._AC_SL1500_.jpg'),(29,6,7,4,'Huawei add.jpg'),(30,6,7,4,'Huawei.jpg'),(31,5,9,11,'samsung-galaxy-m51-sm-m515fzbd-original-imafvvgfkgsmzsq9.jpeg'),(32,5,9,11,'samsung-galaxy-m51-sm-m515fzbd-original-imafvvgft9cgdrsz.jpeg'),(33,5,9,11,'samsung-galaxy-m51-sm-m515fzbeins-original-imafx3c8dz6yzgp2.jpeg'),(34,5,9,11,'samsung-galaxy-m51-sm-m515fzbeins-original-imafx3c8fhjh4sra.jpeg'),(35,5,9,11,'samsung-galaxy-m51-sm-m515fzbeins-original-imafx3c8qgphcqw2.jpeg'),(36,6,12,9,'Samsung-SM-T825NZKAINS-Tablets-eReaders-491297573-i-2-1200Wx1200H.jpg'),(37,6,12,9,'Samsung-SM-T825NZKAINS-Tablets-eReaders-491297573-i-3-1200Wx1200H.jpg'),(38,6,12,9,'Samsung-SM-T825NZKAINS-Tablets-eReaders-491297573-i-4-1200Wx1200H-96Wx96H.jpg'),(39,6,12,9,'Samsung-SM-T825NZKAINS-Tablets-eReaders-491297573-i-5-1200Wx1200H-96Wx96H.jpg'),(40,6,12,9,'Samsung-SM-T825NZKAINS-Tablets-eReaders-491297573-i-6-1200Wx1200H.jpg'),(41,6,12,9,'Samsung-SM-T825NZKAINS-Tablets-eReaders-491297573-i-7-1200Wx1200H.jpg'),(42,5,16,13,'8-rmx3085-realme-original-imagfgpfcaazjaxh.jpeg'),(43,5,16,13,'8-rmx3085-realme-original-imagfgpfdkyc29zc.jpeg'),(44,5,16,13,'8-rmx3085-realme-original-imagfgpffygyejug.jpeg'),(45,5,16,13,'8-rmx3085-realme-original-imagfgpfupg3ycq7.jpeg'),(46,5,16,13,'8-rmx3085-realme-original-imagfgpfuphtgjz9.jpeg'),(47,5,16,13,'8-rmx3085-realme-original-imagfgpfvknkefnx.jpeg'),(48,5,20,15,'61jji7ltppL._SX679_.jpg'),(49,5,20,15,'61mBwQRo8KL._SX679_.jpg'),(50,5,20,15,'61nPiOOv9BL._SX679_.jpg'),(51,5,20,15,'71dITA+m5xL._SX679_.jpg'),(52,5,20,16,'71hh7cpWadL._SX679_.jpg'),(53,5,20,16,'71I39osHCoL._SX679_.jpg'),(54,5,20,16,'81MQ+Bp8XFL._SX679_.jpg'),(55,5,20,16,'717CFbCmS6L._SX679_.jpg'),(56,5,20,17,'61IJBsHm97L._SX679_.jpg'),(57,5,20,17,'61rrisp8qiL._SX679_.jpg'),(58,5,20,17,'81HXViH8boL._SX679_.jpg'),(59,5,20,17,'617LwLeZGrL._SX679_.jpg'),(60,5,20,18,'71ZOtNdaZCL._SX679_.jpg'),(61,5,20,18,'81hB-X3SMtL._SX679_.jpg'),(62,5,20,18,'81tJbh5cAXL._SX679_.jpg'),(63,5,20,18,'719M6YlOXTL._SX679_.jpg'),(64,5,20,19,'71DjxIGy0ZL._SX679_.jpg'),(65,5,20,19,'71i2XhHU3pL._SX679_.jpg'),(66,5,20,19,'71Y5I3LK5CL._SX679_.jpg'),(67,5,20,19,'7155Vt4EulL._SX679_.jpg'),(68,5,21,20,'51zvzmuXHZL._SY741_.jpg'),(69,5,21,20,'61sHL3RIq1L._SY741_.jpg'),(70,5,21,20,'61XEKgIjTzL._SY741_.jpg'),(71,5,21,20,'61YKlul9jsL._SY741_.jpg'),(72,5,15,21,'61IwksZ-DGL._SX679_.jpg'),(73,5,15,21,'61Q5U3dzCKL._SX679_.jpg'),(74,5,15,21,'612rhTtaalL._SX679_.jpg'),(75,5,15,21,'6118bCOA0rL._SX679_.jpg'),(76,5,4,22,'61LmpXp1k4L._SX679_.jpg'),(77,5,4,22,'61rHoddVlTL._SY679_.jpg'),(78,5,4,22,'71eI+xXCNoL._SX679_.jpg'),(79,5,4,22,'81jYLr-Y1hL._SX679_.jpg'),(80,5,4,22,'710ib67NSqL._SX679_.jpg'),(81,5,21,23,'21iPB4qEhhL.jpg'),(82,5,21,23,'31IfeQdptRL.jpg'),(83,5,21,23,'31LsQs+Q01L.jpg'),(84,5,21,23,'31QQm0f6ntL.jpg'),(85,5,21,23,'51zvzmuXHZL._SY741_.jpg'),(86,5,21,23,'61sHL3RIq1L._SY741_.jpg'),(87,5,21,23,'111GWMnNdtL.jpg');
/*!40000 ALTER TABLE `mobilepicture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `orderid` int NOT NULL,
  `orderdate` date DEFAULT NULL,
  `ordertime` time DEFAULT NULL,
  `mobileno` varchar(13) DEFAULT NULL,
  `emailid` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `address1` varchar(100) DEFAULT NULL,
  `address2` varchar(100) DEFAULT NULL,
  `state` varchar(70) DEFAULT NULL,
  `city` varchar(70) DEFAULT NULL,
  `mobileid` int DEFAULT NULL,
  `mobilename` varchar(60) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `offer` decimal(10,0) DEFAULT NULL,
  `paymentmode` varchar(70) DEFAULT NULL,
  `qtydemand` decimal(10,0) DEFAULT NULL,
  `totalamount` decimal(10,0) DEFAULT NULL,
  `deliverystatus` varchar(45) DEFAULT NULL,
  `paymenttransactionid` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`paymenttransactionid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (24,'2021-06-05','14:44:34','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',5,'readmi 8',10000,1000,'Cash On Delivery',1,27000,'pending',1),(24,'2021-06-05','14:44:34','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',4,'huawei',19000,1000,'Cash On Delivery',1,27000,'pending',2),(25,'2021-06-05','15:07:00','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',5,'readmi 8',10000,1000,'Cash On Delivery',1,27000,'pending',3),(25,'2021-06-05','15:07:00','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',4,'huawei',19000,1000,'Cash On Delivery',1,27000,'pending',4),(26,'2021-06-05','15:14:37','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',2,'Mi 10i 5G',27999,4000,'Cash On Delivery',1,23999,'pending',5),(27,'2021-06-05','15:15:55','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',2,'Mi 10i 5G',27999,4000,'Cash On Delivery',1,23999,'pending',6),(28,'2021-06-07','20:08:09','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',5,'readmi 8',10000,1000,'Cash On Delivery',1,9000,'pending',7),(29,'2021-06-12','13:06:35','7355069702','satishgupta9792070@gmail.com','anil sahu','air port road','','mp','gwalior',11,'Samsung Galaxy M51 Celestial',27999,3000,'Cash On Delivery',1,24999,'pending',8),(30,'2021-06-12','13:06:45','7355069702','satishgupta9792070@gmail.com','anil sahu','air port road','','mp','gwalior',11,'Samsung Galaxy M51 Celestial',27999,3000,'Cash On Delivery',1,24999,'pending',9),(31,'2021-06-24','12:55:07','8319156602','sahuanil01@gmail.com','anil sahu','tilak marg','rajgadh','mp','rajgadh',3,'Mi 10i 5g',24999,3000,'Cash On Delivery',2,43998,'pending',10),(32,'2021-07-24','23:49:17','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',2,'Mi 10i 5G',27999,4000,'Cash On Delivery',1,23999,'pending',11),(33,'2021-08-05','18:23:33','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',2,'Mi 10i 5G',27999,4000,'Cash On Delivery',1,23999,'pending',12),(34,'2021-12-11','22:47:55','7982165765','satishgupta9792070@gmail.com','satish gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',12,' OPPO A31 ',12999,2500,'Cash On Delivery',1,10499,'pending',13);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productreview`
--

DROP TABLE IF EXISTS `productreview`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productreview` (
  `idreview` int NOT NULL AUTO_INCREMENT,
  `orderid` int DEFAULT NULL,
  `mobilename` varchar(45) DEFAULT NULL,
  `rating` varchar(45) DEFAULT NULL,
  `headline` text,
  `comment` text,
  `image` text,
  PRIMARY KEY (`idreview`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productreview`
--

LOCK TABLES `productreview` WRITE;
/*!40000 ALTER TABLE `productreview` DISABLE KEYS */;
INSERT INTO `productreview` VALUES (1,24,'readmi 8','','dcxvh','damage',NULL),(2,24,'readmi 8','2','dcxvh','damage',NULL),(3,24,'readmi 8','2','dcxvh','damage',NULL),(4,24,'readmi 8','2','dcxvh','damage','11-3840x1500.jpg'),(5,24,'readmi 8','2','dcxvh','damage','11-3840x1500.jpg'),(6,24,'readmi 8','2','dcxvh','damage','11-3840x1500.jpg'),(7,26,'Mi 10i 5G','2','good','nice one','b5.jpg');
/*!40000 ALTER TABLE `productreview` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategory` (
  `categoryid` int DEFAULT NULL,
  `subcategoryid` int NOT NULL AUTO_INCREMENT,
  `subcategoryname` varchar(70) DEFAULT NULL,
  `description` text,
  `icon` text,
  `ad` text,
  PRIMARY KEY (`subcategoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
INSERT INTO `subcategory` VALUES (5,4,'Mi','mi 10','readmi.jpg','mi10.jpg'),(5,5,'Readmi','Readmi node','XIRMSOMS-1620471393414.png','61zz4gX6fiL._SL1500_.jpg'),(5,6,'Oppo','Oppo A31','Oppo.jpg','oppo ad.jpg'),(6,7,'Huawei','Huawei meadiapad','Huawei-logo-500x281.jpg','Huawei add.jpg'),(5,9,'samsung','samsung','ALVTDOPY-1610717642942.png','samsung m12.jpg'),(6,12,'samsung','samsung tablets','Samsung-Logo-final.jpg','slider.jpg'),(6,13,'Apple','Apple tablets','Apple-Logo-final.jpg','tab.jpg'),(6,14,'matrola','matrola tablets','Motorola-Logo-final.jpg','71A+QCdbKnL._AC_SL1500_.jpg'),(5,15,'OnePlus','OnePlus tuch','YGQUTHBM-1617602903776.png','Smartphone-Shop-By-Brands-OnePlus.jpg'),(5,16,'Realme','Realme 5g','realmi.png','Tablet-Banners-1365-x-260.jpg'),(6,19,'Lenova','made in china','xolo-logo-png-7.png','tab.jpg'),(5,20,'apple','made in china','Apple-Logo-final.jpg','Apple-MUUT2HN-A-Tablet-491551016-i-3-1200Wx1200H.jpg'),(5,21,'Motorola','5g smartphone','-original-imag9g67s5phtw9t.jpeg','51jKifqW4XL._SX3000_.jpg');
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userdetails`
--

DROP TABLE IF EXISTS `userdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userdetails` (
  `mobileno` varchar(15) NOT NULL,
  `emailid` varchar(100) NOT NULL,
  `firstname` varchar(60) DEFAULT NULL,
  `lastname` varchar(60) DEFAULT NULL,
  `address1` varchar(100) DEFAULT NULL,
  `address2` varchar(100) DEFAULT NULL,
  `state` varchar(70) DEFAULT NULL,
  `city` varchar(70) DEFAULT NULL,
  `addressstatus` tinyint DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `zipcode` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`mobileno`,`emailid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userdetails`
--

LOCK TABLES `userdetails` WRITE;
/*!40000 ALTER TABLE `userdetails` DISABLE KEYS */;
INSERT INTO `userdetails` VALUES ('1515165465','panday1997muskan@gmail.com','muskan','pandey','bhagyshree colony','it park','rnt hostel near it park','INDORE',1,'123','452020'),('7354069702','anilsahu@gmail.com','anil','sahu',NULL,NULL,NULL,NULL,0,'123',NULL),('7355069702','satishgupta9792070@gmail.com','anil','sahu','air port road','','mp','gwalior',1,'123','210431'),('7895751565','satishgupta9792070@gmail.com','satish','kumar','Econ express','Rabaul maudaha hamirpur','Uttar Pradesh','Hamirpur-UP',1,'123456','210507'),('7982165765','satishgupta9792070@gmail.com','satish','gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',1,'123','452020'),('8319156602','sahuanil01@gmail.com','anil','sahu','tilak marg','rajgadh','mp','rajgadh',1,'123','465661'),('9044001418','satishkumar998475@gmail.com','satish','kumar',NULL,NULL,NULL,NULL,0,'123',NULL),('9044004118','satishkumar998475@gmail.com','satish','kumar',NULL,NULL,NULL,NULL,0,'123',NULL),('9795755616','anil@gmail.com','Anil','sahu','Econ express','Rabaul maudaha hamirpur','Uttar Pradesh','Hamirpur-UP',1,'anil','210507'),('9984751898','ms@123.com','manish','gupta','e-15 RNT hostel near it park khandwa road','it park','rnt hostel near it park','INDORE',1,'123','452020'),('9999305585','devesh.kr.sri@gmail.com','devesh','srivastava',NULL,NULL,NULL,NULL,0,'admin@123',NULL);
/*!40000 ALTER TABLE `userdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userregistration`
--

DROP TABLE IF EXISTS `userregistration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userregistration` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `mobileno` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `address1` varchar(45) DEFAULT NULL,
  `address2` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `addressstatus` tinyint DEFAULT NULL,
  `zipcode` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userregistration`
--

LOCK TABLES `userregistration` WRITE;
/*!40000 ALTER TABLE `userregistration` DISABLE KEYS */;
INSERT INTO `userregistration` VALUES (1,'sk','gupta','sk@gmail.com','79872165765','123',NULL,NULL,NULL,NULL,NULL,NULL),(2,'sk','gupta','satishkumar998475@gmail.com','7982165765','123',NULL,NULL,NULL,NULL,NULL,NULL),(3,'sk','gupta','satishkumar998475@gmail.com','7982165765','123',NULL,NULL,NULL,NULL,NULL,NULL),(4,'up','hamirpur','up@gmail.com','433387283','12',NULL,NULL,NULL,NULL,NULL,NULL),(5,'Devesh Kumar','srivastava','devesh.kr.sri@gmail.com','07918353342','12345',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `userregistration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'gamezone'
--

--
-- Dumping routines for database 'gamezone'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-02 19:16:22
