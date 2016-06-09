/*
SQLyog Community v10.41 
MySQL - 5.7.10-log : Database - bookshop
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`bookshop` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `bookshop`;

/*Table structure for table `author` */

DROP TABLE IF EXISTS `author`;

CREATE TABLE `author` (
  `author_id` int(11) NOT NULL AUTO_INCREMENT,
  `author_f_name` varchar(50) NOT NULL,
  `author_l_name` varchar(50) NOT NULL,
  `date_of_birth` varchar(20) NOT NULL,
  `date_of_death` varchar(20) DEFAULT NULL,
  `occupation` varchar(50) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`author_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `author` */

insert  into `author`(`author_id`,`author_f_name`,`author_l_name`,`date_of_birth`,`date_of_death`,`occupation`,`is_active`) values (1,'Erich Maria','Remarque','1898-05-22','1970-09-25','Novelist',0),(2,'Ernest ','Hemingway','1899-07-21','1961-07-02',NULL,0),(3,'Gabriel José de la Concordia García ','Márquez ','1927-03-06','2014-04-17',NULL,0),(4,'test','test','test','test','test',1);

/*Table structure for table `book` */

DROP TABLE IF EXISTS `book`;

CREATE TABLE `book` (
  `book_id` int(11) NOT NULL AUTO_INCREMENT,
  `book_name` varchar(100) NOT NULL,
  `book_description` varchar(1500) DEFAULT NULL,
  `publish_date` varchar(20) NOT NULL,
  `book_author_id` int(11) NOT NULL,
  `book_genre_id` int(11) NOT NULL,
  PRIMARY KEY (`book_id`),
  KEY `book_genre` (`book_genre_id`),
  KEY `book_author` (`book_author_id`),
  CONSTRAINT `book_author` FOREIGN KEY (`book_author_id`) REFERENCES `author` (`author_id`),
  CONSTRAINT `book_genre` FOREIGN KEY (`book_genre_id`) REFERENCES `genre` (`genre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `book` */

insert  into `book`(`book_id`,`book_name`,`book_description`,`publish_date`,`book_author_id`,`book_genre_id`) values (1,'Three_Comrades','The book describes the German soldiers\' extreme physical and mental stress during the war, and the detachment from civilian life felt by many of these soldiers upon returning home from the front.','1936-05-16',1,3),(2,'All Quiet on the Western Front','It is written in first person by the main character Robert Lohkamp, whose somewhat disillusioned outlook on life is due to his horrifying experiences in the trenches of the First World War\'s French-German front. He shares these experiences with Otto Köster and Gottfried Lenz, his two comrades with whom he runs an auto-repair shop in late 1920s Berlin (probably). ','1929-05-16',1,2),(3,'One Hundred Years of Solitude','One Hundred Years of Solitude is the story of seven generations of the Buendía Family in the town of Macondo. The founding patriarch of Macondo, José Arcadio Buendía, and Úrsula Iguarán, his wife (and first cousin), leave Riohacha, Colombia, to find a better life and a new home. One night of their emigration journey, while camping on a riverbank, José Arcadio Buendía dreams of \"Macondo\", a city of mirrors that reflected the world in and about it. Upon awakening, he decides to establish Macondo at the river side; after days of wandering the jungle, José Arcadio Buendía\'s founding of Macondo is utopic.[3]','1967-05-16',3,3),(4,'A Farewell to Arms','The novel is divided into five books. In the first book, Frederic Henry, an American ambulance driver serving in the Italian Army is introduced to Catherine Barkley, an English nurse, by his good friend and fellow paramedic Rinaldi. Frederic attempts to seduce her, and their relationship begins. Frederic didn\'t want a serious relationship, but his feelings for Catherine slowly started to grow. On the Italian front, Frederic is wounded in the knee by a mortar and sent to a hospital in Milan, where Catherine is also sent. The second book shows the growth of Frederic and Catherine\'s relationship as they spend time together in Milan over the summer. Frederic and Catherine fall in love as Frederic slowly healed. After his knee healed, he is diagnosed with jaundice but is soon kicked out of the hospital and sent back to the front after being discovered with alcohol. By the time he is sent back, Catherine is three months pregnant. In the third book, Frederic returns to his unit, and soon discovers morale had severely dropped. Not long afterwards the Austrians break through the Italian lines in the Battle of Caporetto, and the Italians retreat. Due to a slow and hectic retreat, Frederic and his men go off trail and quickly get lost, and a frustrated Frederic kills a sergeant for insubordination. ','1929-05-16',2,2);

/*Table structure for table `genre` */

DROP TABLE IF EXISTS `genre`;

CREATE TABLE `genre` (
  `genre_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`genre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `genre` */

insert  into `genre`(`genre_id`,`name`,`description`) values (1,'Fairy Tale Test','A type of short story that typically features folkloric fantasy characters, such as dwarves, elves, fairies, giants, gnomes, goblins, mermaids, trolls, or witches, and usually magic or enchantments.'),(2,'historical Fiction','An essential element of historical fiction is that it is set in the past and pays attention to the manners, social conditions and other details of the period depicted.[1] Authors also frequently choose to explore notable historical figures in these settings, allowing readers to better understand how these individuals might have responded to their environments. Some subgenres, such as alternate history or historical fantasy, insert speculative or ahistorical elements into a novel.'),(3,'Novel','A novel is a long narrative, normally in prose, which describes fictional characters and events, usually in the form of a sequential story');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
