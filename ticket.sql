create table Ticket(title varchar(200) not null,
description mediumtext, 
category enum('billing','technical','account','general') default 'general', 
priority enum('low','medium','high','critial') default 'low',
status enum('open','in_progress','resolved','closed') default 'open',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP on update current_timestamp);


insert into values('Order Not Recieved - Missing Shipping Information - ORD1234','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua','technical','low','open',now(),now());


