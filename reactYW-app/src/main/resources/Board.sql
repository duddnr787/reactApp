CREATE TABLE `Board` (
  `bno` int(100) NOT NULL AUTO_INCREMENT,
  `btitle` varchar(100) NOT NULL,
  `bwriter` varchar(100) NOT NULL,
  `bdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `bcontent` varchar(100) NOT NULL,
  PRIMARY KEY (`bno`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;